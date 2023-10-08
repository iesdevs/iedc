import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import '../styles/custom.css';
// import '../styles/main.css';
import principal from '../assets/img/team/current/principal.jpg';
import ideathon from '../assets/img/portfolio/ideathon.gif';
import craft from '../assets/img/portfolio/craft-allies.gif';
import hall_of_frame from '../assets/img/portfolio/hall-of-fame.gif';
import startup from '../assets/img/portfolio/startup.gif';
import voice from '../assets/img/portfolio/voice.gif';
import workshop from '../assets/img/portfolio/workshop.gif';
import iic_logo from '../assets/img/logos/iic-logo.svg';
import ksum_logo from '../assets/img/logos/ksum-logo.svg';
import iesce_logo from '../assets/img/logos/iesce-logo.svg';
import iedc_new_logo from '../assets/img/logos/iedc-new-logo.svg';
import Navbar from "./components/Navbar";
import MastHead from "./components/MastHead";
import About from "./components/About";
import BlockQuote from "./components/BlockQuote";
import PortfolioGrid from "./components/PortfolioGrid";
import TimeLine from "./components/TimeLine";
import Team from "./components/Team";
import Client from "./components/Client";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function Home(){
  useEffect(() => {
    console.log("env load",process.env.NEXT_PUBLIC_SERVER_URL)
  }, [])
  
  return(
    <div>
      <Navbar />
      <MastHead />
      <About />
      <BlockQuote />
      <PortfolioGrid />
      <TimeLine />
      <Team />
      <Client />
      <Contact />
      <Footer />
    
    
  </div>
  )
  
}


// export default function Home() {
  
//   return (
    
    
//     <>
//       {/* NAVIGATION */}

//       <nav
//         className="navbar navbar-expand-lg navbar-dark fixed-top"
//         id="mainNav"
//       >
//         <div className="container">
//           <a className="navbar-brand js-scroll-trigger" href="#page-top">
//             <img src="" alt="..." className="ies-iedc-logo-navbar" />
//             <strong>IES IEDC</strong>
//           </a>
//           <button
//             className="navbar-toggler navbar-toggler-right"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarResponsive"
//             aria-controls="navbarResponsive"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             Menu
//             <i className="fas fa-bars ml-1"></i>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarResponsive">
//             <ul className="navbar-nav text-uppercase ml-auto">
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="#about">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="#portfolio">
//                   Portfolio
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="#timeline">
//                   Timeline
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="#team">
//                   Team
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="#contact">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* NAVIGATION END */}

