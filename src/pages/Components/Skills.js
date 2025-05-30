import { useEffect, useState } from "react";

const skillsData = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "Django REST", level: 70 },
  { name: "React Native", level: 65 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Machine Learning", level: 60 },
  { name: "Marketing", level: 60 },
];

const SkillBar = ({ skill }) => {
  const [percentage, setPercentage] = useState(1);

  useEffect(() => {
    let current = 1;
    const interval = setInterval(() => {
      if (current >= skill.level) {
        clearInterval(interval);
      } else {  
        current += 1;
        setPercentage(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [skill.level]);

  return (
    <div className="mb-[1em]">
      <div className="flex justify-between">
        <span className="font-semibold font-sans text-black">{skill.name}</span>
        <span className="text-black">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-300 rounded mt-2">
        <div
          className="h-2 bg-black rounded transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <div className="px-10 py-10 rounded-xl mx-auto mt-4">
      <h2 className="text-4xl font-bold font-serif text-black mb-2 text-center">My Skills</h2>
      {skillsData.map((skill, idx) => (
        <SkillBar skill={skill} key={idx} />
      ))}
    </div>
  );
}
