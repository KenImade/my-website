import "./styles.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function ComingSoon() {

    const countDownDate = new Date("June 1, 2022 18:00:00").getTime()

    const [launchTime, setLaunchTime] = useState("")

    setInterval(() => {
    
        const currentDate = new Date().getTime();

        const remainingTime = countDownDate - currentDate;

        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        let displayTime = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        setLaunchTime(displayTime);
    }, 1000)

    

    return (
        <div className="coming--soon">
            <div className="top--left">
                <Link to="/"><p>K I</p></Link>
            </div>
            <div className="middle">
                <h1>COMING SOON</h1>
                <hr/>
                <p>{launchTime}</p>
            </div>
        </div>
    )
}

export default ComingSoon;