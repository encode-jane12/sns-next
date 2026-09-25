"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import './NewsArticle.css';

// Import images to match design
import news1 from '../../assets/images/news_1.png';
import news2 from '../../assets/images/card_development.png';
import news3 from '../../assets/images/hero_worker.png';
import news4 from '../../assets/images/news_2.png';
import news5 from '../../assets/images/card_buildings.png';
import news6 from '../../assets/images/card_infrastructure.png';

// Additional imports for exact matching
import colocationImg from '../../assets/images/project_datacenter_colocation.jpg';
import hyperscaleImg from '../../assets/images/project_datacenter_hyperscale.jpg';
import climateImg from '../../assets/images/parks_ny_climate.jpg';
import stadiumImg from '../../assets/images/sports_alamodome.jpg';
import constrImg from '../../assets/images/hero_construction.png';
import news3Img from '../../assets/images/news_3.png';
import waterImg from '../../assets/images/project_dc_water.jpg';

const articleData = {
  'fuel-swap-sustainability': {
    title: 'A fuel swap on two SNS Construction projects generates big emission savings',
    tag: 'SUSTAINABILITY',
    date: 'September 18, 2026',
    image: "https://images.pexels.com/photos/19938251/pexels-photo-19938251.jpeg",
    intro: 'According to the World Green Building Council, the building and construction industry is responsible for 39 percent of all global carbon emissions. At SNS Construction, we’re aiming to change that with our 2030 goal to achieve net-zero carbon operations.',
    content: [
      {
        heading: 'Alternative Fuel Choices',
        text: 'To accelerate carbon reduction on active jobsites, our project teams in major urban centers have swapped traditional fossil diesel for Renewable Diesel (HVO100) across all heavy excavators, cranes, and temporary generators. By partnering with local biofuels distributors, we established bulk on-site storage tanks, securing a clean fuel supply throughout the construction phase.'
      },
      {
        heading: 'On-Site Fuel Performance',
        text: 'The transition required zero mechanical modifications to our diesel engines. Field performance testing verified that equipment maintained identical horsepower output and duty cycles. The fuel swap resulted in a direct 85% reduction in particulate matter emissions and up to a 90% reduction in lifecycle greenhouse gas emissions compared to standard petroleum diesel.'
      },
      {
        heading: 'Pioneering Greener Supply Chains',
        text: 'Implementing renewable diesel on high-profile commercial developments demonstrates that decarbonization is achievable today. We are sharing our logistics blueprints and emissions reporting methodologies with subcontractors and suppliers to foster industry-wide adoption of low-carbon fuels.'
      }
    ],
    quote: "Swapping fossil fuels for renewable diesel is a highly effective operational shift that allows us to decrease site emissions immediately without waiting for equipment electrification.",
    quoteAuthor: "Vikramaditya Rao, VP of Project Execution, Strategic Supply Chain"
  },
  'wake-tech-sustainability': {
    title: 'Wake Tech’s new East Campus runs on sustainable Central Energy Plant',
    tag: 'SUSTAINABILITY',
    date: 'August 28, 2026',
    image: "https://images.pexels.com/photos/35425754/pexels-photo-35425754.jpeg",
    intro: 'The recently completed Central Energy Plant (CEP) at Wake Tech Community College’s new East Campus delivers both a groundbreaking sustainable energy solution, as well as an immersive learning environment for students.',
    content: [
      {
        heading: 'Geothermal HVAC Integration',
        text: 'The heart of the new East Campus is an advanced geothermal closed-loop network. Our crews drilled and tubed 120 geothermal boreholes to a depth of 500 feet, tapping into the Earth’s constant temperature to reject heat in summer and extract it during winter. This central loop powers highly efficient water-source heat pumps, lowering mechanical energy usage by 40%.'
      },
      {
        heading: 'Thermal Energy Storage',
        text: 'To minimize peak electrical demands, the plant integrates ice storage cells. During off-peak night hours, chillers freeze water in specialized containment cells. During peak afternoon heat, this ice melts to cool the campus, taking pressure off the municipal grid and lowering operational energy costs.'
      },
      {
        heading: 'Teaching through Architecture',
        text: 'The plant doubles as a classroom. We built the facility with glazed transparent partitions and color-coded mechanical piping, allowing students in the college’s HVAC and sustainability programs to observe chilled water loops, valves, and control panels in real-time operation.'
      }
    ],
    quote: "Wake Tech CEP showcases how infrastructure can simultaneously serve as a high-performance sustainability solution and a practical educational laboratory.",
    quoteAuthor: "Bryan Northrop, President, Buildings Division"
  },
  'women-in-construction': {
    title: 'Women in Construction Week: Highlighting careers, mentorship, and opportunities',
    tag: 'PEOPLE SHOWCASE',
    date: 'March 8, 2026',
    image: "https://images.pexels.com/photos/8486903/pexels-photo-8486903.jpeg",
    intro: 'Careers in construction are built over time, shaped by pivotal moments, trusted mentors and the willingness to take on new challenges. In recognition of Women in Construction Week, we’re highlighting women across our regional offices.',
    content: [
      {
        heading: 'Leading from the Field',
        text: 'From managing logistics on hyperscale data center projects to enforcing safety standards on regional transit bridges, women at SNS Construction are leading major operations. We profile superintendents, field engineers, and project executives who discuss their paths, key milestones, and the rewards of seeing their efforts shape local skylines.'
      },
      {
        heading: 'The Mentorship Pipeline',
        text: 'Mentorship is essential to professional growth. SNS Construction sponsors internal resource networks that pair junior coordinators with senior directors. These mentorship links foster peer support, resource sharing, and professional development, ensuring our next generation of leaders has clear career trajectories.'
      },
      {
        heading: 'An Inclusive Safety Culture',
        text: 'An important aspect of inclusion is jobsite ergonomics and safety gear. We work closely with safety manufacturers to supply diverse PPE options, including custom-fit safety harnesses and high-visibility gear, ensuring every craft professional operates comfortably and safely on our sites.'
      }
    ],
    quote: "Building a supportive environment where women thrive in field leadership roles is critical to solving our industry's labor and innovation demands.",
    quoteAuthor: "Mendy Mazzo, Corporate Lead, Inclusion & Diversity"
  },
  'leukemia-lymphoma-partnership': {
    title: 'Reaching $500,000: Inside our teams\' partnership with the Leukemia & Lymphoma Society',
    tag: 'INCLUSION & DIVERSITY',
    date: 'June 12, 2026',
    image: "https://images.pexels.com/photos/7723555/pexels-photo-7723555.jpeg",
    intro: 'Approximately every three minutes, one person globally is diagnosed with leukemia, lymphoma or myeloma. Our project teams and regional offices partnered to raise half a million dollars to support life-saving research.',
    content: [
      {
        heading: 'The Light The Night Campaigns',
        text: 'Across our national footprint, SNS employees and their families organized regional charity walks under the Leukemia & Lymphoma Society (LLS) Light The Night banner. Carrying symbolic lanterns, our teams raised awareness and gathered critical funding to support leukemia and lymphoma patients and their families.'
      },
      {
        heading: 'Corporate Matching and Volunteer Hours',
        text: 'To maximize impact, SNS Construction provided corporate matching for all individual employee donations. Additionally, we offered employees paid volunteer hours to help coordinate fundraising events, corporate golf tournaments, and community charity auctions.'
      },
      {
        heading: 'Bridging Safety Milestones and Giving',
        text: 'Several megaprojects tied project safety milestones directly to our LLS charity drive. For every 100,000 hours worked without a recordable incident, projects received dedicated company donations. This integrated initiative connected our focus on site safety with global community support.'
      }
    ],
    quote: "Reaching this milestone shows the commitment of our field teams, who work every day to build not just projects, but stronger, healthier communities.",
    quoteAuthor: "Danielle O'Connell, Senior Director, Emerging Technology"
  },
  'pioneering-ai-design': {
    title: 'Pioneering AI in structural design and engineering',
    tag: 'INNOVATION',
    date: 'May 15, 2026',
    image: "https://images.pexels.com/photos/18069816/pexels-photo-18069816.png",
    intro: 'By leveraging machine learning algorithms, our engineering teams are reducing material waste and optimizing structural integrity on large-scale commercial developments.',
    content: [
      {
        heading: 'Algorithmic Slab Optimization',
        text: 'We are deploying machine learning models to analyze load distributions and optimize concrete slab designs. The algorithms evaluate thousands of structural iterations, placing concrete and steel rebar only where load requirements demand it, resulting in a 15% reduction in total concrete mass.'
      },
      {
        heading: 'Automated Clash Detection',
        text: 'Coordination between structural steel and mechanical, electrical, and plumbing (MEP) systems is traditionally a labor-intensive review process. Generative AI tools now analyze our 3D model arrays to spot and automatically resolve geometry conflicts, saving weeks of preconstruction design coordination.'
      },
      {
        heading: 'Embodied Carbon Analysis',
        text: 'The AI model calculates the environmental impact of design options in real-time. By computing carbon footprints of alternative steel and concrete mixtures early, we help project owners make data-backed design decisions that lower the building\'s lifecycle environmental footprint.'
      }
    ],
    quote: "Integrating machine learning into structural modeling allows us to design high-performance, sustainable structures with speed and accuracy.",
    quoteAuthor: "Stewart Germain, Director of Innovation"
  },
  'stronger-local-communities': {
    title: 'Building stronger local communities through infrastructure investment',
    tag: 'COMMUNITY',
    date: 'April 20, 2026',
    image: "https://images.pexels.com/photos/34956479/pexels-photo-34956479.jpeg",
    intro: 'Our latest bridge replacement project isn’t just about transit—it’s about reconnecting divided neighborhoods and fostering local economic growth.',
    content: [
      {
        heading: 'Designing for Pedestrians',
        text: 'In infrastructure projects, passenger vehicles are no longer the single focus. Our civil design incorporates wide pedestrian sidewalks, protected bike lanes, and landscaped rest areas, transforming a simple river crossing into an inviting public connection.'
      },
      {
        heading: 'Supporting Local Subcontractors',
        text: 'We are committed to maximizing local business involvement. On our civil projects, we set targets to award 25% of subcontractor packages to certified local, minority, and women-owned business enterprises (MWBEs), helping recycle public investments back into the immediate community.'
      },
      {
        heading: 'Minimizing Community Disruption',
        text: 'Building near residential areas requires careful planning. We utilize advanced acoustical shields, specify low-noise equipment, and schedule heavy utility cutovers during weekend-only shifts, keeping local traffic flowing and protecting neighborhood quality of life.'
      }
    ],
    quote: "Infrastructure projects should leave a lasting positive legacy, improving mobility while strengthening the local economic fabric of the communities we serve.",
    quoteAuthor: "Brian Gallagher, Vice President, Project Controls"
  },
  'ai-agents': {
    title: 'Construction Companies See Promise in AI Agents',
    tag: 'EMERGING TECHNOLOGY',
    date: 'August 15, 2026',
    image: "https://images.pexels.com/photos/8470776/pexels-photo-8470776.jpeg",
    intro: 'New AI tools are helping managers stay on top of the complex processes underpinning an exploding sector.',
    content: [
      {
        heading: 'Intelligent Scheduling & Logistics',
        text: 'As construction projects grow in size and complexity, especially in high-demand sectors like mission-critical data centers, scheduling has become a monumental challenge. AI agents are stepping in to help project managers analyze thousands of variables simultaneously.'
      }
    ],
    quote: "AI isn't replacing our builders; it's giving them a supercharged second set of eyes to anticipate risks before they impact the schedule.",
    quoteAuthor: "Danielle O'Connell, Senior Director, Emerging Technology"
  },
  'data-future': {
    title: 'Meet the individuals powering our data future',
    tag: 'INNOVATION',
    date: 'July 22, 2026',
    image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg",
    intro: "SNS Construction's digital and transformation solutions team is helping project teams work smarter—connecting information, reducing manual effort, and enabling faster, data-driven decisions.",
    content: [
      {
        heading: 'Connecting the Office and the Field',
        text: "Building the future of infrastructure requires breaking down the barriers between design suites and job site execution. Our Digital and Transformation Solutions team works directly with field engineers to deploy user-friendly dashboards."
      }
    ],
    quote: "By standardizing how we collect and analyze project telemetry, we turn raw data into a reliable guide for project execution.",
    quoteAuthor: "Stewart Germain, Director of Innovation"
  },
  'tapping-possibilities': {
    title: 'Tapping into the possibilities of construction technology',
    tag: 'EMERGING TECHNOLOGY',
    date: 'June 10, 2026',
    image: "https://images.pexels.com/photos/35885303/pexels-photo-35885303.jpeg",
    intro: 'The construction industry is evolving at a rapid pace, driven by innovative technologies that enhance safety, productivity and efficiency on jobsites.',
    content: [
      {
        heading: 'Visualizing Builds in Mixed Reality',
        text: "Mixed reality is bridging the gap between flat blueprints and three-dimensional reality. Using headsets like Microsoft HoloLens, our field layout teams overlay digital BIM models directly onto physical workspaces."
      }
    ],
    quote: "Reality capture tools take the guesswork out of coordination, allowing us to align design intent and site reality in real-time.",
    quoteAuthor: "Brian Gallagher, Vice President, Project Controls"
  },
  'unlocking-insights': {
    title: 'Unlocking business insights with data',
    tag: 'EMERGING TECHNOLOGY',
    date: 'April 5, 2026',
    image: "https://images.pexels.com/photos/39052113/pexels-photo-39052113.jpeg",
    intro: "Data isn't just a buzzword at SNS Construction. We must continually innovate and implement new and efficient ways of working that support our people and exceed our clients' expectations.",
    content: [
      {
        heading: 'Aggregating Historical Performance',
        text: "With decades of experience delivering complex infrastructure, SNS Construction sits on a goldmine of historical data. Our business intelligence team builds models that analyze past estimating accuracy."
      }
    ],
    quote: "Predictive data models allow us to turn years of build experience into foresight, helping our clients navigate volatile supply chains.",
    quoteAuthor: "Will Senner, Senior Vice President, Preconstruction"
  },
  'aviation-ground-infrastructure': {
    title: 'The next era of aviation starts on the ground',
    tag: 'SUSTAINABILITY',
    date: 'January 22, 2026',
    image: "https://images.pexels.com/photos/38206561/pexels-photo-38206561.jpeg",
    intro: 'Aviation is one of the most transformative innovations in modern history. What began as an extraordinary feat of engineering has evolved into the backbone of global commerce.',
    content: [
      {
        heading: 'Electrifying Terminals',
        text: 'Decarbonizing aviation involves more than just sustainable aviation fuel (SAF). It requires complete electrification of airport ground infrastructure, electric bus fleets, and high-performance terminal substations.'
      }
    ],
    quote: "Ground operations are the low-hanging fruit of aviation sustainability, and terminal modernization is leading the charge.",
    quoteAuthor: "Brian Gallagher, Vice President, Project Controls"
  },
  'metlife-stadium-transformation': {
    title: 'Behind the transformation: How MetLife Stadium prepared for the World Cup',
    tag: 'PROJECT CASE STUDY',
    date: 'February 15, 2026',
    image: "https://images.pexels.com/photos/37805303/pexels-photo-37805303.jpeg",
    intro: 'When millions of fans around the world tuned in to watch the World Cup Final at MetLife Stadium, they saw the world\'s biggest sporting event unfold on soccer\'s grandest stage.',
    content: [
      {
        heading: 'Revising Stadium Geometry',
        text: 'Meeting international soccer dimensions required removing low-tier concrete corner structures and installing advanced retractable seating arrays, managed under tight structural schedules.'
      }
    ],
    quote: "Adapting an active NFL stadium to international specifications under tight seasonal windows was a masterclass in modular planning.",
    quoteAuthor: "Bryan Northrop, President, Buildings Division"
  },
  'next-generation-jobsite': {
    title: 'The next generation has entered the jobsite',
    tag: 'PEOPLE SHOWCASE',
    date: 'April 10, 2026',
    image: "https://images.pexels.com/photos/9300985/pexels-photo-9300985.jpeg",
    intro: 'Construction is evolving fast — from AI and digital tools to sustainability expectations and new workforce priorities.',
    content: [
      {
        heading: 'Digital Natives in Field Engineering',
        text: 'Today\'s young professionals step onto jobsites equipped with high fluency in cloud modeling, predictive analytics, and digital layouts, driving technology adoption.'
      }
    ],
    quote: "Connecting veteran craft expertise with digital native engineering speeds up our field operational efficiencies.",
    quoteAuthor: "Mendy Mazzo, Corporate Lead, Inclusion & Diversity"
  },
  'career-lessons-construction': {
    title: 'Lessons from a 41-year career in construction',
    tag: 'PEOPLE SHOWCASE',
    date: 'May 3, 2026',
    image: "https://images.pexels.com/photos/5583617/pexels-photo-5583617.jpeg",
    intro: 'After a 41-year career in construction, SNS Construction leadership reflects on the lessons that shaped his leadership, the people who influenced him and why he remains optimistic.',
    content: [
      {
        heading: 'Mentorship and Safety Commitments',
        text: 'Decades of experience verify that safety is not just a policy—it is a personal commitment. Mentoring craft workers and keeping jobsites clean are the absolute foundations of build quality.'
      }
    ],
    quote: "Buildings are made of concrete and steel, but successful construction companies are built entirely on trust and relationships.",
    quoteAuthor: "Bryan Northrop, President, Buildings Division"
  },
  'metro-rail-expansion': {
    title: 'Expanding transit access: Mumbai Metro Line 3 reaches milestone',
    tag: 'CIVIL INFRASTRUCTURE',
    date: 'July 15, 2026',
    image: "https://images.pexels.com/photos/35172564/pexels-photo-35172564.jpeg",
    intro: 'Our tunneling crews have completed the final breakthrough on Mumbai Metro Line 3, linking major commercial districts with residential corridors.',
    content: [
      {
        heading: 'Slab and Tunnel Engineering',
        text: 'The underground line spans dense urban zones, demanding high-precision boring machines and real-time acoustic monitors to protect foundations of historic street blocks.'
      }
    ],
    quote: "Metro rail systems are the key to clean, efficient, and reliable urban transit for India's growing cities.",
    quoteAuthor: "Vikramaditya Rao, VP of Project Execution"
  },
  'decarbonized-materials': {
    title: 'SNS Construction pledges 100% low-carbon concrete by 2030',
    tag: 'SUSTAINABILITY',
    date: 'October 5, 2026',
    image: "https://images.pexels.com/photos/7108785/pexels-photo-7108785.jpeg",
    intro: 'Cement production is a primary carbon driver. We are partnering with raw materials manufacturers to scale up low-carbon cement replacements across all national builds.',
    content: [
      {
        heading: 'Innovative Cement Replacements',
        text: 'By mixing slag, fly ash, and calcined clays into our concrete batches, we reduce the chemical emissions associated with traditional clinker production.'
      }
    ],
    quote: "Low-carbon concrete is the single largest materials leverage point we have to lower embodied emissions.",
    quoteAuthor: "Stewart Germain, Director of Innovation"
  },
  'safety-innovation-tech': {
    title: 'Deploying wearable IoT sensors to monitor jobsite heat safety',
    tag: 'SAFETY & COMPLIANCE',
    date: 'August 1, 2026',
    image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg",
    intro: 'To protect our craft workforce during peak summer heat waves, we are field-testing smart helmet inserts that track body temperatures and trigger breaks.',
    content: [
      {
        heading: 'Wearable Biosensors',
        text: 'Smart sensor inserts fit into standard hard hats, transmitting real-time heart rate and skin temperature measurements to safety superintendents.'
      }
    ],
    quote: "Wearable tech turns reactive safety policies into real-time health preservation.",
    quoteAuthor: "Vikramaditya Rao, VP of Project Execution"
  },
  'supply-chain-predictive': {
    title: 'Bypassing material shortages through predictive global logistics',
    tag: 'INNOVATION',
    date: 'September 10, 2026',
    image: "https://images.pexels.com/photos/10900608/pexels-photo-10900608.jpeg",
    intro: 'By coordinating early bulk reserves of structural timber and glass packages, our supply chain team bypassed recent maritime shipping disruptions.',
    content: [
      {
        heading: 'Forecasting Global Congestion',
        text: 'Using data models that scan cargo routes and port congestion metrics, our planners identified bottlenecks 6 months in advance, prompting rerouting packages.'
      }
    ],
    quote: "Supply chain certainty is the foundation of construction schedule certainty.",
    quoteAuthor: "Vikramaditya Rao, VP of Project Execution"
  },
  'youth-in-civil-engineering': {
    title: 'Inspiring local students through our hands-on builder internships',
    tag: 'PEOPLE SHOWCASE',
    date: 'July 30, 2026',
    image: "https://images.pexels.com/photos/8961624/pexels-photo-8961624.jpeg",
    intro: 'We welcomed 120 summer interns across our regional offices, introducing the next generation of engineers to high-performance BIM modeling and field operations.',
    content: [
      {
        heading: 'Hands-on Learning',
        text: 'Interns spend half their rotations on site, shadowing superintendents, surveying structures, and assisting with daily safety briefings.'
      }
    ],
    quote: "Investing in youth development is the best way to secure our industry's long-term capability.",
    quoteAuthor: "Mendy Mazzo, Corporate Lead, Inclusion & Diversity"
  },
  'wind-energy-grid': {
    title: 'SNS Construction delivers foundation grid for offshore wind array',
    tag: 'SUSTAINABILITY',
    date: 'June 18, 2026',
    image: "https://images.pexels.com/photos/36622717/pexels-photo-36622717.jpeg",
    intro: 'Our ports and marine team has completed offshore foundations for a major wind farm off the northeast coast, delivering clean energy capacity to 200,000 homes.',
    content: [
      {
        heading: 'Offshore Foundation Construction',
        text: 'Crews placed heavy steel monopiles into deep seabeds using specialized heavy-lift jack-up rigs, meeting tight marine environmental tolerances.'
      }
    ],
    quote: "Offshore wind represents the future of clean energy infrastructure, and we are proud to lay the foundation.",
    quoteAuthor: "Brian Gallagher, Vice President, Project Controls"
  }
};

