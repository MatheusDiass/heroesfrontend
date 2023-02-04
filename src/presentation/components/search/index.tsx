import './styles.sass';
import { AiOutlineSend } from 'react-icons/ai';

export default function Search() {
  return (
    <div className="search">
      <input type="text" className="search__field search__field--icon" />
      <button className="search__field__button">
        <AiOutlineSend className="search__field__button__icon" />
      </button>
    </div>
  );
}
