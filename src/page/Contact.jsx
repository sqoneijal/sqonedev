import React from "react";
import { Col, Row } from "react-bootstrap";

const Contact = (props) => {
   const { animated } = props;

   return (
      <section className={`animated-section section-active ${animated}`}>
         <div className="section-content">
            <div className="page-title">
               <h2>Kontak</h2>
               <h4>Hubungi kami</h4>
            </div>
            <Row>
               <Col xs={12} sm={4}>
                  <div className="lm-info-block gray-default">
                     <i className="lnr lnr-map-marker" />
                     <h4>Banda Aceh</h4>
                  </div>
               </Col>
               <Col xs={12} sm={4}>
                  <div className="lm-info-block gray-default">
                     <i className="lnr lnr-phone-handset" />
                     <h4>+62 812 6303 6196</h4>
                  </div>
               </Col>
               <Col xs={12} sm={4}>
                  <div className="lm-info-block gray-default">
                     <i className="lnr lnr-envelope" />
                     <h4>
                        <a href="mailto:sqone.developer@gmail.com">sqone.developer@gmail.com</a>
                     </h4>
                  </div>
               </Col>
            </Row>
         </div>
      </section>
   );
};
export default Contact;
