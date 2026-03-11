const skills = [
  { icon: '🤖', title: 'AI & Machine Learning', tags: ['Computer Vision', 'YOLOv5', 'Deep Learning', 'LLMs', 'Streamlit'] },
  { icon: '💻', title: 'Programming', tags: ['Python', 'JavaScript', 'Java', 'C', 'SQL'], delay: 'd1' },
  { icon: '🌐', title: 'Web Development', tags: ['React', 'Node.js', 'Express.js', 'HTML & CSS', 'MERN Stack'], delay: 'd2' },
  { icon: '🗄️', title: 'Databases & Tools', tags: ['MongoDB', 'MySQL', 'Git & GitHub', 'VS Code', 'Jupyter'], delay: 'd3' },
  { icon: '☁️', title: 'Cloud & DevOps', tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'], delay: 'd1' },
  { icon: '🤝', title: 'Soft Skills', tags: ['Team Collaboration', 'Communication', 'Presentation', 'Adaptability'], delay: 'd2' },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="sec-label rev">Expertise</div>
        <h2 className="sec-title rev">Skills &amp; Technologies</h2>
        <p className="sec-sub rev">A blend of full-stack engineering and AI/ML development capabilities.</p>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.title} className={`sk-card rev ${s.delay || ''}`}>
              <div className="sk-icon">{s.icon}</div>
              <div className="sk-title">{s.title}</div>
              <div className="sk-tags">
                {s.tags.map(t => <span key={t} className="stag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
