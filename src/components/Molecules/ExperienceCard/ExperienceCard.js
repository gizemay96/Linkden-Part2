import React from "react";
import "./ExperienceCard.scss";
import Images from "../../Atoms/Images/Image"
import exp3 from "../../../img/exp3.png"
import tracked1 from "../../../img/tracked1.png"

function ExperienceCard({ companyName, companyCatchPhrase, date , title ,Src }) {

    return (
        <div className="experience-card">
            <h3>{title}</h3>
            <div className="experience-body">
                <div className="card-image">
                    <Images stil="circle" width="56px" height="56px" imgSrc={exp3} />
                </div>
                <div className="experience-content">
                    <h4>{companyName}</h4>
                    <div className="company-info">
                        <p>Self Employed</p>
                        <p>Around the world</p>
                    </div>
                    <div className="time-info">
                        <p>Jun 2016 — Present</p>
                        <>
                            {
                                date ? (
                                    <p><span>{date}</span></p>  
                                ) :
                                    ""
                            }
                        </>
                    </div>
                    <div className="explanation">
                        <p>{companyCatchPhrase}</p>
                    </div>
                </div>
            </div>

            <div className="experience-body">
                <div>
                    <Images stil="circle" width="54px" height="54px" imgSrc={tracked1} />
                </div>
                <div className="experience-content">
                    <h4>{companyName}</h4>
                    <div className="company-info">
                        <p>Self Employed</p>
                        <p>Around the world</p>
                    </div>
                    <div className="time-info">
                        <p>Jun 2016 — Present</p>
                        <p><span>3 yrs 3 mos</span></p>
                    </div>
                    <div className="explanation">
                        <p>{companyCatchPhrase}</p>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ExperienceCard;

