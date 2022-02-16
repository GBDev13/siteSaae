import { ReactNode } from 'react';

import { Container } from './styles';

interface NoticiaContentProps {
  title:String,
  description: String,
  date:String,
  content:String
}

function NoticiaContent({ title,description, date, content }: NoticiaContentProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <span>{date}</span>
      <p>{content}</p>
    </Container>
  );
};

export default NoticiaContent;
