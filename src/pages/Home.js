import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div className="content">
          <div>
            <div className="about">
              <h1>About Us</h1>
            </div>

            <div className="image1"></div>
          </div>
        </div>
        
      </div>
      <section id="contact" class="contact">
            <div class="container">

                <div class="container">

                    <div class="section-header">
                        <h2>Connect With Us</h2>
                        <p>Connecting Companies and Clients to the World</p>
                    </div>

                </div>

                <div class="row gy-5 gx-lg-5">

                    <div class="col-lg-4">

                        <div class="info">
                            <h3>Get in touch</h3>
                            <p><strong>We Are Here for You. How Can We Help You?</strong></p>

                            <div class="info-item d-flex">
                                <i class="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h4>Location:</h4>
                                    <p>Riverside Park, Waiyaki Way, Nairobi</p>
                                </div>
                            </div>

                            <div class="info-item d-flex">
                                <i class="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h4>Email:</h4>
                                    <p>info@vertexhubgroup.com</p>
                                </div>
                            </div>

                            <div class="info-item d-flex">
                                <i class="bi bi-phone flex-shrink-0"></i>
                                <div>
                                    <h4>Call:</h4>
                                    <p>+254 700 354 050</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-8">
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Enter Your Full Name" required/>
                                </div>
                                <div class="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Enter Your Email Address" required/>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                            </div>
                            <div class="form-group mt-3">
                                <textarea class="form-control" name="message" placeholder="Enter Your Message" required></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63821.5606489778!2d36.7582356!3d-1.263951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b6e2de3ea7ed488!2sVertexhub%20Group%2C%20Limited!5e0!3m2!1sen!2ske!4v1651654836993!5m2!1sen!2ske" frameborder="0"
                        allowfullscreen></iframe>
                </div>

            </div>
        </section>
    </>
  );
};

export default Home;
