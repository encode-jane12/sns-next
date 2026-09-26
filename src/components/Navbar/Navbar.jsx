"use client";
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import card_buildings from '../../assets/images/card_buildings.png';
import card_infrastructure from '../../assets/images/card_infrastructure.png';
import hero_worker from '../../assets/images/hero_worker.png';
import logoImg from '../../assets/images/sns_logo.png';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Construction', hasDropdown: true, path: '/' },
  { label: 'Commercial Development', hasDropdown: false, path: '/commercial-development' },
  { label: 'About Us', hasDropdown: true, path: '/' },
  { label: 'Where We Work', hasDropdown: true, path: '/' },
  { label: 'Careers', hasDropdown: false, path: '/careers' },
  { label: 'News & Media', hasDropdown: false, path: '/media' },
];

const DROPDOWN_DATA = {
  'Construction': {
    columns: [
      {
        title: 'Buildings',
        links: ['Commercial Offices', 'Cultural & Religious', 'Data Centers', 'Government & Municipal', 'Healthcare', 'Higher Education', 'Hotels', 'K-12 Education', 'Multi-family', 'Parks & Waterfront', 'Science + Technology', 'Sports']
      },
      {
        title: 'Transportation & Infrastructure',
        links: ['Airports', 'Bridges', 'Dams', 'Equipment for Sale', 'Highways & Roads', 'Mining', 'Ports & Marine', 'Resiliency', 'Structural Steel', 'Transit & Rail', 'Tunneling', 'Underpinning & Foundations', 'Water & Wastewater Systems']
      },
      {
        title: 'Expertise',
        links: ['Emerging Technology', 'Program Management', 'Sustainability', 'Strategic Supply Chain', 'Megaprojects']
      },
      {
        title: 'Approach',
        links: ['Community Investment', 'Delivery Methods', 'Environmental Health and Safety', 'Ethics', 'Inclusion & Diversity', 'Subcontractors & Suppliers']
      }
    ],
    image: "https://images.pexels.com/photos/35132517/pexels-photo-35132517.jpeg",
    quote: "We shape our buildings; thereafter they shape us."
  },
  'About Us': {
    columns: [
      {
        title: 'SNS Construction',
        links: ['Our Code of Conduct', 'Our History', 'Our Organization', 'Our Purpose and Values', 'Quick Facts and Figures', 'Global Leadership Team']
      },
      {
        title: 'SNS Construction Group',
        links: ['Investors']
      },
      {
        title: 'Expertise',
        links: ['Emerging Technology', 'Program Management', 'Strategic Supply Chain', 'Subcontractors & Suppliers', 'Sustainability', 'Megaprojects']
      }
    ],
    image:"https://images.pexels.com/photos/4966809/pexels-photo-4966809.jpeg",
    quote: "Uncompromising integrity and transparency in every brick we lay."
  },
  'Where We Work': {
    columns: [
      {
        title: '',
        links: ['Canada', 'Mexico', 'Brazil', 'United Kingdom']
      },
      {
        title: '',
        links: ['Germany', 'Netherlands', 'France', 'United Arab Emirates']
      },
      {
        title: '',
        links: ['Saudi Arabia', 'Qatar', 'Singapore', 'Australia']
      },
      {
        title: '',
        links: ['India', 'Japan', 'Vietnam', 'South Korea']
      }
    ],
    image: "https://images.pexels.com/photos/26387588/pexels-photo-26387588.jpeg",
    quote: "Connecting people, bridging cultures, and laying foundations for the future."
  }
};

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="16.65" y1="16.65" x2="21" y2="21" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const pathname = usePathname();

  const renderNavLink = (link, onClick) => {
    const routes = {
      'Commercial Offices': '/commercial-offices',
      'Cultural & Religious': '/cultural-religious',
      'Data Centers': '/data-centers',
      'Government & Municipal': '/government-municipal',
      'Healthcare': '/healthcare',
      'Higher Education': '/higher-education',
      'Hotels': '/hotels',
      'K-12 Education': '/k-12-education',
      'Multi-family': '/multi-family',
      'Parks & Waterfront': '/parks-waterfront',
      'Science + Technology': '/science-technology',
      'Sports': '/sports',
      'Our Code of Conduct': '/about-us/sns-construction/our-code-of-conduct',
      'Our History': '/about-us/sns-construction/our-history',
      'Our Organization': '/about-us/sns-construction/our-organization',
      'Our Purpose and Values': '/about-us/sns-construction/our-purpose-and-values',
      'Quick Facts and Figures': '/about-us/sns-construction/quick-facts',
      'Global Leadership Team': '/about-us/sns-construction/usa-leadership-team',
      'Investors': '/about-us/sns-construction-group/investors',
      'Emerging Technology': '/construction/expertise/emerging-technology',
      'Program Management': '/construction/expertise/programmanagement',
      'Strategic Supply Chain': '/construction/expertise/strategic-supply-chain',
      'Community Investment': '/construction/approach/community-investment',
      'Delivery Methods': '/construction/approach/delivery-methods',
      'Environmental Health and Safety': '/construction/approach/environmental-health-safety',
      'Ethics': '/construction/approach/ethics',
      'Inclusion & Diversity': '/construction/approach/inclusion-diversity',
      'Subcontractors & Suppliers': '/construction/approach/subcontractors-suppliers',
      'Sustainability': '/construction/expertise/sustainability',
      'Megaprojects': '/construction/expertise/megaprojects',
      'Airports': '/construction/transportation-infrastructure/airports',
      'Bridges': '/construction/transportation-infrastructure/bridges',
      'Dams': '/construction/transportation-infrastructure/dams',
      'Equipment for Sale': '/construction/transportation-infrastructure/equipment-for-sale',
      'Highways & Roads': '/construction/transportation-infrastructure/highways-roads',
      'Mining': '/construction/transportation-infrastructure/mining',
      'Ports & Marine': '/construction/transportation-infrastructure/ports-marine',
      'Resiliency': '/construction/transportation-infrastructure/resiliency',
      'Structural Steel': '/construction/transportation-infrastructure/structural-steel',
      'Transit & Rail': '/construction/transportation-infrastructure/transit-rail',
      'Tunneling': '/construction/transportation-infrastructure/tunneling',
      'Underpinning & Foundations': '/construction/transportation-infrastructure/underpinning-foundations',
      'Water & Wastewater Systems': '/construction/transportation-infrastructure/water-wastewater-systems'
    };
    const path = routes[link];
    if (path) {
      return <Link href={path} onClick={onClick}>{link}</Link>;
    }
    const stateSlug = link.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return <Link href={`/where-we-work/${stateSlug}`} onClick={onClick}>{link}</Link>;
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setSearchOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (label, e) => {
    e.preventDefault();
    setActiveMobileDropdown(prev => prev === label ? null : label);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const isLightPage = pathname !== '/';
  const isSolid = scrolled || activeDropdown || searchOpen || menuOpen || isLightPage;

  const navbarClasses = [
    'navbar',
    isSolid ? 'scrolled' : '',
    menuOpen ? 'menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <nav className={navbarClasses} onMouseLeave={() => setActiveDropdown(null)}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link href="/" className="navbar__logo" aria-label="SNS Construction Home">
            <img src={(logoImg)?.src || (logoImg)} alt="SNS Construction Logo" className="navbar__logo-img" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar__links">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.label} 
                className="navbar__link-item"
                onMouseEnter={() => {
                  if (item.hasDropdown) setActiveDropdown(item.label);
                  else setActiveDropdown(null);
                  setSearchOpen(false);
                }}
              >
                <Link href={item.path} className="navbar__link">
                  {item.label}
                  {item.hasDropdown && <span className="navbar__caret" />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Search + Hamburger */}
          <div className="navbar__right">
            <button
              className="navbar__search"
              aria-label="Search"
              type="button"
              onClick={toggleSearch}
            >
              <SearchIcon />
            </button>

            <button
              className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              type="button"
            >
              <span className="navbar__hamburger-line" />
              <span className="navbar__hamburger-line" />
              <span className="navbar__hamburger-line" />
            </button>
          </div>
        </div>

        {/* Dropdowns */}
        <AnimatePresence>
          {activeDropdown && DROPDOWN_DATA[activeDropdown] && (
            <motion.div 
              className="navbar__dropdown" 
              onMouseLeave={() => setActiveDropdown(null)}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="navbar__dropdown-content">
                <div className="navbar__dropdown-columns">
                  {DROPDOWN_DATA[activeDropdown].columns.map((col, idx) => (
                    <div key={idx} className="navbar__dropdown-col">
                      {col.title && <h4 className="navbar__dropdown-title">{col.title}</h4>}
                      <ul className="navbar__dropdown-list">
                        {col.links.map(link => (
                          <li key={link}>
                            {renderNavLink(link, () => { setActiveDropdown(null); setMenuOpen(false); })}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                {DROPDOWN_DATA[activeDropdown].image && (
                  <div className="navbar__dropdown-image-container">
                    <img src={(DROPDOWN_DATA[activeDropdown].image)?.src || (DROPDOWN_DATA[activeDropdown].image)} alt={activeDropdown} />
                    <div className="navbar__dropdown-quote-overlay">
                      <p className="navbar__dropdown-quote">
                        "{DROPDOWN_DATA[activeDropdown].quote}"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              className="navbar__search-panel"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="navbar__search-input-wrapper">
                <input type="text" placeholder="Search" autoFocus />
                <button className="navbar__search-submit"><SearchIcon /></button>
              </div>
              <div className="navbar__search-results">
                <h4>Results</h4>
                <p>Start searching for results</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Overlay */}
      <div className={`navbar__overlay ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar__overlay-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.hasDropdown ? (
                <>
                  <button 
                    className="navbar__overlay-link" 
                    onClick={(e) => toggleMobileDropdown(item.label, e)}
                  >
                    {item.label}
                    <span className={`navbar__overlay-caret ${activeMobileDropdown === item.label ? 'open' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeMobileDropdown === item.label && DROPDOWN_DATA[item.label] && (
                      <motion.div
                        className="navbar__mobile-dropdown-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {DROPDOWN_DATA[item.label].columns.map((col, idx) => (
                          <div key={idx} className="navbar__mobile-dropdown-col">
                            {col.title && <h4>{col.title}</h4>}
                            <ul className="navbar__mobile-dropdown-list">
                              {col.links.map(link => (
                                <li key={link}>
                                  {renderNavLink(link, () => setMenuOpen(false))}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href={item.path} className="navbar__overlay-link" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
