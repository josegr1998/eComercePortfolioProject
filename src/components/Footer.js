import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { socials } from "../utils/data";

const Footer = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Comfy place </span>
          <h5> All rights reserved</h5>
        </h5>

        <div className='socials-container'>
          {socials.map((social) => {
            return (
              <a key={social.id} href={`${social.link}`} target='_blank'>
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  color: white;
  .section-center {
    height: 7rem;
    display: flex;
    justify-content: center;
    gap: 7rem;
    align-items: center;
  }
  background: var(--clr-grey-1);
  a {
    color: white;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-5);
  }
  .socials-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    font-size: 1.7rem;
    align-items: center;
  }
`;
export default Footer;
