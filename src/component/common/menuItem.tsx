import React from 'react';

interface Props {
  title: string;
}

const MenuItem: React.FC<Props> = ({title}: Props) => {
  const handleClickScroll = (title: string) => {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
      <span onClick={() => handleClickScroll(title)}>{title}</span>
  )
}

export default MenuItem;

