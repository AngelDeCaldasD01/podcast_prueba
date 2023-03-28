import { useEffect, useState } from 'react';
import Card from '../../components/card/card';
import MainController from './utils/main.controller';
import MainModel from './utils/main.model';

export function Main() {
  const { list } = MainController();
  const [searchValue, setSearchValue] = useState('');
  const [filterList, setFilterList] = useState<MainModel[]>(list);

  useEffect(() => {
    setFilterList([...list]);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setFilterList(
      [...list].filter((x) => {
        return x.author.toLowerCase().includes(event.target.value.toLowerCase());
      })
    );
    console.log(event);
  };

  //   const filteredMap = list.filter(([key, value]) => {
  //     return key.includes(searchValue) || value.includes(searchValue);
  //   }));

  console.log;

  return (
    <div className="main-content">
      <div className="searchbar-content">
        <input key={'searchbar'} onChange={handleSearchChange}></input>
      </div>
      <div className="grid-template">
        {filterList?.map((x: MainModel) => (
          <Card
            key={(crypto as any as any).randomUUID()}
            image={x.image}
            title={x.title}
            author={x.author}
          />
        ))}
      </div>
    </div>
  );
}
