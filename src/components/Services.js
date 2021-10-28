import styled from "styled-components";
import { services } from "../utils/data";

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h1 className='section-title'>
          <span>/</span> custom built <span>!</span>
        </h1>
        <div className='underline'></div>
        <div className='card-container'>
          {services.map((item) => {
            return (
              <article
                className='single-service'
                key={item.id}
                style={{
                  background: `linear-gradient(90deg, rgba(5,3,28,0.6449930313922444) 100%, rgba(83,86,88,1) 100%, rgba(0,212,255,1) 100%),url('${item.img}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className='icon-container'>{item.icon}</div>
                <h4 className='title'>{item.title}</h4>

                <p className='desc'>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .single-service {
    /* background: var(--clr-grey-9); */
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .icon-container {
    color: var(--clr-primary-5);
    font-size: 2.5rem;
    width: 5rem;
    margin: 0 auto;
    text-align: center;
    transition: var(--transition);
  }
  .title {
    margin-bottom: 1rem;
    text-align: center;
    border-bottom: 2px solid transparent;
  }
  .single-service:hover {
    /* background: var(--clr-primary-5); */
    transform: scale(1.05);
    .icon-container {
      color: white;
    }
    .title {
      color: white;
    }
    .desc {
      color: white;
    }
  }
  @media screen and (min-width: 768px) {
    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      column-gap: 2rem;
    }
  }
`;

export default Services;
