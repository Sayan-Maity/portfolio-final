import { BiCoffeeTogo, BiCopyright } from "react-icons/bi";
import { AiTwotoneHeart } from "react-icons/ai";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { SocialLinkItem } from "../types/FileTypes";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [socialLinkData, setSocialLinkData] = useState<SocialLinkItem[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getSocialLink`)
      .then((res) => {
        setSocialLinkData(res.data);
        // console.log("inner =>", res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <footer>
      <div className="footer">
        <p className="footer__copyright">
          <span className="footer__sayan-maity">
            <span id="year">
              <BiCopyright className="copyrightIcon" /> {currentYear}{" "}
            </span>
            <a href="/">Sayan Maity</a>
          </span>
          <span>|</span>
          <span>
            Made with <AiTwotoneHeart className="heartIcon" />
          </span>
        </p>
        <p className="buymeacoffee">
          <a
            title="Coffee"
            rel="noopener"
            href="https://www.buymeacoffee.com/sayancr777"
            target="_blank"
          >
            Buy Me a Coffee <BiCoffeeTogo className="coffeeIcon" />
          </a>
        </p>

        <div className="social-links" style={{ display: "flex", gap: "1rem" }}>
          <Link to={socialLinkData[0]?.links[0]?.github} target="_blank">
            <BsGithub />
          </Link>
          <Link to={socialLinkData[0]?.links[1]?.linkedin} target="_blank">
            <BsLinkedin />
          </Link>
          <Link to={socialLinkData[0]?.links[2]?.twitter} target="_blank">
            <BsTwitter />
          </Link>
          <Link to={socialLinkData[0]?.links[3]?.instagram} target="_blank">
            <BsInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
