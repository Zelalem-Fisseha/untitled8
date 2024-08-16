import React from 'react';
import './sidebar.css';
function Sidebar() {
    return(
        <div className="sidebar">
            <div className="Sidebar-header">
                <h1>BITS-SIS</h1>
                <p>@register</p>

            </div>
            <ul className="sidebar-menu">
                <li>Academic Time Line</li>
                <li>Student Grades</li>
                <li>Course Eligibility</li>
                <li>Student Promotion</li>
                <li>Credit Hour Rate</li>
                <li>Payment Information</li>
            </ul>

          <div className="logout-button">
              <button type="button" className="logout">Logout</button>

          </div>

        </div>
    )
}
export default Sidebar;