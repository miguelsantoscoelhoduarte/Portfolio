import React from 'react';
import codeSnippet from '../assets/carbon-2.png';
import Experience from '../components/Experience';
import TechStack from './TechStack';

function CV() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center mx-5 my-8">
                <h1 className="text-4xl font-bold text-center text-white mb-8">
                    <span className="block">Hi there,</span>
                    <span className="block">I'm Miguel, a</span>
                    <span className="text-[#E2E2B6] block">FullStack Software Developer</span>
                </h1>
                <div className="flex justify-center">
                    <img
                        src={codeSnippet}
                        alt="Code snippet showcasing programming skills"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>

            <div>
                <h1 className="text-4xl font-bold text-left text-[#6EACDA] ml-10">Who Am I?</h1>
                <p className="text-xl ml-10 mt-5 text-white leading-relaxed max-w-4xl">
                    I excel at listening and understanding the needs and concerns of both clients and team members,
                    fostering effective communication and collaboration. I thrive in dynamic environments where I can
                    leverage my analytical skills to solve complex problems and develop creative solutions. My strong
                    technical background, combined with my passion for continuous learning, enables me to stay at
                    the forefront of technological advancements. As a team player, I am committed to supporting and
                    mentoring colleagues, contributing to a positive and productive work environment. My dedication
                    to excellence drives me to consistently deliver high-quality results, aligning with both technical
                    specifications and business goals.
                </p>
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
                <TechStack />
            </div>
        </div>
    );
}

export default CV;
