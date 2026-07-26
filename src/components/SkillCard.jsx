export default function SkillCard({ skill }) {
  return (
    <div className="skill-card" data-num={skill.number}>
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-tags">
        {skill.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
      <div className="skill-bar-wrap"><div className="skill-bar" /></div>
    </div>
  );
}
