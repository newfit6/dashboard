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

  return (
    <div className="App">
      {/* Title-bar with Noti-bar */}

      <div className="Title-bar">
        <div> {title} </div>
        <div className="Noti-bar">
          <div> {noti} </div>
        </div>
      </div>

      {/* Nav-bar */}

      <div className="Nav-bar">
        <p style={{ margin: 0 }}>
          <button type="button" className="btn-dashboard">
            <img src={btn_dashboard} alt="profile"></img>
          </button>
        </p>
        <p style={{ margin: 0 }}>
          <button type="button" className="btn-archive">
            <img src={btn_archive} alt="profile"></img>
          </button>
        </p>
        <p style={{ margin: 0 }}>
          <button type="button" className="btn-journal">
            <img src={btn_journal} alt="profile"></img>
          </button>
        </p>
        <p style={{ margin: 0 }}>
          <button type="button" className="btn-calendar">
            <img src={btn_calendar} alt="profile"></img>
          </button>
        </p>
        <p style={{ margin: 0 }}>
          <button type="button" className="btn-network">
            <img src={btn_network} alt="profile"></img>
          </button>
        </p>
        <p style={{ margin: 0 }}>
          <button type="button" className="btn-search">
            <img src={btn_search} alt="profile"></img>
          </button>
        </p>
        <p style={{ margin: 0 }}>
          <button type="button" className="btn-report">
            <img src={btn_report} alt="profile"></img>
          </button>
        </p>
        <p style={{ margin: 0 }}>
          <button type="button" className="btn-settings">
            <img src={btn_settings} alt="profile"></img>
          </button>
        </p>
      </div>

      {/* Journal-list */}

<<<<<<< HEAD
      <div className="Journal-list">
        <h3> {Journal} </h3>
        <h3 className="Journal-tag"> #Tyler </h3>
=======
      <div className="Journal-list" >
        <div className="Journal-tag"> {Journal} </div>
        <div className="Journal-title"> S1-W1 : Journal List Sample Title </div>
>>>>>>> 46c66d4813b302e9e0a2147e4d78901217dce52c
      </div>
      <div className="Journal-list" >
        <div className="Journal-tag"> {Journal} </div>
        <div className="Journal-title"> S1-W1 : Journal List Sample Title </div>
      </div>
      <div className="Journal-list" >
        <div className="Journal-tag"> {Journal} </div>
        <div className="Journal-title"> S1-W1 : Journal List Sample Title </div>
      </div>

      {/* App-header*/}
      
      <header className="App-header">
      <style> @import url('http://fonts.cdnfonts.com/css/gotham'); </style>
      </header>
    </div>
  );
}

export default App;
