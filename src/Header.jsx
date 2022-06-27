import { Link } from "react-router-dom";

const Header = (props) => {
   const { setRandomNumber } = props;

   const randomNumber = () => {
      var randomNumber = Math.floor(Math.random() * (51 - 0 + 1)) + 0;
      setRandomNumber(parseInt(randomNumber.toFixed(0)));
   };

   return (
      <header id="site_header" className="header mobile-menu-hide">
         <div className="header-content">
            <div className="header-photo">
               <img src="/img/main_photo.jpg" alt="Safrizal" loading="lazy" />
            </div>
            <div className="header-titles">
               <h2>Safrizal</h2>
               <h4>Web Developer</h4>
            </div>
         </div>
         <ul className="main-menu">
            <li>
               <Link to="/" className="nav-anim" onClick={randomNumber}>
                  <span className="menu-icon lnr lnr-user" />
                  <span className="link-text">Tentang Saya</span>
               </Link>
            </li>
            <li>
               <Link to="/keahlian" className="nav-anim" onClick={randomNumber}>
                  <span className="menu-icon lnr lnr-graduation-hat" />
                  <span className="link-text">Keahlian</span>
               </Link>
            </li>
            <li>
               <Link to="/project" className="nav-anim" onClick={randomNumber}>
                  <span className="menu-icon lnr lnr-briefcase" />
                  <span className="link-text">Project</span>
               </Link>
            </li>
            <li>
               <Link to="/kontak" className="nav-anim" onClick={randomNumber}>
                  <span className="menu-icon lnr lnr-envelope" />
                  <span className="link-text">Kontak</span>
               </Link>
            </li>
         </ul>
         <div className="social-links">
            <ul>
               <li>
                  <a href="https://web.facebook.com/sqone.developer" target="_blank" rel="noreferrer">
                     <i className="fab fa-facebook-f" />
                  </a>
               </li>
            </ul>
         </div>
         <div className="info-list">
            <ul>
               <li>
                  <span className="value">+62 812 6303 6196</span>
               </li>
               <li>
                  <span className="value">sqone.developer@gmail.com</span>
               </li>
            </ul>
         </div>
         <div className="copyrights">© 2022 All rights reserved.</div>
      </header>
   );
};
export default Header;
