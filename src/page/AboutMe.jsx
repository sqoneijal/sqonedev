import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const AboutMe = (props) => {
   const { animated, daftarTestimoni, daftarKlien } = props;

   useEffect(() => {
      const $ = window.$;
      $(".testimonials.owl-carousel").owlCarousel({
         nav: true,
         items: 3,
         loop: false,
         navText: false,
         autoHeight: true,
         margin: 25,
         responsive: {
            0: {
               items: 1,
            },
            480: {
               items: 1,
            },
            768: {
               items: 2,
            },
            1200: {
               items: 2,
            },
         },
      });

      $(".text-rotation").owlCarousel({
         loop: true,
         dots: false,
         nav: false,
         margin: 0,
         items: 1,
         autoplay: true,
         autoplayHoverPause: false,
         autoplayTimeout: 3800,
         animateOut: "animated-section-scaleDown",
         animateIn: "animated-section-scaleUp",
      });

      $(".clients.owl-carousel")
         .imagesLoaded()
         .owlCarousel({
            nav: true,
            items: 2,
            loop: false,
            navText: false,
            margin: 10,
            autoHeight: false,
            responsive: {
               0: {
                  items: 2,
               },
               768: {
                  items: 4,
               },
               1200: {
                  items: 5,
               },
            },
         });
      return () => {};
   }, []);

   return (
      <section className={`animated-section section-active ${animated}`}>
         <div className="section-content">
            <Row className="flex-v-align">
               <Col sm={12} md={6} lg={6}>
                  <div className="home-text hp-left">
                     <div className="owl-carousel text-rotation">
                        <div className="item">
                           <h4>Web Developer</h4>
                        </div>
                        <div className="item">
                           <h4>Backend Developer</h4>
                        </div>
                        <div className="item">
                           <h4>Web Programmer</h4>
                        </div>
                     </div>
                     <h1>Safrizal</h1>
                     <p>Sekarang aktif bekerja disalah satu perguruan tinggi negeri Kota Banda Aceh</p>
                  </div>
               </Col>
               <Col sm={12} md={6} lg={6}>
                  <div className="home-photo">
                     <div className="hp-inner" style={{ backgroundImage: `url(img/main_photo_1.jpg)` }} />
                  </div>
               </Col>
            </Row>
            <div className="white-space-70" />
            {(() => {
               if (daftarTestimoni.length > 0) {
                  return (
                     <React.Fragment>
                        <div className="white-space-50" />
                        <Row>
                           <Col xs={12} sm={12}>
                              <div className="block-title">
                                 <h3>Testimoni</h3>
                              </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col xs={12} sm={12}>
                              <div className="testimonials owl-carousel">
                                 {daftarTestimoni.map((data, index) => {
                                    return (
                                       <div className="testimonial" key={index}>
                                          <div className="img">
                                             <img src={data.foto} alt={data.nama} loading="lazy" />
                                          </div>
                                          <div className="text">
                                             <p>{data.content}</p>
                                          </div>
                                          <div className="author-info">
                                             <h4 className="author">{data.nama}</h4>
                                             <h5 className="company">{data.lembaga}</h5>
                                             <div className="icon">
                                                <i className="fas fa-quote-right" />
                                             </div>
                                          </div>
                                       </div>
                                    );
                                 })}
                              </div>
                           </Col>
                        </Row>
                     </React.Fragment>
                  );
               }
            })()}
            {(() => {
               if (daftarKlien.length > 0) {
                  return (
                     <React.Fragment>
                        <div className="white-space-70" />
                        <Row>
                           <Col xs={12} sm={12}>
                              <div className="block-title">
                                 <h3>Klien</h3>
                              </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col xs={12} sm={12}>
                              <div className="clients owl-carousel">
                                 {daftarKlien.map((data, index) => {
                                    return (
                                       <div className="client-block" key={index}>
                                          <a href={data.website} target="_blank" title="Logo" rel="noreferrer">
                                             <img src={data.logo} alt={data.nama} loading="lazy" />
                                          </a>
                                       </div>
                                    );
                                 })}
                              </div>
                           </Col>
                        </Row>
                     </React.Fragment>
                  );
               }
            })()}
         </div>
      </section>
   );
};
export default AboutMe;
