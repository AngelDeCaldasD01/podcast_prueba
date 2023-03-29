import { RouterComponentPodcaster } from './core/router/router.podcaster';
import { Layout } from './layout/layout';

export default function App() {
  return (
    <Layout>
      <RouterComponentPodcaster />
    </Layout>
  );
}
