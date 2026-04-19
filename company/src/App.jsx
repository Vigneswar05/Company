import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const allProjects = [
  {
    id: 1,
    title: "Unknown Creator",
    description: "A premium photography portfolio featuring a striking dark mode aesthetic and advanced styling.",
    image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2670&auto=format&fit=crop",
    liveLink: "https://unknowncreators.netlify.app/",
    tags: ["React", "Vite", "Netlify", "CSS"]
  },
  {
    id: 2,
    title: "ValiDoc",
    description: "A cutting-edge decentralized application (dApp) that leverages blockchain technology to provide immutable proof of authenticity for certificates.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2670&auto=format&fit=crop",
    liveLink: "https://validoc.in/",
    tags: ["Solidity", "React", "Ethers.js", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "BlockLend",
    description: "A secure decentralized lending protocol allowing users to seamlessly deposit collateral and borrow assets entirely on-chain through smart contracts.",
    image: "https://images.unsplash.com/photo-1621416848440-236b0af18a97?q=80&w=2670&auto=format&fit=crop",
    liveLink: "https://block-lend.netlify.app/",
    tags: ["React", "Solidity", "Ethers.js", "Tailwind CSS"]
  },
  {
    id: 4,
    title: "AI WhatsApp Chatbot",
    description: "An intelligent, NLP-powered WhatsApp business bot that automates customer interactions with context-aware dynamic replies.",
    image: "https://images.unsplash.com/photo-1587560699334-bc433a539055?q=80&w=2670&auto=format&fit=crop",
    liveLink: "#",
    tags: ["Node.js", "GPT / NLP", "WhatsApp API", "SaaS"]
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={scrolled || location.pathname !== '/' ? 'scrolled' : ''}>
      <Link to="/" className="logo">Ilanix Technologies</Link>
      
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/templates">Templates</Link>
        <a href="#contact">Contact</a>
      </div>

      <button 
        className={`hamburger md-hidden ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

const ProjectCard = ({ title, description, image, liveLink, githubLink, tags }) => (
  <div className="card project-card">
    <div 
      className="card-image" 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="card-overlay">
        <div className="tags">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </div>
    <div className="card-body">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-actions" style={{ display: 'flex', gap: '0.5rem' }}>
        <a href={liveLink} className="btn btn-primary" style={{ flex: 1, textAlign: 'center' }}>Live Demo</a>
        {githubLink && <a href={githubLink} className="btn btn-outline" style={{ flex: 1, textAlign: 'center' }}>Source</a>}
      </div>
    </div>
  </div>
);

const TemplateCard = ({ title, description, image, liveLink }) => (
  <div className="card">
    <div 
      className="card-image" 
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="card-body">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-actions">
        <a href={liveLink} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Live Preview</a>
      </div>
    </div>
  </div>
);

const Home = () => (
  <>
    <section id="home" className="hero">
      <div className="container">
        <h1>
          <span>Elite Digital Solutions by</span>
          Ilanix Technologies
        </h1>
        <p>
          Architecting premium web experiences for visionary brands. Explore our specialized collection of industry-leading templates and custom solutions.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <Link to="/templates" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
            Explore Templates
          </Link>
          <a href="#contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <section className="featured-projects" style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="section-title" style={{ marginBottom: '4rem' }}>
          <h2>Featured Creations</h2>
          <p style={{ color: 'var(--text-muted)' }}>A glimpse into our specialized portfolio of digital excellence.</p>
        </div>
        <div className="template-grid">
          {allProjects.slice(0, 2).map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Link to="/projects" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
            View Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  </>
);

const TemplatesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const allTemplates = [
    {
      id: 1,
      category: 'Pottery',
      title: "Sample Pottery - V1",
      description: "Organic, earthy aesthetic designed to showcase the tactile beauty of artisanal pottery and ceramics.",
      image: "https://images.unsplash.com/photo-1525974362269-e00dfb49679f?q=80&w=2670&auto=format&fit=crop",
      liveLink: "https://potterytemplate1.netlify.app/"
    },
    {
      id: 2,
      category: 'Pottery',
      title: "Sample Pottery - V2",
      description: "A professional gallery for master ceramicists. Focuses on collection storytelling and workshop management.",
      image: "https://images.unsplash.com/photo-1565191999001-551c187427bb?q=80&w=2670&auto=format&fit=crop",
      liveLink: "https://potterytemplate2.netlify.app/"
    },
    {
      id: 5,
      category: 'Pottery',
      title: "Sample Pottery - V3",
      description: "A minimalist approach to showcasing handcrafted pottery and minimalist home decor items.",
      image: "https://images.unsplash.com/photo-1500313830540-7b66a9a3bf94?q=80&w=2670&auto=format&fit=crop",
      liveLink: "https://potterytemplate3.netlify.app/"
    },
    {
      id: 6,
      category: 'Pottery',
      title: "Sample Pottery - V4",
      description: "Capturing the process of creation. A portfolio built for studios that offer workshops and pottery classes.",
      image: "https://images.unsplash.com/photo-1593150531023-eb56d773410a?q=80&w=2670&auto=format&fit=crop",
      liveLink: "https://potterytemplate4.netlify.app/"
    },
    {
      id: 8,
      category: 'Pottery',
      title: "Sample Pottery - V5",
      description: "Dynamic landing page for client bookings and session displays. Perfect for fashion and portrait photographers.",
      image: "https://images.unsplash.com/photo-1565191999001-551c187427bb?q=80&w=2670&auto=format&fit=crop",
      liveLink: "https://potterytemplate5.netlify.app/"
    },
    {
      id: 4,
      category: 'Photo Studio',
      title: "Photo Studio Template - V1",
      description: "Dynamic landing page for client bookings and session displays. Perfect for fashion and portrait photographers.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop",
      liveLink: "https://studiotemplate2.netlify.app/"
    },
    {
      id: 7,
      category: 'Photo Studio',
      title: "Photo Studio Template - V2",
      description: "A dark-themed, cinematic experience for editorial, wedding, and fine art photographers.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2670&auto=format&fit=crop",
      liveLink: "https://studiotemplate3.netlify.app/"
    },
    {
      id: 3,
      category: 'Photo Studio',
      title: "Photo Studio Template - V3",
      description: "High-impact, minimalist layout that lets your photography speak for itself. Optimized for large-scale imagery.",
      image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2670&auto=format&fit=crop",
      liveLink: "https://studiotemplate1.netlify.app/"
    }
  ];

  const filteredTemplates = activeCategory === 'All' 
    ? allTemplates 
    : allTemplates.filter(t => t.category === activeCategory);

  return (
    <section className="showcase" style={{ minHeight: '80vh', paddingTop: '160px' }}>
      <div className="container">
        <div className="section-title">
          <h2>Premium Showcase</h2>
          <div className="filter-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            {['All', 'Pottery', 'Photo Studio'].map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.6rem 1.5rem', opacity: activeCategory === cat ? 1 : 0.6 }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="template-grid">
          {filteredTemplates.map(tpl => (
            <TemplateCard key={tpl.id} {...tpl} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsPage = () => {
  return (
    <section className="showcase" style={{ minHeight: '80vh', paddingTop: '160px' }}>
      <div className="container">
        <div className="section-title">
          <h2>Our Creations</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Explore our diverse portfolio of digital products and blockchain solutions.</p>
        </div>
        
        <div className="template-grid">
          {allProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact">
    <div className="container">
      <div className="logo" style={{ marginBottom: '1rem' }}>Ilanix Technologies</div>
      <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '0.5rem' }}>MSME REGISTERED ENTERPRISE</p>
      <div className="contact-info" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p className="copyright" style={{ margin: 0 }}>
          Email: <span style={{ color: 'var(--text-main)', fontWeight: '500' }}>ilanixtechnologies@gmail.com</span>
        </p>
        <p className="copyright" style={{ margin: 0 }}>
          Phone: <span style={{ color: 'var(--text-main)', fontWeight: '500' }}>+91 99627 37053</span>
        </p>
      </div>
      <p className="copyright">&copy; 2026 Ilanix Technologies. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
