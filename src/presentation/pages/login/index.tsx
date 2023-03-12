import './styles.sass';
import logo from '../../assets/images/marvel_logo.png';
import imageBackground from '../../assets/images/spiderman.png';
import Field from '../../components/field';

export default function Login() {
  return (
    <section className="login">
      <img
        className="login__background"
        src={imageBackground}
        alt="Spider Man"
      />
      <img className="login__logo" src={logo} alt="Marvel Logo" />
      <h1 className="login__title">Welcome to the Heroes World</h1>

      <form className="login__form" action="">
        <label className="login__form__label" htmlFor="">
          Email or Username:
        </label>

        <Field />

        <label className="login__form__label" htmlFor="">
          Password:
        </label>

        <Field isPasswordField={true} />

        <a className="login__form__link" href="">
          I forgot my password
        </a>
        <button className="login__form__button">Login</button>
      </form>
    </section>
  );
}
