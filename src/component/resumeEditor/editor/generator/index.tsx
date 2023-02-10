import React from "react";
import {Module} from "./config";
import BasicGenerator from "./basic";
import ListGenerator from "./list";

export interface GeneratorProps {
  module: Module
}

export enum GENERATOR_TYPE {
  BASIC = "basic",
  LIST = "list"
}

const GENERATOR_MAPPING = {
  [GENERATOR_TYPE.BASIC]: BasicGenerator,
  [GENERATOR_TYPE.LIST]: ListGenerator
}

const Generator: React.FC<GeneratorProps> = ({module}: GeneratorProps) => {
  const C = GENERATOR_MAPPING[module.type];
  return <C module={module}/>
}

export default Generator;
