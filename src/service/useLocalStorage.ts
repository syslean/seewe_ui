import {Dispatch, useState} from "react";

const useLocalStorage = function <T>(key: string, initValue?: T): [T, Dispatch<T>] {

  // Tips: use data priority :: defaultValue from localstorage > init value > null data
  const defaultValue = localStorage.getItem(key);
  const [value, setValue] = useState<T>(defaultValue ? JSON.parse(defaultValue) as T : initValue ?? {} as T);

  const updateValue = (value: T | ((preValue: T) => T)): void => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, updateValue];
}

export default useLocalStorage;
