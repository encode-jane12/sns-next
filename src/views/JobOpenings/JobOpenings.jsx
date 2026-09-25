"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import './JobOpenings.css';

const jobListings = [
  {
    refId: 'SNS-2026-PM-882',
    title: 'Senior Project Manager - Highways & Bridges',
    department: 'Civil Infrastructure',
    location: 'Raleigh, NC, USA'
  },
  {
    refId: 'SNS-2026-EST-104',
    title: 'Lead Estimator - Mission Critical / Data Centers',
    department: 'Building Construction',
    location: 'Bangalore, India'
  },
  {
    refId: 'SNS-2026-EHS-553',
    title: 'Environmental Health & Safety (EHS) Manager',
    department: 'Safety & Compliance',
    location: 'Seattle, WA, USA'
  },
  {
    refId: 'SNS-2026-BIM-907',
    title: 'BIM / VDC Coordinator',
    department: 'Emerging Technology',
    location: 'New York, NY, USA'
  },
  {
    refId: 'SNS-2026-QA-314',
    title: 'Quality Assurance Inspector - Water Systems',
    department: 'Water & Wastewater',
    location: 'Boston, MA, USA'
  },
  {
    refId: 'SNS-2026-SUP-625',
    title: 'Project Superintendent - Higher Education',
    department: 'Building Construction',
    location: 'Austin, TX, USA'
  },
  {
    refId: 'SNS-2026-SAF-912',
    title: 'Chief Safety Director',
    department: 'Safety & Compliance',
    location: 'Dallas, TX, USA'
  },
  {
    refId: 'SNS-2026-STEEL-440',
    title: 'Structural Steel Superintendent',
    department: 'Civil Infrastructure',
    location: 'Chicago, IL, USA'
  },
  {
    refId: 'SNS-2026-SCH-712',
    title: 'Senior Scheduler - Transit & Rail',
    department: 'Transit & Rail',
    location: 'San Francisco, CA, USA'
  },
  {
    refId: 'SNS-2026-ENG-205',
    title: 'Project Engineer - Commercial Development',
    department: 'Commercial Development',
    location: 'Miami, FL, USA'
  },
  {
    refId: 'SNS-2026-SUP-118',
    title: 'Site Manager - Multi-Family Residential',
    department: 'Building Construction',
    location: 'Atlanta, GA, USA'
  },
  {
    refId: 'SNS-2026-PRO-401',
    title: 'Procurement Specialist - Strategic Supply Chain',
    department: 'Strategic Supply Chain',
    location: 'Charlotte, NC, USA'
  },
  {
    refId: 'SNS-2026-TUN-303',
    title: 'Tunneling Foreman',
    department: 'Civil Infrastructure',
    location: 'Denver, CO, USA'
  },
  {
    refId: 'SNS-2026-CONC-109',
    title: 'Concrete General Foreman',
    department: 'Civil Infrastructure',
    location: 'Houston, TX, USA'
  },
  {
    refId: 'SNS-2026-VDC-774',
    title: 'VDC Engineer - Science & Tech',
    department: 'Science & Technology',
    location: 'Philadelphia, PA, USA'
  },
  {
    refId: 'SNS-2026-ENG-801',
    title: 'Structural Field Engineer',
    department: 'Civil Infrastructure',
    location: 'Los Angeles, CA, USA'
  },
  {
    refId: 'SNS-2026-EST-210',
    title: 'Senior MEP Estimator',
    department: 'Building Construction',
    location: 'Houston, TX, USA'
  },
  {
    refId: 'SNS-2026-PM-305',
    title: 'Project Manager - Commercial Offices',
    department: 'Commercial Development',
    location: 'New York, NY, USA'
  },
  {
    refId: 'SNS-2026-SUP-112',
    title: 'Site Superintendent - K-12 Projects',
    department: 'Building Construction',
    location: 'Phoenix, AZ, USA'
  },
  {
    refId: 'SNS-2026-EHS-924',
    title: 'EHS Specialist - Infrastructure',
    department: 'Safety & Compliance',
    location: 'Raleigh, NC, USA'
  },
  {
    refId: 'SNS-2026-BIM-115',
    title: 'Senior BIM Coordinator',
    department: 'Emerging Technology',
    location: 'Denver, CO, USA'
  },
  {
    refId: 'SNS-2026-SCH-602',
    title: 'Project Scheduler',
    department: 'Building Construction',
    location: 'Chicago, IL, USA'
  },
  {
    refId: 'SNS-2026-QA-504',
    title: 'QA/QC Manager - Megaprojects',
    department: 'Building Construction',
    location: 'Seattle, WA, USA'
  },
  {
    refId: 'SNS-2026-PM-412',
    title: 'Senior Project Manager - Airports',
    department: 'Civil Infrastructure',
    location: 'Atlanta, GA, USA'
  },
  {
    refId: 'SNS-2026-EST-124',
    title: 'Senior Civil Estimator',
    department: 'Civil Infrastructure',
    location: 'Dallas, TX, USA'
  },
  {
    refId: 'SNS-2026-SUP-301',
    title: 'Underground Utility Superintendent',
    department: 'Water & Wastewater',
    location: 'Boston, MA, USA'
  },
  {
    refId: 'SNS-2026-SAF-410',
    title: 'Site Safety Officer',
    department: 'Safety & Compliance',
    location: 'Miami, FL, USA'
  },
  {
    refId: 'SNS-2026-PRO-201',
    title: 'Materials Coordinator',
    department: 'Strategic Supply Chain',
    location: 'Bangalore, India'
  },
  {
    refId: 'SNS-2026-TUN-883',
    title: 'TBM Operator / Superintendent',
    department: 'Civil Infrastructure',
    location: 'Seattle, WA, USA'
  },
  {
    refId: 'SNS-2026-CONC-209',
    title: 'Concrete Superintendent',
    department: 'Civil Infrastructure',
    location: 'Austin, TX, USA'
  },
  {
    refId: 'SNS-2026-VDC-552',
    title: 'VDC Specialist - Life Sciences',
    department: 'Science & Technology',
    location: 'San Diego, CA, USA'
  },
  {
    refId: 'SNS-2026-PM-712',
    title: 'Project Manager - Water/Wastewater',
    department: 'Water & Wastewater',
    location: 'Orlando, FL, USA'
  },
  {
    refId: 'SNS-2026-EST-330',
    title: 'Structural Estimator',
    department: 'Civil Infrastructure',
    location: 'Detroit, MI, USA'
  },
  {
    refId: 'SNS-2026-SUP-415',
    title: 'Assistant Superintendent',
    department: 'Building Construction',
    location: 'Philadelphia, PA, USA'
  },
  {
    refId: 'SNS-2026-EHS-714',
    title: 'Lead Safety Director - Transit Systems',
    department: 'Transit & Rail',
    location: 'Washington, DC, USA'
  },
  {
    refId: 'SNS-2026-BIM-223',
    title: 'VDC Modeler - Structural Steel',
    department: 'Emerging Technology',
    location: 'San Jose, CA, USA'
  },
  {
    refId: 'SNS-2026-SCH-812',
    title: 'Lead Scheduler - Aviation',
    department: 'Civil Infrastructure',
    location: 'Denver, CO, USA'
  },
  {
    refId: 'SNS-2026-QA-119',
    title: 'Concrete Quality Inspector',
    department: 'Civil Infrastructure',
    location: 'Nashville, TN, USA'
  },
  {
    refId: 'SNS-2026-PM-608',
    title: 'Design-Build Project Manager',
    department: 'Commercial Development',
    location: 'Salt Lake City, UT, USA'
  },
  {
    refId: 'SNS-2026-EST-509',
    title: 'Electrical Estimator - Mission Critical',
    department: 'Building Construction',
    location: 'Charlotte, NC, USA'
  },
  {
    refId: 'SNS-2026-SUP-719',
    title: 'Superintendent - Healthcare Facilities',
    department: 'Building Construction',
    location: 'Cleveland, OH, USA'
  },
  {
    refId: 'SNS-2026-SAF-304',
    title: 'Safety Training Specialist',
    department: 'Safety & Compliance',
    location: 'Raleigh, NC, USA'
  },
  {
    refId: 'SNS-2026-PRO-905',
    title: 'Strategic Procurement Manager',
    department: 'Strategic Supply Chain',
    location: 'Atlanta, GA, USA'
  },
  {
    refId: 'SNS-2026-TUN-210',
    title: 'Tunnel Ventilation Engineer',
    department: 'Civil Infrastructure',
    location: 'New York, NY, USA'
  },
  {
    refId: 'SNS-2026-CONC-404',
    title: 'Precast Concrete Engineer',
    department: 'Civil Infrastructure',
    location: 'Richmond, VA, USA'
  },
  {
    refId: 'SNS-2026-VDC-110',
    title: 'VDC Coordinator - Data Centers',
    department: 'Emerging Technology',
    location: 'Bangalore, India'
  },
  {
    refId: 'SNS-2026-PM-901',
    title: 'Senior Project Manager - Science & Tech',
    department: 'Science & Technology',
    location: 'Boston, MA, USA'
  },
  {
    refId: 'SNS-2026-EST-810',
    title: 'Mechanical Estimator',
    department: 'Building Construction',
    location: 'Minneapolis, MN, USA'
  },
  {
    refId: 'SNS-2026-SUP-991',
    title: 'General Superintendent',
    department: 'Civil Infrastructure',
    location: 'Portland, OR, USA'
  },
  {
    refId: 'SNS-2026-EHS-105',
    title: 'EHS Advisor - Water Treatment',
    department: 'Water & Wastewater',
    location: 'Pittsburgh, PA, USA'
  },
  {
    refId: 'SNS-2026-BIM-552',
    title: 'BIM Coordinator - Sports Stadiums',
    department: 'Emerging Technology',
    location: 'Las Vegas, NV, USA'
  },
  {
    refId: 'SNS-2026-SCH-402',
    title: 'Strategic Planner / Scheduler',
    department: 'Strategic Supply Chain',
    location: 'Dallas, TX, USA'
  },
  {
    refId: 'SNS-2026-QA-903',
    title: 'Steel Quality Assurance Inspector',
    department: 'Civil Infrastructure',
    location: 'Birmingham, AL, USA'
  },
  {
    refId: 'SNS-2026-PM-330',
    title: 'Project Manager - Residential Highrise',
    department: 'Building Construction',
    location: 'San Francisco, CA, USA'
  },
  {
    refId: 'SNS-2026-EST-774',
    title: 'Senior Estimator - Highways',
    department: 'Civil Infrastructure',
    location: 'Phoenix, AZ, USA'
  },
  {
    refId: 'SNS-2026-SUP-215',
    title: 'Site Superintendent - Hotels & Hospitality',
    department: 'Building Construction',
    location: 'Orlando, FL, USA'
  },
  {
    refId: 'SNS-2026-SAF-882',
    title: 'Tunnel Safety Coordinator',
    department: 'Safety & Compliance',
    location: 'Seattle, WA, USA'
  },
  {
    refId: 'SNS-2026-PRO-114',
    title: 'Supply Chain Analyst',
    department: 'Strategic Supply Chain',
    location: 'Raleigh, NC, USA'
  },
  {
    refId: 'SNS-2026-TUN-401',
    title: 'Tunnel Grouting Inspector',
    department: 'Civil Infrastructure',
    location: 'Chicago, IL, USA'
  },
  {
    refId: 'SNS-2026-CONC-808',
    title: 'Concrete Placing Foreman',
    department: 'Civil Infrastructure',
    location: 'Tampa, FL, USA'
  },
  {
    refId: 'SNS-2026-VDC-992',
    title: 'VDC Director',
    department: 'Emerging Technology',
    location: 'Raleigh, NC, USA'
  },
  {
    refId: 'SNS-2026-PM-125',
    title: 'Assistant Project Manager - Higher Ed',
    department: 'Building Construction',
    location: 'Austin, TX, USA'
  },
  {
    refId: 'SNS-2026-EST-402',
    title: 'Architectural Estimator',
    department: 'Building Construction',
    location: 'St. Louis, MO, USA'
  },
  {
    refId: 'SNS-2026-SUP-810',
    title: 'Civil Superintendent - Dams & Reservoirs',
    department: 'Civil Infrastructure',
    location: 'Sacramento, CA, USA'
  },
  {
    refId: 'SNS-2026-EHS-409',
    title: 'Regional Safety Director',
    department: 'Safety & Compliance',
    location: 'Charlotte, NC, USA'
  },
  {
    refId: 'SNS-2026-PM-501',
    title: 'Senior Project Manager - Hyperscale Data Centers',
    department: 'Building Construction',
    location: 'Bangalore, India'
  },
  {
    refId: 'SNS-2026-ENG-212',
    title: 'Site Engineer - High-Rise Commercial',
    department: 'Building Construction',
    location: 'Mumbai, India'
  },
  {
    refId: 'SNS-2026-EST-309',
    title: 'MEP Estimator - Cleanrooms',
    department: 'Science & Technology',
    location: 'Bangalore, India'
  },
  {
    refId: 'SNS-2026-SUP-411',
    title: 'Senior Superintendent - Mixed-Use Development',
    department: 'Building Construction',
    location: 'New Delhi, India'
  },
  {
    refId: 'SNS-2026-EHS-882',
    title: 'EHS Officer - Infrastructure Projects',
    department: 'Safety & Compliance',
    location: 'Hyderabad, India'
  },
  {
    refId: 'SNS-2026-BIM-315',
    title: 'BIM Modeler - Electrical Systems',
    department: 'Emerging Technology',
    location: 'Bangalore, India'
  },
  {
    refId: 'SNS-2026-SCH-408',
    title: 'Lead Planning Engineer - Transit & Rail',
    department: 'Transit & Rail',
    location: 'Chennai, India'
  },
  {
    refId: 'SNS-2026-QA-772',
    title: 'Quality Lead - Heavy Civil Infrastructure',
    department: 'Civil Infrastructure',
    location: 'Pune, India'
  },
  {
    refId: 'SNS-2026-PM-102',
    title: 'Project Manager - Commercial Offices',
    department: 'Commercial Development',
    location: 'Bangalore, India'
  },
  {
    refId: 'SNS-2026-EST-450',
    title: 'Senior Quantity Surveyor - Highways & Roadways',
    department: 'Civil Infrastructure',
    location: 'New Delhi, India'
  },
  {
    refId: 'SNS-2026-SUP-811',
    title: 'Structural Superintendent - Precast Yard',
    department: 'Civil Infrastructure',
    location: 'Mumbai, India'
  },
  {
    refId: 'SNS-2026-SAF-902',
    title: 'Regional Safety Head - South India',
    department: 'Safety & Compliance',
    location: 'Bangalore, India'
  },
  {
    refId: 'SNS-2026-PRO-314',
    title: 'Supply Chain Analyst - Logistics Hub',
    department: 'Strategic Supply Chain',
    location: 'Chennai, India'
  },
  {
    refId: 'SNS-2026-TUN-704',
    title: 'Tunneling Specialist - Metro Rail',
    department: 'Civil Infrastructure',
    location: 'Kolkata, India'
  },
  {
    refId: 'SNS-2026-CONC-512',
    title: 'Concrete Batching Plant Manager',
    department: 'Civil Infrastructure',
    location: 'Hyderabad, India'
  },
  {
    refId: 'SNS-2026-VDC-881',
    title: 'VDC Coordinator - Biotech Labs',
    department: 'Science & Technology',
    location: 'Pune, India'
  },
  {
    refId: 'SNS-2026-PM-622',
    title: 'Project Manager - Water Treatment Plant',
    department: 'Water & Wastewater',
    location: 'Ahmedabad, India'
  },
  {
    refId: 'SNS-2026-EST-911',
    title: 'Estimation Engineer - Civil Work',
    department: 'Civil Infrastructure',
    location: 'Bangalore, India'
  },
  {
    refId: 'SNS-2026-SUP-551',
    title: 'Finishing Superintendent - High-Rise Residential',
    department: 'Building Construction',
    location: 'Mumbai, India'
  },
  {
    refId: 'SNS-2026-EHS-612',
    title: 'Site Safety Supervisor - Logistics Park',
    department: 'Safety & Compliance',
    location: 'Noida, India'
  }
];

