import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['about', 'skills', 'projects', 'certifications', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['about', 'skills', 'projects', 'certifications', 'contact']

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a className="nav-logo" href="#">V<span>.</span></a>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(id => (
            <li key={id}>
              <a href={`#${id}`} className={activeSection === id ? 'active' : ''}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(id => (
          <a key={id} href={`#${id}`} onClick={handleLinkClick}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </>
  )
}
