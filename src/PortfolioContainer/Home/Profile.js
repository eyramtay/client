import Typical from "react-typical";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.google.com/search?q=facebook&sca_esv=563100770&sxsrf=AB5stBgvISrIIjYrgQVvl1MB3ot5ah3Dzw%3A1694015965323&source=hp&ei=3aH4ZM28D_e3qtsP9eW76AU&iflsig=AD69kcEAAAAAZPiv7Ym-iTBWjpOtVwFip5Hd5puNdmoH&gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_PBgBmYAfL&oq=face&gs_lp=Egdnd3Mtd2l6IgRmYWNlKgIIADINEC4YxwEY0QMYigUYJzIOEAAYgAQYsQMYgwEYyQMyCBAAGIoFGJIDMggQABiKBRiSAzILEAAYgAQYsQMYgwEyBRAAGIAEMgsQLhiABBjHARjRAzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMggQABiABBixA0ixDFCKAVj5A3ABeACQAQGYAfkCoAHBB6oBBzAuMi4wLjK4AQHIAQD4AQGoAgrCAgcQIxjqAhgnwgINEC4YxwEY0QMY6gIYJ8ICERAuGIMBGMcBGLEDGNEDGIAEwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQLhiKBRixAxiDAQ&sclient=gws-wiz"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.google.com/search?q=google+plus&sca_esv=563100770&sxsrf=AB5stBgMFsieL03uwjJu4le5k2mkzHh4aw%3A1694017222688&ei=xqb4ZJWsKZ2l5NoPluWOgAI&oq=google+plus&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2dvb2dsZSBwbHVzKgIIADIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI_kpQ5AhYm0FwAngBkAEAmAH4AaAB_wyqAQYwLjEwLjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIQEC4YigUYxwEY0QMYsAMYQ8ICChAAGIoFGLADGEPCAgcQIxiKBRgnwgINEC4YxwEY0QMYigUYJ8ICBxAuGIoFGCfCAhMQLhiKBRixAxiDARjHARjRAxhDwgINEAAYigUYsQMYgwEYQ8ICCxAAGIAEGLEDGIMBwgINEC4YigUYxwEYrwEYJ8ICBxAAGIoFGEPCAhAQABiKBRixAxiDARjJAxhDwgIIEAAYigUYkgPCAiIQLhiKBRixAxiDARjHARjRAxhDGJcFGNwEGN4EGOAE2AEBwgIOEC4YgAQYsQMYgwEY5QTCAgoQABiABBgUGIcC4gMEGAAgQYgGAZAGCroGBggBEAEYFA&sclient=gws-wiz-serp"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a
                href="https://www.google.com/search?q=instagram&sca_esv=563100770&sxsrf=AB5stBiUY-fXnl84mnfHbZKhWOOp26zZBA%3A1694017263407&ei=76b4ZPWsGP6tiLMP16G04AM&oq=ins&gs_lp=Egxnd3Mtd2l6LXNlcnAiA2lucyoCCAAyDRAAGIoFGLEDGIMBGEMyBxAAGIoFGEMyDRAAGIoFGLEDGIMBGEMyBxAAGIoFGEMyBxAAGIoFGEMyCBAuGLEDGIAEMhEQLhiABBixAxiDARjHARjRAzIHEAAYigUYQzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBSKkmUKQJWOMKcAN4AZABAJgBqQGgAbMDqgEDMC4zuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPCAg4QABjkAhjWBBiwA9gBAcICEBAuGIoFGMgDGLADGEPYAQLCAg0QLhiKBRjHARivARgnwgIHECMYigUYJ8ICCBAAGIAEGLEDwgIaEC4YigUYxwEYrwEYlwUY3AQY3gQY4ATYAQPCAgoQABiABBgUGIcCwgIHEC4YigUYQ8ICFxAuGLEDGIAEGJcFGNwEGN4EGOAE2AED4gMEGAAgQYgGAZAGEboGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFA&sclient=gws-wiz-serp"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Eyram</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Pickleball Hobbyist",
                    1000,
                    "AWS Cloud Practitioner",
                    1000,
                    "React Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="eyram_tay_resume.pdf" target="_blank">
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
