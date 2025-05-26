import React from 'react';
import ReactIcon from '../assets/react-icon.png';
import CSharpIcon from '../assets/csharp-icon.png';
import AzureIcon from '../assets/azure-icon.png';
import SqlServerIcon from '../assets/sqlserver-icon.png';
import ElasticSearchIcon from '../assets/elastic-icon.png';
import KrakendIcon from '../assets/krakend-icon.png';
import SonarQubeIcon from '../assets/sonarqube-icon.svg';
import GrafanaIcon from '../assets/grafana-icon.png';
import ScrumIcon from '../assets/scrum-icon.png';


function TechStack() {
    const skills = [
        { name: 'C#', icon: CSharpIcon, color: 'bg-purple-600' },
        { name: 'React', icon: ReactIcon, color: 'bg-cyan-500' },
        { name: 'Azure', icon: AzureIcon, color: 'bg-blue-500' },
        { name: 'Sql Server', icon: SqlServerIcon, color: 'bg-red-600' },
        { name: 'ElasticSearch', icon: ElasticSearchIcon, color: 'bg-yellow-500' },
        { name: 'Krakend', icon: KrakendIcon, color: 'bg-indigo-500' },
        { name: 'SonarQube', icon: SonarQubeIcon, color: 'bg-blue-600' },
        { name: 'Grafana', icon: GrafanaIcon, color: 'bg-orange-500' },
        { name: 'Scrum', icon: ScrumIcon, color: 'bg-green-500' },
    ];

    return (
        <div className='overflow-x-hidden'>
            <div style={{
                display: 'flex',
                animation: 'slideLeft 15s linear infinite',
                gap: '40px'
            }}>
                {[...skills, ...skills, ...skills].map((skill, index) => (
                    <div className="bg-[#1e293b] border-2 border-[#6EACDA] border-solid"
                        key={`${skill.name}-${Math.floor(index / skills.length)}-${index % skills.length}`}
                        style={{
                            borderRadius: '12px',
                            padding: '30px',
                            textAlign: 'center',
                            minWidth: '150px',
                            color: 'white'
                        }}
                    >
                        <img src={skill.icon} className='h-20' />

                        <div style={{
                            fontSize: '16px',
                            fontWeight: '500'
                        }} className='mt-3'>
                            {skill.name}
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
        </div>
    );
}

export default TechStack;