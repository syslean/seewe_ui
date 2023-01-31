import {useState} from "react";

const useLocalStorage = (key: string, initValue?: any) => {

  // Tips: use data priority :: defaultValue from localstorage > init value > null data
  const defaultValue = localStorage.getItem(key);
  const [value, setValue] = useState(defaultValue ?? initValue ?? {} as any);

  const updateValue = (value: any): void => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, updateValue];
}

export default useLocalStorage;
