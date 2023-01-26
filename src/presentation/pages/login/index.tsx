import './styles.sass';
import logo from '../../assets/images/marvel_logo.png';
import imageBackground from '../../assets/images/spiderman.png';

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
        <input className="login__form__input" type="text" />

        <label className="login__form__label" htmlFor="">
          Password:
        </label>
        <input className="login__form__input" type="password" />

        <a className="login__link" href="">
          I forgot my password
        </a>

        <button>Login</button>
      </form>
    </section>
  );
}