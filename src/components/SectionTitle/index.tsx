import { ReactNode } from 'react';

import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  
}

function SectionTitle({ title}: SectionTitleProps) {
  return (
    <Container>
      <h1>{title}</h1>
     
    </Container>
  );
};

export default SectionTitle;
