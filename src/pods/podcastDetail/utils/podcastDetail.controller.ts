import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import podcastDetailStore from './podcastDetail.store';

export default function PodcastDetailController() {
  const { item, getItem, isLoadingList } = podcastDetailStore(
    (state) => ({
      item: state.item,
      isLoadingList: state.isLoadingList,
      getItem: state.getItem
    }),
    shallow
  );

  const { podcastId } = useParams();

  useEffect(() => {
    getItem(podcastId ?? '');
  }, [podcastId]);

  return {
    item,
    isLoadingList
  };
}
