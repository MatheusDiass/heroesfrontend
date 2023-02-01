import './styles.sass';
import logo from '../../assets/images/marvel_logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

export default function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function openNavigation() {
    const headerButton = document.querySelector<HTMLElement>('.header__button');
    const navigation = document.querySelector<HTMLElement>('.navigation');

    if (!isNavigationOpen) {
      if (headerButton) {
        headerButton.classList.add('header__button--openNavigation');
      }

      if (navigation) {
        navigation.style.visibility = 'visible';
      }

      setIsNavigationOpen(!isNavigationOpen);

      return;
    }

    if (headerButton) {
      headerButton.classList.remove('header__button--openNavigation');
    }

    if (navigation) {
      navigation.style.visibility = 'hidden';
    }

    setIsNavigationOpen(!isNavigationOpen);
  }

  return (
    <section className="header">
      <img src={logo} alt="Marvel Logo" className="header__logo" />
      <button className="header__button" onClick={openNavigation}>
        {!isNavigationOpen && (
          <GiHamburgerMenu className="header__button__icon" />
        )}

        {isNavigationOpen && <IoMdClose className="header__button__icon" />}
      </button>
    </section>
  );
}