//       {/* masthead */}
//       <header className="masthead">
//         <div className="container">
//           <div className="masthead-subheading">
//             Welcome to our corner on the web
//           </div>
//           <div className="masthead-heading text-uppercase">
//             It's Nice To Meet You!
//           </div>
//           <a className="btn btn-light js-scroll-trigger" href="#about">
//             <i className="fas fa-chevron-down fa-lg"></i>
//           </a>
//         </div>
//       </header>
//       {/* endmasthead */}
//       {/* About */}
//       <section className="page-section" id="about">
//         <div className="container">
//           <div className="text-center">
//             <h2 className="section-heading text-uppercase">About</h2>
//             <h3 className="section-subheading text-muted">
//               Innovation &amp; Entrepreneurship Development Cell @ IESCE
//             </h3>
//           </div>
//           <div className="row m-5">
//             <div className="vsmn col text-center">
//               <h3>Vision</h3>
//               To inculcate an innovation culture among the students, to create
//               future entrepreneurs and position the institution, as a learning,
//               innovation and entrepreneurial hub.
//             </div>
//             <div className="col-sm-1 text-center">&nbsp;</div>
//             <div className="vsmn col text-center">
//               <h3>Mission</h3>
//               To establish an innovation platform, by introducing the
//               state-of-the-art technologies, through promoting innovation and
//               entrepreneurship.
//             </div>
//           </div>
//           <hr className="hr-text m-5 p-5" data-content="***" />
//           <div
//             className="
//             row
//             d-flex
//             align-items-center
//             justify-content-center
//             text-center
//           "
//           >
//             <div
//               id="btCarousel"
//               className="
//               carousel
//               slide
//               col-lg-4
//               text-center
//               d-flex
//               justify-content-center
//             "
//               data-ride="carousel"
//               data-interval="5000"
//             >
//               <div className="carousel-inner p-3">
//                 <ol className="carousel-indicators">
//                   <li
//                     data-target="#btCarousel"
//                     data-slide-to="0"
//                     className="active"
//                   ></li>
//                   <li data-target="#btCarousel" data-slide-to="1"></li>
//                   <li data-target="#btCarousel" data-slide-to="2"></li>
//                 </ol>
//                 <div className="carousel-item active">
//                   <div className="flip-card">
//                     <div id="card-inv" className="flip-card-inner">
//                       <div
//                         className="
//                         flip-card-front
//                         d-flex
//                         align-items-center
//                         justify-content-center
//                       "
//                       >
//                         <span className="fa-stack fa-2x">
//                           <i className="fas fa-circle fa-stack-2x text-primary"></i>
//                           <i className="fas fa-lightbulb fa-stack-1x fa-inverse"></i>
//                         </span>
//                         <h4 className="my-3 p-2">Innovation</h4>
//                       </div>
//                       <div
//                         className="
//                         flip-card-back
//                         d-flex
//                         align-items-center
//                         justify-content-center
//                       "
//                       >
//                         <div className="p-4 text-center">
//                           Innovation is the heartbeat of IES IEDC. We encourage
//                           each and every student, to come up with novel
//                           solutions to real world problems.
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="carousel-item">
//                   <div className="flip-card">
//                     <div id="card-dev" className="flip-card-inner">
//                       <div
//                         className="
//                         flip-card-front
//                         d-flex
//                         align-items-center
//                         justify-content-center
//                       "
//                       >
//                         <span className="fa-stack fa-2x">
//                           <i className="fas fa-circle fa-stack-2x text-primary"></i>
//                           <i className="fas fa-tools fa-stack-1x fa-inverse"></i>
//                         </span>
//                         <h4 className="my-3 p-2">Development</h4>
//                       </div>
//                       <div
//                         className="
//                         flip-card-back
//                         d-flex
//                         align-items-center
//                         justify-content-center
//                       "
//                       >
//                         <div className="p-4 text-center">
//                           Translating ideas from paper to ground is challenging.
//                           We provide an apt atmosphere to advance, channelize
//                           and develop students' ideas further.
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="carousel-item">
//                   <div className="flip-card">
//                     <div id="card-enp" className="flip-card-inner">
//                       <div
//                         className="
//                         flip-card-front
//                         d-flex
//                         align-items-center
//                         justify-content-center
//                       "
//                       >
//                         <span className="fa-stack fa-2x">
//                           <i className="fas fa-circle fa-stack-2x text-primary"></i>
//                           <i className="fas fa-handshake fa-stack-1x fa-inverse"></i>
//                         </span>
//                         <h4 className="my-3">Ventures</h4>
//                       </div>
//                       <div
//                         className="
//                         flip-card-back
//                         d-flex
//                         align-items-center
//                         justify-content-center
//                       "
//                       >
//                         <div className="p-4 text-center">
//                           With our platform, students have an upperhand on
//                           networking and marketing. Thus helping them to launch
//                           brilliant startups.
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <a
//                   className="carousel-control-prev"
//                   href="#btCarousel"
//                   role="button"
//                   data-slide="next"
//                 ></a>
//                 <a
//                   className="carousel-control-next"
//                   href="#btCarousel"
//                   role="button"
//                   data-slide="prev"
//                 ></a>
//               </div>
//             </div>

//             <div className="col-sm-1">
//               <div className="d-flex align-items-center justify-content-center">
//                 <div className="px-4 p-3"></div>
//               </div>
//             </div>

//             <div className="col-lg embed-responsive embed-responsive-16by9">
//               <iframe
//                 className="embed-responsive-item"
//                 frameborder="0"
//                 src="https://www.youtube.com/embed/4t_Vg3dzx4E"
//                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowfullscreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* endabout */}
//       {/* block quote */}
//       <section className="page-section bg-light" id="blockquote">
//         <div className="container">
//           <div className="media">
//             <div className="media-body ml-3">
//               <blockquote className="blockquote border-0 p-0">
//                 <div className="team-member">
//                   <div className="font-italic lead">
//                     <i className="fa fa-quote-left mr-3 text-success"></i>
//                     Innovation and Entrepreneurship are the two sides of a coin,
//                     that provides an impetus to the economy of a country and
//                     propels it, to the realm of development. These are
//                     progress's catalysts, the forces that transform society, for
//                     the better. <br />
//                     We are extremely proud to have established the IEDC in our
//                     college, to encourage Innovation and inculcate the spirit of
//                     startups, among our student fraternity. The Cell has been in
//                     the forefront to organize various events like: Ideathons,
//                     Hackathons, Motivational Talks, workshops and other related
//                     activities, which have triggered an array of innovations and
//                     product development. Our engineering students should look
//                     into the future, focus on issues that they are passionate
//                     about, reflect and make a change. <br />
//                     Through this centre, you, as aspiring entrepreneurs, may
//                     seize the moment and follow your visions, push the
//                     boundaries of innovation and assist in the creation of a new
//                     and better world. I would like to see each one of our
//                     students, involved in this tremendous opportunity, and make
//                     significant contributions, that will impact our future, and
//                     construct a positive collective destiny for us all.
//                   </div>
//                   {/* <img
//                     className="mx-auto rounded-circle"
//                     src={principal}
//                     alt="..."
//                   /> */}
//                   <Image
//                   className="mx-auto rounded-circle"
//                   src={principal}
//                   alt="..."
                 
