import React, { useState } from "react"
import Modal from "react-modal"
import Social from "./Social"

Modal.setAppElement("#root")

const NewsRtl = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)

  function toggleModalOne() {
    setIsOpen(!isOpen)
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2)
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3)
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4)
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>למדו בעצמכם</span>
              <h3>הבלוג שלי</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/1.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra"></div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  מה זה וורדפרס?
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>למאמר המלא</span>
                  </a>
                </div>
                {/* END اقرأ أكثر BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal .text-rtl"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news rtl-p">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/1.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra"></div>
                        <h3 className="title">מה זה וורדפרס?</h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            מה זה וורדפרס? בבסיסה, וורדפרס היא הדרך הפשוטה
                            והפופולרית ביותר ליצור אתר או בלוג משלך. למעשה, מעל
                            ל-40% אתרים באינטרנט בנויים על וורדפרס. כן, כמו שזה
                            נשמע יותר מ1 מתוך 4 אתרים שאתם מבקרים בהם בנויים על
                            מערכת WordPress.
                          </p>

                          <p>
                            ברמה טיפה יותר טכנית, וורדפרס היא מערכת ניהול תוכן
                            בקוד פתוח ברישיון תחת GPLv2, מה שאומר שכל אחד יכול
                            להשתמש בתוכנת WordPress בחינם או לשנות אותה. מערכת
                            לניהול תוכן היא בעצם כלי שמקל על ניהול היבטים חשובים
                            באתר שלך – כמו תוכן – מבלי שתצטרך לדעת דבר על על
                            שפות תכנות או תכנות בכללי. התוצאה הסופית היא
                            שוורדפרס הופכת בניית אתרים לדבר נגיש לכל אחד – אפילו
                            לאנשים שאינם מפתחים.
                          </p>
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>שיתוף:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra"></div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                  למה שיווק דיגיטלי חשוב לעסקים קטנים?
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwo}>
                    <span>למאמר המלא</span>
                  </a>
                </div>
                {/* ENDBUTTON */}
              </div>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news rtl-p">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/2.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra"></div>
                        <h3 className="title">
                          למה שיווק דיגיטלי חשוב לעסקים קטנים?
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            כאשר עסקים קטנים חושבים על פרסום ההתמקדות שלהם
                            לעיתים קרובות היא כיצד להעביר את קבוצת הלקוחות
                            הראשונה שלהם דרך הדלת וכמה שיותר מהר לראות כסף . הם
                            עשויים להסתמך על צורות פרסום מסורתיות, כגון מודעות
                            מודפסות, כרטיסי ביקור, שלטים ברחוב ועוד. הם עשויים
                            להאמין שמכיוון שהם יודעים שהם מציעים מוצר או שירות
                            טוב, זה רק עניין של זמן עד שלקוחות ימצאו את דרכם
                            אליהם. אמנם אסטרטגיה זו עשויה להביא טפטוף של לקוחות
                            לעסקים, יש דרך טובה יותר וקלה יותר. עסקים קטנים
                            צריכים לקחת בחשבון את השוק העצום של לקוחות
                            פוטנציאליים ברשת. שום עסק קטן, לא משנה כמה חדש, אמור
                            להתעלם מהשוק העצום הזה.
                          </p>
                          <p>
                            יתרונות של שיווק מקוון (online) קבוצת הלקוחות
                            הפוטנציאלית שנמצאת ברשת היא קבוצה גדולה בהרבה ממה
                            שתצלחו למשוך באזור המקומי שלכם באמצעות שיווק
                            דיגיטלי, אתם יכולים להגיע לקהל עצום בצורה חסכונית
                            ומדידה. יתרונות נוספים של שיווק מקוון כוללים: היכולת
                            לקיים אינטראקציה עם לקוחות פוטנציאליים שלך וללמוד
                            בדיוק מה הם מחפשים. היכולת להגיע לשוק גדול יותר אתם
                            יכולים לחסוך כסף ולהגיע ליותר לקוחות בפחות כסף מאשר
                            שיטות שיווק מסורתיות הכירו את הקהל שלכם ואפשרו לו
                            להכיר אתכם באופן אישי שיכול לעזור ביצירת נאמנות
                            למותג ושיפורו אתם יכולים לעקוב אחר התגובות לקמפיינים
                            השיווקיים שלכם כמעט מידית או בטווח קצר לעומת מדיות
                            מסורתיות
                          </p>
                          <h3 className="title">
                            האם אתם דוחים שיווק דיגיטלי?
                          </h3>

                          <p>
                            נמנעתם משיווק דיגיטלי? האם זה בגלל שאתה חושב שאתם
                            פשוט לא מוכנים? האם אתם חושבים שאתם פשוט צריכים קצת
                            זמן כדי להתבסס ואז תגלו את זווית השיווק הדיגיטלית
                            שלכם? הבעיה בגישה זו היא שהלקוחות והלקוחות
                            הפוטנציאליים שלכם כבר נמצאים באונליין ואם הם יחפשו
                            מישהו שמציע שירות דומה לשלכם ולא ימצאו אתכם הם יצרו
                            איתו קשר. ככה אנשים עושים היום כשהם מעוניינים במוצר
                            או שירות הם ישר מפעילים את האצבעות ומתחילים להקליד
                            באינטרנט ולמצוא עליו כמה שיותר פרטים. הם מצפים למצוא
                            אתכם עם פרטים על העסק שלכם, דף פייסבוק פעיל, ביקורות
                            ועוד! אם לקוח פוטנציאלי לא מוצא אותכם באונליין בכלל
                            הוא יכול לחשוב שאתם לא רלוונטיים או שאתם לא מספיק
                            טובים ויבחר ללכת למתחרים שלכם.
                          </p>
                          <h3 className="title">
                            הלקוחות שלכם מחכים לכם בדיגיטל
                          </h3>

                          <p>
                            נמנעתם משיווק דיגיטלי? האם זה בגלל שאתה חושב שאתם
                            פשוט לא מוכנים? האם אתם חושבים שאתם פשוט צריכים קצת
                            זמן כדי להתבסס ואז תגלו את זווית השיווק הדיגיטלית
                            שלכם? הבעיה בגישה זו היא שהלקוחות והלקוחות
                            הפוטנציאליים שלכם כבר נמצאים באונליין ואם הם יחפשו
                            מישהו שמציע שירות דומה לשלכם ולא ימצאו אתכם הם יצרו
                            איתו קשר. ככה אנשים עושים היום כשהם מעוניינים במוצר
                            או שירות הם ישר מפעילים את האצבעות ומתחילים להקליד
                            באינטרנט ולמצוא עליו כמה שיותר פרטים. הם מצפים למצוא
                            אתכם עם פרטים על העסק שלכם, דף פייסבוק פעיל, ביקורות
                            ועוד! אם לקוח פוטנציאלי לא מוצא אותכם באונליין בכלל
                            הוא יכול לחשוב שאתם לא רלוונטיים או שאתם לא מספיק
                            טובים ויבחר ללכת למתחרים שלכם.
                          </p>
                          <h3 className="title">
                            אל תדאגו המתחרים שלכם גם באונליין
                          </h3>

                          <p>
                            כדי שהעסק שלכם יצליח, עליכם לשים לב למה שמתחרים שלכם
                            עושים וללמוד מהם. חשבו על המתחרים שלכם לא רק כמישהו
                            שאתם מתכננים לנצח או לעקוף, אלא כאנשים שיש להם מה
                            ללמד אתכם על התנהלות נכונה. כשאתם מסתכלים על מה
                            שהמתחרים שלכם עושים, תקבלו מושג מה עובד ומה לא עובד.
                            סביר להניח, שלכל סוג של עסק יש מתחרה ברמה כזו או
                            אחרת, המתחרים שלכם הקימו נוכחות באינטרנט? באיזה סוג
                            תוכן הם משתמשים? האם הם כותבים כתבות? או שהם משתמשים
                            בהרבה גרפיקה וסרטונים במודעות שלהם? איך הם מציגים את
                            העסק שלהם ומה מייחד אותם? עד כמה הם עוסקים בקהל? אתם
                            חושבים שאתם יכולים לעשות עבודה טובה יותר? אם לא
                            התחלתם להיכנס לזירת השיווק הדיגיטלית אז אתם לא. אם
                            הלקוח הפוטנציאלי שלכם מתחיל לחפש עסק דומה לשלכם
                            ומסוגל למצוא אתרים או דפים עסקיים של המתחרים, אך לא
                            אתכם, העסק שלכם אפילו לא בתחרות. הלקוחות
                            הפוטנציאליים שלכם לא יכולים לבחור בכם אם הם לא
                            יודעים עליכם. בתרחיש זה המתחרים שלכם פשוט ניצחו
                            ניצחון טכני.
                          </p>
                          <h3 className="title">תהיו נגישים ללקוחות שלכם</h3>

                          <p>
                            ברור שבעולם הדיגיטלי של היום, המקום הראשון בו הצרכן
                            הממוצע מחפש את מבוקשו הוא באונליין. לא משנה מה המוצר
                            או השירות שהם מחפשים, סביר להניח שהם יתחילו את
                            החיפוש שלהם בגוגל. אם אין לך נוכחות מקוונת כלל, לא
                            תימצאו ולא תוכל להתחרות. אם יש לכם נוכחות באונליין,
                            אך קל יותר למצוא את המתחרים שלכם, ייתכן שעדיין לא
                            ימצאו אתכם. מלבד יצירת אתר אינטרנט, לימודי
                            אופטימיזציה למנועי חיפוש לדוגמא היא אסטרטגיה שיכולה
                            לעזור לכם להתקדם מול המתחרים שלכם רק על ידי שימוש
                            בשם שלכם בנקודות מפתח באתר. שאלות פשוטות שאליהן
                            לקוחות פוטנציאליים עשויים לרצות תשובות מהירות צריכות
                            להיות ניתנות גלויות לחלוטין באונליין (המתאר שלכם או
                            הדפים החברתיים) כמו – איפה אתם ממוקמים, מהן שעות
                            הפעילות שלכם ובמה אתם מתמחים.
                          </p>
                          <h3 className="title">תכירו את קהל היעד שלכם</h3>

                          <p>
                            שיווק דיגיטלי מאפשר לכם ליצור אינטראקציה עם הלקוחות
                            שלכם. תוכלו להכיר אותם בהדרגה ואת מה שהם מקווים
                            למצוא. במדיות חברתיות ובבלוגים תוכלו לתת להם ערך
                            שימשוך אותם ליצור אתכם קשר. הריצו סקר או נסו להכיר
                            אותם. שימו לב להערותיהם או לתגובותיהם כי הם מה שיבנו
                            אתכם. על ידי אינטראקציה עם אנשים באופן דיגיטלי, אתם
                            יכולים להתחיל לדעת מה הם מחפשים בדיוק, היכן הכאב
                            שלהם? מה מפריע להם? אילו פתרונות אתם יכולים להציע
                            להם? במקום לנסות לנחש, שיווק דיגיטלי מאפשר לך כלים
                            ושיטות לגלות מי הלקוחות שלכם באמת ואיך אתם יכולים
                            להשאיר אותם תחת הכנף העסקי שלכם. בדרך זו אתם מתחילים
                            לבנות מערכת יחסים עם הלקוחות שלכם. אתם הופכים להרבה
                            יותר מעסק. אתה הופכים לשותף מהימן. אנשים נוטים הרבה
                            יותר לקנות מעסקים שכבר קנו מהם. מעט צורות פרסום
                            חסכוניות לא פחות משיווק דיגיטלי. עסקים קטנים מנסים
                            לעתים קרובות לעשות ככל האפשר בתקציב קטן. צורות שיווק
                            דיגיטליות רבות מאפשרות גם לתקשר את העסק שלכם ולהגיע
                            לקהל יעד רחב גם כאשר התקציב שלכם מאוד הדוק. בהשוואה
                            לפרסום בטלוויזיה, ברדיו או באמצעות דיוור ישיר, שיווק
                            דיגיטלי עולה פחות משמעותית ומגיע לקהל רחב בהרבה יותר
                            ואפילו בפחות מאמץ. שימוש בשיווק דיגיטלי לקידום העסק
                            הקטן שלכם יעזור לכם לקבל סיכוי טוב יותר להצליח מול
                            המתחרים שלכם ולהתפתח בצורה חכמה וטובה.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>שיתוף:</span>
                          <Social />
                          {/* END SOCIAL */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/3.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra"></div>

                <h3 className="title" onClick={toggleModalThree}>
                  טסט{" "}
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalThree}>
                    <span>למאמר המלא </span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news rtl-p">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/3.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">Paola Atkins</a>
                            <span>15 Feb 2021</span>
                          </p>
                        </div>
                        <h3 className="title">טסט</h3>
                      </div>
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">טסט</p>
                          <p>טסט</p>
                        </div>
                        <div className="news_share">
                          <span>שיתוף:</span>
                          <Social />
                          {/* END SOCIAL */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}
        </ul>
      </div>
    </>
  )
}

export default NewsRtl
