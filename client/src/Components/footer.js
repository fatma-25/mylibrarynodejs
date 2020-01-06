import React from 'react';
import './footer.css'


export default function Footerpage() {


    return (
        <div className="site-footer">
        <div style={{padding:"50px"}}>
          <div className="row">
          <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">My Books.com <i>READING WANTS TO BE SIMPLE </i> 
              Books serve as food for the mind by stimulating our imagination and creativity. However, buying a new book each time can empty your pocket fast. Thankfully we have lots of free books online, ready to be read or downloaded without costing you a dime plus you can even upload books as well.
         Find thousands of books to read online and download easy with just a botton click. Discover and read free all type of books , you need just To tape categories or the names of books you want to read and click search so you will find it...There are books for everyone.</p>
            </div>
  
      
  
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Our web site</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">Home</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">Signin</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">Signup</a></li>
                
              </ul>
            </div>
           
          </div>
          <hr/>
          <div style={{padding:"0px 50px"}}>
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
           <a href="#">Scanfcode</a>.
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
        </div>
        
         
        
  </div>


);
}