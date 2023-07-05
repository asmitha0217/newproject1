import React from "react";
import "./Footer-Page.css";
import { BsChevronRight } from 'react-icons/bs';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillChatSquareTextFill  } from "react-icons/bs";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsTwitter} from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
 import { BsTelegram} from "react-icons/bs";
 import { BsTvFill } from "react-icons/bs";




// import arrow from './svg/arrow.svg';
export default function FooterSection(){
    return(
        <>
        <div className="DivSection bg-black">
        <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3" >
        <h5 className="fw-bold text-light">Quick link</h5>
        <ul className="nav flex-column">
          <li className=" d-flex  flex-sm-row w-100 gap-2 nav-item mb-2"> <BsChevronRight className="icon-sec mt-1"  color="white" /><a href="#" className="list-sec nav-link p-0 text-light ">About Us</a></li>
          <li className=" d-flex  flex-sm-row w-100 gap-2 nav-item mb-2"> <BsChevronRight className="icon-sec mt-1 "  color="white" /><a href="#" className="list-sec nav-link p-0 text-light">Contact Us</a></li>
          <li className=" d-flex  flex-sm-row w-100 gap-2 nav-item mb-2"> <BsChevronRight className="icon-sec mt-1"  color="white" /><a href="#" className="list-sec nav-link p-0 text-light">Private Policy</a></li>
          <li className=" d-flex  flex-sm-row w-100 gap-2 nav-item mb-2"> <BsChevronRight className="icon-sec mt-1"  color="white" /><a href="#" className="list-sec nav-link p-0 text-light">Terms & Condition</a></li>
          <li className=" d-flex  flex-sm-row w-100 gap-2 nav-item mb-2"> <BsChevronRight className="icon-sec mt-1"  color="white" /><a href="#" className="list-sec nav-link p-0 text-light">FAQ'S & Help</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className="fw-bold text-light">Contact</h5>
        <ul className="nav flex-column">
          <li className=" d-flex  flex-sm-row w-100 gap-2 nav-item mb-2"><BsFillChatSquareTextFill className="mt-1"  color="white" /><a href="#" className="nav-link p-0 text-light">123 Street,New York,USA</a></li>
          <li className=" d-flex  flex-sm-row w-100 gap-2 nav-item mb-2 "><BsFillTelephoneFill className="mt-1"  color="white" /><a href="#" className="nav-link p-0 text-light">+012 345 67890</a></li>
          <li className="d-flex flex-sm-row w-100 gap-2 nav-item mb-2"><BsFillEnvelopeAtFill className="mt-1"  color="white" /><a href="#" className="nav-link p-0 text-light">info@example.com</a></li>
          {/* <li className="d-flex  flex-sm-row w-100 gap-2 nav-item mb-2">< BsTelegram className="list-sec1 mt-1"  color="white" /><BsTwitter className="list-sec1 mt-1"  color="white" /><BsTvFill className="list-sec1 mt-1"  color="white" /><BsLinkedin className="list-sec1 mt-1"  color="white" /><a href="#" className="nav-link p-0 btn btn-outline-light text-light"></a></li><br/><br/><br/> */}
          <div className="d-flex">
          <div class="follow-us">
          <BsTelegram className="list-sec1 mt-1"  color="white" />
          </div>
          <div class="follow-us">
          <BsTwitter className="list-sec1 mt-1"  color="white" />
          </div>
          <div class="follow-us">
          <BsLinkedin className="list-sec1 mt-1"  color="white" />
          </div>
          
          
          </div>
          {/* <div class="follow-us ">
          <BsTvFill className="list-sec1 mt-1"  color="white" />
          </div> */}
          
          {/* {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li> */}
        </ul> 
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className="fw-bold text-light">Gallery</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="list-sec2 nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="list-sec2 nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="list-sec2 nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="list-sec2 nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="list-sec2 nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5 className="fw-bold text-light" >Newsletter</h5>
          <p className="text-light">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
            <button className="btn btn-primary" type="button">SignUp</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className="text-light">© <u>Your Site Name ,</u> All Right Reserved. Designed By <u>HTML Codex</u><span className="span-sec justify-content-center"><br/> <br/>Distributed By<u> ThemeWagon</u></span></p><br/>
    
        <ul className="list-unstyled d-flex text-align-center justify-content-center">
        <li className="ms-3"><a className="first-list text-decoration-none text-light" href="#">Home</a></li>
        <div className="vr"></div>
        <li className="ms-3"><a className="first-list text-decoration-none text-light" href="#">Cookies</a></li>
        <li className="ms-3"><a className="first-list text-decoration-none text-light" href="#">Help</a></li>
        <li className="ms-3"><a className="text-decoration-none text-light" href="#">FQAs</a></li>
      </ul>  
    </div> 
  </footer>
</div>
</div>


        </>
    )
}