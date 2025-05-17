
import { Link } from 'react-router-dom';
import './NoPage.css';

const NoPage = () => {
  return (
    <div className="no-page">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
};

export default NoPage;
