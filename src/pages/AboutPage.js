import styled from "styled-components";
import PageHero from "../components/pageHero";
import image from "../assets/main-img.jpeg";

const About = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='section-center'>
        <img src={image} alt='' className='about-img' />
        <div className='info-container'>
          <h1 className='section-title'>Our story</h1>
          <div className='underline'></div>
          <p className='desc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            nam, sequi maiores et ut unde in nobis, accusantium ipsum cupiditate
            esse, debitis ullam reprehenderit vel maxime? Est consequuntur hic
            corporis recusandae ad dolorum nulla similique quisquam, explicabo
            odit eius rerum repellendus placeat obcaecati sunt alias suscipit
            illum magni consectetur blanditiis.
          </p>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  padding-bottom: 4rem;
  .section-center {
    height: 100vh;
  }
  .about-img {
    height: 50vh;
    border-radius: var(--radius);
  }
`;
export default About;
