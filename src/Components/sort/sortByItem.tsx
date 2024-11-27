type SortByItemType = {
  title: string;
  isActive: boolean;
  setTitleViews: () => void;
  setIsopen: () => void;
};

export default function SortByItem({ title, isActive }: SortByItemType) {
  const handleClickFilter = () => {
    setIsopen(false);
    setTitleViews(title);
  };
  return (
    <li
      className={`places__option ${isActive ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={handleClickFilter}
    >
      {title}
    </li>
  );
}
