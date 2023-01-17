import React, { useState } from "react"
import Modal from "react-modal"
import Brand from "./Brand"
import AdamAbout from "../img/Adam-about.jpg"
import "../assets/scss/main/_rtl.scss"

Modal.setAppElement("#root")

const About = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src={AdamAbout} alt="about" />
        </div>
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">היי נעים להכיר,</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                בעל תואר בשיווק ופרסום עם ידע בעיצוב בתוכנות הכי מוכרות בשוק
                העבוד, צילום, שיווק, קמפיינים ופיתוח פרונטאנד.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  קריאה נוספת
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END RIGHT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>תאריך לידה:</span>17/09/1994
                  </p>
                </li>
                <li>
                  <p>
                    <span>גיל:</span>28
                  </p>
                </li>
                <li>
                  <p>
                    <span>אזור מגורים:</span>קרית אונו מחוז מרכז
                  </p>
                </li>
                <li>
                  <p>
                    <span>כתובת מייל:</span>
                    <a href="mailto:admont555@gmail.com">admont555@gmail.com</a>
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about text-rtl">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>שיווק, עיצוב ומדיה</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">מוצרי Adobe</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">קמפיינים</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="70">
                      <span>
                        <span className="label">שיווק עסקי</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 70 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">צילום מקצועי</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>שפות תכנות</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Css & Sass</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="75">
                      <span>
                        <span className="label">js</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 75 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="65">
                      <span>
                        <span className="label">React js</span>
                        <span className="number">65%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 65 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label"> Wordpress</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>תמיד כיף לדעת</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>75+</h3>
                      <span>פרויקטים שהושלמו</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>80+</h3>
                      <span>לקוחות מרוצים</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>5</h3>
                      <span>שנות ניסיון </span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  <h3>לקוחות שזכיתי לעבוד איתם</h3>
                </div>
                <Brand />
              </div>
              {/*  END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  )
}

export default About
