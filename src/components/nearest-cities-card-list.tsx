import CityCard from './city-card';
import { CityCardListProps } from '../types/card-list';
import { CardType } from '../const';

function NearestCitiesCardList({ offers }: CityCardListProps) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <CityCard
          key={offer.id}
          cardInfo={offer}
          typeClassName={CardType.nearest}
        />
      ))}
    </div>
  );
}

export default NearestCitiesCardList;
