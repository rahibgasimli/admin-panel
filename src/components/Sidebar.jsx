import React from 'react'

import { HiUsers } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className="side-bar">
        <Link to="/"><HiUsers/>Users</Link>
        <Link to='/adduser'><FaUserPlus/>New User</Link>
    </section>
  )
}

export default Sidebar