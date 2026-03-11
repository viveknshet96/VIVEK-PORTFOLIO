const certs = [
  { icon: '🧠', name: 'Artificial Intelligence: Concepts & Techniques', issuer: 'NPTEL · IISc Bangalore', desc: 'Comprehensive AI course covering machine learning, neural networks, and intelligent system design.' },
  { icon: '🤖', name: 'Programming with Generative AI', issuer: 'NPTEL · IISc Bangalore', desc: 'Covers LLMs, prompt engineering, generative models, and practical AI application development.', delay: 'd1' },
  { icon: '🌐', name: 'The Complete Full Stack Web Development Bootcamp', issuer: 'Dr. Angela Yu · Udemy', desc: 'End-to-end web development covering HTML, CSS, JavaScript, Node.js, React, and databases.', delay: 'd2' },
  { icon: '🐍', name: '100 Days of Code: Python Pro Bootcamp', issuer: 'Dr. Angela Yu · Udemy', desc: '100-day Python challenge covering automation, data science, web scraping, and app development.', delay: 'd3' },
]

const education = [
  { deg: 'MCA', school: 'M S Ramaiah Institute of Technology, Bengaluru', years: '2024 – 2026', score: 'CGPA 9.17' },
  { deg: 'BSc', school: 'Govindram Seksaria Science College, Belagavi', years: '2021 – 2024', score: '85.11%', delay: 'd1' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <div className="sec-label rev">Credentials</div>
        <h2 className="sec-title rev">Certifications</h2>
        <p className="sec-sub rev">Continuous learning through recognized programs and bootcamps.</p>
        <div className="cert-grid">
          {certs.map((c) => (
            <div key={c.name} className={`ccard rev ${c.delay || ''}`}>
              <div className="cicon">{c.icon}</div>
              <div className="cname">{c.name}</div>
              <div className="cissuer">{c.issuer}</div>
              <div className="cdesc">{c.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '72px' }}>
          <div className="edu-lbl rev">Academic Background</div>
          <div className="edu-ttl rev">Education</div>
          <div className="edu-grid">
            {education.map((e) => (
              <div key={e.deg} className={`ecard rev ${e.delay || ''}`}>
                <div className="edeg">{e.deg}</div>
                <div className="eschool">{e.school}</div>
                <div className="emeta">
                  <span>{e.years}</span>
                  <span className="escore">{e.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
