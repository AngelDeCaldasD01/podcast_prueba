import { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main, PodcastDetail } from '../../pods';
import { AppRoutes } from './routes';

export const RouterComponentPodcaster: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to={AppRoutes.root} />} />
      <Route path={AppRoutes.root} element={<Main />} />
      <Route path={AppRoutes.podcastDetail} element={<PodcastDetail />}>
        <Route path={AppRoutes.episodeDetail} element={<PodcastDetail />} />
      </Route>
    </Routes>
  );
};
