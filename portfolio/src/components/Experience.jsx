import React from 'react';

function Experience({ startingDate, endDate, roleName, company }) {
    return (
        <div className="pt-3 pb-3 mt-10 bg-[#1e293b] border-2 border-[#6EACDA] border-solid ml-auto mr-10 max-w-md rounded">
            <p className="text-center text-xl text-[#E2E2B6]">({startingDate}-{endDate})</p>
            <h1 className="ml-5 pt-3 pb-3 text-2xl text-white">{roleName}</h1>
            <p className="ml-5 text-xl text-white">{company}</p>
        </div>
    )
}

export default Experience;