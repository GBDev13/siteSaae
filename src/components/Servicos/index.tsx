import SectionTitle from '../SectionTitle';
import ServicoItem from './ServicoItem';
import { Container } from './styles';
import { ImFilesEmpty} from 'react-icons/im';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ServicosProps{
  servico:string;
  icone:string;
}


function Servicos({servico,icone}:ServicosProps) {
  return (
    <Container>
      <SectionTitle title="Serviços"/>
      <section>
        <ServicoItem 
        icone={<ImFilesEmpty/>}
        servico="Segunda Via da conta"
        />
          <ServicoItem 
        icone={<ImFilesEmpty/>}
        servico="Ligação nova e esgoto"
        />
          <ServicoItem 
        icone={<ImFilesEmpty/>}
        servico="Reeligação de agua e esgoto"
        />
        <ServicoItem 
        icone={<ImFilesEmpty/>}
        servico="Reclamação de fatura"
        />
     
      </section>
    </Container>
  );
};

export default Servicos;
