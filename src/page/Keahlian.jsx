import React from "react";
import { Col, Row } from "react-bootstrap";
import moment from "moment";

moment.locale("id");

const Keahlian = (props) => {
   const { animated, keahlian } = props;
   const { pendidikan, pengalaman, keterampilan_desain, coding_skill, sertifikat } = keahlian;

   return (
      <section className={`animated-section section-active ${animated}`}>
         <div className="section-content">
            <div className="page-title">
               <h2>Keahlian</h2>
               <h4>{new Date().getFullYear() - 2013} Tahun Pengalaman</h4>
            </div>
            <Row>
               <Col xs={12} sm={7}>
                  <div className="block-title">
                     <h3>Pendidikan Formal</h3>
                  </div>
                  <div className="timeline timeline-second-style clearfix">
                     {pendidikan.map((data, index) => {
                        return (
                           <div className="timeline-item clearfix" key={index}>
                              <div className="left-part">
                                 <h5 className="item-period">
                                    {data.start} - {data.end}
                                 </h5>
                                 <span className="item-company">{data.lokasi}</span>
                              </div>
                              <div className="divider" />
                              <div className="right-part">
                                 <h4 className="item-title">{data.sekolah}</h4>
                                 <p>{data.desc}</p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
                  <div className="white-space-50" />
                  <div className="block-title">
                     <h3>Pengalaman</h3>
                  </div>
                  <div className="timeline timeline-second-style clearfix">
                     {pengalaman.map((data, index) => {
                        return (
                           <div className="timeline-item clearfix" key={index}>
                              <div className="left-part">
                                 <h5 className="item-period">
                                    {data.start} - {data.end}
                                 </h5>
                                 <span className="item-company">{data.lokasi}</span>
                              </div>
                              <div className="divider" />
                              <div className="right-part">
                                 <h4 className="item-title">{data.judul}</h4>
                                 <p>{data.desc}</p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </Col>
               <Col xs={12} sm={5}>
                  <div className="block-title">
                     <h3>Keterampilan Desain</h3>
                  </div>
                  <div className="skills-info skills-second-style">
                     {keterampilan_desain.map((data, index) => {
                        return (
                           <React.Fragment key={index}>
                              <div className="skill clearfix">
                                 <h4>{data.keahlian}</h4>
                                 <div className="skill-value">{data.skill}</div>
                              </div>
                              <div className="skill-container skill-1">
                                 <div className="skill-percentage" style={{ width: data.skill }} />
                              </div>
                           </React.Fragment>
                        );
                     })}
                  </div>
                  <div className="white-space-10" />
                  <div className="block-title">
                     <h3>Keterampilan Pengkodean</h3>
                  </div>
                  <div className="skills-info skills-second-style">
                     {coding_skill.map((data, index) => {
                        return (
                           <React.Fragment key={index}>
                              <div className="skill clearfix">
                                 <h4>{data.keahlian}</h4>
                                 <div className="skill-value">{data.skill}</div>
                              </div>
                              <div className="skill-container skill-5">
                                 <div className="skill-percentage" style={{ width: data.skill }} />
                              </div>
                           </React.Fragment>
                        );
                     })}
                  </div>
                  <div className="white-space-10" />
               </Col>
            </Row>
            <div className="white-space-50" />
            <Row>
               <Col xs={12} sm={12}>
                  <div className="block-title">
                     <h3>Sertifikat</h3>
                  </div>
               </Col>
            </Row>
            <Row>
               {sertifikat.map((data, index) => {
                  return (
                     <Col xs={12} sm={6} key={index}>
                        <div className="certificate-item clearfix">
                           <div className="certi-logo">
                              <img src={data.logo} alt={data.nama} loading="lazy" />
                           </div>
                           <div className="certi-content">
                              <div className="certi-title">
                                 <h4>{data.nama}</h4>
                              </div>
                              <div className="certi-id">
                                 <span>{data.kota}</span>
                              </div>
                              <div className="certi-date">
                                 <span>
                                    {moment(data.start).format("DD MMMM YYYY")} - {moment(data.end).format("DD MMMM YYYY")}
                                 </span>
                              </div>
                              <div className="certi-company">
                                 <span>{data.lokasi}</span>
                              </div>
                           </div>
                        </div>
                     </Col>
                  );
               })}
            </Row>
         </div>
      </section>
   );
};
export default Keahlian;
