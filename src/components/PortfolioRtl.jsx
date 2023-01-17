import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import ModalVideo from "react-modal-video"
import Modal from "react-modal"
import Social from "./Social"

const PortfolioRtl = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [isOpen3, setOpen3] = useState(false)
  const [isOpen4, setOpen4] = useState(false)

  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)

  function toggleModalThree() {
    setIsModalOpen(!isModalOpen)
  }
  function toggleModalFour() {
    setIsModalOpen2(!isModalOpen2)
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>ההצלחה שלהם היא ההצלחה שלי.</span>
                <h3>תיק העבודות שלי</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>הכל</Tab>
                <Tab>סרטונים</Tab>
                <Tab>צילום מקצועי </Tab>
                <Tab>אתרים</Tab>
                <Tab>עיצוב</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    <SRLWrapper>
                      {/* END SHOT */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/2.jpg"
                              alt="Youtube"
                              onClick={() => setOpen(true)}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Hardcore fitness</h3>
                            <span>סרטון</span>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Collagen Plus"
                              onClick={() => setOpen2(true)}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>קולגן פלוס</h3>
                            <span>סרטון</span>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/9.jpg"
                              alt="Youtube"
                              onClick={() => setOpen3(true)}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Ninja gym</h3>
                            <span>סרטון</span>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/10.jpg"
                              alt="Youtube"
                              onClick={() => setOpen4(true)}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Atom Plus</h3>
                            <span>סרטון</span>
                          </div>
                        </div>
                      </li>
                      {/* END Videos */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Besh Award"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Gloria Genkins</h3>
                            <span>Photo shoot</span>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                    </SRLWrapper>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/6.jpg"
                            alt="Details"
                            onClick={toggleModalThree}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Selena Gomez</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ave Simone</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL All */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/2.jpg"
                            alt="Youtube"
                            onClick={() => setOpen(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Hardcore fitness</h3>
                          <span>סרטון</span>
                        </div>
                      </div>
                    </li>
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/5.jpg"
                            alt="Collagen Plus"
                            onClick={() => setOpen2(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>קולגן פלוס</h3>
                          <span>סרטון</span>
                        </div>
                      </div>
                    </li>

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/9.jpg"
                            alt="Youtube"
                            onClick={() => setOpen3(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ninja gym</h3>
                          <span>סרטון</span>
                        </div>
                      </div>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/11.jpg"
                            alt="Youtube"
                            onClick={() => setOpen4(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Atom Plus</h3>
                          <span>סרטון</span>
                        </div>
                      </div>
                    </li>
                    {/* END Videos */}
                    {/* END VIMEO */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END VIMEO VIDEO */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/3.jpg"
                            alt="Youtube"
                            onClick={() => setOpen3(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ashely Flores</h3>
                          <span>Youtube</span>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END YOUTUBE VIDEO */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <SRLWrapper>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.jpg">
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="Childhood"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Derek Smith</h3>
                            <span>Photo shoot</span>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/9.jpg">
                              <img
                                src="assets/img/portfolio/9.jpg"
                                alt="Besh Award"
                              />
                            </a>
                            <div className="mobile_title">
                              <h3>Gloria Genkins</h3>
                              <span>Photo shoot</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                    </SRLWrapper>
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END PHOTOGRAHY */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/6.jpg"
                            alt="Details"
                            onClick={toggleModalThree}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Selena Gomez</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ave Simone</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END DETAILS GALLERY */}
                </TabPanel>
                {/* END Details Gallery */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* all modal video and popup goes here */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="z_j7oEAOu0U"
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen2}
        videoId="IFYGrZeS3_4"
        onClose={() => setOpen2(false)}
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen3}
        videoId="f7LszJl5VVk"
        onClose={() => setOpen3(false)}
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen4}
        videoId="2dQR1nzU3C0"
        onClose={() => setOpen3(false)}
      />
      {/* End Youtube Modal Video */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>سيلينا غوميز</h3>
                <span>تفاصيل</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    نحن نعيش في عالم نحتاج فيه إلى التحرك بسرعة وتكرار على
                    أفكارنا بأكبر قدر ممكن من المرونة. نماذج بالأحجام الطبيعية
                    للبناء يحقق التوازن المثالي بين تمثيل الحياة الحقيقية للمنتج
                    النهائي وسهولة التعديل.
                  </p>
                  <p>
                    النماذج بالأحجام الطبيعية مفيدة لكل من المرحلة الإبداعية من
                    مشروع - على سبيل المثال عندما تحاول اكتشاف ملف تدفقات
                    المستخدم أو التسلسل الهرمي المرئي المناسب - و مرحلة الإنتاج
                    عندما يمثلون الهدف المنتج. جعل النماذج بالأحجام الطبيعية
                    جزءًا من إبداعك و تتيح لك عملية التطوير التفكير بسرعة
                    وسهولة.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">عميل</span>
                      <span>ألفارو موراتا</span>
                    </li>
                    <li>
                      <span className="first">فئة</span>
                      <span>تفاصيل</span>
                    </li>
                    <li>
                      <span className="first">تاريخ</span>
                      <span>07 مارس 2021</span>
                    </li>
                    <li>
                      <span className="first">يشارك</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/8.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>

                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isModalOpen2}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>افي سيمون</h3>
                <span>تفاصيل</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    نحن نعيش في عالم نحتاج فيه إلى التحرك بسرعة وتكرار على
                    أفكارنا بأكبر قدر ممكن من المرونة. نماذج بالأحجام الطبيعية
                    للبناء يحقق التوازن المثالي بين تمثيل الحياة الحقيقية للمنتج
                    النهائي وسهولة التعديل.
                  </p>
                  <p>
                    النماذج بالأحجام الطبيعية مفيدة لكل من المرحلة الإبداعية من
                    مشروع - على سبيل المثال عندما تحاول اكتشاف ملف تدفقات
                    المستخدم أو التسلسل الهرمي المرئي المناسب - و مرحلة الإنتاج
                    عندما يمثلون الهدف المنتج. جعل النماذج بالأحجام الطبيعية
                    جزءًا من إبداعك و تتيح لك عملية التطوير التفكير بسرعة
                    وسهولة.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">عميل</span>
                      <span>ألفارو موراتا</span>
                    </li>
                    <li>
                      <span className="first">فئة</span>
                      <span>تفاصيل</span>
                    </li>
                    <li>
                      <span className="first">تاريخ</span>
                      <span>07 مارس 2021</span>
                    </li>
                    <li>
                      <span className="first">يشارك</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  )
}

export default PortfolioRtl
