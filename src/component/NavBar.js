import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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

  const showLoginPage = () => {
    navigate("/login");
  };
  const showProductAllPage = () => {
    navigate("/?q=");
  };

  const handleInputKeyword = (ev) => {
    if (ev.key === "Enter") {
      navigate(`/?q=${ev.target.value}`);
    }
  };
  const handleLogOut = () => {
    onHandleAuthenticate(false);
  };

  return (
    <div>
      <div>
        <div
          className="loginButton"
          onClick={() =>
            isAuthenticate === false ? showLoginPage() : handleLogOut()
          }
        >
          <FontAwesomeIcon icon={faUser} />
          <div>{isAuthenticate === true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="navSection">
        <img
          onClick={() => showProductAllPage()}
          width="100px"
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png"
          alt=""
        />
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
