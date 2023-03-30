import { create } from 'zustand';
import apiCall from '../../../core/hooks/apiCall';
import PodcastDetailModel from './podcastDetail.model';

type PodcastDetailState = {
  isLoadingList: boolean;
  item: PodcastDetailModel[];
  getItem: (id: string) => Promise<void>;
};

const podcastDetailStore = create<PodcastDetailState>((set, get) => ({
  isLoadingList: false,
  item: [] as PodcastDetailModel[],
  getItem: async (id: string) => {
    try {
      set({ isLoadingList: true });
      console.log(id);
      const result = await apiCall({
        url: `https://itunes.apple.com/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode`
      });
      console.log(result);
      const responseData = result.data.results;

      const parsedData: PodcastDetailModel[] = responseData.map((podcast: any) => {
        return {
          title: podcast.trackName,
          releaseDate: podcast.releaseDate,
          trackTimeMillis: podcast.trackTimeMillis,
          episodeUrl: podcast.episodeUrl,
          description: podcast.description,
          trackId: podcast.trackId
        };
      });
      set({ item: parsedData });
    } catch (error: any) {
      set({ item: [] as PodcastDetailModel[] });
    } finally {
      // clearTimeout(timer);
      set({ isLoadingList: false });
    }
  }
}));

export default podcastDetailStore;
