import styled from 'styled-components'

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
  flex-wrap: wrap;
  .page-btn {
    width: 50px;
    height: 40px;
    background: var(--primary-500);
    border-color: transparent;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--white);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .prev-btn,
  .next-btn {
    width: 70px;
    height: 40px;
    background: var(--white);
    color: var(--primary-500);
    border-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
  }
`;
export default Wrapper
