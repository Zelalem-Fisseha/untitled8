import React from 'react';
import './sidebar.css';
function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="Logo">
                    <img src="/img1.png" alt="logo"/>

                </div>
                <div id={'logo-txt'}>
                    <h1>BITS-SIS</h1>
                    <p>@register</p>
                </div>


            </div>
            <ul className="sidebar-menu">
            <li id="butt">Academic Time Line</li>
                <li id="butt">Student Grades</li>
                <li id="butt">Course Eligibility</li>
                <li id="butt">Student Promotion</li>
                <li id="butt">Credit Hour Rate</li>
                <li id="butt">Payment Information</li>
            </ul>

          <div className="logout-button">
              <button type="button" className="logout">Logout</button>

          </div>

        </div>
    )
}
export default Sidebar;