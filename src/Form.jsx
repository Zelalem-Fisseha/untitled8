import React from 'react';
import './Form.css';

function Form(){
    return(
        <div className="formE">
            <h2>Course Eligibility</h2>
            <form>
                <select>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
                <select>
                    <option value="Semister one">Semister one</option>
                    <option value="Semister two">Semister two</option>
                </select>
                <select>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Masters">Masters</option>
                </select>
                <select>
                    <option value="Regular">Regular</option>
                    <option value="Extension">Extension</option>
                </select>
                <select>
                    <option value="Level one">Level one</option>
                    <option value="Level two">Level two</option>
                    <option value="Level three">Level three</option>
                </select>



            </form>
            <div className="form-buttons">
                <button type="button" className="filter-button">Filter</button>
                <button type="button" className="clear-button">Clear</button>

            </div>








        </div>)

}
export default Form