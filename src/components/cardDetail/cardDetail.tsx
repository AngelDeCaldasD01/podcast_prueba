import { useNavigate, useParams } from 'react-router-dom';
import MainController from '../../pods/main/utils/main.controller';
import './cardDetail.scss';

export default function CardDetail() {
  const { list } = MainController();
  const { podcastId } = useParams();
  const { episodeId } = useParams();

  const navigate = useNavigate();

  const itemFound = [...list].filter((x) => {
    return x.id.includes(podcastId ?? '');
  });
  return (
    <div className="cardDetail-root">
      <div className="cardDetail-content">
        <div className="cardDetail-content-img">
          <img
            className="cardDetail-img"
            alt={itemFound[0]?.image}
            src={itemFound[0]?.image}
            onClick={() => {
              if (episodeId) navigate(`/podcast/${podcastId}`);
            }}
          />
        </div>
        <div
          className="cardDetail-title"
          onClick={() => {
            if (episodeId) navigate(`/podcast/${podcastId}`);
          }}>
          {itemFound[0]?.title}
        </div>
        <div className="cardDetail-author">by {itemFound[0]?.author}</div>
        <div className="cardDetail-description-title">Description:</div>
        <div className="cardDetail-description">{itemFound[0]?.summary}</div>
      </div>
    </div>
  );
}
