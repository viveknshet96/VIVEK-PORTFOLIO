export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-badge"><div className="badge-dot"></div>Available for Opportunities</div>
      <h1 className="hero-name">Vivek N Shet</h1>
      <p className="hero-role">Full Stack Developer &amp; AI/ML Enthusiast</p>
      <p className="hero-desc">
        MCA student at M S Ramaiah Institute of Technology building intelligent systems with MERN Stack,
        Python, and AI/ML. Passionate about turning complex problems into clean, scalable software.
      </p>
      <div className="hero-btns">
        <a href="#projects" className="btn-gold">View Projects</a>
        <a href="#contact" className="btn-outline">Get in Touch</a>
      </div>
      <div className="hero-stats">
        <div className="stat"><div className="stat-num">9.17</div><div className="stat-label">MCA CGPA</div></div>
        <div className="sdiv"></div>
        <div className="stat"><div className="stat-num">3+</div><div className="stat-label">AI Projects</div></div>
        <div className="sdiv"></div>
        <div className="stat"><div className="stat-num">4+</div><div className="stat-label">Certifications</div></div>
      </div>
    </section>
  )
}
