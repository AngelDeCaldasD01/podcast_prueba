import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/card';
import MainController from './utils/main.controller';
import MainModel from './utils/main.model';
import './../../styles/main.scss';

export function Main() {
  const { list } = MainController();
  const [filterList, setFilterList] = useState<MainModel[]>(list);
  const navigate = useNavigate();

  useEffect(() => {
    setFilterList([...list]);
  }, [list]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterList(
      [...list].filter((x) => {
        return (
          x.author.toLowerCase().includes(event.target.value.toLowerCase()) ||
          x.title.toLowerCase().includes(event.target.value.toLowerCase())
        );
      })
    );
  };

  const navigateToDetail = (podcast: MainModel) => {
    navigate(`podcast/${podcast.id}`);
  };

  return (
    <div className="main-content">
      <div className="searchbar-content">
        <div className="searchbar-content-length">{filterList.length}</div>
        <input key={'searchbar'} onChange={handleSearchChange} placeholder={'Filter podcast...'} />
      </div>
      <div className="grid-template">
        {filterList.map((x: MainModel) => (
          <Card
            key={crypto.randomUUID()}
            image={x.image}
            title={x.title}
            author={x.author}
            onClick={() => navigateToDetail(x)}
          />
        ))}
      </div>
    </div>
  );
}
