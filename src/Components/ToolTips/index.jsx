import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ToolTips = (props) => {
  return (
        <OverlayTrigger
          placement={props.position}
          overlay={
            <Tooltip>
              {props.text}
            </Tooltip>
          }
        >
          {props.children}
        </OverlayTrigger>
  )
}

export default ToolTips