import styled from 'styled-components'

const Wrapper = styled.section`
  background: var(--white);
  border-radius: var(--borderRadius);
  width: 100%;
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    box-shadow: none;
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0;
  }
  .form-row {
    margin-bottom: 1.85rem;
    /* border: 2px solid red; */
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: center;
    /* margin-top: 0; */
    /* height: 35px; */
    /* border: 2px solid red; */
    translate: 0 -1.5px;
    /* padding-bottom: 0.5rem; */
  }
  .btn-container {
    display: flex;
    gap: 1rem;
    translate: 0 -1px;
    /* margin-top: 0.5rem; */
    align-self: center;
    /* border: 2px solid red; */
    /* padding-bottom: 0.25rem; */
    button {
      height: 35px;
      /* border: 2px solid red; */
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper
