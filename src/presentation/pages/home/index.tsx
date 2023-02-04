import './styles.sass';
import { useState } from 'react';
import heroesList from '../../data/heroes.json';
import Search from '../../components/search';
import Card from '../../components/card';

export default function Home() {
  const [heroes] = useState(heroesList);

  return (
    <div className="home">
      <h1 className="home__title">Choose your hero!</h1>

      <div className="home__search">
        <Search />
      </div>

      <div className="home__heroes">
        <ul className="home__heroes__list">
          {heroes.map((hero) => (
            <li key={hero.id}>
              <Card
                name={hero.name}
                image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
