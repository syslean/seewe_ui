import React, {useEffect, useRef, useState} from "react";
import {Button, Input, Modal, Tabs} from "antd";
import {SSE} from "../../../../../utils/sse";
import {AIAssist, FieldHeader, FieldWrapper, FiledTitle} from "../field/index.style";

const OPENAI_KEY = "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";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  content: string;
  onOK: (response: string) => void;
}

const AIModal: React.FC<Props> = ({isModalOpen, setIsModalOpen, content, onOK}: Props) => {

  const [keywords, setKeywords] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAbleToApply, setIsAbleToApply] = useState(false);
  const [response, setResponse] = useState('');

  const resultRef = useRef('');

  useEffect(() => {
    resultRef.current = response;
  }, [response])

  const proofreading = () => {
    setIsLoading(true);
    setIsAbleToApply(false);
    const prompt = `Optimize the giving content, fix misspellings, grammar issues and express them in a better way. here is the content: ${content}`
    handleRequest(prompt);
  }
  const handleRequest = (prompt: string) => {
    resultRef.current = "";
    const chatApi = "https://api.openai.com/v1/chat/completions";
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": prompt}],
      stream: true
    }
    const source = new SSE(chatApi, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_KEY}`
      },
      method: "POST",
      payload: JSON.stringify(data),
    });

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
        setIsAbleToApply(true)
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
    setResponse("")
  };

  const tabs = [
    {
      label: "Revision proofreading",
      children: <>
        <FieldWrapper style={{width: "100%"}}>
          <FieldHeader>
            <FiledTitle>Your input</FiledTitle>
          </FieldHeader>
          <Input.TextArea value={content} autoSize={true}/>
        </FieldWrapper>
        <Button type="primary" loading={isLoading} onClick={proofreading}>
          Revision proofreading
        </Button>
        {response && <FieldWrapper style={{width: "100%"}}>
          <FieldHeader>
            <FiledTitle>AI Response</FiledTitle>
          </FieldHeader>
          <Input.TextArea value={response} autoSize={true}/>
        </FieldWrapper>
        }
      </>
    },
    {
      label: "Prompt generation",
      children: <>
        <h2>Enter Text:</h2>
        <textarea value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
        <button>Submit</button>
        <h2>Response:</h2>
        <p>{response}</p>
      </>
    }
  ]

  return (
    <Modal width={800} title="AI Assist" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
           okButtonProps={{disabled: !isAbleToApply}} okText="Apply AI Response">
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
      />
    </Modal>
  )
}

export default AIModal;
