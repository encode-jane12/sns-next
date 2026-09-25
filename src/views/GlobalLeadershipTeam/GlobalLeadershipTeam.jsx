"use client";
import React, { useEffect } from 'react';
import HeroText from '../../components/HeroText/HeroText';
import './GlobalLeadershipTeam.css';

// We can reuse some existing images to demonstrate the conditional rendering
import img1 from '../../assets/images/mendy_mazzo.jpg';
import img2 from '../../assets/images/bryan_northrop.jpg';
import img3 from '../../assets/images/christopher_westley.png';
import img4 from '../../assets/images/tieg_murray.jpg';

const GlobalLeadershipTeam = () => {
  useEffect(() => {
    document.title = 'Global Leadership Team | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: null },
    { label: 'SNS Construction', path: null },
    { label: 'Global Leadership Team', path: null },
  ];

  const execLeadership = [
    { name: 'Robert V. Sterling, PE', title: 'Group CEO & Founder', location: 'Raleigh, NC, USA', about: 'Group CEO & Founder with 28+ years leading mega-infrastructure projects globally.', image: "https://i.ibb.co/LHv805s/Robert-V-Sterling.png"  },
    { name: 'Dr. Sunita Deshmukh', title: 'Global COO', location: 'Bangalore, India', about: 'Global COO specializing in mass transit corridors and high-speed rail networks.', image: "https://i.ibb.co/CK48D9SF/Dr-Sunita-Deshmukh.png" },
    { name: 'Marcus Thorne, CEng', title: 'Managing Director (EMEA)', location: 'London, UK / Dubai, UAE', about: 'Managing Director (EMEA) overseeing offshore wind and green hydrogen initiatives.', image: "https://i.ibb.co/4gP2c4dY/Marcus-Thorne.png" },
    { name: 'Jonathan Vance', title: 'Executive VP of Global Safety & Risk', location: 'Raleigh, NC, USA', about: 'Executive VP of Global Safety & Risk Management overseeing zero-harm compliance.', image: "https://i.ibb.co/LdrzcTvh/Jonathan-Vance.png" },
    { name: 'Vikramaditya Rao', title: 'VP of Project Execution (APAC)', location: 'Bangalore, India', about: 'VP of Project Execution for industrial corridors and smart logistics parks in APAC.', image: "https://i.ibb.co/DfYCZFph/Vikramaditya-Rao.png" },
    { name: 'Dr. Elena Rostova', title: 'Chief Technology Officer', location: 'Raleigh, NC, USA', about: 'Chief Technology Officer directing digital twin site analytics and BIM innovation.', image: "https://i.ibb.co/JjvKKxSK/Dr-Elena-Rostova.png" },
    { name: 'Carlos Mendoza', title: 'Regional Director (LATAM)', location: 'São Paulo, Brazil', about: 'Regional Director managing LATAM port expansions and renewable energy assets.', image: "https://i.ibb.co/FL2xJMrX/Carlos-Mendoza.png" },
    { name: 'David K. Miller', title: 'Director of Global HR', location: 'Raleigh, NC, USA', about: 'Director of Global HR overseeing talent mobility across 22+ operating countries.', image: "https://i.ibb.co/ccSZQ1ph/David-K-Miller.png" }
  ];

  const hrOperations = [
    { name: 'Anusha Shankar', title: 'HR Manager (Engineering Recruitment)', location: 'Bangalore, India', about: 'HR Manager leading engineering recruitment, campus hiring, and workforce strategy.', image: "https://i.ibb.co/fdy50Fn8/Anusha-Shankar.png" },
    { name: 'Riddhi Negi', title: 'HR Manager (Site Operations)', location: 'Bangalore, India', about: 'HR Manager directing site HR operations, onboarding compliance, and employee relations.', image: "https://i.ibb.co/dHYkD7J/Riddhi-Negi.png" },
    { name: 'Sarah Jenkins', title: 'Senior Talent Acquisition Partner', location: 'Raleigh, NC, USA', about: 'Senior Talent Acquisition Partner specializing in civil and structural engineering hires.', image: "https://i.ibb.co/zWHZdBhH/Riddhi-Negi.png"  },
    { name: 'Priya Nair', title: 'HR Operations Lead', location: 'Bangalore, India', about: 'HR Operations Lead managing project site staffing and regional labor compliance.', image: "https://i.ibb.co/KjK3pJRb/Priya-Nair.png"  },
    { name: 'Tariq Al-Hassan', title: 'Regional HR Lead', location: 'Dubai, UAE', about: 'Regional HR Lead managing site personnel deployment across Middle East projects.', image: "https://i.ibb.co/svdJ851v/Tariq-Al-Hassan.png" },
    { name: 'Claire Bennett', title: 'HR Business Partner', location: 'London, UK', about: 'HR Business Partner overseeing talent acquisition for European green energy builds.', image: "https://i.ibb.co/32yLx7w/Claire-Bennett.png" }
  ];

  const engineeringDirectors = [
    { name: 'Siddharth Nair', title: 'Senior Director of Mass Transit & Rail', location: 'Bangalore, India', about: 'Senior Director of Mass Transit & Rail Engineering across South Asian metro lines.', image: null },
    { name: 'Claire Dupont', title: 'Chief Architect', location: 'Paris, France', about: 'Chief Architect leading LEED Platinum commercial high-rise designs in Europe.', image: null },
    { name: 'Tariq Al-Mansoor', title: 'Head of Marine Engineering', location: 'Dubai, UAE', about: 'Head of Marine Engineering specializing in deep-water berths and port drydocks.', image: null },
    { name: 'Kenji Takahashi', title: 'Lead Seismic Engineer', location: 'Tokyo, Japan', about: 'Lead Seismic Engineer designing high-tech semiconductor cleanroom facilities.', image: null },
    { name: 'Priya Deshmukh', title: 'Lead Structural Engineer', location: 'Bangalore, India', about: 'Lead Structural Engineer directing solar mega-farms and BESS storage structures.', image: null },
    { name: 'Michael O’Connor', title: 'Project Director', location: 'Sydney, Australia', about: 'Project Director for Western Sydney International Airport civil site works.', image: null },
    { name: 'Günther Weber', title: 'Principal Director', location: 'Frankfurt, Germany', about: 'Principal Director for the German Hydrogen Core Network pipeline engineering.', image: null },
    { name: 'Arjun Mehta', title: 'Project Director', location: 'Mumbai, India', about: 'Project Director overseeing bullet train elevated viaducts and tunnel segments.', image: null },
    { name: 'Mateo Silva', title: 'Lead Civil Engineer', location: 'Mexico City, Mexico', about: 'Lead Civil Engineer managing industrial park nearshoring developments in LATAM.', image: null },
    { name: 'Nguyen Van Minh', title: 'Site Operations Manager', location: 'Ho Chi Minh City, Vietnam', about: 'Site Operations Manager for high-tech manufacturing mega-hubs in Southeast Asia.', image: null }
  ];

  const siteManagers = [
    { name: 'Rajesh Sharma', title: 'Senior Project Manager', location: 'Delhi, India', about: 'Senior Project Manager overseeing Delhi Metro Phase 4 tunnel boring operations.', image: null },
    { name: 'Aarav Kapoor', title: 'Chief Site Engineer', location: 'Chennai, India', about: 'Chief Site Engineer managing Chennai Metro Phase-II underground stations.', image: null },
    { name: 'Kavita Reddy', title: 'Lead BIM Coordinator', location: 'Hyderabad, India', about: 'Lead BIM Coordinator managing digital twin tracking for Regional Ring Road builds.', image: null },
    { name: 'Rohan Gupta', title: 'Site Operations Lead', location: 'Pune, India', about: 'Site Operations Lead directing Pune Metro and Ring Road heavy civil works.', image: null },
    { name: 'Fatima Al-Zahra', title: 'HSEQ Lead', location: 'Doha, Qatar', about: 'HSEQ Lead enforcing zero-harm safety protocols across LNG export terminals.', image: null },
    { name: 'Daniel Reyes', title: 'Senior Underground Tunneling Specialist', location: 'Toronto, Canada', about: 'Senior Underground Tunneling Specialist working on the Ontario Line Subway.', image: null },
    { name: 'Lukas Schmidt', title: 'Chief Rail Infrastructure Specialist', location: 'Stuttgart, Germany', about: 'Chief Rail Infrastructure Specialist on the Stuttgart 21 underground station node.', image: null },
    { name: 'Deepak Verma', title: 'Project Manager', location: 'Ahmedabad, India', about: 'Project Manager overseeing high-speed rail terminal depot construction.', image: null },
    { name: 'Ananya Roy', title: 'Environmental Compliance Lead', location: 'Kolkata, India', about: 'Environmental Compliance Lead for airport expansion and coastal port builds.', image: null },
    { name: 'Sanjay Pattnaik', title: 'Chief Resident Engineer', location: 'Bhubaneswar, India', about: 'Chief Resident Engineer for Bhubaneswar Metro Rail Phase 1 alignment.', image: null }
  ];

  const renderGrid = (members, title) => (
    <div className="leadership-section-group">
      <h2 className="leadership-section-title">{title}</h2>
      <div className="leadership-grid">
        {members.map((member, index) => (
          <div key={index} className="leadership-card">
            <div className="leadership-avatar">
              {member.image ? (
                <img src={(member.image)?.src || (member.image)} alt={member.name} className="leadership-img" />
              ) : (
                <div className="leadership-image-placeholder">
                  <span className="initials">{member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}</span>
                </div>
              )}
            </div>
            <div className="leadership-info">
              <h3>{member.name}</h3>
              <p className="leadership-title">{member.title}</p>
              <p className="leadership-location">{member.location}</p>
              <p className="leadership-about">{member.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="leadership-page">
      <HeroText 
        breadcrumbs={breadcrumbs}
        heading="Global Leadership Team"
        intro="Our executive and regional leadership teams guide the strategic direction of SNS Construction's megaprojects across 22+ countries."
      />

      <section className="leadership-team-section">
        <div className="leadership-container">
          
          {renderGrid(execLeadership, "Executive & Regional Leadership")}
          {renderGrid(hrOperations, "Human Resources & Operations Management")}
          {renderGrid(engineeringDirectors, "Engineering & Project Directors")}
          {renderGrid(siteManagers, "Site Managers, BIM Specialists & Safety Leads")}

        </div>
      </section>
    </div>
  );
};

export default GlobalLeadershipTeam;
