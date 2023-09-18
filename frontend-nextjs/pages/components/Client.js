import Image from "next/image";
import iic_logo from '../../assets/img/logos/iic-logo.svg';
import ksum_logo from '../../assets/img/logos/ksum-logo.svg';
import iesce_logo from '../../assets/img/logos/iesce-logo.svg';
import iedc_new_logo from '../../assets/img/logos/iedc-new-logo.svg';

export default function Client(){
    return(
       
      <section className="page-section bg-light">
        <div className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-6 my-3">
                <a
                  href="https://mic.gov.in/innovation-council/iic"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className="img-fluid img-brand d-block mx-auto"
                    src={iic_logo}
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a
                  href="https://startupmission.kerala.gov.in/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className="img-fluid img-brand d-block mx-auto"
                    src={ksum_logo}
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a
                  href="https://sites.google.com/startupmission.in/iedc/home"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className="img-fluid img-brand d-block mx-auto"
                    src={iedc_new_logo}
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a
                  href="http://iesce.info/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className="img-fluid img-brand d-block mx-auto"
                    src={iesce_logo}
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}