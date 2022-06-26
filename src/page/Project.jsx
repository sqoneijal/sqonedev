import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = (props) => {
   const { animated, daftarProject } = props;

   useEffect(() => {
      let $ = window.$;

      function a() {
         let a = $(".portfolio-grid");
         if (a) {
            let a = $(".portfolio-grid");
            a.isotope({
               layoutMode: "masonry",
               itemSelector: "figure",
            });

            let t = $(".portfolio-filters");
            let o = t.find("a.filter");

            o.click(function () {
               let t = $(this);
               if (t.parent().hasClass("active")) return false;

               o.parent().removeClass("active");
               $(this).parent().addClass("active");

               let i = $(this).attr("data-filter");
               return a.isotope({ filter: i });
            });
         }
      }

      let s = $(".portfolio-grid");
      s.imagesLoaded(function () {
         a(this);
      });
      return () => {};
   }, []);

   return (
      <section className={`animated-section section-active ${animated}`}>
         <div className="section-content">
            <div className="page-title">
               <h2>Project</h2>
               <h4>Karya Terbaikku</h4>
            </div>
            <Row>
               <Col xs={12} sm={12}>
                  <div className="portfolio-content">
                     <ul className="grid-filters portfolio-filters">
                        <li className="active">
                           <a className="filter btn btn-sm btn-link" data-filter=".semuanya">
                              Semuanya
                           </a>
                        </li>
                        <li>
                           <a className="filter btn btn-sm btn-link" data-filter=".premium">
                              Premium
                           </a>
                        </li>
                        <li>
                           <a className="filter btn btn-sm btn-link" data-filter=".free">
                              Free
                           </a>
                        </li>
                     </ul>
                     <div className="portfolio-grid two-columns">
                        {daftarProject.map((data, index) => {
                           return (
                              <figure className={`item semuanya ${data.type}`} key={index}>
                                 <div className="portfolio-item-img">
                                    <img src={data.thumbnail} alt="SoundCloud Audio" title={data.nama} />
                                    <Link to={`/project/${data.slug}`} />
                                 </div>
                                 <h4 className="name">
                                    <strong>{data.nama}</strong> {data.keterangan}
                                 </h4>
                                 <span className="category">{data.type}</span>
                              </figure>
                           );
                        })}
                     </div>
                  </div>
               </Col>
            </Row>
         </div>
      </section>
   );
};
export default Project;
