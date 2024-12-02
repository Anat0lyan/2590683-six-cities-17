type SortByItemType = {
  title: string;
  isActive: boolean;
  setTitleViews: (value: string) => void;
  setIsopen: (value: boolean) => void;
};

export default function SortByItem({
  title,
  isActive,
  setIsopen,
  setTitleViews,
}: SortByItemType) {
  const handleClickFilter = () => {
    setTitleViews(title);
    setIsopen(false);
  };
  return (
    <li
      className={`
        places__option 
        ${isActive ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={handleClickFilter}
    >
      {title}
    </li>
  );
}