//                 />
//                   <h4>Dr. S Brilly Sangeetha</h4>
//                   <div className="text-muted">Principal, IESCE</div>
//                   <a
//                     className="btn btn-dark btn-social mx-2"
//                     href="https://www.linkedin.com/in/dr-s-brilly-sangeetha-5b6a6a122/"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                   <a
//                     className="btn btn-dark btn-social mx-2"
//                     href="mailto:principal@iesce.info"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     <i className="fas fa-at"></i>
//                   </a>
//                   <a
//                     className="btn btn-dark btn-social mx-2"
//                     href="https://facebook.com/brilly.sangeetha"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                 </div>
//               </blockquote>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* block quote end */}

//       {/* portfolio grid */}
//       <section className="page-section" id="portfolio">
//         <div className="container">
//           <div className="text-center">
//             <h2 className="section-heading text-uppercase">Portfolio</h2>
//             <h3 className="section-subheading text-muted">
//               Library of awesomeness by IEDC
//             </h3>
//           </div>
//           <div className="row p-3">
//             <div className="col p-3">
//               <div className="portfolio-item-card">
//                 <div className="portfolio-item">
//                   <a
//                     className="portfolio-link"
//                     data-toggle="modal"
//                     href="#portfolioModal1"
//                   >
//                     <div className="portfolio-hover">
//                       <div className="portfolio-hover-content">
//                         <i className="fas fa-info-circle fa-3x"></i>
//                       </div>
//                     </div>
                    
//                     <Image
//                       className="portfolio-img img-fluid"
//                       src={ideathon}
//                       alt="..."
//                     />
//                   </a>
//                   <div className="portfolio-caption">
//                     <div className="portfolio-caption-heading">Ideathon</div>
//                     <div className="portfolio-caption-subheading text-muted">
//                       Pitching
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col p-3">
//               <div className="portfolio-item-card">
//                 <div className="portfolio-item">
//                   <a
//                     className="portfolio-link"
//                     data-toggle="modal"
//                     href="#portfolioModal2"
//                   >
//                     <div className="portfolio-hover">
//                       <div className="portfolio-hover-content">
//                         <i className="fas fa-info-circle fa-3x"></i>
//                       </div>
//                     </div>
//                     <Image
//                       className="portfolio-img img-fluid"
//                       src={startup}
//                       alt="..."
//                     />
//                   </a>
//                   <div className="portfolio-caption">
//                     <div className="portfolio-caption-heading">Startups</div>
//                     <div className="portfolio-caption-subheading text-muted">
//                       Ventures
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col p-3">
//               <div className="portfolio-item-card">
//                 <div className="portfolio-item">
//                   <a
//                     className="portfolio-link"
//                     data-toggle="modal"
//                     href="#portfolioModal3"
//                   >
//                     <div className="portfolio-hover">
//                       <div className="portfolio-hover-content">
//                         <i className="fas fa-info-circle fa-3x"></i>
//                       </div>
//                     </div>
//                     <Image
//                       className="portfolio-img img-fluid"
//                       src={workshop}
//                       alt="..."
//                     />
//                   </a>
//                   <div className="portfolio-caption">
//                     <div className="portfolio-caption-heading">Workshop</div>
//                     <div className="portfolio-caption-subheading text-muted">
//                       Hands-on
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row p-3">
//             <div className="col p-3">
//               <div className="portfolio-item-card">
//                 <div className="portfolio-item">
//                   <a
//                     className="portfolio-link"
//                     data-toggle="modal"
//                     href="#portfolioModal4"
//                   >
//                     <div className="portfolio-hover">
//                       <div className="portfolio-hover-content">
//                         <i className="fas fa-info-circle fa-3x"></i>
//                       </div>
//                     </div>
//                     <Image
//                       className="portfolio-img img-fluid"
//                       src={craft}
//                       alt="..."
//                     />
//                   </a>
//                   <div className="portfolio-caption">
//                     <div className="portfolio-caption-heading">Crafts Allies</div>
//                     <div className="portfolio-caption-subheading text-muted">
//                       Handiwork
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col p-3">
//               <div className="portfolio-item-card">
//                 <div className="portfolio-item">
//                   <a
//                     className="portfolio-link"
//                     data-toggle="modal"
//                     href="#portfolioModal5"
//                   >
//                     <div className="portfolio-hover">
//                       <div className="portfolio-hover-content">
//                         <i className="fas fa-info-circle fa-3x"></i>
//                       </div>
//                     </div>
//                     <Image
//                       className="portfolio-img img-fluid"
//                       src={voice}
//                       alt="..."
//                     />
//                   </a>
//                   <div className="portfolio-caption">
//                     <div className="portfolio-caption-heading">EI-Dex Talks</div>
//                     <div className="portfolio-caption-subheading text-muted">
//                       Sessions
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col p-3">
//               <div className="portfolio-item-card">
//                 <div className="portfolio-item">
//                   <a
//                     className="portfolio-link"
//                     data-toggle="modal"
//                     href="#portfolioModal6"
//                   >
//                     <div className="portfolio-hover">
//                       <div className="portfolio-hover-content">
//                         <i className="fas fa-info-circle fa-3x"></i>
//                       </div>
//                     </div>
//                     <Image
//                       className="portfolio-img img-fluid"
//                       src={hall_of_frame}
//                       alt="..."
//                     />
//                   </a>
//                   <div className="portfolio-caption">
//                     <div className="portfolio-caption-heading">Hall of Fame</div>
//                     <div className="portfolio-caption-subheading text-muted">
//                       Achievers
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="container my-4">
//             <hr className="hr-text m-5 p-5" data-content="***" />

