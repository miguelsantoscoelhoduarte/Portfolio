import React from 'react';
import codeSnippet from '../assets/carbon-2.png';
import Experience from '../components/Experience';
import TechStack from './TechStack';

function CV() {
    return (
        <div>
            <div className="grid grid-cols-2 justify-center items-center ml-5">
                <h1 className="text-4xl font-bold text-center text-white mb-8">
                    Hi there,<br />
                    I'm Miguel, a
                    <a className="text-[#E2E2B6]"> FullStack <br /> Software Developer</a>
                </h1>
                <img src={codeSnippet} />
            </div>

            <div>
                <h1 className="text-4xl font-bold text-left text-[#6EACDA] ml-10">Who Am I?</h1>
                <p className="text-xl ml-10 mt-5 text-white">
                    I excel at
                    listening and understanding the needs and concerns of both clients and team members, <br />fostering effective
                    communication and collaboration. I thrive in dynamic environments where I can <br />leverage my analytical skills to solve complex problems and develop
                    creative solutions. My strong <br /> technical background, combined with my passion for continuous learning, enables
                    me to stay at <br /> the forefront of technological advancements.
                    As a team player, I am committed to supporting and <br /> mentoring colleagues, contributing to a positive and
                    productive work environment.
                    My dedication <br /> to excellence drives me to consistently deliver high-quality results,
                    aligning with both technical <br /> specifications and business goals.</p>
            </div>

            <div>
                <h1 className="text-4xl font-bold text-right text-[#6EACDA] mr-10 mt-10">Professional Experiences</h1>
                <Experience startingDate="Sep 2024" endDate="Present" roleName="Backend Engineer" company="Finsolutia S.A." />
                <Experience startingDate="Jun 2024" endDate="Sep 2024" roleName="Software Architect" company="Cofidis S.A" />
                <Experience startingDate="Mar 2022" endDate="Jun 2024" roleName="Fullstack Developer" company="GBL Tech | Cofidis" />
                <Experience startingDate="Aug 2020" endDate="Mar 2022" roleName="Fullstack Developer" company="CGI Lisbon" />
            </div>

            <div className="mt-10">
                <h1 className="text-center text-4xl text-[#6EACDA] font-bold mb-10">Skills</h1>
                <TechStack/>
            </div>
        </div>
    );
}

export default CV;
