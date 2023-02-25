import './styles.sass';
import { useState } from 'react';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';

export default function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  function toggleTypeInput(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div className="password">
      <input
        className="password__input password__input--icon"
        type={!showPassword ? 'password' : 'text'}
      />

      <button className="password__button" onClick={(e) => toggleTypeInput(e)}>
        {(!showPassword && (
          <VscEyeClosed className="password__button__icon" />
        )) ||
          (showPassword && <VscEye className="password__button__icon" />)}
      </button>
    </div>
  );
}
