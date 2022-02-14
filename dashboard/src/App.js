import "./App.css";

import btn_dashboard from "./dashboard.svg";
import btn_archive from "./archive.svg";
import btn_journal from "./journal.svg";
import btn_calendar from "./calendar.svg";
import btn_network from "./network.svg";
import btn_search from "./search.svg";
import btn_report from "./report.svg";
import btn_settings from "./settings.svg";

/* Nav-bar icon import from ./ */

function App() {
  let title = "Dashboard";
  let noti =
    "📢  It's 3 days before the registration for the 1st semester of 2022.";
  let Journal = "SampleTag";

  /*let from server*/

  return (
    <div className="container-main">
      {/* Title-bar with Noti-bar, grid container*/}

      <div className="container-main__item-header">
        <div className="container-main__item-header--title"> {title} </div>
        <div className="container-main__item-header--noti"> {noti} </div>
      </div>

      {/* Nav-bar */}

      <div className="container-main__item-nav__top">
        <p style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img src={btn_dashboard} alt="profile"></img>
          </button>
        </p>

        <p style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img src={btn_archive} alt="profile"></img>
          </button>
        </p>

        <p style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img src={btn_journal} alt="profile"></img>
          </button>
        </p>

        <p style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img src={btn_calendar} alt="profile"></img>
          </button>
        </p>

        <p style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img src={btn_network} alt="profile"></img>
          </button>
        </p>

        <p style={{ margin: 0 }}>
          <button type="button" className="container-main__item-nav__top--menu">
            <img src={btn_search} alt="profile"></img>
          </button>
        </p>
      </div>

      <div className="container-main__item-nav__bottom">
        <div style={{ margin: 0 }}>
          <button
            type="button"
            className="container-main__item-nav__bottom--menu"
          >
            <img src={btn_report} alt="profile"></img>
          </button>
        </div>
        <div style={{ margin: 0 }}>
          <button
            type="button"
            className="container-main__item-nav__bottom--menu"
          >
            <img src={btn_settings} alt="profile"></img>
          </button>
        </div>
      </div>

      <div className="container-main__item-dashboard-journal">
        <div className="container-main__item-dashboard-journal__list">
          <div className="container-main__item-dashboard-journal__list--tag">
            {Journal}
          </div>
          <div className="container-main__item-dashboard-journal__list--title">
            S1-W1 : Journal List Sample Title
          </div>
        </div>
      </div>

      {/* Journal-list */}

      {/* App-header*/}

      <header className="App-header">
        <style> @import url('http://fonts.cdnfonts.com/css/gotham'); </style>
      </header>
    </div>
  );
}

export default App;
