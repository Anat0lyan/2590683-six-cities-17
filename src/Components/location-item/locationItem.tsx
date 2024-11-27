type LocationItemType = {
  city: string;
  isActive: boolean;
};

export default function LocationItem({ city, isActive }: LocationItemType) {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          isActive ? 'tabs__item--active' : ''
        } href = '#')
        `}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}
