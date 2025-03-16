import React from "react";
import footerContact from "../../api/FooterApi.json";
import { MdFeedback, MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import InstagramLogo from "../../assets/Instagram_icon.png"
import LinkedIn from "../../assets/LinkedIn_logo.png"
import GitHub from "../../assets/GitHub-Mark.png"
import { FaGithub, FaHome, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2025, All Right Reserved
                <NavLink to="https://www.linkedin.com/in/aniketprasad212/" target="_blank">
                  Aniket Prasad
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">
                  <FaHome size={30} style={{color:"white"}}/>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/aniket_prasad_21/"
                    target="_blank"
                  >
                    {/* <FaInstagram size ={24}
                    style={{color: "#dd2a7b"}}
                    /> */}
                      <img
                      src={InstagramLogo}
                      alt="Instagram"
                      width="30"
                      height="30"
                      style={{ marginBottom:"4px" }}
                    />
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="https://www.linkedin.com/in/aniketprasad212/"
                    target="_blank"
                  >
                     <img
                      src={LinkedIn}
                      alt="LinkedIn"
                      width="30"
                      height="30"
                    />
                    {/* <FaLinkedin size ={24}/> */}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://github.com/Aniketprasad21"
                    target="_blank"
                  >
                    <img
                      src={GitHub}
                      alt="GitHub"
                      width="30"
                      height="30"
                    />
                    {/* <FaGithub size={24}  /> */}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                  <MdFeedback size={30} style={{color:"#ff8c00"}}/>
                  </NavLink>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
