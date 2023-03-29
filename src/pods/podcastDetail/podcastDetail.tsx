import CardDetail from '../../components/cardDetail/cardDetail';
import getMilliseconds from '../../core/hooks/getMilliseconds';
import PodcastDetailController from './utils/podcastDetail.controller';
import './../../styles/main.scss';

export function PodcastDetail() {
  const { item } = PodcastDetailController();

  return (
    <div className="detail-content">
      <div className="detail-template-info">
        <CardDetail />
      </div>
      <div className="detail-template-episodes">
        <div className="detail-template-title">Episodes: {item.length}</div>
        <div className="detail-template-content">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {item.map((x) => {
                return (
                  <tr key={crypto.randomUUID()}>
                    <td>{x.artistName}</td>
                    <td>{Intl.DateTimeFormat().format(new Date(x.releaseDate))}</td>
                    <td>{getMilliseconds(x.trackTimeMillis)}</td>
                  </tr>
                );
              })}
              {item.map((x) => {
                return (
                  <tr key={crypto.randomUUID()}>
                    <td>{x.artistName}</td>
                    <td>{Intl.DateTimeFormat().format(new Date(x.releaseDate))}</td>
                    <td>{getMilliseconds(x.trackTimeMillis)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
