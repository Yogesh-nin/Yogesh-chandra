import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import mdImg from '../../assets/hotel-modal-img.png'
const ProjectModal = (props) => {

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-90w"
      style={{background: "rgba(0,0,0,0.6)", boxSshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}
    //   scrollable
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <figure><img src={mdImg} alt="" width="100%" /></figure>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}

export default ProjectModal