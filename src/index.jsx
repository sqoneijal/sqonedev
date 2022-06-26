import React, { Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { get, notification, error_code_http } from "./Helpers";
import Preloader from "./Preloader";
import "./App.css";

const App = React.lazy(() => import("./App"));

const $ = window.$;

const Index = () => {
   // array
   const [daftarTestimoni, setDaftarTestimoni] = useState([]);
   const [daftarKlien, setDaftarKlien] = useState([]);
   const [daftarProject, setDaftarProject] = useState([]);

   // object
   const [keahlian, setKeahlian] = useState({});

   const getKlien = () => {
      get("/klien.json")
         .then((res) => {
            const { data } = res;
            setDaftarKlien(data);
         })
         .catch((e) => {
            notification(false, error_code_http(e.response.status));
         });
   };

   const getTestimoni = () => {
      get("/testimoni.json")
         .then((res) => {
            const { data } = res;
            setDaftarTestimoni(data);
         })
         .catch((e) => {
            notification(false, error_code_http(e.response.status));
         });
   };

   const getKeahlian = () => {
      get("/keahlian.json")
         .then((res) => {
            const { data } = res;
            setKeahlian(data);
         })
         .catch((e) => {
            notification(false, error_code_http(e.response.status));
         });
   };

   const getProject = () => {
      get("/project.json")
         .then((res) => {
            const { data } = res;
            setDaftarProject(data);
         })
         .catch((e) => {
            notification(false, error_code_http(e.response.status));
         });
   };

   useEffect(() => {
      $(document).ready(() => {
         var o = 20,
            i = o / $(document).height(),
            n = o / $(document).width();

         $("body").on("mousemove", (a) => {
            var t = a.pageX - $(document).width() / 2,
               o = a.pageY - $(document).height() / 2,
               s = n * t * -1,
               m = i * o * -1,
               c = $(".lm-animated-bg");

            c.addClass("transition");
            c.css({
               "background-position": "calc( 50% + " + s + "px ) calc( 50% + " + m + "px )",
            });
            setTimeout(function () {
               c.removeClass("transition");
            }, 300);
         });
      });

      getTestimoni();
      getKlien();
      getKeahlian();
      getProject();
      return () => {};
   }, []);

   return (
      <React.StrictMode>
         <Suspense fallback={<Preloader />}>
            <App daftarTestimoni={daftarTestimoni} daftarKlien={daftarKlien} keahlian={keahlian} daftarProject={daftarProject} />
         </Suspense>
      </React.StrictMode>
   );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Index />);
