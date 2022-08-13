import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.css";
import ButtonComponent from "../Button/ButtonComponent";
import TrackVisibility from "react-on-screen";
const ContactForm = () => {
  const initialState = { name: "", email: "", subject: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [buttonText, setButtonText] = useState("Send Message!");
  const [disable, setDisable] = useState(false);
  const [isNameFilled, setIsNameFilled] = useState(true);
  const [isEmailFilled, setIsEmailFilled] = useState(true);
  const [isSubjectFilled, setIsSubjectFilled] = useState(true);
  const [isMessageFilled, setIsMessageFilled] = useState(true);

  function resetForm() {
    setFormData({ name: "", email: "", subject: "", message: "" });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim().length < 1) {
      setIsNameFilled(false);
      return;
    } else {
      console.log(formData);
      setButtonText("Sending...");
      setDisable(true);
      let response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      resetForm();
      setButtonText("Send Message!");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (formData.name.trim().length < 1) {
      setIsNameFilled(false);
    }
    if (formData.email.trim().length < 1) {
      setIsEmailFilled(false);
    }
    if (formData.subject.trim().length < 1) {
      setIsSubjectFilled(false);
    }
    if (formData.message.trim().length < 1) {
      setIsMessageFilled(false);
    }
  }, [formData.name, formData.email, formData.subject, formData.message]);

  return (
    <Container className="section-division" style={{overflow:'hidden', position:'relative'}}>
      <div className='big-fake'>@</div>
    <span className="tags"> &lt;h2&gt;</span>
      <TrackVisibility>
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

      <Row className="d-flex justify-content-between">
        <Col md={5} className="d-flex align-items-center my-2">
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
            {/* <div style={{width: "60%"}}>
              <div className="d-flex justify-content-center contact-social-links">
                <span className="social-links"> </span>
                <span className="social-links"> </span>
                <span className="social-links"> </span>
              </div>
            </div> */}

            <div className="contact-social-links d-flex">
              <ul className="social-links text-center">
                <li>
                  <a
                    href="http://github.com/Yogesh-nin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col className="my-2" lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
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
                    className={`input-field`}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
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
                  className={`input-field `}
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
