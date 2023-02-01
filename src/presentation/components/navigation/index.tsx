import './styles.sass';
import imageBackground from '../../assets/images/ironman.png';

export default function Navigation() {
  const links = [
    {
      label: 'Home',
      to: '/home',
    },
    {
      label: 'Profile',
      to: '/profile',
    },
    {
      label: 'About',
      to: '/about',
    },
  ];

  return (
    <div className="navigation">
      <ul className="navigation__list">
        {links.map((link, index) => (
          <li key={index} className="navigation__list__item">
            <a className="navigation__list__item__link" href={link.to}>
              {link.label}
            </a>
          </li>
        ))}

        <li className="navigation__list__item">
          <a className="navigation__list__item__link" href="">
            Logout
          </a>
        </li>
      </ul>

      <img
        src={imageBackground}
        alt="Iron Man"
        className="navigation__backgroundImage"
      />
    </div>
  );
}
