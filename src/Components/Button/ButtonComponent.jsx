import React from 'react'
import Button from 'react-bootstrap/Button'
import './index.css'
import { useNavigate } from 'react-router-dom';
const ButtonComponent = (props) => {
  const navigate = useNavigate();
  return (
    <div>
        <Button className='button my-4' onClick={()=> navigate(props.route)}>
            {props.name}
        </Button>
    </div>
  )
}

export default ButtonComponent