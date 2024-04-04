import CityCard from './city-card';
import { Offer } from '../types/offer';

type CityCardListProps = {
  cities: Offer[];
};

function CityCardList({ cities }: CityCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cities.map((city) => (
        <CityCard key={city.id} cardInfo={city} />
      ))}
    </div>
  );
}

export default CityCardList;
