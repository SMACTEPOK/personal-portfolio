import './SkillsList.css'

function SkillsList({ skills }) {
  return (
    <section className="skills brutal-box">
      <h2 className="section-title">Навички</h2>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-card__header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-card__progress-bg">
              <div
                className="skill-card__progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="skill-card__desc">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsList
