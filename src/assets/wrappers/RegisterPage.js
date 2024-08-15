import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  .logo {
    margin: 0 auto;
    display: block;
    margin-bottom: 1.38rem;
  }
  h3 {
    text-align: center;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  p {
    text-align: center;
    margin: 0;
    margin-top: 1rem;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper
