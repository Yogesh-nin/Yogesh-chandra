import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css'
const ProjectModal = (props) => {

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-90w"
      // style={{background: "rgba(0,0,0,0.6)", boxSshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}
      // scrollable
    >
      <Modal.Header className='modal-header' closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          <Container className='modal-heading txt-blue'>
            <Row>
              <Col>
              <span className='modal-txt'>Title: {props.title}</span>
              </Col>
              <Col>
                <span className='modal-txt'>Tech Stack: {props.tech.join(', ')}</span>
              </Col>
            </Row>
            <Row>
              <Col>Live: <a href={props.link} target="_blank" rel="noopener noreferrer">{props.link}</a></Col>
            </Row>
          </Container>
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <figure><img src={props.image} alt="" width="100%" /></figure>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}

export default ProjectModal