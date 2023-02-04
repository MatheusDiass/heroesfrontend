import './styles.sass';
import { BsHeart } from 'react-icons/bs';
import { CgDetailsMore } from 'react-icons/cg';

type Props = {
  name: string;
  image: string;
};

export default function Card({ name, image }: Props) {
  return (
    <div>
      <div className="card">
        <h2 className="card__title">{name}</h2>
        <img src={image} alt={name} className="card__image" />
        <div className="card__actions">
          <button className="card__actions__button">
            <BsHeart className="card__actions__button__icon" />
          </button>
          <button className="card__actions__button">
            <CgDetailsMore className="card__actions__button__icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
