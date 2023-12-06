import { useAppDispatch } from '../../const/const';
import { changeCity } from '../../store/actions';
import { Location } from '../../const/const';
interface CityLinkProps {
  location: Location;
}
function CityLink({ location }: CityLinkProps) {
  const dispatch = useAppDispatch();

  const getCityName = (evt: React.MouseEvent<HTMLLIElement>): string => {
    const cityName = evt.target.textContent;
    return cityName;
  };
  return (
    <li
      onClick={(evt: React.MouseEvent<HTMLLIElement>) =>
        dispatch(changeCity(getCityName(evt)))
      }
      key={location.id}
      className="locations__item"
    >
      <a className="locations__item-link tabs__item" href="#">
        <span>{location.city}</span>
      </a>
    </li>
  );
}
export default CityLink;
