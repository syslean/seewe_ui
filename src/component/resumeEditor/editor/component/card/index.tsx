import React, {ReactNode} from "react";
import Header from "./header";
import Container from "./container";


interface Props {
  title: string;
  actions?: ReactNode[];
  children: ReactNode;
}

const Card: React.FC<Props> = ({title, actions, children}: Props) => {
  return (
    <>
      <Header title={title} actions={actions}/>
      <Container>
        {children}
      </Container>
    </>
  );
}

export default Card;
