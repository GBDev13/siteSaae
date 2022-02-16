import SectionTitle from '../SectionTitle';
import ServicoItem from './ServicoItem';
import { Container } from './styles';
import { ImFilesEmpty} from 'react-icons/im';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ServicosProps{
  servico:String;
  icon:String;
}


function Servicos({servico,icon}:ServicosProps) {
  return (
    <Container>
      <SectionTitle title="Serviços"/>
      <section>
        <ServicoItem 
        icon={<ImFilesEmpty/>}
        servico="Segunda Via da conta"
        />
          <ServicoItem 
        icon={<ImFilesEmpty/>}
        servico="Ligação nova e esgoto"
        />
          <ServicoItem 
        icon={<ImFilesEmpty/>}
        servico="Reeligação de agua e esgoto"
        />
        <ServicoItem 
        icon={<ImFilesEmpty/>}
        servico="Reclamação de fatura"
        />
     
      </section>
    </Container>
  );
};

export default Servicos;
