import './styles.sass';
import { useState } from 'react';
import heroesList from '../../data/heroes.json';
import Search from '../../components/search';
import Card from '../../components/card';

export default function Home() {
  const [heroes] = useState(heroesList);

  return (
    <div className="container">
      <h1>Choose your hero!</h1>

      <Search />

      <div className="heroes">
        <ul className="heroes__list">
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
