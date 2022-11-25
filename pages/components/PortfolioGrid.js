import ideathon from '../../assets/img/portfolio/ideathon.gif';
import craft from '../../assets/img/portfolio/craft-allies.gif';
import hall_of_frame from '../../assets/img/portfolio/hall-of-fame.gif';
import startup from '../../assets/img/portfolio/startup.gif';
import voice from '../../assets/img/portfolio/voice.gif';
import workshop from '../../assets/img/portfolio/workshop.gif';
import Image from 'next/image';

 
 export default function PortfolioGrid(){

  const DATA = [
    {
      imgSrc : "https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      day:"30",
      Month:"Dec",
      category:"Orientation",
      title:"IEDC Orientation Program",
      subTitle:"Mr. Akhil Madhav",
      description:" Building upon existing ideas, not only saves time but accelerates phases of deployment, benefitting the growth of a startup.",
      date:"2021-12-30",
      dateFormated: new Date('2021-12-30'),
    },
    {
      imgSrc : "https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      day:"8",
      Month:"Oct",
      category:"EI-DEX TALKS",
      title:"The Journey of TinkerHub",
      subTitle:"Mr. Moosa Mehar M P",
      description:"Live now @ https://youtu.be/tUlKFSkq0R0",
      date:"2021-12-30",
      dateFormated: new Date('2021-12-30'),
    },
    {
      imgSrc : "https://iesdevs.github.io/iedc/images/poster.jpg",
      day:"4",
      Month:"Nov",
      category:"Orientation",
      title:"IEDC Orientation Program",
      subTitle:"Mr. Pranav P",
      description:"IEDC orientation program was conducted for S3 2021 batch students",
      date:"2022-11-04",
      dateFormated: new Date('2022-11-04'),
    },
    {
      imgSrc : "https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      day:"7 & 8",
      Month:"Nov",
      category:"EI-DEX START-UP BOOTCAMP'22 PROGRAM",
      title:"EI-DEX Start-Up Bootcamp",
      subTitle:"Mr. Vishnu Nagaraj",
      description:"EI- DEX Start-Up Bootcamp'22 will be conducted on 7th and 8th of November 2022 at IES College auditorium",
      date:"2022-11-07",
      dateFormated: new Date('2022-12-07'),
    },
    {
      imgSrc : "https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      day:"9",
      Month:"Jan",
      category:"EI-DEX THOUGHTS",
      title:"Brainstorming Session",
      subTitle:"IES IEDC",
      description:"The enhancement of teamwork through developing innovative concepts is a highlight of brainstorming sessions.",
      date:"2022-11-07",
      dateFormated: new Date('2022-12-07'),
    },
    {
      imgSrc : "https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      day:"9",
      Month:"Jan",
      category:"EI-DEX THOUGHTS",
      title:"Brainstorming Session",
      subTitle:"IES IEDC",
      description:"The enhancement of teamwork through developing innovative concepts is a highlight of brainstorming sessions.",
      date:"2022-11-07",
      dateFormated: new Date('2022-12-07'),
    },

  ]

    return(
      
      <section className="page-section" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Library of awesomeness by IEDC
            </h3>
          </div>
          <div className="row p-3">
            <div className="col p-3">
              <div className="portfolio-item-card">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal1"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    
                    <Image
                      className="portfolio-img img-fluid"
                      src={ideathon}
                      alt="..."
                    />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Ideathon</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Pitching
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-3">
              <div className="portfolio-item-card">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal2"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      className="portfolio-img img-fluid"
                      src={startup}
                      alt="..."
                    />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Startups</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Ventures
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-3">
              <div className="portfolio-item-card">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal3"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      className="portfolio-img img-fluid"
                      src={workshop}
                      alt="..."
                    />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Workshop</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Hands-on
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-3">
            <div className="col p-3">
              <div className="portfolio-item-card">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal4"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      className="portfolio-img img-fluid"
                      src={craft}
                      alt="..."
                    />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Crafts Allies</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Handiwork
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-3">
              <div className="portfolio-item-card">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal5"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      className="portfolio-img img-fluid"
                      src={voice}
                      alt="..."
                    />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">EI-Dex Talks</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Sessions
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-3">
              <div className="portfolio-item-card">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal6"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-info-circle fa-3x"></i>
                      </div>
                    </div>
                    <Image
                      className="portfolio-img img-fluid"
                      src={hall_of_frame}
                      alt="..."
                    />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Hall of Fame</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Achievers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-4">
            <hr className="hr-text m-5 p-5" data-content="***" />

            <h3 className="text-center">Events</h3>

            <div
              id="multi-item-example"
              className="carousel slide carousel-multi-item"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#multi-item-example"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#multi-item-example" data-slide-to="1"></li>
                <li data-target="#multi-item-example" data-slide-to="2"></li>
                <li data-target="#multi-item-example" data-slide-to="3"></li>
              </ol>



              <div className="carousel-inner pb-5" role="listbox">

              <div className="carousel-item active">
                  <div className="row p-3">

                    { DATA.map((item,index)=>{
                      console.log(item.dateFormated)
                      return(
                        <div className="col" key={index}>
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">{item.day}</span>
                          <br />
                          <span className="event-card-date-month">{item.Month}</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">{item.category}</div>
                          <h2 className="event-card-title">
                            {item.title}
                          </h2>
                          <div className="event-card-subtitle">
                            {item.subTitle}
                          </div>
                          <div className="event-card-description">
                            {item.description}
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          
                        </footer>
                      </div>
                    </div>
                      )
                    })
                  
                    }
{/* 
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">30</span>
                          <br />
                          <span className="event-card-date-month">Dec</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">Orientation</div>
                          <h2 className="event-card-title">
                            IEDC Orientation Program
                          </h2>
                          <div className="event-card-subtitle">
                            Mr. Akhil Madhav
                          </div>
                          <div className="event-card-description">
                            Building upon existing ideas, not only saves time,
                            but accelerates phases of deployment, benefitting
                            the growth of a startup.
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          35 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">09</span>
                          <br />
                          <span className="event-card-date-month">Jan</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">EI-Dex Thoughts</div>
                          <h2 className="event-card-title">
                            Brainstorming Session
                          </h2>
                          <div className="event-card-subtitle">IES IEDC</div>
                          <div className="event-card-description">
                            The enhancement of teamwork through developing
                            innovative concepts is a highlight of brainstorming
                            sessions.
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          34 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">13</span>
                          <br />
                          <span className="event-card-date-month">Jan</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">IEDC Summit</div>
                          <h2 className="event-card-title">Inspire'20</h2>
                          <div className="event-card-subtitle">KSUM IEDC</div>
                          <div className="event-card-description">
                            Sahrdaya IEDC hosted an IEDC Summit Precursor,
                            organised by KSUM. The objective was to explore, the
                            innovative and entrepreneural skills of students.
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          32 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>

                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">13</span>
                          <br />
                          <span className="event-card-date-month">Jan</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">IEDC Summit</div>
                          <h2 className="event-card-title">Inspire'20</h2>
                          <div className="event-card-subtitle">KSUM IEDC</div>
                          <div className="event-card-description">
                            Sahrdaya IEDC hosted an IEDC Summit Precursor,
                            organised by KSUM. The objective was to explore, the
                            innovative and entrepreneural skills of students.
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          32 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div> */}

                  </div>
                </div>
              </div>

              {/* <div className="carousel-inner pb-5" role="listbox">

                <div className="carousel-item active">
                  <div className="row p-3">

                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">30</span>
                          <br />
                          <span className="event-card-date-month">Dec</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">Orientation</div>
                          <h2 className="event-card-title">
                            IEDC Orientation Program
                          </h2>
                          <div className="event-card-subtitle">
                            Mr. Akhil Madhav
                          </div>
                          <div className="event-card-description">
                            Building upon existing ideas, not only saves time,
                            but accelerates phases of deployment, benefitting
                            the growth of a startup.
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          35 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">09</span>
                          <br />
                          <span className="event-card-date-month">Jan</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">EI-Dex Thoughts</div>
                          <h2 className="event-card-title">
                            Brainstorming Session
                          </h2>
                          <div className="event-card-subtitle">IES IEDC</div>
                          <div className="event-card-description">
                            The enhancement of teamwork through developing
                            innovative concepts is a highlight of brainstorming
                            sessions.
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          34 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">13</span>
                          <br />
                          <span className="event-card-date-month">Jan</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">IEDC Summit</div>
                          <h2 className="event-card-title">Inspire'20</h2>
                          <div className="event-card-subtitle">KSUM IEDC</div>
                          <div className="event-card-description">
                            Sahrdaya IEDC hosted an IEDC Summit Precursor,
                            organised by KSUM. The objective was to explore, the
                            innovative and entrepreneural skills of students.
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          32 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row p-3">
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">21</span>
                          <br />
                          <span className="event-card-date-month">Jan</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">EI-DeX Talks</div>
                          <h2 className="event-card-title">Campus and Startups</h2>
                          <div className="event-card-subtitle">
                            Mr. Thompson Tom
                          </div>
                          <div className="event-card-description">
                            Inspired to be aware about the hardships as there
                            are no crooked measures towards the accomplishment
                            of one's ideas.
                          </div>
                        </div>
                        <footer className="event-card-footer">
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
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">28</span>
                          <br />
                          <span className="event-card-date-month">Jan</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">EI-DeX Talks</div>
                          <h2 className="event-card-title">
                            Startups Coping with the Pandemic
                          </h2>
                          <div className="event-card-subtitle">
                            Mr. Nihal Pradeep
                          </div>
                          <div className="event-card-description">
                            A story about a startup tossed about by the covid
                            tide, struggled to survive, retain and it did reign.
                          </div>
                        </div>
                        <footer className="event-card-footer">
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
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">29</span>
                          <br />
                          <span className="event-card-date-month">Jan</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">IEDC Summit</div>
                          <h2 className="event-card-title">IEDC Virtual Summit</h2>
                          <div className="event-card-subtitle">KSUM IEDC</div>
                          <div className="event-card-description">
                            The first virual summit, one of it's kind conducted
                            by KSUM IEDC on VEMP. A grand event in every aspect.
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          31 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row p-3">
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">09</span>
                          <br />
                          <span className="event-card-date-month">Feb</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">EI-DeX Talks</div>
                          <h2 className="event-card-title">
                            IP Management for Startups
                          </h2>
                          <div className="event-card-subtitle">Ms. Pooja Rawal</div>
                          <div className="event-card-description">
                            The What, Why and How of intellectual property
                            rights was brought to light.
                          </div>
                        </div>
                        <footer className="event-card-footer">
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
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">16</span>
                          <br />
                          <span className="event-card-date-month">May</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">Misc</div>
                          <h2 className="event-card-title">
                            Innovation and IPR practices
                          </h2>
                          <div className="event-card-subtitle">
                            Mr. Ramesh Chandra Panda
                          </div>
                          <div className="event-card-description">
                            Is safeguarding one's innovation worth it? Why, when
                            and how to do it. Outlines the concepts of good IPR
                            practices.
                          </div>
                        </div>
                        <footer className="event-card-footer">
                          17 Weeks ago • Video N/A
                        </footer>
                      </div>
                    </div>
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">12</span>
                          <br />
                          <span className="event-card-date-month">Jun</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">EI-DeX Talks</div>
                          <h2 className="event-card-title">
                            Entrepreneural Journey
                          </h2>
                          <div className="event-card-subtitle">
                            Ms. Anooja Bashir
                          </div>
                          <div className="event-card-description">
                            Speaker shares her entrepreneural voyage, how she
                            failed, what she learned and what kept her going.
                          </div>
                        </div>
                        <footer className="event-card-footer">
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

                <div className="carousel-item">
                  <div className="row p-3">
                    <div className="col">
                      <div className="event-card m-3">
                        <header className="event-card-thumb">
                          <a href="#">
                            <img src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1pY3JvcGhvbmVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                          </a>
                        </header>
                        <div className="event-card-date">
                          <span className="event-card-date-day">08</span>
                          <br />
                          <span className="event-card-date-month">Oct</span>
                        </div>
                        <div className="event-card-body">
                          <div className="event-card-category">EI-DeX Talks</div>
                          <h2 className="event-card-title">
                            The Journey of TinkerHub
                          </h2>
                          <div className="event-card-subtitle">
                            Mr. Moosa Mehar M P
                          </div>
                          <div className="event-card-description">
                            Live now @{" "}
                            <a href="https://youtu.be/tUlKFSkq0R0">
                              https://youtu.be/tUlKFSkq0R0
                            </a>
                          </div>
                        </div>
                        <footer className="event-card-footer">
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
              </div>*/}





            </div>
          </div>
        </div>
      </section>
      
    )
 }