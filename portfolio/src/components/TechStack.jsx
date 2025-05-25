import React from 'react';

function TechStack() {
    const skills = [
        { name: 'C#', icon: '#️⃣', color: 'bg-purple-600' },
        { name: 'React', icon: '⚛️', color: 'bg-cyan-500' },
        { name: 'Azure', icon: '☁️', color: 'bg-blue-500' },
        { name: 'Sql Server', icon: '🗄️', color: 'bg-red-600' },
        { name: 'ElasticSearch', icon: '🔍', color: 'bg-yellow-500' },
        { name: 'Zuplo', icon: '🚀', color: 'bg-indigo-500' },
        { name: 'SonarQube', icon: '🛡️', color: 'bg-blue-600' },
        { name: 'Grafana', icon: '📊', color: 'bg-orange-500' },
        { name: 'Scrum', icon: '🏃‍♂️', color: 'bg-green-500' },
      ];

    return (
        <div>
            <div style={{
                display: 'flex',
                animation: 'slideLeft 15s linear infinite',
                gap: '40px'
            }}>
                {[...skills, ...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '12px',
                            padding: '30px',
                            textAlign: 'center',
                            minWidth: '150px',
                            color: 'white'
                        }}
                    >
                        <div style={{
                            fontSize: '40px',
                            marginBottom: '15px'
                        }}>
                            {skill.icon}
                        </div>
                        <div style={{
                            fontSize: '16px',
                            fontWeight: '500'
                        }}>
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