import { Link } from 'react-router-dom';
import image from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage.js';

export const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={image} alt="error" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back bome</Link>
      </div>
    </Wrapper>
  );
}
