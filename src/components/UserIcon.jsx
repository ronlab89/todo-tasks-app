import React, { useContext } from 'react'
import { UncontrolledTooltip } from 'reactstrap'
import { userContext } from '../context/UserProvider'
import '../css/userIcon.css'

const UserIcon = () => {

  const {user} = useContext(userContext); 

  return (
    <div className="user-card d-flex align-items-center justify-content-center">
        <h5 className="mb-0" id="UncontrolledTooltipExample">User</h5>
        <UncontrolledTooltip
          placement="bottom"
          target="UncontrolledTooltipExample"
        >
          {user.email}
        </UncontrolledTooltip>
    </div>
  )
}

export default UserIcon