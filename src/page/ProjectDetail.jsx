import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { decode } from "html-entities";
import HTMLReactParser from "html-react-parser";

const ProjectDetail = (props) => {
   const { animated, daftarProject } = props;
   const { slug } = useParams();

   // string
   const [deskripsi, setDeskripsi] = useState("");
   const [harga, setHarga] = useState("");
   const [nama, setNama] = useState("");
   const [thumbnail, setThumbnail] = useState("");
   const [type, setType] = useState("");

   useEffect(() => {
      if (slug) {
         const data = daftarProject.filter((e) => e.slug === slug);
         if (data.length > 0) {
            setDeskripsi(data[0].deskripsi);
            setHarga(data[0].harga);
            setNama(data[0].nama);
            setThumbnail(data[0].thumbnail);
            setType(data[0].type);
         }
      }
      return () => {};
   }, [slug, daftarProject]);

   return (
      <div className={`single-page-content ${animated}`}>
         <article className="post">
            <div className="post-thumbnail">
               <img src={thumbnail} alt={nama} loading="lazy" />
            </div>
            <div className="post-content">
               <header className="entry-header">
                  <div className="entry-meta entry-meta-top">
                     <span>{type}</span>
                  </div>
                  <h2 className="entry-title">{nama}</h2>
               </header>
               <div className="entry-content">
                  <Row>
                     <Col xs={12} sm={12}>
                        <div className="col-inner">{HTMLReactParser(decode(deskripsi))}</div>
                     </Col>
                  </Row>
               </div>
               <div className="entry-meta entry-meta-bottom">
                  <div className="date-author">Harga : {harga}</div>
               </div>
            </div>
         </article>
      </div>
   );
};
export default ProjectDetail;
