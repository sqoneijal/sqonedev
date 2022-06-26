import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { animation_list } from "./Helpers";

const Preloader = React.lazy(() => import("./Preloader"));
const Header = React.lazy(() => import("./Header"));
const AboutMe = React.lazy(() => import("./page/AboutMe"));
const Keahlian = React.lazy(() => import("./page/Keahlian"));
const Project = React.lazy(() => import("./page/Project"));
const ProjectDetail = React.lazy(() => import("./page/ProjectDetail"));
const Contact = React.lazy(() => import("./page/Contact"));

const App = (props) => {
   const { daftarTestimoni, daftarKlien, keahlian, daftarProject } = props;

   // number
   const [randomNumber, setRandomNumber] = useState(0);

   // string
   const [sectionActive, setSectionActive] = useState("");

   useEffect(() => {
      setSectionActive(animation_list(randomNumber));
      return () => {};
   }, [randomNumber]);

   useEffect(() => {
      const $ = window.$;
      $(".menu-toggle").on("click", function () {
         $("#site_header").addClass("animate");
         $("#site_header").toggleClass("mobile-menu-hide");
         $(".menu-toggle").toggleClass("open");
      });

      $(".animated-section").each(() => {
         let e = $(this);
         e.data("originalClassList", e.attr("class"));
      });

      return () => {};
   }, []);

   return (
      <div className="page-content">
         <Suspense fallback={<Preloader />}>
            <BrowserRouter>
               <Header setRandomNumber={(e) => setRandomNumber(e)} />
               <div className="menu-toggle">
                  <span />
                  <span />
                  <span />
               </div>
               <div className="content-area">
                  <div className="animated-sections">
                     <Routes>
                        <Route path="/" element={<AboutMe daftarTestimoni={daftarTestimoni} daftarKlien={daftarKlien} animated={sectionActive} />} />
                        <Route path="/keahlian" element={<Keahlian animated={sectionActive} keahlian={keahlian} />} />
                        <Route path="/project" element={<Project animated={sectionActive} daftarProject={daftarProject} />} />
                        <Route path="/project/:slug" element={<ProjectDetail animated={sectionActive} daftarProject={daftarProject} />} />
                        <Route path="/kontak" element={<Contact animated={sectionActive} />} />
                     </Routes>
                  </div>
               </div>
            </BrowserRouter>
         </Suspense>
      </div>
   );
};
export default App;
