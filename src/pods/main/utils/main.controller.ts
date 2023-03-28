import { useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import mainStore from './main.store';

export default function MainController() {
  const [idItem, setIdItem] = useState('');

  const { list, isLoadingList, getList } = mainStore(
    (state) => ({
      list: state.list,
      isLoadingList: state.isLoadingList,
      getList: state.getList
    }),
    shallow
  );

  useEffect(() => {
    getList();
  }, []);

  const onOpen = (id: string) => {
    setIdItem(id);
    // setOpenEdit(true);
  };

  return {
    onOpen,
    list,
    isLoadingList
  };
}
