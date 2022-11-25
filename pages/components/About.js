
export default function About(){
    return(
      
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
              Innovation &amp; Entrepreneurship Development Cell @ IESCE
            </h3>
          </div>
          <div className="row m-5">
            <div className="vsmn col text-center">
              <h3>Vision</h3>
              To inculcate an innovation culture among the students, to create
              future entrepreneurs and position the institution, as a learning,
              innovation and entrepreneurial hub.
            </div>
            <div className="col-sm-1 text-center">&nbsp;</div>
            <div className="vsmn col text-center">
              <h3>Mission</h3>
              To establish an innovation platform, by introducing the
              state-of-the-art technologies, through promoting innovation and
              entrepreneurship.
            </div>
          </div>
          <hr className="hr-text m-5 p-5" data-content="***" />
          <div
            className="
            row
            d-flex
            align-items-center
            justify-content-center
            text-center
          "
          >
            <div
              id="btCarousel"
              className="
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
              <div className="carousel-inner p-3">
                <ol className="carousel-indicators">
                  <li
                    data-target="#btCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#btCarousel" data-slide-to="1"></li>
                  <li data-target="#btCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-item active">
                  <div className="flip-card">
                    <div id="card-inv" className="flip-card-inner">
                      <div
                        className="
                        flip-card-front
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <span className="fa-stack fa-2x">
                          <i className="fas fa-circle fa-stack-2x text-primary"></i>
                          <i className="fas fa-lightbulb fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 p-2">Innovation</h4>
                      </div>
                      <div
                        className="
                        flip-card-back
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <div className="p-4 text-center">
                          Innovation is the heartbeat of IES IEDC. We encourage
                          each and every student, to come up with novel
                          solutions to real world problems.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="flip-card">
                    <div id="card-dev" className="flip-card-inner">
                      <div
                        className="
                        flip-card-front
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <span className="fa-stack fa-2x">
                          <i className="fas fa-circle fa-stack-2x text-primary"></i>
                          <i className="fas fa-tools fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 p-2">Development</h4>
                      </div>
                      <div
                        className="
                        flip-card-back
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <div className="p-4 text-center">
                          Translating ideas from paper to ground is challenging.
                          We provide an apt atmosphere to advance, channelize
                          and develop students' ideas further.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="flip-card">
                    <div id="card-enp" className="flip-card-inner">
                      <div
                        className="
                        flip-card-front
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <span className="fa-stack fa-2x">
                          <i className="fas fa-circle fa-stack-2x text-primary"></i>
                          <i className="fas fa-handshake fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Ventures</h4>
                      </div>
                      <div
                        className="
                        flip-card-back
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >
                        <div className="p-4 text-center">
                          With our platform, students have an upperhand on
                          networking and marketing. Thus helping them to launch
                          brilliant startups.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  className="carousel-control-prev"
                  href="#btCarousel"
                  role="button"
                  data-slide="next"
                ></a>
                <a
                  className="carousel-control-next"
                  href="#btCarousel"
                  role="button"
                  data-slide="prev"
                ></a>
              </div>
            </div>

            <div className="col-sm-1">
              <div className="d-flex align-items-center justify-content-center">
                <div className="px-4 p-3"></div>
              </div>
            </div>

            <div className="col-lg embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                frameborder="0"
                src="https://www.youtube.com/embed/4t_Vg3dzx4E"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
    )
}