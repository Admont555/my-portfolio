import React from "react"
import Social from "./Social"
import AdamImg from "../img/Adam-ober.jpeg"

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: `url(${AdamImg})`,
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">אדם אוברלנדר</h3>
            <p className="job">
              בעל תואר בשיווק ופרסום עם ידע בעיצוב בתוכנות הכי מוכרות בשוק
              העבוד, צילום, שיווק, קמפיינים ופיתוח פרונטאנד.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  )
}

export default Home
