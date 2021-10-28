import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='info-container'>
          <h2 className='title'>
            <span>J</span>oin our newsletter and get 20% off <span>!</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
            sint earum? Omnis, nemo? Quasi explicabo, reprehenderit molestiae
            eius quibusdam aliquam, earum ex omnis eligendi officiis velit?
            Saepe, non aliquam!
          </p>
        </div>
        <form action='https://formspree.io/f/mvodnygq' method='POST'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='enter email'
              type='email'
              className='input'
              name='_replyto'
            />
            <button className='submit-btn'>Subscribe</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 2rem;
  background: var(--clr-grey-8);
  margin-top: 6rem;
  padding-bottom: 6rem;
  margin-bottom: 6rem;
  .title {
    text-transform: unset;
    margin-bottom: 2rem;
  }
  span {
    color: var(--clr-primary-5);
  }
  p {
    max-width: 40rem;
  }
  .form-control {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    /* border: 2px solid black; */
  }
  .input {
    width: 70%;
    height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 1rem;
    border: none;
  }

  .submit-btn {
    width: 30%;
    border: transparent;
    font-size: 1.5rem;
    /* background: transparent; */
    cursor: pointer;
    transition: var(--transition);
    height: 2.5rem;
  }
  .submit-btn:hover {
    background: var(--clr-primary-5);
    color: white;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 3rem;
      align-items: center;
    }
    .form-control {
      height: 2.8rem;
      border: transparent;
    }
  }
`;

export default Contact;