//             <h3 className="text-center">Events</h3>

//             <div
//               id="multi-item-example"
//               className="carousel slide carousel-multi-item"
//               data-ride="carousel"
//             >
//               <ol className="carousel-indicators">
//                 <li
//                   data-target="#multi-item-example"
//                   data-slide-to="0"
//                   className="active"
//                 ></li>
//                 <li data-target="#multi-item-example" data-slide-to="1"></li>
//                 <li data-target="#multi-item-example" data-slide-to="2"></li>
//                 <li data-target="#multi-item-example" data-slide-to="3"></li>
//               </ol>

//               <div className="carousel-inner pb-5" role="listbox">
//                 <div className="carousel-item active">
//                   <div className="row p-3">
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">30</span>
//                           <br />
//                           <span className="event-card-date-month">Dec</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">Orientation</div>
//                           <h2 className="event-card-title">
//                             IEDC Orientation Program
//                           </h2>
//                           <div className="event-card-subtitle">
//                             Mr. Akhil Madhav
//                           </div>
//                           <div className="event-card-description">
//                             Building upon existing ideas, not only saves time,
//                             but accelerates phases of deployment, benefitting
//                             the growth of a startup.
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           35 Weeks ago • Video N/A
//                         </footer>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">09</span>
//                           <br />
//                           <span className="event-card-date-month">Jan</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">EI-Dex Thoughts</div>
//                           <h2 className="event-card-title">
//                             Brainstorming Session
//                           </h2>
//                           <div className="event-card-subtitle">IES IEDC</div>
//                           <div className="event-card-description">
//                             The enhancement of teamwork through developing
//                             innovative concepts is a highlight of brainstorming
//                             sessions.
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           34 Weeks ago • Video N/A
//                         </footer>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">13</span>
//                           <br />
//                           <span className="event-card-date-month">Jan</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">IEDC Summit</div>
//                           <h2 className="event-card-title">Inspire'20</h2>
//                           <div className="event-card-subtitle">KSUM IEDC</div>
//                           <div className="event-card-description">
//                             Sahrdaya IEDC hosted an IEDC Summit Precursor,
//                             organised by KSUM. The objective was to explore, the
//                             innovative and entrepreneural skills of students.
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           32 Weeks ago • Video N/A
//                         </footer>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="carousel-item">
//                   <div className="row p-3">
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">21</span>
//                           <br />
//                           <span className="event-card-date-month">Jan</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">EI-DeX Talks</div>
//                           <h2 className="event-card-title">Campus and Startups</h2>
//                           <div className="event-card-subtitle">
//                             Mr. Thompson Tom
//                           </div>
//                           <div className="event-card-description">
//                             Inspired to be aware about the hardships as there
//                             are no crooked measures towards the accomplishment
//                             of one's ideas.
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           32 Weeks ago •
//                           <a
//                             href="https://www.youtube.com/watch?v=WbWqBsy-8Po"
//                             rel="noopener noreferrer"
//                             target="_blank"
//                           >
//                             Watch here
//                           </a>
//                         </footer>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">28</span>
//                           <br />
//                           <span className="event-card-date-month">Jan</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">EI-DeX Talks</div>
//                           <h2 className="event-card-title">
//                             Startups Coping with the Pandemic
//                           </h2>
//                           <div className="event-card-subtitle">
//                             Mr. Nihal Pradeep
//                           </div>
//                           <div className="event-card-description">
//                             A story about a startup tossed about by the covid
//                             tide, struggled to survive, retain and it did reign.
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           31 Weeks ago •
//                           <a
//                             href="https://www.youtube.com/watch?v=aJ-r7rel7fg"
//                             rel="noopener noreferrer"
//                             target="_blank"
//                           >
//                             Watch here
//                           </a>
//                         </footer>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">29</span>
//                           <br />
//                           <span className="event-card-date-month">Jan</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">IEDC Summit</div>
//                           <h2 className="event-card-title">IEDC Virtual Summit</h2>
//                           <div className="event-card-subtitle">KSUM IEDC</div>
//                           <div className="event-card-description">
//                             The first virual summit, one of it's kind conducted
//                             by KSUM IEDC on VEMP. A grand event in every aspect.
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           31 Weeks ago • Video N/A
//                         </footer>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="carousel-item">
//                   <div className="row p-3">
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">09</span>
//                           <br />
//                           <span className="event-card-date-month">Feb</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">EI-DeX Talks</div>
//                           <h2 className="event-card-title">
//                             IP Management for Startups
//                           </h2>
//                           <div className="event-card-subtitle">Ms. Pooja Rawal</div>
//                           <div className="event-card-description">
//                             The What, Why and How of intellectual property
//                             rights was brought to light.
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           29 Weeks ago •
//                           <a
//                             href="https://www.youtube.com/watch?v=7plhOrhMca4"
//                             rel="noopener noreferrer"
//                             target="_blank"
//                           >
//                             Watch here
//                           </a>
//                         </footer>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">16</span>
//                           <br />
//                           <span className="event-card-date-month">May</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">Misc</div>
//                           <h2 className="event-card-title">
//                             Innovation and IPR practices
//                           </h2>
//                           <div className="event-card-subtitle">
//                             Mr. Ramesh Chandra Panda
//                           </div>
//                           <div className="event-card-description">
//                             Is safeguarding one's innovation worth it? Why, when
//                             and how to do it. Outlines the concepts of good IPR
//                             practices.
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           17 Weeks ago • Video N/A
//                         </footer>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">12</span>
//                           <br />
//                           <span className="event-card-date-month">Jun</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">EI-DeX Talks</div>
//                           <h2 className="event-card-title">
//                             Entrepreneural Journey
//                           </h2>
//                           <div className="event-card-subtitle">
//                             Ms. Anooja Bashir
//                           </div>
//                           <div className="event-card-description">
//                             Speaker shares her entrepreneural voyage, how she
//                             failed, what she learned and what kept her going.
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           11 Weeks ago •
//                           <a
//                             href="https://www.youtube.com/watch?v=X41Z5otQYoU"
//                             rel="noopener noreferrer"
//                             target="_blank"
//                           >
//                             Watch here
//                           </a>
//                         </footer>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="carousel-item">
//                   <div className="row p-3">
//                     <div className="col">
//                       <div className="event-card m-3">
//                         <header className="event-card-thumb">
//                           <a href="#">
//                             <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                           </a>
//                         </header>
//                         <div className="event-card-date">
//                           <span className="event-card-date-day">08</span>
//                           <br />
//                           <span className="event-card-date-month">Oct</span>
//                         </div>
//                         <div className="event-card-body">
//                           <div className="event-card-category">EI-DeX Talks</div>
//                           <h2 className="event-card-title">
//                             The Journey of TinkerHub
//                           </h2>
//                           <div className="event-card-subtitle">
//                             Mr. Moosa Mehar M P
//                           </div>
//                           <div className="event-card-description">
//                             Live now @{" "}
//                             <a href="https://youtu.be/tUlKFSkq0R0">
//                               https://youtu.be/tUlKFSkq0R0
//                             </a>
//                           </div>
//                         </div>
//                         <footer className="event-card-footer">
//                           Today •
//                           <a
//                             href="https://www.youtube.com/watch?v=tUlKFSkq0R0"
//                             rel="noopener noreferrer"
//                             target="_blank"
//                           >
//                             Watch here
//                           </a>
//                         </footer>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* portfolio grid */}
//       {/* Timeline */}
//       <section className="page-section bg-light" id="timeline">
//         <div className="container">
//           <div className="text-center">
//             <h2 className="section-heading text-uppercase">Timeline</h2>
//             <h3 className="section-subheading text-muted">
//               Join us in our incredible journey
//             </h3>
//           </div>

