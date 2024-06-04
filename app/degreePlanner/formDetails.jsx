'use client'

import { useEffect, useState } from "react";
import { Planner } from "./planner";

const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
var baseURL = "";

if (env === "production") {
    var baseURL = "https://www.unitrack.au";

} else if (env === "preview") {
    var baseURL = `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`;

} else if (env === "development") {
    var baseURL = "https://localhost:3000";
}

export default function FormDetails({degrees}) {
    const [shouldShowNextPage, setShouldShowNextPage] = useState(false);
    const [degreeIDSelected, setDegreeID] = useState("-1");
    const [majors, setMajorsForDegree] = useState([]);

    useEffect(() => {
        const getMajors = async () => {
            const resp = await fetch(`${baseURL}/api/getMajors?degreeID=${degreeIDSelected}`);

            if (resp.ok) {
                const majors = await resp.json();
                setMajorsForDegree(majors.data);
            }
        };

        getMajors();

    }, [degreeIDSelected]);

    return (
        <>
            {shouldShowNextPage ? <Planner /> :
            <form className="detailsContainer" id="detailsContainer" onSubmit={() => setShouldShowNextPage(true)}>
                <h2 className="pageHeader">Let&apos;s Get Started!</h2>
                <div className="detailsForm">
                    <div className="formElement">
                        <label className="degreeLabel" htmlFor="degree">Degree</label>
                        <select id="degree" className="degreeSelect" required value={degreeIDSelected} onChange={(e) => setDegreeID(e.target.value)}>
                            <option value="-1" disabled>Select degree</option>
                            {degrees.map((item, i) => <option key={item.degreeid} value={item.degreeid}> {item.degreename} </option>)}
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" htmlFor="firstMajor">Major</label>
                        <select id="firstMajor" className="degreeSelect" defaultValue="-1" required>
                            <option value="-1" disabled>Select major</option>
                            {(degreeIDSelected === "-1") && <option value="-2" disabled>Please Select Degree first!</option>}
                            {(degreeIDSelected !== "-1") && majors && majors.map((item) => <option key={item.majorid} value={item.majorid}> {item.majorname} </option>)}
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" htmlFor="secondMajor">Second major (if applicable)</label>
                        <select id="secondMajor" className="degreeSelect" defaultValue="0" required>
                            {(degreeIDSelected !== "-1") && <option value="-1" disabled>Select Major</option>}
                            {(degreeIDSelected === "-1") && <option value="-1" disabled>Please Select Degree first!</option>}
                            <option value="0">NA</option>
                            {(degreeIDSelected !== "-1") && majors && majors.map((item) => <option key={item.majorid} value={item.majorid}> {item.majorname} </option>)}
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" htmlFor="minor">Minor (if applicable)</label>
                        <select id="minor" className="degreeSelect" defaultValue="0" required>
                            {(degreeIDSelected !== "-1") && <option value="-1" disabled>Select Major</option>}
                            {(degreeIDSelected === "-1") && <option value="-1" disabled>Please Select Degree first!</option>}
                            <option value="0">NA</option>
                            {(degreeIDSelected !== "-1") && majors && majors.map((item) => <option key={item.majorid} value={item.majorid}> {item.majorname} </option>)}
                        </select>
                    </div>
                    <div className="formElement">
                        <button className="submitButton" type="submit">FINISH</button>
                    </div>
                </div>
            </form>
            }
        </>
    )
}
