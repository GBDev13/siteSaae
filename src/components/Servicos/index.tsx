import { ImFilesEmpty } from 'react-icons/im';
import SectionTitle from '../SectionTitle';
import ServicoItem from './ServicoItem';
import { Container } from './styles';

function Servicos() {
  return (
    <Container>
      <SectionTitle title="Serviços" />
      <section>
        <ServicoItem icone={<ImFilesEmpty />} servico="Segunda Via da conta" />
        <ServicoItem
          icone={<ImFilesEmpty />}
          servico="Ligação  de agua  e esgoto"
        />
        <ServicoItem
          icone={<ImFilesEmpty />}
          servico="Reeligação de agua e esgoto"
        />
        <ServicoItem icone={<ImFilesEmpty />} servico="Reclamação de fatura" />
      </section>
    </Container>
  );
}

export default Servicos;