//           <div className="row text-justify p-3 m-5">
//             Innovation and Entrepreneurship Development Cell (IEDC) at IES
//             College of Engineering (IESCE), was established in 2016. IEDC is a
//             flagship initiative of Kerala StartUp Mission (KSUM), to promote
//             innovation and entrepreneurship among the students and academic
//             fraternity.
//           </div>

//           <div className="timeline container py-2 mt-4 mb-4">
//             <div className="row no-gutters">
//               <div className="col-sm"></div>
//               <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
//                 {/* <div className="row h-50">
//                             <div className="col">&nbsp;</div>
//                             <div className="col">&nbsp;</div>
//                         </div>  */}
//                 <h5 className="m-2">
//                   <span className="badge badge-pill badge-primary">&nbsp;</span>
//                 </h5>
//                 <div className="row h-50">
//                   <div className="col border-right">&nbsp;</div>
//                   <div className="col">&nbsp;</div>
//                 </div>
//               </div>
//               <div className="col-sm py-2">
//                 <h5 className="card-title text-lg-left">
//                   <a href="#">IEDC 2019-20 Team</a>
//                 </h5>
//               </div>
//             </div>

//             <div className="row no-gutters">
//               <div className="col-sm py-2">
//                 <h5 className="card-title text-lg-right">
//                   <a href="#">IEDC 2018-19 Team</a>
//                 </h5>
//               </div>
//               <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
//                 {/* <!-- <div className="row h-50">
//                             <div className="col border-right">&nbsp;</div>
//                             <div className="col">&nbsp;</div>
//                         </div> --> */}
//                 <h5 className="m-2">
//                   <span className="badge badge-pill badge-secondary">&nbsp;</span>
//                 </h5>
//                 <div className="row h-50">
//                   <div className="col border-right">&nbsp;</div>
//                   <div className="col">&nbsp;</div>
//                 </div>
//               </div>
//               <div className="col-sm"></div>
//             </div>
//             <div className="row no-gutters">
//               <div className="col-sm"></div>
//               <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
//                 {/* <!-- <div className="row h-50">
//                             <div className="col border-right">&nbsp;</div>
//                             <div className="col">&nbsp;</div>
//                         </div> --> */}
//                 <h5 className="m-2">
//                   <span className="badge badge-pill badge-secondary">&nbsp;</span>
//                 </h5>
//                 <div className="row h-50">
//                   <div className="col border-right">&nbsp;</div>
//                   <div className="col">&nbsp;</div>
//                 </div>
//               </div>
//               <div className="col-sm py-2">
//                 <h5 className="card-title text-lg-left">
//                   <a href="#">IEDC 2017-18 Team</a>
//                 </h5>
//               </div>
//             </div>
//             <div className="row no-gutters">
//               <div className="col-sm py-2">
//                 <h5 className="card-title text-lg-right">
//                   <a href="#">IEDC Beginnings</a>
//                   <div className="col">&nbsp;</div>
//                 </h5>
//               </div>
//               <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
//                 {/* <!-- <div className="row h-50">
//                             <div className="col border-right">&nbsp;</div>
//                             <div className="col">&nbsp;</div>
//                         </div> --> */}
//                 <h5 className="m-2">
//                   <span className="badge badge-pill badge-secondary">&nbsp;</span>
//                 </h5>
//                 <div className="row h-50">
//                   <div className="col">&nbsp;</div>
//                   <div className="col">&nbsp;</div>
//                 </div>
//               </div>
//               <div className="col-sm"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* endtimeline */}

