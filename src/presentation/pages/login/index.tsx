import './styles.sass';
import logo from '../../assets/images/marvel_logo.png';
import imageBackground from '../../assets/images/spiderman.png';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function toggleTypeInput(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

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
        <div className="login__form__password">
          <input
            className="login__form__input login__form__input--icon"
            type={!showPassword ? 'password' : 'text'}
          />

          <button
            className="login__form__password__button"
            onClick={(e) => toggleTypeInput(e)}
          >
            {(!showPassword && (
              <VscEyeClosed className="login__form__password__button__icon" />
            )) ||
              (showPassword && (
                <VscEye className="login__form__password__button__icon" />
              ))}
          </button>
        </div>

        <a className="login__form__link" href="">
          I forgot my password
        </a>

        <button className="login__form__button">Login</button>
      </form>
    </section>
  );
}
