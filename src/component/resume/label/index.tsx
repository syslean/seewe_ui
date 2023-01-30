import React from 'react';


const Label: React.FC<Props> = ({name}: Props) => {
  return (
    <div style={{margin: "0.25rem 0.25rem"}}>
      <label>{name} :</label>
    </div>
  )
}

export default Label;

interface Props {
  name: string;
}
