import React from "react"
import { useState } from "react"
import ReactMapGL from "react-map-gl"
import emailjs from "emailjs-com"

const Contact = () => {
  const [viewport, setViewport] = useState({
    latitude: 32.05873,
    longitude: 34.84953,
    zoom: 13,
  })

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_109ifau",
        "template_fcpgaac",
        e.target,
        "user_E7FgIjjr3YFGYy5RY"
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    e.target.reset()
  }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>בואו נדבר</span>
              <h3> השאירו פרטים כאן ואחזור אליכם בהקדם</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="map_wrap">
          <div className="map">
            <ReactMapGL
              mapStyle={"mapbox://style/mapbox/dark-v9"}
              mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </div>
        </div>
        {/* MENU WRAP */}

        <div className="fields">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="שם מלא" />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="דואר אלקטרוני"
                  />
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea
                    name="message"
                    placeholder="תרצו להוסיף עוד משהו?"
                  ></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                שליחה
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  )
}

export default Contact
