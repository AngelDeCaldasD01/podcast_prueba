import { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main, PodcastDetail, PodcastDetailEpisode } from '../../pods';

export const RouterComponentPodcaster: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/podcaster" />} />
      <Route path="/podcaster" element={<Main />} />
      <Route path="/podcaster/podcastDetail" element={<PodcastDetail />} />
      <Route path="/podcaster/podcastDetail/podcastDetail" element={<PodcastDetailEpisode />} />
    </Routes>
  );
};
