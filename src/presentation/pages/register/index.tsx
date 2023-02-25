import './styles.sass';
import hulkHand from '../../assets/images/hulk_hand.png';
import PasswordField from '../../components/password-field';

export default function Register() {
  return (
    <section className="register">
      <img className="register__image" src={hulkHand} alt="Hulk Hand" />

      <h1 className="register__title">Register and join us!</h1>

      <form className="register__form" action="">
        <label className="register__form__label" htmlFor="">
          Name:
        </label>
        <input className="register__form__input" type="text" />

        <label className="register__form__label" htmlFor="">
          Lastname:
        </label>
        <input className="register__form__input" type="text" />

        <label className="register__form__label" htmlFor="">
          Nickname:
        </label>
        <input className="register__form__input" type="text" />

        <label className="register__form__label" htmlFor="">
          Email:
        </label>
        <input className="register__form__input" type="text" />

        <label className="register__form__label" htmlFor="">
          Password:
        </label>
        <PasswordField />

        <button className="register__form__button">Register</button>
      </form>
    </section>
  );
}
