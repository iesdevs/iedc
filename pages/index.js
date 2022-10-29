import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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





export default function Home() {
  return (
    <>
      {/* NAVIGATION */}

      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src="" alt="..." className="ies-iedc-logo-navbar" />
            <strong>IES IEDC</strong>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ml-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#timeline">
                  Timeline
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* NAVIGATION END */}

      {/* masthead */}
      <header class="masthead">
        <div class="container">
          <div class="masthead-subheading">
            Welcome to our corner on the web
          </div>
          <div class="masthead-heading text-uppercase">
            It's Nice To Meet You!
          </div>
          <a class="btn btn-light js-scroll-trigger" href="#about">
            <i class="fas fa-chevron-down fa-lg"></i>
          </a>
        </div>
      </header>
      {/* endmasthead */}
      {/* About */}
      <section class="page-section" id="about">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">About</h2>
            <h3 class="section-subheading text-muted">
              Innovation &amp; Entrepreneurship Development Cell @ IESCE
            </h3>
          </div>
          <div class="row m-5">
            <div class="vsmn col text-center">
              <h3>Vision</h3>
              To inculcate an innovation culture among the students, to create
              future entrepreneurs and position the institution, as a learning,
              innovation and entrepreneurial hub.
            </div>
            <div class="col-sm-1 text-center">&nbsp;</div>
            <div class="vsmn col text-center">
              <h3>Mission</h3>
              To establish an innovation platform, by introducing the
              state-of-the-art technologies, through promoting innovation and
              entrepreneurship.
            </div>
          </div>
          <hr class="hr-text m-5 p-5" data-content="***" />
          <div
            class="
            row
            d-flex
            align-items-center
            justify-content-center
            text-center
          "
          >
            <div
              id="btCarousel"
              class="
              carousel
              slide
              col-lg-4
              text-center
              d-flex
              justify-content-center
            "
              data-ride="carousel"
              data-interval="5000"
            >
              <div class="carousel-inner p-3">
                <ol class="carousel-indicators">
                  <li
                    data-target="#btCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#btCarousel" data-slide-to="1"></li>
                  <li data-target="#btCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-item active">
                  <div class="flip-card">
                    <div id="card-inv" class="flip-card-inner">
                      <div
                        class="
                        flip-card-front
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <span class="fa-stack fa-2x">
                          <i class="fas fa-circle fa-stack-2x text-primary"></i>
                          <i class="fas fa-lightbulb fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3 p-2">Innovation</h4>
                      </div>
                      <div
                        class="
                        flip-card-back
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <p class="p-4 text-center">
                          Innovation is the heartbeat of IES IEDC. We encourage
                          each and every student, to come up with novel
                          solutions to real world problems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="flip-card">
                    <div id="card-dev" class="flip-card-inner">
                      <div
                        class="
                        flip-card-front
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <span class="fa-stack fa-2x">
                          <i class="fas fa-circle fa-stack-2x text-primary"></i>
                          <i class="fas fa-tools fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3 p-2">Development</h4>
                      </div>
                      <div
                        class="
                        flip-card-back
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <p class="p-4 text-center">
                          Translating ideas from paper to ground is challenging.
                          We provide an apt atmosphere to advance, channelize
                          and develop students' ideas further.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="flip-card">
                    <div id="card-enp" class="flip-card-inner">
                      <div
                        class="
                        flip-card-front
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <span class="fa-stack fa-2x">
                          <i class="fas fa-circle fa-stack-2x text-primary"></i>
                          <i class="fas fa-handshake fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Ventures</h4>
                      </div>
                      <div
                        class="
                        flip-card-back
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <p class="p-4 text-center">
                          With our platform, students have an upperhand on
                          networking and marketing. Thus helping them to launch
                          brilliant startups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#btCarousel"
                  role="button"
                  data-slide="next"
                ></a>
                <a
                  class="carousel-control-next"
                  href="#btCarousel"
                  role="button"
                  data-slide="prev"
                ></a>
              </div>
            </div>

            <div class="col-sm-1">
              <div class="d-flex align-items-center justify-content-center">
                <div class="px-4 p-3"></div>
              </div>
            </div>

            <div class="col-lg embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                frameborder="0"
                src="https://www.youtube.com/embed/4t_Vg3dzx4E"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* endabout */}
      {/* block quote */}
      <section class="page-section bg-light" id="blockquote">
        <div class="container">
          <div class="media">
            <div class="media-body ml-3">
              <blockquote class="blockquote border-0 p-0">
                <div class="team-member">
                  <p class="font-italic lead">
                    <i class="fa fa-quote-left mr-3 text-success"></i>
                    Innovation and Entrepreneurship are the two sides of a coin,
                    that provides an impetus to the economy of a country and
                    propels it, to the realm of development. These are
                    progress's catalysts, the forces that transform society, for
                    the better. <br />
                    We are extremely proud to have established the IEDC in our
                    college, to encourage Innovation and inculcate the spirit of
                    startups, among our student fraternity. The Cell has been in
                    the forefront to organize various events like: Ideathons,
                    Hackathons, Motivational Talks, workshops and other related
                    activities, which have triggered an array of innovations and
                    product development. Our engineering students should look
                    into the future, focus on issues that they are passionate
                    about, reflect and make a change. <br />
                    Through this centre, you, as aspiring entrepreneurs, may
                    seize the moment and follow your visions, push the
                    boundaries of innovation and assist in the creation of a new
                    and better world. I would like to see each one of our
                    students, involved in this tremendous opportunity, and make
                    significant contributions, that will impact our future, and
                    construct a positive collective destiny for us all.
                  </p>
                  {/* <img
                    class="mx-auto rounded-circle"
                    src={principal}
                    alt="..."
                  /> */}
                  <Image
                  className="mx-auto rounded-circle"
                  src={principal}
                  alt="..."
                 
                />
                  <h4>Dr. S Brilly Sangeetha</h4>
                  <p class="text-muted">Principal, IESCE</p>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="https://www.linkedin.com/in/dr-s-brilly-sangeetha-5b6a6a122/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="mailto:principal@iesce.info"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fas fa-at"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="https://facebook.com/brilly.sangeetha"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* block quote end */}

      {/* portfolio grid */}
      <section class="page-section" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h3 class="section-subheading text-muted">
              Library of awesomeness by IEDC
            </h3>
          </div>
          <div class="row p-3">
            <div class="col p-3">
              <div class="portfolio-item-card">
                <div class="portfolio-item">
                  <a
                    class="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal1"
                  >
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    
                    <Image
                      className="portfolio-img img-fluid"
                      src={ideathon}
                      alt="..."
                    />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Ideathon</div>
                    <div class="portfolio-caption-subheading text-muted">
                      Pitching
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col p-3">
              <div class="portfolio-item-card">
                <div class="portfolio-item">
                  <a
                    class="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal2"
                  >
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      class="portfolio-img img-fluid"
                      src={startup}
                      alt="..."
                    />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Startups</div>
                    <div class="portfolio-caption-subheading text-muted">
                      Ventures
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col p-3">
              <div class="portfolio-item-card">
                <div class="portfolio-item">
                  <a
                    class="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal3"
                  >
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      class="portfolio-img img-fluid"
                      src={workshop}
                      alt="..."
                    />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Workshop</div>
                    <div class="portfolio-caption-subheading text-muted">
                      Hands-on
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row p-3">
            <div class="col p-3">
              <div class="portfolio-item-card">
                <div class="portfolio-item">
                  <a
                    class="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal4"
                  >
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      class="portfolio-img img-fluid"
                      src={craft}
                      alt="..."
                    />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Crafts Allies</div>
                    <div class="portfolio-caption-subheading text-muted">
                      Handiwork
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col p-3">
              <div class="portfolio-item-card">
                <div class="portfolio-item">
                  <a
                    class="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal5"
                  >
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      class="portfolio-img img-fluid"
                      src={voice}
                      alt="..."
                    />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">EI-Dex Talks</div>
                    <div class="portfolio-caption-subheading text-muted">
                      Sessions
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col p-3">
              <div class="portfolio-item-card">
                <div class="portfolio-item">
                  <a
                    class="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal6"
                  >
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      class="portfolio-img img-fluid"
                      src={hall_of_frame}
                      alt="..."
                    />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Hall of Fame</div>
                    <div class="portfolio-caption-subheading text-muted">
                      Achievers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container my-4">
            <hr class="hr-text m-5 p-5" data-content="***" />

            <h3 class="text-center">Events</h3>

            <div
              id="multi-item-example"
              class="carousel slide carousel-multi-item"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#multi-item-example"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#multi-item-example" data-slide-to="1"></li>
                <li data-target="#multi-item-example" data-slide-to="2"></li>
                <li data-target="#multi-item-example" data-slide-to="3"></li>
              </ol>

              <div class="carousel-inner pb-5" role="listbox">
                <div class="carousel-item active">
                  <div class="row p-3">
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">30</span>
                          <br />
                          <span class="event-card-date-month">Dec</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">Orientation</div>
                          <h2 class="event-card-title">
                            IEDC Orientation Program
                          </h2>
                          <div class="event-card-subtitle">
                            Mr. Akhil Madhav
                          </div>
                          <p class="event-card-description">
                            Building upon existing ideas, not only saves time,
                            but accelerates phases of deployment, benefitting
                            the growth of a startup.
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          35 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">09</span>
                          <br />
                          <span class="event-card-date-month">Jan</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">EI-Dex Thoughts</div>
                          <h2 class="event-card-title">
                            Brainstorming Session
                          </h2>
                          <div class="event-card-subtitle">IES IEDC</div>
                          <p class="event-card-description">
                            The enhancement of teamwork through developing
                            innovative concepts is a highlight of brainstorming
                            sessions.
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          34 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">13</span>
                          <br />
                          <span class="event-card-date-month">Jan</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">IEDC Summit</div>
                          <h2 class="event-card-title">Inspire'20</h2>
                          <div class="event-card-subtitle">KSUM IEDC</div>
                          <p class="event-card-description">
                            Sahrdaya IEDC hosted an IEDC Summit Precursor,
                            organised by KSUM. The objective was to explore, the
                            innovative and entrepreneural skills of students.
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          32 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row p-3">
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">21</span>
                          <br />
                          <span class="event-card-date-month">Jan</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">EI-DeX Talks</div>
                          <h2 class="event-card-title">Campus and Startups</h2>
                          <div class="event-card-subtitle">
                            Mr. Thompson Tom
                          </div>
                          <p class="event-card-description">
                            Inspired to be aware about the hardships as there
                            are no crooked measures towards the accomplishment
                            of one's ideas.
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          32 Weeks ago •
                          <a
                            href="https://www.youtube.com/watch?v=WbWqBsy-8Po"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Watch here
                          </a>
                        </footer>
                      </div>
                    </div>
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">28</span>
                          <br />
                          <span class="event-card-date-month">Jan</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">EI-DeX Talks</div>
                          <h2 class="event-card-title">
                            Startups Coping with the Pandemic
                          </h2>
                          <div class="event-card-subtitle">
                            Mr. Nihal Pradeep
                          </div>
                          <p class="event-card-description">
                            A story about a startup tossed about by the covid
                            tide, struggled to survive, retain and it did reign.
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          31 Weeks ago •
                          <a
                            href="https://www.youtube.com/watch?v=aJ-r7rel7fg"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Watch here
                          </a>
                        </footer>
                      </div>
                    </div>
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">29</span>
                          <br />
                          <span class="event-card-date-month">Jan</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">IEDC Summit</div>
                          <h2 class="event-card-title">IEDC Virtual Summit</h2>
                          <div class="event-card-subtitle">KSUM IEDC</div>
                          <p class="event-card-description">
                            The first virual summit, one of it's kind conducted
                            by KSUM IEDC on VEMP. A grand event in every aspect.
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          31 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row p-3">
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">09</span>
                          <br />
                          <span class="event-card-date-month">Feb</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">EI-DeX Talks</div>
                          <h2 class="event-card-title">
                            IP Management for Startups
                          </h2>
                          <div class="event-card-subtitle">Ms. Pooja Rawal</div>
                          <p class="event-card-description">
                            The What, Why and How of intellectual property
                            rights was brought to light.
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          29 Weeks ago •
                          <a
                            href="https://www.youtube.com/watch?v=7plhOrhMca4"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Watch here
                          </a>
                        </footer>
                      </div>
                    </div>
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">16</span>
                          <br />
                          <span class="event-card-date-month">May</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">Misc</div>
                          <h2 class="event-card-title">
                            Innovation and IPR practices
                          </h2>
                          <div class="event-card-subtitle">
                            Mr. Ramesh Chandra Panda
                          </div>
                          <p class="event-card-description">
                            Is safeguarding one's innovation worth it? Why, when
                            and how to do it. Outlines the concepts of good IPR
                            practices.
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          17 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">12</span>
                          <br />
                          <span class="event-card-date-month">Jun</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">EI-DeX Talks</div>
                          <h2 class="event-card-title">
                            Entrepreneural Journey
                          </h2>
                          <div class="event-card-subtitle">
                            Ms. Anooja Bashir
                          </div>
                          <p class="event-card-description">
                            Speaker shares her entrepreneural voyage, how she
                            failed, what she learned and what kept her going.
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          11 Weeks ago •
                          <a
                            href="https://www.youtube.com/watch?v=X41Z5otQYoU"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Watch here
                          </a>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row p-3">
                    <div class="col">
                      <div class="event-card m-3">
                        <header class="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <date class="event-card-date">
                          <span class="event-card-date-day">08</span>
                          <br />
                          <span class="event-card-date-month">Oct</span>
                        </date>
                        <div class="event-card-body">
                          <div class="event-card-category">EI-DeX Talks</div>
                          <h2 class="event-card-title">
                            The Journey of TinkerHub
                          </h2>
                          <div class="event-card-subtitle">
                            Mr. Moosa Mehar M P
                          </div>
                          <p class="event-card-description">
                            Live now @{" "}
                            <a href="https://youtu.be/tUlKFSkq0R0">
                              https://youtu.be/tUlKFSkq0R0
                            </a>
                          </p>
                        </div>
                        <footer class="event-card-footer">
                          Today •
                          <a
                            href="https://www.youtube.com/watch?v=tUlKFSkq0R0"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Watch here
                          </a>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* portfolio grid */}
      {/* Timeline */}
      <section class="page-section bg-light" id="timeline">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Timeline</h2>
            <h3 class="section-subheading text-muted">
              Join us in our incredible journey
            </h3>
          </div>

          <div class="row text-justify p-3 m-5">
            Innovation and Entrepreneurship Development Cell (IEDC) at IES
            College of Engineering (IESCE), was established in 2016. IEDC is a
            flagship initiative of Kerala StartUp Mission (KSUM), to promote
            innovation and entrepreneurship among the students and academic
            fraternity.
          </div>

          <div class="timeline container py-2 mt-4 mb-4">
            <div class="row no-gutters">
              <div class="col-sm"></div>
              <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                {/* <div class="row h-50">
                            <div class="col">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>  */}
                <h5 class="m-2">
                  <span class="badge badge-pill badge-primary">&nbsp;</span>
                </h5>
                <div class="row h-50">
                  <div class="col border-right">&nbsp;</div>
                  <div class="col">&nbsp;</div>
                </div>
              </div>
              <div class="col-sm py-2">
                <h5 class="card-title text-lg-left">
                  <a href="#">IEDC 2019-20 Team</a>
                </h5>
              </div>
            </div>

            <div class="row no-gutters">
              <div class="col-sm py-2">
                <h5 class="card-title text-lg-right">
                  <a href="#">IEDC 2018-19 Team</a>
                </h5>
              </div>
              <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                {/* <!-- <div class="row h-50">
                            <div class="col border-right">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div> --> */}
                <h5 class="m-2">
                  <span class="badge badge-pill badge-secondary">&nbsp;</span>
                </h5>
                <div class="row h-50">
                  <div class="col border-right">&nbsp;</div>
                  <div class="col">&nbsp;</div>
                </div>
              </div>
              <div class="col-sm"></div>
            </div>
            <div class="row no-gutters">
              <div class="col-sm"></div>
              <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                {/* <!-- <div class="row h-50">
                            <div class="col border-right">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div> --> */}
                <h5 class="m-2">
                  <span class="badge badge-pill badge-secondary">&nbsp;</span>
                </h5>
                <div class="row h-50">
                  <div class="col border-right">&nbsp;</div>
                  <div class="col">&nbsp;</div>
                </div>
              </div>
              <div class="col-sm py-2">
                <h5 class="card-title text-lg-left">
                  <a href="#">IEDC 2017-18 Team</a>
                </h5>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-sm py-2">
                <h5 class="card-title text-lg-right">
                  <a href="#">IEDC Beginnings</a>
                  <div class="col">&nbsp;</div>
                </h5>
              </div>
              <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                {/* <!-- <div class="row h-50">
                            <div class="col border-right">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div> --> */}
                <h5 class="m-2">
                  <span class="badge badge-pill badge-secondary">&nbsp;</span>
                </h5>
                <div class="row h-50">
                  <div class="col">&nbsp;</div>
                  <div class="col">&nbsp;</div>
                </div>
              </div>
              <div class="col-sm"></div>
            </div>
          </div>
        </div>
      </section>
      {/* endtimeline */}

      {/* team */}
      <section class="page-section" id="team">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Our Humble Team</h2>
            <h3 class="section-subheading text-muted">
              Executive Committee 2020-21
            </h3>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/ajeesh.jpg"
                  alt="..."
                />
                <h4>Ajeesh S</h4>
                <p class="text-muted">Nodal Officer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://linkedin.com/in/ajeesh-s-85519822/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="mailto:ajeesh.ec@gmail.com"
                >
                  <i
                    class="fas fa-at"
                    rel="noopener noreferrer"
                    target="_blank"
                  ></i>
                </a>
                {/* <!--<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>--> */}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/prabhavathi.jpg"
                  alt="..."
                />
                <h4>Prabhavathi P</h4>
                <p class="text-muted">Assistant Nodal Officer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://linkedin.com/in/prabhavathi-prabhakaran-3b394a9b/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="mailto:prabhavathiprabhakaran@iesce.info"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fas fa-at"></i>
                </a>
                {/* <!--<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>--> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/jovial.jpg"
                  alt="..."
                />
                <h4>Jovial Joe Jayarson</h4>
                <p class="text-muted">Chief Executive Officer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://linkedin.com/in/joe733/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://github.com/joe733/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://twitter.com/_joe733"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/ajmal.jpg"
                  alt="..."
                />

                <div class="card-info">
                  <div class="card-info-icon">
                    <i class="fas fa-angle-double-left"></i>
                  </div>
                  <h5 class="card-info-title">Operations Team</h5>
                  <ul class="card-info-description list-group">
                    <li class="list-group-item">Ajmal M Y</li>
                    <li class="list-group-item">Anjali Jayadevan</li>
                    <li class="list-group-item">Fathima Abdul Rahim</li>
                    <li class="list-group-item">Shabeer Mohammed C T P</li>
                  </ul>
                </div>
                <h4>Ajmal C Rasheed</h4>
                <p class="text-muted">Chief Operative Officer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://linkedin.com/in/ajmal-c-rasheed/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://facebook.com/ajmal.rasheedcr"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://twitter.com/ajmalCRasheed1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/alby.jpg"
                  alt="..."
                />
                <div class="card-info">
                  <div class="card-info-icon">
                    <i class="fas fa-angle-double-left"></i>
                  </div>
                  <h5 class="card-info-title">Marketing Team</h5>
                  <ul class="card-info-description list-group">
                    <li class="list-group-item">Mohammed Shamil P B</li>
                    <li class="list-group-item">Afsa Purveen</li>
                    <li class="list-group-item">Alfin Joshy</li>
                    <li class="list-group-item">Blessy Ninan</li>
                    <li class="list-group-item">Shinassha V S</li>
                  </ul>
                </div>
                <h4>Alby Alex</h4>
                <p class="text-muted">Chief Marketing Officer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://instagram.com/alby.chayan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="mailto:alexalby80@gmail.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fas fa-at"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://facebook.com/alby.alex.980"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/sreejesh.jpg"
                  alt="..."
                />
                <div class="card-info">
                  <div class="card-info-icon">
                    <i class="fas fa-angle-double-left"></i>
                  </div>
                  <h5 class="card-info-title">Resource Team</h5>
                  <ul class="card-info-description list-group">
                    <li class="list-group-item">Benjamin Paul P</li>
                    <li class="list-group-item">Dona Davis</li>
                    <li class="list-group-item">Irene Shajan</li>
                    <li class="list-group-item">Jesmiya Adheesh</li>
                    <li class="list-group-item">Rosemol V M</li>
                  </ul>
                </div>
                <h4>Sreejesh Ravindran</h4>
                <p class="text-muted">Chief Resource Officer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://instagram.com/Mr__loozerr_/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="	
                        mailto:sreejeshravindran523@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fas fa-at"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://facebook.com/sreejesh.ravindran.35"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/afshad.jpg"
                  alt="..."
                />
                <div class="card-info">
                  <div class="card-info-icon">
                    <i class="fas fa-angle-double-left"></i>
                  </div>
                  <h5 class="card-info-title">Technical Team</h5>
                  <ul class="card-info-description list-group">
                    <li class="list-group-item">Ashin P M</li>
                    <li class="list-group-item">Nafih Najeeb</li>
                    <li class="list-group-item">Shaheen Fazim</li>
                    <li class="list-group-item">Sreesankar K H</li>
                    <li class="list-group-item">Adhithyan M R</li>
                  </ul>
                </div>
                <h4>Afshad K A</h4>
                <p class="text-muted">Chief Technical Officer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://linkedin.com/in/afshad-k-a-7465a4175/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://instagram.com/afshadka"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://twitter.com/afshadka"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/jithin.jpg"
                  alt="..."
                />
                <div class="card-info">
                  <div class="card-info-icon">
                    <i class="fas fa-angle-double-left"></i>
                  </div>
                  <h5 class="card-info-title">Creative Team</h5>
                  <ul class="card-info-description list-group">
                    <li class="list-group-item">Sanal Simon</li>
                    <li class="list-group-item">Devamruth A G</li>
                    <li class="list-group-item">Fitha</li>
                    <li class="list-group-item">Poojitha P R</li>
                    <li class="list-group-item">Prince Paul P</li>
                    <li class="list-group-item">Sreehari V R</li>
                    <li class="list-group-item">Abhishek K R</li>
                  </ul>
                </div>
                <h4>Jithin Assissi</h4>
                <p class="text-muted">Chief Creative Officer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://linkedin.com/in/jithin-assissi-337916202/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://instagram.com/_.jith__in_"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://twitter.com/Jithin_Assissi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/ameen.jpg"
                  alt="..."
                />
                <div class="card-info">
                  <div class="card-info-icon">
                    <i class="fas fa-angle-double-left"></i>
                  </div>
                  <h5 class="card-info-title">Social Team</h5>
                  <ul class="card-info-description list-group">
                    <li class="list-group-item">Agnel Devis Velookaran</li>
                    <li class="list-group-item">Hiba Sulficker</li>
                    <li class="list-group-item">Mohammed Mishal</li>
                    <li class="list-group-item">Rasha Jalaludeen</li>
                  </ul>
                </div>
                <h4>Ameen Mushahid</h4>
                <p class="text-muted">Chief Social Officer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://instagram.com/ameen5043/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="mailto:ameenmushahid1998@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fas fa-at"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://facebook.com/ameen.muhammed.98622"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src="assets/img/team/current/akbar.jpg"
                  alt="..."
                />
                <h4>Akbar Ali</h4>
                <p class="text-muted">Mentor/Guide (Alumni)</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://linkedin.com/in/mohamed-akbar-ali/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="mailto:akkuakbar97@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fas fa-at"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://instagram.com/akbar_ali_mohd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end team */}

      {/* clients */}
      <section class="page-section bg-light">
        <div class="py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-3 col-sm-6 my-3">
                <a
                  href="https://mic.gov.in/innovation-council/iic"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    class="img-fluid img-brand d-block mx-auto"
                    src={iic_logo}
                    alt="..."
                  />
                </a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a
                  href="https://startupmission.kerala.gov.in/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    class="img-fluid img-brand d-block mx-auto"
                    src={ksum_logo}
                    alt="..."
                  />
                </a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a
                  href="https://sites.google.com/startupmission.in/iedc/home"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    class="img-fluid img-brand d-block mx-auto"
                    src={iedc_new_logo}
                    alt="..."
                  />
                </a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a
                  href="http://iesce.info/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    class="img-fluid img-brand d-block mx-auto"
                    src={iesce_logo}
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end client */}
      {/* contacts */}
      <section class="page-section" id="contact">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Contact Us</h2>
        <h3 class="section-subheading text-muted">
          Our reply graph is left skewed on a response time axis!
        </h3>
      </div>
      <form id="contactForm" name="sentMessage" action="https://formspree.io/f/xwkarlqb" method="POST">
        <div class="row align-items-stretch mb-5">
          <div class="col-md-6">
            <div class="form-group">
              <input class="form-control" id="full-name" name="name" type="text" placeholder="Your Name *"
                required="required" data-validation-required-message="Please enter your name." />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <input class="form-control" id="email-address" name="email" type="email" placeholder="Your Email *"
                required="required" data-validation-required-message="Please enter your email address." />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group mb-md-0">
              <input class="form-control" id="phone-number" name="telephone" type="tel" placeholder="Your Phone *"
                required="optional" data-validation-required-message="Please enter your phone number." />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group form-group-textarea mb-md-0">
              <textarea class="form-control" id="text-message" name="message" placeholder="Your Message *"
                required="required" data-validation-required-message="Please enter a message."></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div id="success"></div>
          <input id="sendMessageButton" type="submit" class="btn btn-primary btn-xl text-uppercase"
            value="Send Message" />
        </div>
      </form>
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="..." class="rounded mr-2" alt="..." />
          <strong class="mr-auto">Email Status</strong>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          <p class="text-center" id="form-status"></p>
        </div>
      </div>
    </div>
  </section>
      {/* end contacts */}
      {/* footer */}
      <footer class="footer py-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-left">
          Copyright &copy; IES IEDC
          {/* <!-- This script automatically adds the current year to your website footer--> */}
          {/* <!-- (credit: https://updateyourfooter.com/)--> */}
          <script>
            document.write(new Date().getFullYear());
          </script>
        </div>
        <div class="col-lg-4 my-3 my-lg-0">
          <a class="btn btn-dark btn-social mx-2" href="https://linkedin.com/company/ies-iedc-iic/"><i
              class="fab fa-linkedin-in"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="mailto:ies-iedc@googlegroups.com"><i class="fas fa-at"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="https://youtube.com/channel/UCNh-Xb5EMzN7Ske-8ASdv4g"><i
              class="fab fa-youtube"></i></a>
        </div>
        <div class="col-lg-4 text-lg-right">
          {/* <!--<a class="mr-3" href="#!">Privacy Policy</a>
                    <a href="#!">Terms of Use</a>--> */}
          With ❤️ on
          <a href="https://github.com/iesdevs/iedc/" class="iedc-footer-credit"><i class="fab fa-github"> </i></a>
          by and for IEDC
        </div>
      </div>
    </div>
  </footer>
      {/* footer */}

    </>
  );
}
