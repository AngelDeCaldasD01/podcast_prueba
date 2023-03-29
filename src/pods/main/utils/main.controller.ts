import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import mainStore from './main.store';

export default function MainController() {
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

  return {
    list,
    isLoadingList
  };
}
