import './styles.sass';
import { useState } from 'react';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';

type Props = {
  isPasswordField?: boolean;
};

export default function Field({ isPasswordField }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleTypeInput(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  if (!isPasswordField) {
    return <input className="input" />;
  }

  return (
    <div className="password-container">
      <input
        className="input input--icon"
        type={!showPassword ? 'password' : 'text'}
      />

      <button
        className="password-container__button"
        onClick={(e) => toggleTypeInput(e)}
      >
        {(!showPassword && (
          <VscEyeClosed className="password-container__button--icon" />
        )) ||
          (showPassword && (
            <VscEye className="password-container__button--icon" />
          ))}
      </button>
    </div>
  );
}
