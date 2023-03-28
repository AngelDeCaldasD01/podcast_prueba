import { create } from 'zustand';
import apiCall from '../../../core/hooks/apiCall';
import MainModel from './main.model';
// import MainModel from './main.model';

type MainState = {
  isLoadingList: boolean;
  list: MainModel[];
  getList: () => Promise<void>;
};

const mainStore = create<MainState>((set, get) => ({
  isLoadingList: false,
  list: [] as MainModel[],
  getList: async () => {
    try {
      set({ isLoadingList: true });

      const result = await apiCall({
        url: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      });
      const responseData = result.data.feed.entry;
      const parsedData: MainModel[] = responseData.map((podcast: any) => {
        return {
          title: podcast['im:name'].label,
          author: podcast['im:artist'].label,
          image: podcast['im:image'][2].label
        };
      });
      set({ list: parsedData });
    } catch (error: any) {
      set({ list: [] as MainModel[] });
      throw new Error(
        `Error al recuperar los datos. Por favor inténtelo de nuevo más tarde. (${error.message})`
      );
    } finally {
      // clearTimeout(timer);
      set({ isLoadingList: false });
    }
  }
}));

export default mainStore;
