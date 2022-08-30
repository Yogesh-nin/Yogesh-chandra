import React, { useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.css";
import TrackVisibility from "react-on-screen";
import ToolTips from "../ToolTips";

const ContactForm = () => {
  const initialState = { name: "", email: "", subject: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [buttonText, setButtonText] = useState("Send Message!");
  const inValidFields= {email: false, message: false}
  const [errorEmail, setErrorEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  function resetForm() {
    setFormData(initialState);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(formData);
      const isValid = formValidation();
      if(isValid === true){
        setButtonText("Sending...");
        let response = await fetch("https://yogesh-chandra-portfolio.herokuapp.com/send", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json;charset=utf-8",
          },
          body: JSON.stringify(formData),
        });

        resetForm();
        setButtonText("Send Message!");
      }
      else{
        if(inValidFields.email == true) setErrorEmail("warning")
        if(inValidFields.message == true) setErrorMessage("warning")
        
      }
      
  };

  const formValidation = () =>{
    if(formData.email == "") inValidFields.email = true
    if(formData.message == "") inValidFields.message = true

    if(inValidFields.email === true || inValidFields.message === true) return false
    else return true;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorEmail("")
    setErrorMessage("")
  };

  return (
    <Container className="section-division" style={{overflow:'hidden', position:'relative'}}>
      <div className='big-fake'>@</div>
    <span className="tags"> &lt;h2&gt;</span>
      <TrackVisibility once>
        {({ isVisible }) => (
          <h2
            aria-labelledby="Contact me"
            className={`section-heading txt-blue ${
              isVisible ? "text-animation" : ""
            }`}
          >
            <span className="blast">C</span>
            <span className="blast">o</span>
            <span className="blast">n</span>
            <span className="blast">t</span>
            <span className="blast">a</span>
            <span className="blast">c</span>
            <span className="blast">t&nbsp;</span>
            <span className="blast">M</span>
            <span className="blast">e</span>
          </h2>
        )}
      </TrackVisibility>
      <span className="tags"> &lt;/h2&gt;</span>

      <Row className="d-flex justify-content-around">
        <Col md={6} lg={5} className="d-flex align-items-center my-2">
          <div>
            <span className="tags"> &lt;h3&gt;</span>

            <h3>Don't be shy</h3>
            <span className="tags"> &lt;/h3&gt; <br/></span>

            <p>
            <span className="tags"> &lt;p&gt;</span>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
              <span className="tags"> &lt;/p&gt;</span>
            </p>

            <div>
              <div className="d-flex my-2">
                {/* icon */}
                <div className="d-flex">
                  <span className="upper-icon d-flex align-items-center">
                    <i class="fa-solid fa-envelope-open fs-3"></i>
                  </span>
                </div>
                {/* subject */}
                <div style={{ width: "300px" }}>
                  <div className="upper-icon-title">Mail</div>
                  <div className="upper-icon-content">
                    002chandra.yogesh@gmail.com
                  </div>
                </div>
              </div>

              {/* Telephone */}
              <div className="d-flex  my-2">
                {/* icon */}
                <div className="d-flex align-items-center">
                  <span className="upper-icon d-flex align-items-center">
                    <i class="fa-solid fa-square-phone fs-2"></i>
                  </span>
                </div>
                {/* subject */}
                <div style={{ width: "300px" }}>
                  <div className="upper-icon-title">Telephone</div>
                  <div className="upper-icon-content">+91 9310416185</div>
                </div>
              </div>
            </div>

            <div className="contact-social-links d-flex">
              <ul className="social-links text-center">
                <li>
                  <ToolTips text='follow on github' position='bottom'>
                    <a
                      href="http://github.com/Yogesh-nin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </ToolTips>
                  
                </li>
                <li>
                <ToolTips text='connect on Linkedin' position='bottom'>
                  <a href="https://www.linkedin.com/in/yogesh-chandra-sharma-59147b201/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  </ToolTips>
                </li>
                <li>
                <ToolTips text='follow me on instagram' position='bottom'>
                  <a href="https://www.instagram.com/chandra_yogesh.0_0/?hl=en" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  </ToolTips>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col className="my-2" md={6} lg={6}>
          <Form className='' onSubmit={handleSubmit}>
            <TrackVisibility once>
              {({isvisible})=>(
                  <Row className={`${isvisible ? 'animated animatedFadeInUp fadeInUp' : ''}`}>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control
                        className={`input-field`}
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        className={`input-field ${errorEmail}`}
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        
                      />
                    </Form.Group>
                  </Col>
                </Row>
              )}
            </TrackVisibility>
            
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    className={`input-field`}
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  className={`input-field ${errorMessage}`}
                  as="textarea"
                  rows={5}
                  placeholder="Message..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Button
              type="submit"
              className="button my-4 mr-0"
              style={{ float: "right" }}
            >
              {buttonText}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
