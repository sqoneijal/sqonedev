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

   // bool
   const [is_menu_open, setIs_menu_open] = useState(false);

   // number
   const [randomNumber, setRandomNumber] = useState(0);

   // string
   const [sectionActive, setSectionActive] = useState("");

   useEffect(() => {
      setSectionActive(animation_list(randomNumber));
      return () => {};
   }, [randomNumber]);

   const handleMenuToggle = () => {
      setIs_menu_open(!is_menu_open);
   };

   useEffect(() => {
      let menu_toggle = document.querySelector("div.menu-toggle");
      let site_header = document.querySelector("#site_header");

      const resize = () => {
         setIs_menu_open(false);
         let screen_width = window.screen.width;

         if (1025 > screen_width) {
            site_header.classList.add("mobile-menu-hide");
            menu_toggle.classList.remove("open");

            setTimeout(() => {
               site_header.classList.add("animate");
            }, 500);
         } else {
            site_header.classList.remove("animate");
         }
      };

      if (is_menu_open) {
         site_header.classList.add("animate");
         site_header.classList.remove("mobile-menu-hide");
         menu_toggle.classList.add("open");

         let menu_list = site_header.querySelector("ul.main-menu").children;
         for (let i = 0; i < menu_list.length; i++) {
            menu_list[i].querySelector("a").onclick = () => {
               resize();
            };
         }
      } else {
         site_header.classList.add("mobile-menu-hide");
         menu_toggle.classList.remove("open");
      }

      return () => {};
   }, [is_menu_open]);

   return (
      <div className="page-content">
         <Suspense fallback={<Preloader />}>
            <BrowserRouter>
               <Header setRandomNumber={(e) => setRandomNumber(e)} />
               <div className="menu-toggle" onClick={handleMenuToggle}>
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
