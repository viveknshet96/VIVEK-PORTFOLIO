export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="sec-label rev">About Me</div>
        <h2 className="sec-title rev">Who I Am</h2>
        <div className="about-top rev">
          <div>
            <p className="about-p">
              Hello! I'm <strong>Vivek N Shet</strong>, a passionate Full Stack Developer based in Bengaluru, India.
              I love building things that make an impact — whether that's an AI-powered developer tool,
              a computer vision system, or a robust MERN web application.
            </p>
            <p className="about-p">
              I'm currently pursuing my <strong>MCA at M S Ramaiah Institute of Technology</strong> with a CGPA of{' '}
              <strong>9.17</strong>. Before this, I completed my BSc from Govindram Seksaria Science College,
              Belagavi, scoring <strong>85.11%</strong>.
            </p>
            <p className="about-p">
              I hold AI certifications from <strong>IISc Bangalore via NPTEL</strong> and have completed full-stack
              and Python bootcamps by Dr. Angela Yu. I speak five languages — English, Kannada, Hindi, Marathi, and Konkani.
            </p>
            <div className="hobby-tags">
              <span className="htag">🏸 Badminton</span>
              <span className="htag">🏏 Cricket</span>
              <span className="htag">🌱 Gardening</span>
              <span className="htag">🍳 Cooking</span>
            </div>
          </div>
          <div className="pcard">
            <div className="pcard-banner">VNS</div>
            <div className="pcard-body">
              <div className="pavatar">V</div>
              <div className="pname">Vivek N Shet</div>
              <div className="prole">Full Stack Developer &amp; AI Enthusiast</div>
              <div className="pdiv"></div>
              <div className="prow"><span className="picon">📍</span><span className="pkey">Location</span><span className="pval">Bengaluru, India</span></div>
              <div className="prow"><span className="picon">🎓</span><span className="pkey">Degree</span><span className="pval">MCA · CGPA 9.17</span></div>
              <div className="prow"><span className="picon">📧</span><span className="pkey">Email</span><span className="pval">viveknshet123@gmail.com</span></div>
              <div className="pdiv"></div>
              <div className="prow"><span className="sdot"></span><span className="pval" style={{fontSize:'13px',color:'var(--text)',fontWeight:500}}>Available for Opportunities</span></div>
            </div>
          </div>
        </div>
        <div className="info-grid rev">
          <div className="icard"><div className="iicon">🎓</div><div className="ilabel">Education</div><div className="ival"><strong>MCA</strong> — M S Ramaiah Institute of Technology, Bengaluru</div></div>
          <div className="icard"><div className="iicon">💼</div><div className="ilabel">Looking For</div><div className="ival"><strong>Internships</strong> &amp; Full-time Roles in Dev &amp; AI/ML</div></div>
          <div className="icard"><div className="iicon">🌐</div><div className="ilabel">Languages</div><div className="ival">English · Kannada · Hindi · Marathi · Konkani</div></div>
          <div className="icard"><div className="iicon">⚡</div><div className="ilabel">Interests</div><div className="ival">Badminton · Cricket · Gardening · Cooking</div></div>
        </div>
      </div>
    </section>
  )
}
