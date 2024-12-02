type LocationItemType = {
  city: string;
  isActive?: boolean;
  type: 'mainPage' | 'favorites';
};

export default function LocationItem({
  type,
  city,
  isActive,
}: LocationItemType) {
  return (
    <a
      className={`
                  locations__item-link 
                  href = '#'
                  ${type === 'mainPage' && 'tabs__item'} 
                  ${isActive && 'tabs__item--active'} 
                `}
    >
      <span>{city}</span>
    </a>
  );
}
