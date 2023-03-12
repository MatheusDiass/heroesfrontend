import './styles.sass';
import hulkHand from '../../assets/images/hulk_hand.png';
import Field from '../../components/field';

export default function Register() {
  return (
    <section className="register">
      <img className="register__image" src={hulkHand} alt="Hulk Hand" />

      <h1 className="register__title">Register and join us!</h1>

      <form className="register__form" action="">
        <label className="register__form__label" htmlFor="">
          Name:
        </label>
        <Field />

        <label className="register__form__label" htmlFor="">
          Lastname:
        </label>
        <Field />

        <label className="register__form__label" htmlFor="">
          Nickname:
        </label>
        <Field />

        <label className="register__form__label" htmlFor="">
          Email:
        </label>
        <Field />

        <label className="register__form__label" htmlFor="">
          Password:
        </label>
        <Field isPasswordField={true} />

        <button className="register__form__button">Register</button>
      </form>
    </section>
  );
}