const JobOpenings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLoc, setSelectedLoc] = useState('All');

  useEffect(() => {
    document.title = 'Open Positions | SNS Construction';
  }, []);

  const departments = ['All', ...new Set(jobListings.map((job) => job.department))];
  const locations = ['All', ...new Set(jobListings.map((job) => job.location.split(',')[1]?.trim() || job.location))];

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.refId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    
    const locClean = job.location.split(',')[1]?.trim() || job.location;
    const matchesLoc = selectedLoc === 'All' || locClean === selectedLoc;
    
    return matchesSearch && matchesDept && matchesLoc;
  });

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Careers', path: '/careers' },
    { label: 'Open Positions', path: null },
  ];

  return (
    <div className="jobs-page">
      {/* Hero Header */}
      <section className="jobs-hero-wrapper">
        <div className="jobs-container">
          <div className="jobs-breadcrumbs">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.path ? (
                  <Link href={crumb.path} className="crumb-link">{crumb.label}</Link>
                ) : (
                  <span className="crumb-current">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className="crumb-separator">→</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="jobs-hero-header">
            <h1 className="jobs-hero-title">Open Positions</h1>
            <p className="jobs-hero-subtitle">
              Build your career with SNS Construction. Explore our current career openings across civil infrastructure, buildings, safety, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Jobs List */}
      <section className="jobs-section-wrapper jobs-container">
        <div className="jobs-filter-bar">
          <div className="filter-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by job title or Ref ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="filter-search-input"
            />
          </div>

          <div className="filter-dropdowns">
            <div className="dropdown-wrapper">
              <label>Department</label>
              <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="dropdown-wrapper">
              <label>Location</label>
              <select value={selectedLoc} onChange={(e) => setSelectedLoc(e.target.value)}>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="jobs-list">
          <div className="jobs-list-count">
            Showing {filteredJobs.length} open position{filteredJobs.length === 1 ? '' : 's'}
          </div>

          {filteredJobs.length > 0 ? (
            <div className="jobs-table-wrapper">
              <div className="jobs-table-header">
                <div className="col-ref">Ref ID</div>
                <div className="col-title">Title</div>
                <div className="col-dept">Department</div>
                <div className="col-loc">Location</div>
                <div className="col-action">Action</div>
              </div>
              <div className="jobs-table-body">
                {filteredJobs.map((job) => (
                  <div key={job.refId} className="jobs-table-row">
                    <div className="col-ref"><span className="ref-badge">{job.refId}</span></div>
                    <div className="col-title">{job.title}</div>
                    <div className="col-dept">{job.department}</div>
                    <div className="col-loc">{job.location}</div>
                    <div className="col-action">
                      <a 
                        href={`mailto:careers@snsconstructioninc.com?subject=Application for ${job.title} (${job.refId})`} 
                        className="job-email-link"
                      >
                        Mail us
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="no-jobs-found">
              <h3>No jobs match your search parameters.</h3>
              <p>Try resetting the filters or modifying your search query.</p>
              <button 
                className="reset-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDept('All');
                  setSelectedLoc('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobOpenings;
