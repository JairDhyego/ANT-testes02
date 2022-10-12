import React from "react";
import { NavLink } from "react-router-dom";
import {
  MobileOutlined,
  MailOutlined,
  InstagramFilled,
  LinkedinOutlined,
  GithubOutlined,
  UserOutlined,
} from "@ant-design/icons";

const AppHeader = () => {
  return (
    <div className="container">
      <div className="topBar">
        <div className="contactInfo">
          <ul>
            <li>
              <a href="tel:84992062216">
                <span>
                  <MobileOutlined /> 84992062216{" "}
                </span>
              </a>
              <a href="mailto:jaiirdhyego@gmail.com">
                <span>
                  <MailOutlined /> jaiirdhyego@gmail.com{" "}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="otherInfo">
          <ul className="socialMedia">
            <li>
              <a href="https://github.com/JairDhyego">
                <GithubOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jair-dhyego-770061215/">
                <LinkedinOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jairdhyego/">
                <InstagramFilled />
              </a>
            </li>
          </ul>
          <button>
            {" "}
            <UserOutlined /> Minha conta
          </button>
        </div>
      </div>
      <div className="header separator">
        <div className="logo">Lojinha JD</div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/sobre">About</NavLink>
            </li>

            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>

            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppHeader;