//       {/* team */}
//       <section className="page-section" id="team">
//         <div className="container">
//           <div className="text-center">
//             <h2 className="section-heading text-uppercase">Our Humble Team</h2>
//             <h3 className="section-subheading text-muted">
//               Executive Committee 2020-21
//             </h3>
//           </div>

//           <div className="row justify-content-center">
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/ajeesh.jpg"
//                   alt="..."
//                 />
//                 <h4>Ajeesh S</h4>
//                 <div className="text-muted">Nodal Officer</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://linkedin.com/in/ajeesh-s-85519822/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="mailto:ajeesh.ec@gmail.com"
//                 >
//                   <i
//                     className="fas fa-at"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   ></i>
//                 </a>
//                 {/* <!--<a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>--> */}
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/prabhavathi.jpg"
//                   alt="..."
//                 />
//                 <h4>Prabhavathi P</h4>
//                 <div className="text-muted">Assistant Nodal Officer</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://linkedin.com/in/prabhavathi-prabhakaran-3b394a9b/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="mailto:prabhavathiprabhakaran@iesce.info"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fas fa-at"></i>
//                 </a>
//                 {/* <!--<a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>--> */}
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/jovial.jpg"
//                   alt="..."
//                 />
//                 <h4>Jovial Joe Jayarson</h4>
//                 <div className="text-muted">Chief Executive Officer</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://linkedin.com/in/joe733/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://github.com/joe733/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-github"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://twitter.com/_joe733"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/ajmal.jpg"
//                   alt="..."
//                 />

