import { useNavigate } from 'react-router-dom';
import './header.scss';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-content">
        <span className="header-title" onClick={() => navigate('/')}>
          Podcaster
        </span>
        <div />
      </div>
    </header>
  );
}
