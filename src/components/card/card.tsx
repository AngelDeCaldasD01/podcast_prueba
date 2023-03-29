import './card.scss';

interface ICard {
  image: string;
  title: string;
  author: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function Card(props: ICard) {
  const { image, title, author, onClick } = props;

  return (
    <div className="card-root" onClick={onClick}>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-author">Author: {author}</div>
      </div>
      <div className="card-content-img">
        <img alt={image} src={image} className="card-img" />
      </div>
    </div>
  );
}
