import CityCard from './city-card';
import { CityCardListProps } from '../types/card-list';
import { CardType } from '../const';


function NearestCitiesCardList({ cities }: CityCardListProps) {
  return (
    <div
      className='near-places__list places__list'
    >
      {cities.map((city) => (
        <CityCard key={city.id} cardInfo={city} typeClassName={CardType.nearest} />
      ))}
    </div>
  );
}

export default NearestCitiesCardList;