const NewsArticle = () => {
  const { articleSlug } = useParams();
  const article = articleData[articleSlug];

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | SNS Construction`;
    } else {
      document.title = 'Article Not Found | SNS Construction';
    }
  }, [article]);

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="article-not-found-container">
          <h2>Article Not Found</h2>
          <p>We couldn't find the article you are looking for.</p>
          <Link href="/" className="back-to-tech-btn">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Media', path: '/media' },
    { label: article.tag, path: null }
  ];

  return (
    <div className="news-article-page">
      {/* Breadcrumbs */}
      <div className="article-breadcrumbs article-container">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {crumb.path ? (
              <Link href={crumb.path} className="crumb-link">{crumb.label}</Link>
            ) : (
              <span className="crumb-current">{crumb.label}</span>
            )}
            {idx < breadcrumbs.length - 1 && <span className="crumb-separator">/</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Hero Header */}
      <section className="article-hero-section article-container">
        <div className="article-tag">{article.tag}</div>
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          <span className="article-date">{article.date}</span>
        </div>
        <p className="article-intro-para">{article.intro}</p>
      </section>

      {/* Main Image */}
      <div className="article-hero-image-wrapper article-container">
        <img src={(article.image)?.src || (article.image)} alt={article.title} />
      </div>

      {/* Content & Quote */}
      <section className="article-content-section article-container">
        <div className="article-grid">
          {/* Left Column: Article Text */}
          <div className="article-text-column">
            {article.content.map((sec, idx) => (
              <div key={idx} className="article-section-block">
                <h2>{sec.heading}</h2>
                <p>{sec.text}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Quote & Back button */}
          <div className="article-sidebar-column">
            <blockquote className="article-quote">
              <p>"{article.quote}"</p>
              <cite>— {article.quoteAuthor}</cite>
            </blockquote>

            <div className="back-link-wrapper">
              <Link href="/media" className="back-link">
                <span className="back-arrow">←</span> Back to Media
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsArticle;
