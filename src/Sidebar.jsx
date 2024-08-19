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
            <div className="sidebar-menu">
                <p className={'list'}>Classroom management</p>
                <button type={'button'} className={'button'}>Academic Time Line</button>
                <p className={'list'}>Student Record</p>
                <button type={'button'} className={'button'}>Student Grades</button>
                <button type={'button'} className={'button'}>Course Eligibility</button>
                <button type={'button'} className={'button'}>Student Promotion</button>
                <p className={'list'}>Student Financial Record</p>
                <button type={'button'} className={'button'}>Credit Hour Rate</button>
                <button type={'button'} className={'button'}>Payment Information</button>




            </div>


            <div className="logout-button">
                <button type="button" className="logout">Logout</button>

            </div>

        </div>
    )
}

export default Sidebar;