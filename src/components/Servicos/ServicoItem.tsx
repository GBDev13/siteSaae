import { ReactNode } from 'react';
import { ItemContainer } from './styles';


interface ServicoItemProps{
  icone: ReactNode;
  servico: string;
}

function ServicoItem({icone, servico}: ServicoItemProps) {
  return (
    <ItemContainer>
      <div>
       <h1>{icone}</h1>
      <p>{servico}</p>
      </div>
      
    </ItemContainer>
  );
};

export default ServicoItem;
