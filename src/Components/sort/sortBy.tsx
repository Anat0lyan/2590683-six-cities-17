import { useState } from 'react';
import { sortTitels } from '../../Mock';
import SortByItem from './sortByItem';

export default function SortBy() {
  const [isOpen, setIsopen] = useState(false);
  const [titleViews, setTitleViews] = useState('Popular');

  const handlerOpenCloseSort = () => {
    setIsopen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        onClick={handlerOpenCloseSort}
        className="places__sorting-type"
        tabIndex={0}
      >
        {titleViews}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isOpen ? 'places__options--opened' : ''
        }`}
      >
        {sortTitels &&
          sortTitels.map((title) => (
            <SortByItem
              title={title}
              isActive={title === titleViews}
              key={title}
              setIsopen={setIsopen}
              setTitleViews={setTitleViews}
            />
          ))}
      </ul>
    </form>
  );
}
