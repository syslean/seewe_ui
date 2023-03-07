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

const SectionGenerator: React.FC<GeneratorProps> = ({module}: GeneratorProps) => {
  const Section = GENERATOR_MAPPING[module.type];
  return <Section module={module}/>
}

export default SectionGenerator;