//                 <div className="card-info">
//                   <div className="card-info-icon">
//                     <i className="fas fa-angle-double-left"></i>
//                   </div>
//                   <h5 className="card-info-title">Operations Team</h5>
//                   <ul className="card-info-description list-group">
//                     <li className="list-group-item">Ajmal M Y</li>
//                     <li className="list-group-item">Anjali Jayadevan</li>
//                     <li className="list-group-item">Fathima Abdul Rahim</li>
//                     <li className="list-group-item">Shabeer Mohammed C T P</li>
//                   </ul>
//                 </div>
//                 <h4>Ajmal C Rasheed</h4>
//                 <div className="text-muted">Chief Operative Officer</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://linkedin.com/in/ajmal-c-rasheed/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://facebook.com/ajmal.rasheedcr"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://twitter.com/ajmalCRasheed1"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/alby.jpg"
//                   alt="..."
//                 />
//                 <div className="card-info">
//                   <div className="card-info-icon">
//                     <i className="fas fa-angle-double-left"></i>
//                   </div>
//                   <h5 className="card-info-title">Marketing Team</h5>
//                   <ul className="card-info-description list-group">
//                     <li className="list-group-item">Mohammed Shamil P B</li>
//                     <li className="list-group-item">Afsa Purveen</li>
//                     <li className="list-group-item">Alfin Joshy</li>
//                     <li className="list-group-item">Blessy Ninan</li>
//                     <li className="list-group-item">Shinassha V S</li>
//                   </ul>
//                 </div>
//                 <h4>Alby Alex</h4>
//                 <div className="text-muted">Chief Marketing Officer</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://instagram.com/alby.chayan"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="mailto:alexalby80@gmail.com/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fas fa-at"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://facebook.com/alby.alex.980"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/sreejesh.jpg"
//                   alt="..."
//                 />
//                 <div className="card-info">
//                   <div className="card-info-icon">
//                     <i className="fas fa-angle-double-left"></i>
//                   </div>
//                   <h5 className="card-info-title">Resource Team</h5>
//                   <ul className="card-info-description list-group">
//                     <li className="list-group-item">Benjamin Paul P</li>
//                     <li className="list-group-item">Dona Davis</li>
//                     <li className="list-group-item">Irene Shajan</li>
//                     <li className="list-group-item">Jesmiya Adheesh</li>
//                     <li className="list-group-item">Rosemol V M</li>
//                   </ul>
//                 </div>
//                 <h4>Sreejesh Ravindran</h4>
//                 <div className="text-muted">Chief Resource Officer</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://instagram.com/Mr__loozerr_/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="	
//                         mailto:sreejeshravindran523@gmail.com"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fas fa-at"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://facebook.com/sreejesh.ravindran.35"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/afshad.jpg"
//                   alt="..."
//                 />
//                 <div className="card-info">
//                   <div className="card-info-icon">
//                     <i className="fas fa-angle-double-left"></i>
//                   </div>
//                   <h5 className="card-info-title">Technical Team</h5>
//                   <ul className="card-info-description list-group">
//                     <li className="list-group-item">Ashin P M</li>
//                     <li className="list-group-item">Nafih Najeeb</li>
//                     <li className="list-group-item">Shaheen Fazim</li>
//                     <li className="list-group-item">Sreesankar K H</li>
//                     <li className="list-group-item">Adhithyan M R</li>
//                   </ul>
//                 </div>
//                 <h4>Afshad K A</h4>
//                 <div className="text-muted">Chief Technical Officer</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://linkedin.com/in/afshad-k-a-7465a4175/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://instagram.com/afshadka"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://twitter.com/afshadka"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/jithin.jpg"
//                   alt="..."
//                 />
//                 <div className="card-info">
//                   <div className="card-info-icon">
//                     <i className="fas fa-angle-double-left"></i>
//                   </div>
//                   <h5 className="card-info-title">Creative Team</h5>
//                   <ul className="card-info-description list-group">
//                     <li className="list-group-item">Sanal Simon</li>
//                     <li className="list-group-item">Devamruth A G</li>
//                     <li className="list-group-item">Fitha</li>
//                     <li className="list-group-item">Poojitha P R</li>
//                     <li className="list-group-item">Prince Paul P</li>
//                     <li className="list-group-item">Sreehari V R</li>
//                     <li className="list-group-item">Abhishek K R</li>
//                   </ul>
//                 </div>
//                 <h4>Jithin Assissi</h4>
//                 <div className="text-muted">Chief Creative Officer</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://linkedin.com/in/jithin-assissi-337916202/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://instagram.com/_.jith__in_"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://twitter.com/Jithin_Assissi"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/ameen.jpg"
//                   alt="..."
//                 />
//                 <div className="card-info">
//                   <div className="card-info-icon">
//                     <i className="fas fa-angle-double-left"></i>
//                   </div>
//                   <h5 className="card-info-title">Social Team</h5>
//                   <ul className="card-info-description list-group">
//                     <li className="list-group-item">Agnel Devis Velookaran</li>
//                     <li className="list-group-item">Hiba Sulficker</li>
//                     <li className="list-group-item">Mohammed Mishal</li>
//                     <li className="list-group-item">Rasha Jalaludeen</li>
//                   </ul>
//                 </div>
//                 <h4>Ameen Mushahid</h4>
//                 <div className="text-muted">Chief Social Officer</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://instagram.com/ameen5043/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="mailto:ameenmushahid1998@gmail.com"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fas fa-at"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://facebook.com/ameen.muhammed.98622"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="team-member">
//                 <img
//                   className="mx-auto rounded-circle"
//                   src="assets/img/team/current/akbar.jpg"
//                   alt="..."
//                 />
//                 <h4>Akbar Ali</h4>
//                 <div className="text-muted">Mentor/Guide (Alumni)</div>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://linkedin.com/in/mohamed-akbar-ali/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="mailto:akkuakbar97@gmail.com"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fas fa-at"></i>
//                 </a>
//                 <a
//                   className="btn btn-dark btn-social mx-2"
//                   href="https://instagram.com/akbar_ali_mohd"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* end team */}

