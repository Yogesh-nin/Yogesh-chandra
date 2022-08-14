import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import resume from '../../assets/resume.pdf'
import './index.css'
const PersonalInfo = () => {
  return (
    <Col lg={6}>
        <h2 className="text-center mb-3">Personal Info</h2>
        <div className='d-flex justify-content-between'>
            <div className="left-div mr-2">
                <div className='info-item'>
                    <span className='info-title'>First Name: </span>
                    <span>Yogesh</span>
                </div>
                <div className='info-item'>
                    <span className='info-title'>Last Name: </span>
                    <span>Sharma</span>
                </div>
                <div className='info-item'>
                    <span className='info-title'>Age: </span>
                    <span>20 Years</span>
                </div>
                <div className='info-item'>
                    <span className='info-title'>Nationality: </span>
                    <span>Indian</span>
                </div>
                <div className='info-item'>
                    <span className='info-title'>Freelance: </span>
                    <span>Available</span>
                </div>
            </div>
            <div className="right-div ml-2">
                <div className='info-item'>
                    <span className='info-title'>Address: </span>
                    <span>New Delhi, India</span>
                </div>
                <div className='info-item'>
                    <span className='info-title'>Phone: </span>
                    <span>+91 9310416185</span>
                </div>
                <div className='info-item'>
                    <span className='info-title'>Email: </span>
                    <span>002chandra.yogesh@gmail.com</span>
                </div>
                <div className='info-item'>
                    <span className='info-title'>Github: </span>
                    <span>github.com/Yogesh-nin/</span>
                </div>
                <div className='info-item'>
                    <span className='info-title'>Languages: </span>
                    <span>English, Hindi</span>
                </div>
            </div>
        </div>
        <Button as='a' href={resume} target="_blank"  className='button my-4'>My resume!</Button>
    </Col>
  )
}

export default PersonalInfo