import "./Jobs.css";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "./Tabs";
import { useState } from "react";

const TabsContainer = styled.section`
    display: flex;
    padding: 0.5em;
`;


const TabsPanelContainer = styled.div`
    height: 500px; 
`;


function Jobs() {

    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (e, value) => {
        setActiveTab(value);
    }

    return (
        <section className="jobs" id="experience">
            <h1 className="jobs--title">Where I've Worked</h1>
            <div className="jobs--info">
                <TabsContainer>
                    <Tabs selectedTab={activeTab} onChange={handleChange}>
                        <Tab label="Verraki" value={0}></Tab>
                        <Tab label="Omdena" value={1}></Tab>
                        <Tab label="Chevron" value={2}></Tab>
                    </Tabs>
                </TabsContainer>
                <TabsPanelContainer>
                    <TabPanel value={activeTab} selectedIndex={0}>
                        <h2 className="job--position">QA Analyst</h2>
                        <h3 className="job--duration">July 2021 - Present</h3>
                        <ul className="job--duty--list">
                            <li className="job--duty">Developed test scripts, executed QA tests, documented test outcomes, tracked bugs and fixes, and collaborated with the implementation partner to resolve issues.</li>
                            <li className="job--duty">Responsible for maintenance of data reports (issue tracking, project progress).</li>
                            <li className="job--duty">Acted as a bridge between customer and development team leading to positive client feedback</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={activeTab} selectedIndex={1}>
                        <h2 className="job--position">Junior Machine Learning Engineer</h2>
                        <h3 className="job--duration">June 2021 - August 2021</h3>
                        <ul className="job--duty--list">
                            <li className="job--duty">Team Lead of the Data Cleaning and Processing team</li>
                            <li className="job--duty">Prepared and presented weekly reports on work progress to the project lead.</li>
                            <li className="job--duty">Created a Jupyter notebook to serve as a guide for colleagues in data extraction and cleaning</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={activeTab} selectedIndex={2}>
                        <h2 className="job--position">Process Engineer Intern</h2>
                        <h3 className="job--duration">February 2019 - June 2019</h3>
                        <ul className="job--duty--list">
                            <li className="job--duty">Created a <span className="bold">Microsoft PowerBI</span> dashboard which will display the performance of oil wells and will be used as a resource in making decisions</li>
                            <li className="job--duty">Responsible for maintenance of data reports (issue tracking, project progress).</li>
                            <li className="job--duty"> Assisted in the structuring of the Obsolescence management framework to be used as a guideline for managing company assets</li>
                        </ul>
                    </TabPanel>
                </TabsPanelContainer>
            </div>
        </section>
    )
}

export default Jobs;