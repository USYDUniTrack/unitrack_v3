"use client"
import "./degreePlanner.css";
import { useState, useEffect } from "react";
import { Planner } from "./planner";

function DegreePlanner() {
    const [pageLoaded, setPageLoaded] = useState(false);
    const [shouldShowNextPage, setShouldShowNextPage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShouldShowNextPage(true);
    }

    const initialRender = async () => {
        // Get the stored value from local storage
        const savedFormData = window.localStorage.getItem("degreePlannerFormData");
        if (savedFormData == "true") {
            await setShouldShowNextPage(JSON.parse(savedFormData)); 
        }
        await setPageLoaded(true);  
    }

    useEffect(() => {
        initialRender();
    }, []);

    // Store the value of form data in local storage
    useEffect(() => {
        window.localStorage.setItem("degreePlannerFormData", JSON.stringify(shouldShowNextPage));
    }, [shouldShowNextPage]);

    return (
        <>
            {pageLoaded ? <>
                {shouldShowNextPage ? <Planner /> :
                <form className="detailsContainer" id="detailsContainer" onSubmit={handleSubmit}>
                    <h2 className="pageHeader">Let&apos;s Get Started!</h2>
                    <div className="detailsForm">
                        <div className="formElement">
                            <label className="degreeLabel" htmlFor="degree">Degree</label>
                            <select id="degree" className="degreeSelect" defaultValue="0" required>
                                <option value="0" disabled>Select degree</option>
                                <option value="1">Bachelor of Science</option>
                                <option value="2">Bachelor of Advanced Computing</option>
                                <option value="3">Bachelor of Interaction Design/Bachelor of Advanced Studies</option>
                            </select>
                        </div>
                        <div className="formElement">
                            <label className="degreeLabel" htmlFor="firstMajor">Major</label>
                            <select id="firstMajor" className="degreeSelect" defaultValue="0" required>
                                <option value="0" disabled>Select major</option>
                                <option value="1">Computer Science</option>
                                <option value="2">Data Science</option>
                                <option value="3">Development</option>
                            </select>
                        </div>
                        <div className="formElement">
                            <label className="degreeLabel" htmlFor="secondMajor">Second major (if applicable)</label>
                            <select id="secondMajor" className="degreeSelect" defaultValue="4" required>
                                <option value="1">Computer Science</option>
                                <option value="2">Data Science</option>
                                <option value="3">Software Development</option>
                                <option value="4">NA</option>
                            </select>
                        </div>
                        <div className="formElement">
                            <label className="degreeLabel" htmlFor="minor">Minor (if applicable)</label>
                            <select id="minor" className="degreeSelect" defaultValue="4" required>
                                <option value="1">Mathematics</option>
                                <option value="2">Computer Science</option>
                                <option value="3">Design</option>
                                <option value="4">NA</option>
                            </select>
                        </div>
                        <div className="formElement">
                            <button className="submitButton" type="submit">START PLANNING</button>
                        </div>
                    </div>
                </form>
                }
            </>
            : <div></div>
            }
        </>
    )
}

export default DegreePlanner;
