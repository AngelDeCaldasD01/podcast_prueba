import CardDetail from '../../components/cardDetail/cardDetail';
import getMilliseconds from '../../core/hooks/getMilliseconds';
import PodcastDetailController from './utils/podcastDetail.controller';
import './../../styles/main.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PodcastDetailModel from './utils/podcastDetail.model';
import React from 'react';

export function PodcastDetail() {
  const { item } = PodcastDetailController();
  const itemSlice = [...item].slice(1);
  const { episodeId } = useParams();
  const [foundEpisode, setFoundEpisode] = useState<PodcastDetailModel[] | undefined>();

  useEffect(() => {
    setFoundEpisode([...itemSlice].filter((x) => x.trackId == episodeId));
  }, [episodeId]);
  return (
    <div className="detail-content">
      <div className="detail-template-info">
        <CardDetail />
      </div>
      {!episodeId && (
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
                {itemSlice.map((x) => {
                  return (
                    <tr key={crypto.randomUUID()}>
                      <td>
                        <Link to={`episode/${x.trackId}`}>{x.title}</Link>
                      </td>
                      <td>{Intl.DateTimeFormat().format(new Date(x.releaseDate))}</td>
                      <td>{getMilliseconds(x.trackTimeMillis)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {episodeId &&
        foundEpisode &&
        (console.log(foundEpisode[0]?.description),
        (
          <div className="detail-template-episode">
            <div className="detail-template-episode-title">{foundEpisode[0]?.title}</div>
            {/* <div
              className="detail-template-episode-description"
              dangerouslySetInnerHTML={{ __html: foundEpisode[0]?.description }}
            /> */}

            {React.createElement('div', {
              dangerouslySetInnerHTML: { __html: foundEpisode[0]?.description }
            })}

            <div className="detail-template-episode-tracker">
              <audio controls src={foundEpisode[0]?.episodeUrl} />
            </div>
          </div>
        ))}
    </div>
  );
}
