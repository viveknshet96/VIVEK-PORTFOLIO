const projects = [
  {
    icon: '🤖',
    name: 'GitFlowX',
    type: 'AI / Developer Tools',
    points: [
      'Built an AI-powered GitHub repository analysis platform using static analysis and LLM-based reasoning to identify execution entry points and flow.',
      'Developed interactive dependency visualizations using React.js, Node.js, Python, and MongoDB, improving onboarding experience.',
      'Implemented structured AI-based error interpretation to generate human-readable explanations for complex execution issues.',
    ],
    tags: ['React.js', 'Node.js', 'Python', 'MongoDB', 'LLM'],
  },
  {
    icon: '♻️',
    name: 'Waste Classification',
    type: 'Computer Vision',
    delay: 'd1',
    points: [
      'Developed a YOLOv5-based image classification system to identify and classify waste as dry or wet, supporting efficient recycling.',
      'Built an interactive Streamlit application with image, camera, and video inputs displaying bounding boxes and confidence scores.',
      'Evaluated model performance using Precision, Recall, and mAP metrics achieving high recall across both waste classes.',
    ],
    tags: ['YOLOv5', 'Streamlit', 'Computer Vision', 'Python'],
  },
  {
    icon: '📁',
    name: 'File Sharing Website',
    type: 'Full Stack',
    delay: 'd2',
    points: [
      'Built a full-stack file-sharing web application with secure upload, storage, and sharing using Multer + GridFS for large media files.',
      'Developed QR-code and unique code-based retrieval for fast and seamless file access from any device.',
      'Implemented JWT authentication with login/register/guest modes and RESTful Express.js APIs for all CRUD operations.',
    ],
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Multer'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="sec-label rev">Work</div>
        <h2 className="sec-title rev">Featured Projects</h2>
        <p className="sec-sub rev">Real-world applications spanning AI research, computer vision, and full-stack development.</p>
        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.name} className={`pj rev ${p.delay || ''}`}>
              <div className="pj-top">
                <div className="pj-icon">{p.icon}</div>
                <div>
                  <div className="pj-name">{p.name}</div>
                  <div className="pj-type">{p.type}</div>
                </div>
              </div>
              <ul className="pj-pts">
                {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <div className="pj-tags">
                {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
