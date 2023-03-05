import './styles.sass';
import captainAmerica from '../../assets/images/captain-america.png';

export default function ConfirmRegistration() {
  return (
    <section className="confirm-registration">
      <img
        className="confirm-registration__image"
        src={captainAmerica}
        alt="Captain America"
      />

      <h1 className="confirm-registration__title">Last step to join us!</h1>

      <form className="confirm-registration__form" action="">
        <label className="confirm-registration__form__label" htmlFor="">
          Confirmation code:
        </label>
        <input className="confirm-registration__form__input" type="text" />

        <button className="confirm-registration__form__button">Confirm</button>
      </form>
    </section>
  );
}
