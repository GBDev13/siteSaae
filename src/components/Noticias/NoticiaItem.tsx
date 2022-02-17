import Link from 'next/link';
import { ItemContainer } from './styles';

interface NoticiaProps {
  img: string;
  title: string;
  description: string;
  slug:string;
}

export default function NoticiaItem({
  img,
  title,
  description,
  slug
}: NoticiaProps): JSX.Element {
  return (
    <ItemContainer  data-aos="fade-up">
      <div>
        <Link href={`/noticias/${slug}`}>
          <a>
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        </a>
        </Link>
      </div>
    </ItemContainer>
  );
}
