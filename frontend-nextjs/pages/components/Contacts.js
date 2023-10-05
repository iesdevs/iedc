 export default function Contact(){
    return(
        
      <section className="page-section" id="contact">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading text-muted">
          Our reply graph is left skewed on a response time axis!
        </h3>
      </div>
      <form id="contactForm" name="sentMessage" action="https://formspree.io/f/xwkarlqb" method="POST">
        <div className="row align-items-stretch mb-5">
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" id="full-name" name="name" type="text" placeholder="Your Name *"
                required="required" data-validation-required-message="Please enter your name." />
              <div className="help-block text-danger"></div>
            </div>
            <div className="form-group">
              <input className="form-control" id="email-address" name="email" type="email" placeholder="Your Email *"
                required="required" data-validation-required-message="Please enter your email address." />
              <div className="help-block text-danger"></div>
            </div>
            <div className="form-group mb-md-0">
              <input className="form-control" id="phone-number" name="telephone" type="tel" placeholder="Your Phone *"
                required="optional" data-validation-required-message="Please enter your phone number." />
              <div className="help-block text-danger"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group form-group-textarea mb-md-0">
              <textarea className="form-control" id="text-message" name="message" placeholder="Your Message *"
                required="required" data-validation-required-message="Please enter a message."></textarea>
              <div className="help-block text-danger"></div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div id="success"></div>
          <input id="sendMessageButton" type="submit" className="btn btn-primary btn-xl text-uppercase"
            value="Send Message" />
        </div>
      </form>
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="..." />
          <strong className="mr-auto">Email Status</strong>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">
          <div className="text-center" id="form-status"></div>
        </div>
      </div>
    </div>
  </section>
      
    )
 }