import React, {useEffect, useRef, useState} from "react";
import {Alert, Button, Input, Modal, Tabs} from "antd";
import {SSE} from "../../../../../utils/sse";
import {FieldHeader, FieldWrapper, FiledTitle} from "../field/index.style";
import {SelectorField, TagField} from "../field";
import useLocalStorage from "../../../../../hook/useLocalStorage";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  content: string;
  onOK: (response: string) => void;
}

export const AIKeyModal: React.FC<{ isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void; }> = ({isModalOpen, setIsModalOpen}) => {
  const onKeyChange = (e: any) => {
    localStorage.setItem("aiKey", e.target.value);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return <Modal width={800} title="Set your OPENAI API key" open={isModalOpen} onOk={onClose} onCancel={onClose}
                okText="Apply Key">
    <Alert
      message="This assistant is developed based on OPENAI api, please add your key before use the service, your key will be saved in your local storage only."
      type="info" showIcon/>
    <FieldWrapper>
      <FiledTitle>OPENAI API key</FiledTitle>
      <Input onChange={onKeyChange}/>
    </FieldWrapper>
  </Modal>
}

export const AIModal: React.FC<Props> = ({isModalOpen, setIsModalOpen, content, onOK}: Props) => {
  const chatApi = "https://api.openai.com/v1/chat/completions";
  const [profile] = useLocalStorage<{ firstname?: string }>('profile');
  const aiKey = localStorage.getItem('aiKey');


  const options = [
    {
      label: "I", value: "I"
    },
    {
      label: "He", value: "He"
    },
    {
      label: "She", value: "She"
    },
  ]

  profile.firstname && options.push({
    label: profile.firstname,
    value: profile.firstname
  })

  const source = new SSE(chatApi, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${aiKey}`
    },
    method: "POST"
  });

  const [keywords, setKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [pronoun, setPronoun] = useState('I');

  const resultRef = useRef('');

  useEffect(() => {
    resultRef.current = response;
  }, [response])

  const onChangeTab = () => {
    setResponse("");
    setIsLoading(false);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    source.close()
  }

  const proofreading = () => {
    setIsLoading(true);
    const prompt = `Optimize the giving content, fix misspellings, grammar issues and express them in a better way. here is the content: ${content}`
    handleRequest(prompt);
  }

  const generating = () => {
    setIsLoading(true);
    const prompt = `Write a brief introduction in English in less than 200 english words and less than 3 paragraphs，pronoun is ${pronoun}, some keywords: ${keywords.join(', ')}`
    handleRequest(prompt);
  }

  const handleRequest = (prompt: string) => {
    resultRef.current = "";
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": prompt}],
      stream: true
    }


    source.payload = JSON.stringify(data),

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      source.addEventListener("message", (e: any) => {
        if (e.data !== "[DONE]") {
          const payload = JSON.parse(e.data);
          const text = payload.choices[0].delta.content;
          resultRef.current = resultRef.current.trimStart().split('\n\n').join('\n');
          text && (resultRef.current += text);
          setResponse(resultRef.current)
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          source.close();
          setIsLoading(false)
        }
      })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    source.stream();
  }

  const handleOk = () => {
    setIsModalOpen(false);
    onOK(response)
    setResponse("")
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setResponse("");
    setIsLoading(false);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    source.close()
  };

  const handleChangeKeyword = (key: string[]) => (valueOf: (e: any) => any) => (e: any) => {
    setKeywords(valueOf)
  };

  const handleChangePronoun = (key: string) => (valueOf: (e: any) => any) => (e: any) => {
    setPronoun(e)
  };


  const tabs = [
    {
      label: "Prompt generation",
      children: <>
        <SelectorField value={pronoun} title="Pronoun" handleChange={handleChangePronoun(pronoun)} options={options}/>
        <TagField title="Key points" value={keywords} handleChange={handleChangeKeyword(keywords)}
                  placeholder="Add new"/>
        <Button type="primary" loading={isLoading} onClick={generating} disabled={keywords.length === 0}>
          AI Generation
        </Button>
        {response && <FieldWrapper style={{width: "100%"}}>
          <FieldHeader>
            <FiledTitle>AI Response</FiledTitle>
          </FieldHeader>
          <Input.TextArea value={response} autoSize={true}/>
        </FieldWrapper>
        }
      </>
    }
  ]

  content && tabs.push({
    label: "Revision proofreading",
    children: <>
      <FieldWrapper style={{width: "100%"}}>
        <FieldHeader>
          <FiledTitle>Your input</FiledTitle>
        </FieldHeader>
        <Input.TextArea value={content} autoSize={true}/>
      </FieldWrapper>
      <Button type="primary" loading={isLoading} onClick={proofreading}>
        AI Proofreading
      </Button>
      {response && <FieldWrapper style={{width: "100%"}}>
        <FieldHeader>
          <FiledTitle>AI Response</FiledTitle>
        </FieldHeader>
        <Input.TextArea value={response} autoSize={true}/>
      </FieldWrapper>
      }
    </>
  },)

  return (
    <Modal width={800} title="AI Assist" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
           okButtonProps={{disabled: !response || isLoading}} okText="Apply AI Response">
      <Alert
        message="This assistant is developed based on GPT api, please make sure your network can access OpenAI's service normally before use"
        type="info" showIcon/>
      <Tabs
        defaultActiveKey="1"
        centered
        items={tabs.map((tab, i) => {
          const id = String(i + 1);
          return {
            label: tab.label,
            key: id,
            children: tab.children,
          };
        })}
        onChange={onChangeTab}
      />
    </Modal>
  )
}

