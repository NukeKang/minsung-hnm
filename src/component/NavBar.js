import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ isAuthenticate, onHandleAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const handleInputKeyword = (ev) => {
    if (ev.key === "Enter") {
      navigate(`/?q=${ev.target.value}`);
    }
  };

  return (
    <div>
      <div>
        <div className="loginButton">
          {isAuthenticate ? (
            <div onClick={() => onHandleAuthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그아웃</span>
            </div>
          ) : (
            <div onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그인</span>
            </div>
          )}
        </div>
      </div>
      <div className="navSection">
        <Link to="/">
          <img
            width="100px"
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="menuArea">
        <ul className="menuList">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="searchBox">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={(ev) => handleInputKeyword(ev)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
