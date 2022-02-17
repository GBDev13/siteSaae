import SectionTitle from '../SectionTitle';
import ServicoItem from './ServicoItem';
import { Container } from './styles';
import { ImFilesEmpty} from 'react-icons/im';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function Servicos(){
  return (
    <Container>
      <SectionTitle title="Serviços"/>
      <section>
        <ServicoItem 
        icon=''
        servico="Segunda Via da conta"
        />
        <ServicoItem 
        icon=''
        servico="Ligação nova e esgoto"
        />
          <ServicoItem 
        icon=''
        servico="Reeligação de agua e esgoto"
        />
        <ServicoItem 
        icon=''
        servico="Reclamação de fatura"
        />
     
      </section>
    </Container>
  );
};

export default Servicos;
