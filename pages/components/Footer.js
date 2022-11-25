
export default function Footer(){
    return(
      
      <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-left">
          Copyright &copy; IES IEDC
          {/* <!-- This script automatically adds the current year to your website footer--> */}
          {/* <!-- (credit: https://updateyourfooter.com/)--> */}
          <script>
            document.write(new Date().getFullYear());
          </script>
        </div>
        <div className="col-lg-4 my-3 my-lg-0">
          <a className="btn btn-dark btn-social mx-2" href="https://linkedin.com/company/ies-iedc-iic/"><i
              className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-dark btn-social mx-2" href="mailto:ies-iedc@googlegroups.com"><i className="fas fa-at"></i></a>
          <a className="btn btn-dark btn-social mx-2" href="https://youtube.com/channel/UCNh-Xb5EMzN7Ske-8ASdv4g"><i
              className="fab fa-youtube"></i></a>
        </div>
        <div className="col-lg-4 text-lg-right">
          {/* <a className="mr-3" href="#!">Privacy Policy</a>
                    <a href="#!">Terms of Use</a> */}
          With ❤️ on
          <a href="https://github.com/iesdevs/iedc/" className="iedc-footer-credit"><i className="fab fa-github"> </i></a>
          by and for IEDC
        </div>
      </div>
    </div>
  </footer>
      
    )
}