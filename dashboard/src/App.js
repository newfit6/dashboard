import React, { useState } from "react";
import "./App.css";

import btn_dashboard from "./dashboard.svg";
import btn_archive from "./archive.svg";
import btn_journal from "./journal.svg";
import btn_calendar from "./calendar.svg";
import btn_network from "./network.svg";
import btn_search from "./search.svg";
import btn_report from "./report.svg";
import btn_settings from "./settings.svg";
import btn_like from "./like.svg";

/* Nav-bar icon import from ./ */

function App() {
  let title = "Dashboard";

  let [noti, noti_change] = useState([
    "📢  It's 3 days before the registration for the 1st semester of 2022.",
    "Sample Second Notification",
  ]);

  let Journal_Archive = "📃 Journal Archive";

  /*let from server*/

  let [Journal_Tag, Journal_Tag_Change] = useState([
    "First Tag",
    "Second Tag",
    "Third Tag",
  ]);

  let [Journal_Title, Journal_Title_Change] = useState([
    "First useState Data",
    "Second useState Data",
    "Third useState Data",
  ]);

  function function_like() {
    console.log(1);
  }

  return (
    <div className="container-main">
      {/* Title-bar with Noti-bar, grid container*/}

      <div className="container-main__item-header">
        <div className="container-main__item-header--title"> {title} </div>
        <div className="container-main__item-header--noti"> {noti[0]} </div>
      </div>

      {/* Nav-bar */}

      <div className="container-main__item-nav__top">
        <div style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img
              className="item-nav__btn--inactive"
              src={btn_dashboard}
              alt="profile"
            ></img>
          </button>
        </div>

        <div style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img
              className="item-nav__btn--inactive"
              src={btn_archive}
              alt="profile"
            ></img>
          </button>
        </div>

        <div style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img
              className="item-nav__btn--active"
              src={btn_journal}
              alt="profile"
            ></img>
          </button>
        </div>

        <div style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img
              className="item-nav__btn--inactive"
              src={btn_calendar}
              alt="profile"
            ></img>
          </button>
        </div>

        <div style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img
              className="item-nav__btn--inactive"
              src={btn_network}
              alt="profile"
            ></img>
          </button>
        </div>

        <div style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img
              className="item-nav__btn--inactive"
              src={btn_search}
              alt="profile"
            ></img>
          </button>
        </div>
      </div>

      <div className="container-main__item-nav__bottom">
        <div style={{ margin: 0 }}>
          <button
            type="button"
            className="container-main__item-nav__bottom--menu"
          >
            <img
              className="item-nav__btn--inactive"
              src={btn_report}
              alt="profile"
            ></img>
          </button>
        </div>
        <div style={{ margin: 0 }}>
          <button
            type="button"
            className="container-main__item-nav__bottom--menu"
          >
            <img
              className="item-nav__btn--inactive"
              src={btn_settings}
              alt="profile"
            ></img>
          </button>
        </div>
      </div>

      <div className="container-main__item-dashboard-journal">
        <div className="container-main__item-dashboard-journal__title">
          {Journal_Archive}
        </div>

        {/*journal list 0 start*/}
        <div className="container-main__item-dashboard-journal__list">
          <div className="container-main__item-dashboard-journal__list--tag">
            {Journal_Tag[0]}
          </div>
          <div className="container-main__item-dashboard-journal__list--title">
            {Journal_Title[0]}
          </div>

          <div
            className="container-main__item-dashboard-journal__list--like-box"
            onClick={function_like}
          >
            <img
              className="container-main__item-dashboard-journal__list--like-box--like"
              src={btn_like}
              alt="profile"
            ></img>
          </div>
          {/*like event listner*/}
        </div>
        {/*journal list 0 end*/}

        {/*journal list 1 start*/}
        <div className="container-main__item-dashboard-journal__list">
          <div className="container-main__item-dashboard-journal__list--tag">
            {Journal_Tag[1]}
          </div>
          <div className="container-main__item-dashboard-journal__list--title">
            {Journal_Title[1]}
          </div>
          <div
            className="container-main__item-dashboard-journal__list--like-box"
            onClick={function_like}
          >
            <img
              className="container-main__item-dashboard-journal__list--like-box--like"
              src={btn_like}
              alt="profile"
            ></img>
          </div>
        </div>
        {/*journal list 1 end*/}

        {/*journal list 2 start*/}
        <div className="container-main__item-dashboard-journal__list">
          <div className="container-main__item-dashboard-journal__list--tag">
            {Journal_Tag[2]}
          </div>
          <div className="container-main__item-dashboard-journal__list--title">
            {Journal_Title[2]}
          </div>
          <div
            className="container-main__item-dashboard-journal__list--like-box"
            onClick={function_like}
          >
            <img
              className="container-main__item-dashboard-journal__list--like-box--like"
              src={btn_like}
              alt="profile"
            ></img>
          </div>
        </div>
        {/*journal list 2 end*/}
      </div>

      {/* Journal-list */}

      {/* App-header*/}

      <style> @import url('http://fonts.cdnfonts.com/css/gotham'); </style>
    </div>
  );
}

export default App;
