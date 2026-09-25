"use client";
import React, { useEffect } from 'react';
import HeroText from '../../components/HeroText/HeroText';
import './Megaprojects.css';

import mega1 from '../../assets/images/project_montgomery.jpg';
import mega2 from '../../assets/images/hero_airport.png';
import mega3 from '../../assets/images/st_cleanrooms.png';
import mega4 from '../../assets/images/commercial_office_hero.jpg';

const Megaprojects = () => {
  useEffect(() => {
    document.title = 'Global Ongoing Megaprojects | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Expertise', path: '/construction/expertise' },
    { label: 'Megaprojects', path: null },
  ];

  return (
    <div className="megaprojects-page">
      <HeroText 
        breadcrumbs={breadcrumbs}
        heading="Global Ongoing Megaprojects"
        intro="By leveraging integrated BIM Level 3 Modeling, automated site robotics, and US-grade safety governance across all global sites, SNS Construction is executing landmark infrastructure across 20+ countries."
      />

      {/* 1. Civil Infrastructure & Urban Mass Transit */}
      <section className="mega-category-section">
        <div className="mega-container mega-split">
          <div className="mega-left">
            <div className="mega-icon-heading">
              <span className="mega-icon">🚆</span>
              <h2>1. Civil Infrastructure &amp; Urban Mass Transit</h2>
            </div>
            
            <div className="mega-region-group">
              <h3>Americas &amp; Europe Operations</h3>
              <ul className="mega-list">
                <li><strong>California High-Speed Rail (USA):</strong> Construction of primary civil alignment, cable-stayed viaducts, and subterranean trackbeds along the Central Valley corridor.</li>
                <li><strong>Ontario Line Subway (Canada):</strong> Turnkey tunneling, underground station cavern excavation, and rail systems integration across central Toronto.</li>
                <li><strong>Lisbon–Porto High-Speed Rail (Portugal):</strong> High-velocity trackbed construction, bridge engineering, and electrification grid installation.</li>
                <li><strong>Red Line Extension (Portugal):</strong> Underground metro tunnel boring and multi-modal transit hub construction.</li>
                <li><strong>Paris–Berlin High-Speed Rail Link (France / Germany):</strong> Cross-border rail alignment expansion and high-speed station modernization.</li>
                <li><strong>Stuttgart 21 Rail Project (Germany):</strong> Major underground railway node reconstruction, tunnel network execution, and new central station roof structure.</li>
              </ul>
            </div>

            <div className="mega-region-group">
              <h3>Asia-Pacific &amp; South Asia Operations</h3>
              <ul className="mega-list">
                <li><strong>Mumbai–Ahmedabad High-Speed Rail (India):</strong> Bullet train elevated viaducts, undersea tunnel segments, and high-speed rail terminal depots.</li>
                <li><strong>Jakarta MRT East-West Line (Indonesia):</strong> Phase 1 tunneling, subterranean station construction, and urban rail power integration.</li>
                <li><strong>Chennai Metro Rail Phase-II Project (India):</strong> Deep underground station construction, elevated rail corridors, and automated depot infrastructure.</li>
                <li><strong>Delhi Metro Phase 4 - Golden Line Extension (India):</strong> Subterranean tunnel boring, elevated viaduct construction, and smart signaling integrations.</li>
                <li><strong>Mumbai Metro Line 4 &amp; 5 (India):</strong> Multi-tiered elevated rail alignments, interchange station infrastructure, and maintenance yards.</li>
                <li><strong>Surat–Chennai Expressway &amp; Nashik Segment (India):</strong> High-velocity greenfield highway construction, grade separators, and smart traffic systems.</li>
                <li><strong>Regional Ring Road (Hyderabad &amp; Vijayawada, India):</strong> Multi-lane access-controlled ring road paving, flyovers, and bypass interchanges.</li>
              </ul>
            </div>
          </div>
          <div className="mega-right">
            <img src={(mega1)?.src || (mega1)} alt="Civil Infrastructure & Urban Mass Transit" className="mega-featured-img" />
          </div>
        </div>
      </section>

      {/* 2. Aviation, Maritime & Port Logistics */}
      <section className="mega-category-section mega-bg-light">
        <div className="mega-container mega-split reverse">
          <div className="mega-left">
            <div className="mega-icon-heading">
              <span className="mega-icon">✈️</span>
              <h2>2. Aviation, Maritime &amp; Port Logistics Megaprojects</h2>
            </div>
            
            <div className="mega-region-group">
              <h3>International Aviation &amp; Maritime</h3>
              <ul className="mega-list">
                <li><strong>Al Maktoum International Airport Expansion (Dubai, UAE):</strong> Greenfield megaterminal construction, runway paving, and automated baggage logistics buildings.</li>
                <li><strong>Western Sydney International (WSI) Airport (Australia):</strong> Airside concrete paving, main passenger terminal construction, and fuel line integration.</li>
                <li><strong>The Tuas Mega Port Development (Singapore):</strong> Automated container terminal quay walls, deep-water dredging, and smart port logistics yards.</li>
                <li><strong>Duqm Port &amp; Drydock Expansion (Oman):</strong> Breakwater construction, deep-water berth expansion, and commercial ship repair docks.</li>
                <li><strong>Port of Sines (Portugal):</strong> Container yard expansion, berth deepening, and automated crane rail civil works.</li>
                <li><strong>Ocean Reef Marina Expansion (Western Australia):</strong> Coastal breakwater construction, commercial marina piers, and waterfront civil infrastructure.</li>
              </ul>
            </div>

            <div className="mega-region-group">
              <h3>India Regional Hub Aviation &amp; Port Projects</h3>
              <ul className="mega-list">
                <li><strong>Noida International Airport - Jewar (India):</strong> Greenfield terminal design-build, multi-modal transport hub integration, and runway paving.</li>
                <li><strong>Navi Mumbai International Airport (India):</strong> Terminal complex construction, airside civil engineering, and access highway connections.</li>
                <li><strong>Vizhinjam International Seaport Expansion (India):</strong> Deep-water transshipment port breakwaters, container yards, and rail connectivity.</li>
                <li><strong>MIHAN (Nagpur, India):</strong> Integrated cargo terminal buildings, maintenance hangars, and logistics infrastructure.</li>
              </ul>
            </div>
          </div>
          <div className="mega-right">
            <img src={(mega2)?.src || (mega2)} alt="Aviation, Maritime & Port Logistics" className="mega-featured-img" />
          </div>
        </div>
      </section>

      {/* 3. Energy Transition, Petrochemical & Industrial Infrastructure */}
      <section className="mega-category-section">
        <div className="mega-container mega-split">
          <div className="mega-left">
            <div className="mega-icon-heading">
              <span className="mega-icon">⚡</span>
              <h2>3. Energy Transition, Petrochemical &amp; Industrial</h2>
            </div>
            
            <div className="mega-region-group">
              <h3>Global Energy &amp; Green Transition</h3>
              <ul className="mega-list">
                <li><strong>German Hydrogen Core Network (Germany):</strong> Turnkey hydrogen transmission pipeline civil works and compression station builds.</li>
                <li><strong>German LNG Terminal Brunsbüttel &amp; Stade LNG Terminal (Germany):</strong> Regasification facility foundations, cryogenic storage tank civil works, and jetty infrastructure.</li>
                <li><strong>North Field Expansion Project (Qatar):</strong> Onshore LNG processing train foundations, utility piping corridors, and export jetties.</li>
                <li><strong>Expansion of Yamama Oil &amp; Gas Facilities (Middle East):</strong> Petrochemical plant upgrades, gas-oil separation plant expansion, and storage tanks.</li>
                <li><strong>Singapore’s Second LNG Terminal (Singapore):</strong> Subsea pipeline connections, regasification module foundations, and storage infrastructure.</li>
                <li><strong>Eneabba Rare Earths Refinery (Western Australia):</strong> Heavy industrial plant foundations, chemical processing buildings, and tailings management facilities.</li>
              </ul>
            </div>

            <div className="mega-region-group">
              <h3>South Asia Energy &amp; Industrial Megaprojects</h3>
              <ul className="mega-list">
                <li><strong>BPCL Bina Refinery Expansion (India):</strong> Ethylene cracker unit foundations, utility blocks, and high-capacity storage infrastructure.</li>
                <li><strong>Haldia FSRU (India):</strong> Offshore mooring dolphin construction, gas pipeline connectivity, and onshore terminal facilities.</li>
                <li><strong>Brookfield Solar Project &amp; Ragha–Sewda Solar Park (India):</strong> Utility-scale solar panel array mounting, substations, and grid interconnection lines.</li>
                <li><strong>Karnataka Green Energy Corridor Phase-II (India):</strong> High-voltage substation structures and grid infrastructure for renewable energy transmission.</li>
                <li><strong>City Gas Distribution &amp; Delhi PNG Expansion:</strong> Urban pipeline network trenching, metering stations, and last-mile distribution.</li>
              </ul>
            </div>
          </div>
          <div className="mega-right">
            <img src={(mega3)?.src || (mega3)} alt="Energy Transition & Industrial Infrastructure" className="mega-featured-img" />
          </div>
        </div>
      </section>

      {/* 4. Commercial Real Estate, Smart Cities & Special Economic Zones */}
      <section className="mega-category-section mega-bg-light">
        <div className="mega-container mega-split reverse">
          <div className="mega-left">
            <div className="mega-icon-heading">
              <span className="mega-icon">🏙️</span>
              <h2>4. Commercial Real Estate, Smart Cities &amp; SEZs</h2>
            </div>
            
            <div className="mega-region-group">
              <h3>Global Megacities &amp; Urban Precincts</h3>
              <ul className="mega-list">
                <li><strong>Nusantara (IKN) - The New Capital City (Indonesia):</strong> Government quarter office complexes, smart utility networks, and primary arterial roads.</li>
                <li><strong>Dubai Metro Blue Line Urban Precincts (UAE):</strong> Transit-oriented commercial developments and smart pedestrian skywalks.</li>
              </ul>
            </div>

            <div className="mega-region-group">
              <h3>Indian Commercial &amp; Industrial Corridors</h3>
              <ul className="mega-list">
                <li><strong>Dharavi Redevelopment Project (Mumbai, India):</strong> High-density urban master-planning, sustainable residential towers, and civic infrastructure.</li>
                <li><strong>Delhi-Mumbai Industrial Corridor (DMIC) &amp; Chennai-Bengaluru Industrial Corridor (CBIC):</strong> Greenfield industrial node development, smart utility grids, and road networks.</li>
                <li><strong>Multi-Modal Logistics Parks (MMLP) &amp; Nashik Logistics Park:</strong> Automated warehousing sheds, container freight stations, and heavy transport parking hubs.</li>
                <li><strong>Jaipur Hi-Tech City &amp; Smart Precincts (India):</strong> IT park commercial towers, smart streetlighting, and underground utility ducting.</li>
                <li><strong>IIT Goa Permanent Campus (India):</strong> Turnkey academic blocks, student housing complexes, laboratory buildings, and green campus infrastructure.</li>
              </ul>
            </div>
          </div>
          <div className="mega-right">
            <img src={(mega4)?.src || (mega4)} alt="Commercial Real Estate, Smart Cities & SEZs" className="mega-featured-img" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Megaprojects;