//       {/* clients */}
//       <section className="page-section bg-light">
//         <div className="py-5">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-md-3 col-sm-6 my-3">
//                 <a
//                   href="https://mic.gov.in/innovation-council/iic"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Image
//                     className="img-fluid img-brand d-block mx-auto"
//                     src={iic_logo}
//                     alt="..."
//                   />
//                 </a>
//               </div>
//               <div className="col-md-3 col-sm-6 my-3">
//                 <a
//                   href="https://startupmission.kerala.gov.in/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Image
//                     className="img-fluid img-brand d-block mx-auto"
//                     src={ksum_logo}
//                     alt="..."
//                   />
//                 </a>
//               </div>
//               <div className="col-md-3 col-sm-6 my-3">
//                 <a
//                   href="https://sites.google.com/startupmission.in/iedc/home"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Image
//                     className="img-fluid img-brand d-block mx-auto"
//                     src={iedc_new_logo}
//                     alt="..."
//                   />
//                 </a>
//               </div>
//               <div className="col-md-3 col-sm-6 my-3">
//                 <a
//                   href="http://iesce.info/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Image
//                     className="img-fluid img-brand d-block mx-auto"
//                     src={iesce_logo}
//                     alt="..."
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* end client */}
//       {/* contacts */}
//       <section className="page-section" id="contact">
//     <div className="container">
//       <div className="text-center">
//         <h2 className="section-heading text-uppercase">Contact Us</h2>
//         <h3 className="section-subheading text-muted">
//           Our reply graph is left skewed on a response time axis!
//         </h3>
//       </div>
//       <form id="contactForm" name="sentMessage" action="https://formspree.io/f/xwkarlqb" method="POST">
//         <div className="row align-items-stretch mb-5">
//           <div className="col-md-6">
//             <div className="form-group">
//               <input className="form-control" id="full-name" name="name" type="text" placeholder="Your Name *"
//                 required="required" data-validation-required-message="Please enter your name." />
//               <div className="help-block text-danger"></div>
//             </div>
//             <div className="form-group">
//               <input className="form-control" id="email-address" name="email" type="email" placeholder="Your Email *"
//                 required="required" data-validation-required-message="Please enter your email address." />
//               <div className="help-block text-danger"></div>
//             </div>
//             <div className="form-group mb-md-0">
//               <input className="form-control" id="phone-number" name="telephone" type="tel" placeholder="Your Phone *"
//                 required="optional" data-validation-required-message="Please enter your phone number." />
//               <div className="help-block text-danger"></div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="form-group form-group-textarea mb-md-0">
//               <textarea className="form-control" id="text-message" name="message" placeholder="Your Message *"
//                 required="required" data-validation-required-message="Please enter a message."></textarea>
//               <div className="help-block text-danger"></div>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <div id="success"></div>
//           <input id="sendMessageButton" type="submit" className="btn btn-primary btn-xl text-uppercase"
//             value="Send Message" />
//         </div>
//       </form>
//       <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
//         <div className="toast-header">
//           <img src="..." className="rounded mr-2" alt="..." />
//           <strong className="mr-auto">Email Status</strong>
//           <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="toast-body">
//           <div className="text-center" id="form-status"></div>
//         </div>
//       </div>
//     </div>
//   </section>
//       {/* end contacts */}
//       {/* footer */}
//       <footer className="footer py-4">
//     <div className="container">
//       <div className="row align-items-center">
//         <div className="col-lg-4 text-lg-left">
//           Copyright &copy; IES IEDC
//           {/* <!-- This script automatically adds the current year to your website footer--> */}
//           {/* <!-- (credit: https://updateyourfooter.com/)--> */}
//           <script>
//             document.write(new Date().getFullYear());
//           </script>
//         </div>
//         <div className="col-lg-4 my-3 my-lg-0">
//           <a className="btn btn-dark btn-social mx-2" href="https://linkedin.com/company/ies-iedc-iic/"><i
//               className="fab fa-linkedin-in"></i></a>
//           <a className="btn btn-dark btn-social mx-2" href="mailto:ies-iedc@googlegroups.com"><i className="fas fa-at"></i></a>
//           <a className="btn btn-dark btn-social mx-2" href="https://youtube.com/channel/UCNh-Xb5EMzN7Ske-8ASdv4g"><i
//               className="fab fa-youtube"></i></a>
//         </div>
//         <div className="col-lg-4 text-lg-right">
//           {/* <!--<a className="mr-3" href="#!">Privacy Policy</a>
//                     <a href="#!">Terms of Use</a>--> */}
//           With ❤️ on
//           <a href="https://github.com/iesdevs/iedc/" className="iedc-footer-credit"><i className="fab fa-github"> </i></a>
//           by and for IEDC
//         </div>
//       </div>
//     </div>
//   </footer>
//       {/* footer */}

//     </>
//   );
// }
