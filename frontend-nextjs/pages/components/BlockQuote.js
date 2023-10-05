import principal from "../../assets/img/team/current/principal.jpg";
import Image from "next/image";
export default function BlockQuote(){
    return(
       
      <section className="page-section bg-light" id="blockquote">
        <div className="container">
          <div className="media">
            <div className="media-body ml-3">
              <div className="blockquote border-0 p-0">
                <div className="team-member">
                  <div className="font-italic lead">
                    <i className="fa fa-quote-left mr-3 text-success"></i>
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
                  </div>
                 
                  <Image
                  className="mx-auto rounded-circle"
                  src={principal}
                  alt="..."
                 
                />
                  <h4>Dr. S Brilly Sangeetha</h4>
                  <div className="text-muted">Principal, IESCE</div>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="https://www.linkedin.com/in/dr-s-brilly-sangeetha-5b6a6a122/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="mailto:principal@iesce.info"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fas fa-at"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="https://facebook.com/brilly.sangeetha"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}