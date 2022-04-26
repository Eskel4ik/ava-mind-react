import React from "react";
import { translations } from "../contexts/translationContext";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import '../css/Content.css';
import '../css/Thanks.css';
import api from "../utils/api";

function Thanks({ lang, currentUser}) {
  React.useEffect(()=> {
    let dataToSend = JSON.stringify(currentUser);
    console.log(dataToSend);
    api.sendUserData(dataToSend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
 
  return (
    <div className="thanks content">
      <p className="content__text">
        {translations[lang].thanksTitle}
        <span className="user-name">{currentUser.name}</span>
        {translations[lang].thanksExclamation}
        {translations[lang].thanksTextStart}
      </p>
      <p className="content__text">
         {" "}
              <a
                className="content__link"
                href="/video"
              >
                {translations[lang].thanksTeamLink}
              </a>
              {translations[lang].thanksTeamEnd}
              ,{" "}
              <a
                className="content__link"
                href="https://drive.google.com/file/d/1pJOOJldevCgjPEjIRQGN4d_tk-xf_SoR/view"
                target="_blank" rel="noreferrer"
              >
                {translations[lang].thanksPresentationLink}
              </a>{" "}
              {translations[lang].thanksPresentationEnd}
              <a className="content__link"
                href="/contacts"
                rel="noreferrer">
                  {translations[lang].thanksContacts}
              </a>
              {translations[lang].thanksBot}{" "}
              <a
                className="content__link"
                href="https://t.me/ava_mind_bot"
                target="_blank" rel="noreferrer"
              >
                {translations[lang].botLink}
              </a>
              {translations[lang].thanksBotEnd}
              <br />                           
      </p>   
      <p className="content__text">
        {translations[lang].thanksTextEnd}
      </p> 
      <div className="next-button__container">
      <Link className="next-button" to="/video">
          <img
            className="next-button__icon"
            src={arrowPath}
            alt="white arrow icon"
          />
          <div className="next-button__overlay"></div>
        </Link>
      </div>   
    </div>
  );
}
export default Thanks;