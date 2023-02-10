import React from "react";
import {Module, MODULE_TYPE} from "./config";
import BasicGenerator from "./basic";
import ListGenerator from "./list";

export interface GeneratorProps {
  module: Module
}

const GENERATOR_MAPPING = {
  [MODULE_TYPE.BASIC]: BasicGenerator,
  [MODULE_TYPE.LIST]: ListGenerator
}

const Generator: React.FC<GeneratorProps> = ({module}: GeneratorProps) => {
  const C = GENERATOR_MAPPING[module.type];
  return <C module={module}/>
}

export default Generator;
