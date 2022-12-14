import "./style.css";
import React, { useState, useEffect } from "react";
import EventCard from "./eventscard/EventCard";

import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
// import GoogleLoginPage from "./GoogleLoginPage";
// import EventFAB from "./EventFAB";
import "./Fab.css";

const clientId = process.env.REACT_APP_CLIENT_ID;
const scope =
  "https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read";

function Event() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [choosed, setChoosed] = useState(0);
  const [isinittial, setIsinittial] = useState(false);
  const [regActive, setRegActive] = useState(false);

  const onGoogleLoginSuccess = (res) => {
    console.log("SUCCESS!!! Current User: ", res);
    window.sessionStorage.setItem(
      "profileData",
      JSON.stringify(res.profileObj)
    );
    window.sessionStorage.setItem("tokenId", res.tokenId);
    navigate("/register", {
      state: { profileData: res.profileObj, token: res.tokenId },
    });
  };

  const onGoogleLoginFailure = (res) => {
    console.log("FAILURE!!! res: ", res);
  };

  const toggle = () => {
    document
      .getElementsByClassName("event-detais-card")[0]
      .classList.toggle("event-detais-card-active");
    document.getElementsByClassName("coming-soon")[0].classList.toggle("coming-soon-active");
    console.log("Single G clicked");
  };

  const [content, setContent] = useState(-1);
  function ani(e) {
    console.log(e);
    document
      .getElementsByClassName("fab-button")[0]
      .classList.toggle("fab-button-active");
    document
      .getElementsByClassName("fab-container")[0]
      .classList.toggle("fab-container-active");
  }
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    if (isinittial) {
      toggle();
    } else {
      setIsinittial(true);
    }
    if (active) {
      setRegActive(false);
    } else {
      setTimeout(() => {
        setRegActive(true);
      }, 1000);
    }
  }, [active]);
  const handleClose = () => {
    if (active) {
      setActive(false);
      setChoosed(0);
      setContent(-1);
      setActiveNav(0);
      
    }
  };
  const animateOncardChange = ()=>{
    document.getElementsByClassName("event-detais-card")[0].animate(
      [
        {
          transform: "rotate(0) scale(0.5)",
          color: "#000",
        },
        { color: "#431236", offset: 0.3 },
        {
          transform: "rotateY(360deg) scale(1)",
          color: "#000",
        },
      ],
      {
        duration: 300,
        // iterations: Infinity,
      }
    );
  }

  return (
    <>
    <div className="content-button">
      <div className="events trapezoid">
        {/* <table className="table">
          <thead>
            <tr>
              <th>EVENTS</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td className="td-up"> */}
              <h1 className="hovered">
                <a
                  href="#udgam"
                  onClick={() => {
                    setActiveNav('#udgam')
                    if (active && content === 1) {
                      
                      setActive(false);
                      setContent(-1);
                      setActiveNav(0);
                    } else {
                      if (active) {
                        animateOncardChange();
                        
                      } else {
                        setActive(true);
                      }setContent(1);
                    }
                  }}
                  id="event-dark"
                  className={activeNav === '#udgam'?'active':''}
                >
                  UDGAM
                </a>
                </h1>
                
              <h1 className="hovered">
                <a
                  href="#udyam"
                  onClick={() => {
                    setActiveNav('#udyam');
                    if (active && content === 0) {
                      setActive(false);
                      setContent(-1);
                      setActiveNav(0);
                    } else {
                      if(active){
                        animateOncardChange();
                        
                      }else{
                        setActive(true);
                      }
                      setContent(0);
                      
                      
                    }
                  }}
                  className={activeNav === '#udyam'?'active':''}
                >
                  UDYAM
                </a>
                </h1>
          

              <h1 className="hovered">
                <a
                  href="#mashal"
                  onClick={() => {
                    setActiveNav('#mashal')
                    if (active && content === 2) {
                      setActive(false);
                      setContent(-1);
                      setActiveNav(0);
                    } else {
                      if (active) {
                        animateOncardChange();
                      } else {
                        setActive(true);
                      }
                      setContent(2);
                    }
                  }}
                  id="event-dark2"
                  className={activeNav === '#mashal'?'active':''}
                >
                  MASHAL
                </a>
              </h1>
             
      </div>
    </div>
      <EventCard data={content} close={handleClose} />
      <div className="fab-main-container">
        <div className="fab-container">
          <div className="fab-button-container">
            <div
              className="fab-button"
              onClick={(e) => {
                if (active) {
                  setActive(false);
                  setContent(-1);
                }
                setChoosed(!choosed);
                ani(e);
                console.log("clicked");
              }}
            >
              <h3
                className="fab-button-text"
                style={{
                  position: "relative",
                  fontSize: "23px",
                  textAlign: "center",
                  margin: "auto 0",
                  rotate: "180deg",
                  display: "block",
                }}
              >
                EVENTS
              </h3>
              <h3
                className="fab-button-textX"
                style={{
                  position: "relative",
                  // fontSize: "px",
                  textAlign: "center",
                  marginTop: "0px",
                  marginBottom: "15px",
                  display: "block",
                }}
              >
                <img src="./assets/cross_icon.svg" alt="X" style={{width:"50px"}}></img>
              </h3>
            </div>
          </div>
          <div
            className="fab-item1"
            onClick={() => {
              if (active && content === 2) {
                setActive(false);
                setContent(-1);
              } else {
                if (active) {
                  animateOncardChange();
                } else {
                  setActive(true);
                }
                setContent(2);
              }

              console.log("clicked UDYAM");
            }}
          >
            <h3
              style={{
                position: "relative",
                fontSize: "18px",
                textAlign: "center",
                margin: "auto 0",
                pointerEvents: "none",
              }}
            >
              MASHAL
            </h3>
          </div>
          <div
            className="fab-item2"
            onClick={() => {
              if (active && content === 0) {
                setActive(false);
                setContent(-1);
              } else {
                if (active) {
                  animateOncardChange();
                } else {
                  setActive(true);
                }
                setContent(0);
              }

              console.log("clicked UDYAM");
            }}
          >
            <h3
              style={{
                position: "relative",
                fontSize: "18px",
                textAlign: "center",
                margin: "auto 0",
                pointerEvents: "none",
              }}
            >
              UDYAM
            </h3>
          </div>
          <div
            className="fab-item3"
            onClick={() => {
              if (active && content === 1) {
                setActive(false);
                setContent(-1);
              } else {
                if (active) {
                  animateOncardChange();
                } else {
                  setActive(true);
                }
                setContent(1);
              }

              console.log("clicked UDYAM");
            }}
          >
            <h3
              style={{
                position: "relative",
                fontSize: "18px",
                textAlign: "center",
                margin: "auto 0",
                pointerEvents: "none",
              }}
            >
              UDGAM
            </h3>
          </div>
          <div className="fab-circular-ring"></div>
        </div>
      </div>
      
      
    </>
  );
}
export default Event;
