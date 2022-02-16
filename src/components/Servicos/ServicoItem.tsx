import { ItemContainer } from './styles';


interface ServicoItemProps{
  icon: string;
  servico: string;
}

function ServicoItem({icon, servico}: ServicoItemProps) {
  return (
    <ItemContainer>
      <div>
      <h1>{icon}</h1>
      <p>{servico}</p>
      </div>
      
    </ItemContainer>
  );
};

export default ServicoItem;
