import heroImg from "../../assets/images/williamsburg_new_york.jpg";
import featuredImg from "../../assets/images/project_montgomery.jpg";
import proj1Img from "../../assets/images/card_infrastructure.png";
import proj2Img from "../../assets/images/project_datacenter_colocation.jpg";
import proj3Img from "../../assets/images/card_buildings.png";

import sector1Img from "../../assets/images/higher_ed_academic.jpg";
import sector2Img from "../../assets/images/healthcare_patient.jpg";
import sector3Img from "../../assets/images/card_infrastructure.png";
import sector4Img from "../../assets/images/st_cleanrooms.png";

import contact1Img from "../../assets/images/mendy_mazzo.jpg";
import contact2Img from "../../assets/images/bryan_northrop.jpg";
import contact3Img from "../../assets/images/christopher_westley.png";
import contact4Img from "../../assets/images/tieg_murray.jpg";

export const LOCATION_DATA = {
  canada: {
    name: "Canada",
    established: "Since 1995",
    heroIntro:
      "Delivering sustainable infrastructure and urban mass transit solutions across Canada.",
    notableIntro:
      "Partnering with public agencies to execute complex underground tunneling and transit megaprojects in major Canadian cities.",
    mainImg: "https://i.ibb.co/nqXqsHFp/Canada.jpg",
    featuredProject: {
      title: "Ontario Line Subway",
      location: "Toronto, Ontario",
      image: "https://i.ibb.co/8DqCjyRF/Ontario-Line-Subway.jpg",
    },
    projects: [
      {
        title: "Subway Station Cavern Excavation",
        location: "Toronto, Canada",
        image: "https://i.ibb.co/GQDB6LRq/Subway-Station-Cavern-Excavation.jpg",
      },
      {
        title: "Regional Infrastructure Hub",
        location: "Vancouver, Canada",
        image: "https://i.ibb.co/d44mdSPM/Regional-Infrastructure-Hub.jpg",
      },
      {
        title: "High-Speed Rail Feasibility",
        location: "Montreal, Canada",
        image: "https://i.ibb.co/S7v0BqxF/High-Speed-Rail-Feasibility.jpg",
      },
    ],
    sectors: [
      {
        name: "Transit & Rail",
        image: "https://i.ibb.co/n8Mp8PMM/Transit-Rail-canada.jpg",
      },
      {
        name: "Tunneling",
        image: "https://i.ibb.co/5gfb7d28/Tunneling-canada.jpg",
      },
      {
        name: "Infrastructure",
        image: "https://i.ibb.co/ksCh65Dx/Infrastructure-canada.jpg",
      },
      {
        name: "Commercial Offices",
        image: "https://i.ibb.co/QjnNW7Ss/Commercial-Offices-canada.jpg",
      },
    ],
  },

  "united-kingdom": {
    name: "United Kingdom",
    established: "Since 2002",
    heroIntro:
      "Building critical rail infrastructure, aviation hubs, and commercial spaces across the UK.",
    notableIntro:
      "Our European operational headquarters in London drives complex civil and commercial EPC projects.",
    mainImg: "https://i.ibb.co/XZtNRxXz/United-Kingdom.jpg",
    featuredProject: {
      title: "London Transatlantic Hub",
      location: "London, UK",
      image: "https://i.ibb.co/Kp8ck9Qt/London-Transatlantic-Hub.jpg",
    },
    projects: [
      {
        title: "HS2 Viaducts",
        location: "Birmingham, UK",
        image: "https://i.ibb.co/svbth9hs/HS2-Viaducts.jpg",
      },
      {
        title: "London Port Expansion",
        location: "London, UK",
        image: "https://i.ibb.co/fVpwPRzB/London-Port-Expansion.jpg",
      },
      {
        title: "Commercial Tech Park",
        location: "Manchester, UK",
        image: "https://i.ibb.co/XxbLgcjL/Commercial-Tech-Park.jpg",
      },
    ],
    sectors: [
      {
        name: "Commercial Offices",
        image: "https://i.ibb.co/vx8fHK4F/commercial-officies-in-uk.jpg",
      },
      {
        name: "High-Speed Rail",
        image: "https://i.ibb.co/217GYhPh/High-Speed-Rail-in-uk.jpg",
        isLarge: true,
      },
      {
        name: "Aviation",
        image: "https://i.ibb.co/qLqSBF4F/Aviation-in-uk.jpg",
      },
      {
        name: "Port Logistics",
        image: "https://i.ibb.co/hFh1hVqG/Port-Logistics-in-uk.jpg",
      },
    ],
  },

  germany: {
    name: "Germany",
    established: "Since 2005",
    heroIntro:
      "Leading Germany’s energy transition and next-generation rail networks.",
    notableIntro:
      "Spearheading the German Hydrogen Core Network and major rail node reconstructions like Stuttgart 21.",
    mainImg: "https://i.ibb.co/kV3wBrRB/Germany.jpg",
    featuredProject: {
      title: "Stuttgart 21 Rail Project",
      location: "Stuttgart, Germany",
      image: "https://i.ibb.co/sJDBCJnN/Stuttgart-21-Rail-Project.jpg",
    },
    projects: [
      {
        title: "German Hydrogen Core Network",
        location: "Ruhr, Germany",
        image: "https://i.ibb.co/9mJdyJDx/German-Hydrogen-Core-Network.jpg",
      },
      {
        title: "LNG Terminal Brunsbüttel",
        location: "Brunsbüttel, Germany",
        image: "https://i.ibb.co/rGbxkxJG/LNG-Terminal-Brunsb-ttel.jpg",
      },
      {
        title: "Paris–Berlin High-Speed Link",
        location: "Cross-border",
        image: "https://i.ibb.co/4Z73g0rh/Paris-Berlin-High-Speed-Link.jpg",
      },
    ],
    sectors: [
      {
        name: "Energy Transition",
        image: "https://i.ibb.co/0yxdc6nr/Energy-Transition-Germany.jpg",
      },
      {
        name: "Green Hydrogen",
        image: "https://i.ibb.co/9Hjm6nQ9/Green-Hydrogen-Germany.jpg",
        isLarge: true,
      },
      {
        name: "Rail Infrastructure",
        image: "https://i.ibb.co/ZpMDbch0/Rail-Infrastructure-Germany.jpg",
      },
      {
        name: "Commercial Development",
        image: "https://i.ibb.co/1YmsnX7f/Commercial-Development-Germany.jpg",
      },
    ],
  },

  "united-arab-emirates": {
    name: "United Arab Emirates",
    established: "Since 2004",
    heroIntro:
      "Transforming the Middle Eastern landscape with megaterminals, ports, and smart transit.",
    notableIntro:
      "Operating out of Dubai, delivering critical aviation infrastructure and mass transit urban precincts.",
    mainImg: "https://i.ibb.co/WNbrX88F/United-Arab-Emirates.jpg",
    featuredProject: {
      title: "Al Maktoum International Airport Expansion",
      location: "Dubai, UAE",
      image:
        "https://i.ibb.co/6JcbTQG8/Al-Maktoum-International-Airport-Expansion.png",
    },
    projects: [
      {
        title: "Dubai Metro Blue Line Precincts",
        location: "Dubai, UAE",
        image: "https://i.ibb.co/1YjRzTT4/Dubai-Metro-Blue-Line-Precincts.jpg",
      },
      {
        title: "Abu Dhabi Logistics Hub",
        location: "Abu Dhabi, UAE",
        image: "https://i.ibb.co/XxHvQ374/Abu-Dhabi-Logistics-Hub.png",
      },
      {
        title: "Deep-water Port Facility",
        location: "Sharjah, UAE",
        image: "https://i.ibb.co/MkWgzmBj/Deep-water-Port-Facility.png",
      },
    ],
    sectors: [
      { name: "Aviation", image: "https://i.ibb.co/GQK7HdhM/Aviation-uae.jpg" },
      {
        name: "Maritime Logistics",
        image: "https://i.ibb.co/cKqzspnV/Maritime-Logistics-uae.jpg",
      },
      {
        name: "Mass Transit",
        image: "https://i.ibb.co/5ggYvDWd/Mass-Transit-uae.jpg",
      },
      {
        name: "Smart Cities",
        image: "https://i.ibb.co/3YY7RkGZ/Smart-Cities-uae.jpg",
      },
    ],
  },

  india: {
    name: "India",
    established: "Since 2009",
    heroIntro:
      "Spearheading South Asia’s modern infrastructure expansion from our regional hub in Bangalore.",
    notableIntro:
      "Engineering the nation’s largest megaprojects, from bullet train viaducts and international airports to high-density tech parks and green energy corridors.",
    mainImg: "https://i.ibb.co/hRGBFN83/India.jpg",
    featuredProject: {
      title: "Mumbai–Ahmedabad High-Speed Rail",
      location: "Maharashtra & Gujarat, India",
      image: "https://i.ibb.co/F49Rm41d/Mumbai-Ahmedabad-High-Speed-Rail.jpg",
    },
    projects: [
      {
        title: "Noida International Airport",
        location: "Jewar, UP",
        image: "https://i.ibb.co/xt64BjyY/Noida-International-Airport.png",
      },
      {
        title: "Dharavi Redevelopment Project",
        location: "Mumbai, Maharashtra",
        image: "https://i.ibb.co/jPWNv3Gg/Dharavi-Redevelopment-Project.png",
      },
      {
        title: "BPCL Bina Refinery Expansion",
        location: "Bina, Madhya Pradesh",
        image: "https://i.ibb.co/1t6TYCg5/BPCL-Bina-Refinery-Expansion.png",
      },
    ],
    sectors: [
      {
        name: "Mass Transit & Rail",
        image: "https://i.ibb.co/8nbfCHvp/Mass-Transit-Rail-india.png",
      },
      {
        name: "Smart Cities & SEZs",
        image: "https://i.ibb.co/p633fffM/Smart-Cities-SEZs-india.jpg",
        isLarge: true,
      },
      {
        name: "Energy & Industrial",
        image: "https://i.ibb.co/YFfb6yhy/Energy-Industrial-india.jpg",
      },
      {
        name: "Aviation & Ports",
        image: "https://i.ibb.co/6J0rBbg7/Aviation-Ports-india.png",
      },
    ],
  },

  mexico: {
    name: "Mexico",
    established: "Since 2009",
    heroIntro:
      "Accelerating Mexico’s next era of mobility, energy, and urban transformation through resilient infrastructure delivery.",
    notableIntro:
      "Advancing Mexico’s mobility, energy, and urban renewal priorities through resilient public-private delivery across strategic corridors.",
    mainImg: "https://i.ibb.co/SX0hNGDy/Mexico.jpg",
    featuredProject: {
      title: "Felipe Ángeles International Airport",
      location: "State of Mexico, Mexico",
      image:
        "https://i.ibb.co/2376qVLm/Felipe-ngeles-International-Airport.jpg",
    },
    projects: [
      {
        title: "Tren Maya",
        location: "Yucatán, Quintana Roo, Campeche, Chiapas, Mexico",
        image: "https://i.ibb.co/xKrWG4vx/Tren-Maya.jpg",
      },
      {
        title: "Mexico City Metro Line 3 Expansion",
        location: "Mexico City, Mexico",
        image:
          "https://i.ibb.co/zWMJLZ7k/Mexico-City-Metro-Line-3-Expansion.jpg",
      },
      {
        title: "Monterrey Metro Line 4",
        location: "Monterrey, Nuevo León, Mexico",
        image: "https://i.ibb.co/wkn7DxH/Monterrey-Metro-Line-4.jpg",
      },
    ],
    sectors: [
      {
        name: "Regional Rail",
        image: "https://i.ibb.co/3y1fQ5Rz/Regional-Rail-Mexico.jpg",
      },
      {
        name: "Urban Mobility",
        image: "https://i.ibb.co/PvhWy3sc/Urban-Mobility-Mexico.jpg",
        isLarge: true,
      },
      {
        name: "Commercial Development",
        image: "https://i.ibb.co/WWBdTrNR/Commercial-Development-Mexico.jpg",
      },
      {
        name: "Infrastructure & Public Works",
        image:
          "https://i.ibb.co/tMFfxyxQ/Infrastructure-Public-Works-Mexico.jpg",
      },
    ],
  },

  brazil: {
    name: "Brazil",
    established: "Since 2009",
    heroIntro:
      "Supporting Brazil’s growth with resilient transport, clean-energy, water and urban infrastructure that connects communities and strengthens regional economies.",
    notableIntro:
      "From São Paulo’s new metro capacity to major renewable-energy and sanitation investments, Brazil’s construction pipeline is reshaping how people and goods move across the country.",
    mainImg:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80",
    featuredProject: {
      title: "São Paulo Metro Line 6–Orange",
      location: "São Paulo, São Paulo, Brazil",
      image: "https://i.ibb.co/hJjmxdxG/S-o-Paulo-Metro-Line-6-Orange.jpg",
    },
    projects: [
      {
        title: "Rio-Niterói Bridge",
        location: "Rio de Janeiro and Niterói, Rio de Janeiro, Brazil",
        image: "https://i.ibb.co/gbpR5pCf/Rio-Niter-i-Bridge.jpg",
      },
      {
        title: "São Paulo–Guarulhos Airport People Mover",
        location: "São Paulo and Guarulhos, São Paulo, Brazil",
        image:
          "https://i.ibb.co/60ZPyHtx/S-o-Paulo-Guarulhos-Airport-People-Mover.jpg",
      },
      {
        title: "Belo Monte Hydroelectric Power Plant",
        location: "Altamira, Pará, Brazil",
        image:
          "https://i.ibb.co/4n8vR32x/Belo-Monte-Hydroelectric-Power-Plant.jpg",
      },
    ],
    sectors: [
      {
        name: "Urban Transit",
        image: "https://i.ibb.co/mVBhQW4P/Urban-Transit-brazil.jpg",
      },
      {
        name: "Renewable Energy & Hydropower",
        image:
          "https://i.ibb.co/DFfY2Gz/Renewable-Energy-Hydropower-brazil.jpg",
        isLarge: true,
      },
      {
        name: "Airports & Aviation Infrastructure",
        image:
          "https://i.ibb.co/tTk3cdHP/Airports-Aviation-Infrastructure-brazil.jpg",
      },
      {
        name: "Water, Sanitation & Public Works",
        image:
          "https://i.ibb.co/KjJrw2bX/Water-Sanitation-Public-Works-brazil.jpg",
      },
    ],
  },

  netherlands: {
    name: "Netherlands",
    established: "Since 2005",
    heroIntro:
      "Delivering resilient transport, water, and energy infrastructure that supports the Netherlands’ growth and climate ambitions.",
    notableIntro:
      "From Amsterdam and Rotterdam to the North Sea corridor, we support landmark Dutch projects across rail, flood resilience, offshore wind, logistics, and urban development.",
    mainImg:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80",
    featuredProject: {
      title: "Zuidasdok Amsterdam",
      location: "Amsterdam, Netherlands",
      image: "https://i.ibb.co/kVgKKLy7/Zuidasdok-Amsterdam.jpg",
    },
    projects: [
      {
        title: "Hollandse Kust Offshore Wind Program",
        location: "North Sea, Netherlands",
        image:
          "https://i.ibb.co/jP4b4QgZ/Hollandse-Kust-Offshore-Wind-Program.jpg",
      },
      {
        title: "A15 Corridor and Rotterdam Ring Road Upgrades",
        location: "Rotterdam, Netherlands",
        image:
          "https://i.ibb.co/rK6cJMp2/A15-Corridor-and-Rotterdam-Ring-Road-Upgrades.jpg",
      },
      {
        title: "IJmuiden Sea Lock and Port of Amsterdam Expansion",
        location: "IJmuiden, Netherlands",
        image:
          "https://i.ibb.co/kV3BZxxC/IJmuiden-Sea-Lock-and-Port-of-Amsterdam-Expansion.jpg",
      },
    ],
    sectors: [
      {
        name: "Transport & Rail",
        image: "https://i.ibb.co/TqqF1mmY/transport-rail-netherlands.jpg",
      },
      {
        name: "Water & Flood Resilience",
        image:
          "https://i.ibb.co/ymfqX887/water-flood-resilience-netherlands.jpg",
        isLarge: true,
      },
      {
        name: "Offshore Wind & Energy Transition",
        image:
          "https://i.ibb.co/zh4FwhQY/Offshore-Wind-Energy-Transition-netherlands.jpg",
      },
      {
        name: "Logistics Transit",
        image: "https://i.ibb.co/SX65VkBf/Logistics-Transit-netherlands.jpg",
      },
    ],
  },

  france: {
    name: "France",
    established: "Since 2004",
    heroIntro:
      "Building the infrastructure France needs for cleaner mobility, stronger regional connections and more resilient cities.",
    notableIntro:
      "Our French portfolio reflects the country's major investment priorities: extending metropolitan rail, expanding low-carbon freight capacity and delivering safer, more efficient transport corridors.",
    mainImg: "https://i.ibb.co/LXmd5bKm/france-construction.jpg",
    featuredProject: {
      title: "Grand Paris Express",
      location: "Île-de-France",
      image: "https://i.ibb.co/N2VwtNR4/Grand-Paris-Express.jpg",
    },
    projects: [
      {
        title: "Port of Le Havre Expansion",
        location: "Le Havre, Normandy",
        image: "https://i.ibb.co/sdFpzyJb/Port-of-Le-Havre-Expansion.jpg",
      },
      {
        title: "Lyon–Turin Base Tunnel",
        location: "Saint-Jean-de-Maurienne, Auvergne-Rhône-Alpes",
        image: "https://i.ibb.co/pjpCx0Hf/Lyon-Turin-Base-Tunnel.jpg",
      },
      {
        title: "Seine–Nord Europe Canal",
        location: "Hauts-de-France",
        image: "https://i.ibb.co/C5vcvZwH/Seine-Nord-Europe-Canal.jpg",
      },
    ],
    sectors: [
      {
        name: "Urban Rail & Metro",
        image: "https://i.ibb.co/VWh8Yfxz/france-Urban-Rail-Metro.jpg",
      },
      {
        name: "Tunnelling & Underground Works",
        image:
          "https://i.ibb.co/XrHLMht8/france-Tunnelling-Underground-Works.jpg",
      },
      {
        name: "Inland Waterways & Freight",
        image: "https://i.ibb.co/TB6XsKGf/france-Inland-Waterways-Freight.jpg",
      },
      {
        name: "Rail Electrification",
        image: "https://i.ibb.co/Rk6fVfMd/france-Rail-Electrification.jpg",
      },
    ],
  },

  "saudi-arabia": {
    name: "Saudi Arabia",
    established: "Since 2002",
    heroIntro:
      "Delivering major civil, transport, aviation and urban infrastructure programs that support Saudi Vision 2030 across Riyadh, Jeddah, NEOM and the Red Sea coast.",
    notableIntro:
      "From Riyadh Metro and King Salman International Airport to giga-projects at NEOM, Diriyah and The Red Sea, our Saudi operations deliver complex, high-impact EPC work for landmark developments.",
    mainImg:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    featuredProject: {
      title: "Riyadh Metro",
      location: "Riyadh, Saudi Arabia",
      image: "https://i.ibb.co/KpCXF0sX/Riyadh-Metro.webp",
    },
    projects: [
      {
        title: "King Salman International Airport",
        location: "Riyadh, Saudi Arabia",
        image:
          "https://i.ibb.co/VWKjs5bm/King-Salman-International-Airport.jpg",
      },
      {
        title: "The Red Sea Project",
        location: "Red Sea, Saudi Arabia",
        image: "https://i.ibb.co/60knyHC0/The-Red-Sea-Project.jpg",
      },
      {
        title: "NEOM The Line",
        location: "Tabuk, Saudi Arabia",
        image: "https://i.ibb.co/hFMDYMWx/NEOM-The-Line.webp",
      },
    ],
    sectors: [
      {
        name: "Urban Rail & Metro",
        image: "https://i.ibb.co/Zv7HrK4/Riyadh-Metro.jpg",
      },
      {
        name: "Aviation Infrastructure",
        image:
          "https://i.ibb.co/RGFtH1qR/Aviation-Infrastructure-Saudi-Arabia.jpg",
      },
      {
        name: "Smart Cities & Mixed-Use Developments",
        image:
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
        isLarge: true,
      },
      {
        name: "Civil Infrastructure",
        image:
          "https://i.ibb.co/8DXbyQ7r/Civil-Infrastructure-Saudi-Arabia.jpg",
      },
    ],
  },

  qatar: {
    name: "Qatar",
    established: "Since 1995",
    heroIntro:
      "Supporting Qatar’s transformation through rail, airport, stadium, and mixed-use developments that connect people, trade, and communities.",
    notableIntro:
      "From Doha Metro and Hamad International Airport to Lusail and the wider urban growth corridor, we have contributed to complex, high-visibility infrastructure programs shaping the country’s future.",
    mainImg: "https://i.ibb.co/GQFHB1Jp/qatar-construction.jpg",
    featuredProject: {
      title: "Lusail Stadium & Sports District",
      location: "Lusail, Qatar",
      image: "https://i.ibb.co/r9ZDcMp/Lusail-Stadium-Sports-District.webp",
    },
    projects: [
      {
        title: "Hamad International Airport Expansion",
        location: "Doha, Qatar",
        image:
          "https://i.ibb.co/JWGZ0nct/Hamad-International-Airport-Expansion.jpg",
      },
      {
        title: "Msheireb Downtown Doha",
        location: "Doha, Qatar",
        image: "https://i.ibb.co/Kj8xDcP3/Msheireb-Downtown-Doha.webp",
      },
      {
        title: "Lusail City Mixed-Use Development",
        location: "Lusail, Qatar",
        image:
          "https://i.ibb.co/yFvY9zpp/Lusail-City-Mixed-Use-Development.jpg",
      },
    ],
    sectors: [
      {
        name: "Urban Rail & Metro",
        image: "https://i.ibb.co/fVykNTk4/Urban-Rail-Metro-qatar.jpg",
      },
      {
        name: "Stadiums & Sports Infrastructure",
        image:
          "https://i.ibb.co/n8VGFkdy/Stadiums-Sports-Infrastructure-qatar.webp",
      },
      {
        name: "Airport & Aviation",
        image: "https://i.ibb.co/tdvn8zg/Airport-Aviation-qatar.webp",
      },
      {
        name: "Smart Cities & Mixed-Use Developments",
        image:
          "https://i.ibb.co/zh8tGJb0/Smart-Cities-Mixed-Use-Developments-qatar.jpg",
      },
    ],
  },

  singapore: {
    name: "Singapore",
    established: "Since 2005",
    heroIntro:
      "Delivering resilient, future-ready infrastructure for Singapore’s densifying urban and transport network.",
    notableIntro:
      "Supporting major public works including airport expansion, rail delivery, port modernisation, and smart district development across Singapore.",
    mainImg: "https://i.ibb.co/qY0xcmKc/Singapore-construction.jpg",
    featuredProject: {
      title: "Changi Airport Terminal 5",
      location: "Changi, Singapore",
      image: "https://i.ibb.co/6cm7049d/Changi-Airport-Terminal-5.avif",
    },
    projects: [
      {
        title: "Tuas Port Phase 1",
        location: "Tuas, Singapore",
        image: "https://i.ibb.co/vxhMp0KH/Tuas-Port-Phase-1.jpg",
      },
      {
        title: "Thomson-East Coast Line",
        location: "Singapore",
        image: "https://i.ibb.co/FqbyyWbL/Thomson-East-Coast-Line.webp",
      },
      {
        title: "Jurong Region Line",
        location: "Jurong, Singapore",
        image: "https://i.ibb.co/39vwkcjy/Jurong-Region-Line.jpg",
      },
    ],
    sectors: [
      {
        name: "Aviation & Airports",
        image: "https://i.ibb.co/fVZDcX8p/Aviation-Airports-Singapore.jpg",
      },
      {
        name: "Transport & Rail",
        image: "https://i.ibb.co/Jjj2yPPY/Transport-Rail-Singapore.jpg",
      },
      {
        name: "Port & Logistics",
        image:
          "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
        isLarge: true,
      },
      {
        name: "Smart Urban Development",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  australia: {
    name: "Australia",
    established: "Since 2005",
    heroIntro:
      "Delivering resilient, future-ready infrastructure across Australia’s growing cities, regional networks and renewable-energy corridors.",
    notableIntro:
      "Our Australian work spans major transport, aviation, energy and urban-connectivity programs that improve access, strengthen supply chains and support the country’s transition to a lower-carbon future.",
    mainImg: "https://i.ibb.co/dwpLJXL3/Australia-conctruction.jpg",
    featuredProject: {
      title: "Sydney Metro West",
      location: "Sydney, New South Wales",
      image: "https://i.ibb.co/wNDRv4DJ/Sydney-Metro-West.avif",
    },
    projects: [
      {
        title: "Western Sydney International Airport",
        location: "Bradfield, New South Wales",
        image:
          "https://i.ibb.co/sdFbMhrn/Western-Sydney-International-Airport.webp",
      },
      {
        title: "Snowy 2.0 Pumped-Storage Scheme",
        location: "Snowy Mountains, New South Wales",
        image: "https://i.ibb.co/cSbdyp2w/Snowy-2-0-Pumped-Storage-Scheme.jpg",
      },
      {
        title: "Cross River Rail",
        location: "Brisbane, Queensland",
        image: "https://i.ibb.co/mrLhFngk/Cross-River-Rail.jpg",
      },
    ],
    sectors: [
      {
        name: "Metro, Rail & Freight",
        image:
          "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Renewable Energy & Storage",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Airports & Aviation Infrastructure",
        image:
          "https://i.ibb.co/1JTJ80CB/Airports-Aviation-Infrastructure-australia.jpg",
        isLarge: true,
      },
      {
        name: "Roads, Tunnels & Urban Connectivity",
        image:
          "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  japan: {
    name: "Japan",
    established: "Since 2009",
    heroIntro:
      "Partnering with Japan’s public agencies, transport authorities and developers to deliver resilient, high-capacity infrastructure across major metropolitan and regional corridors.",
    notableIntro:
      "Supporting Japan’s next generation of mobility, urban resilience and energy transition through landmark rail, airport, port and civil-infrastructure projects designed for performance, safety and long-term value.",
    mainImg:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    featuredProject: {
      title: "Chūō Shinkansen (Maglev)",
      location: "Tokyo–Nagoya–Osaka, Japan",
      image: "https://i.ibb.co/PGhLwnmL/Ch-Shinkansen-Maglev.webp",
    },
    projects: [
      {
        title: "Haneda Airport Terminal 3 & International Expansion",
        location: "Tokyo, Japan",
        image:
          "https://i.ibb.co/RTbd0TKG/Haneda-Airport-Terminal-3-International-Expansion.jpg",
      },
      {
        title: "Osaka–Kansai Airport Access & Mobility Infrastructure",
        location: "Osaka, Japan",
        image:
          "https://i.ibb.co/h6t0CgT/Osaka-Kansai-Airport-Access-Mobility-Infrastructure.jpg",
      },
      {
        title: "Tokyo Bay Coastal Protection & Port Upgrade Works",
        location: "Tokyo Bay, Japan",
        image:
          "https://i.ibb.co/b50F45B9/Tokyo-Bay-Coastal-Protection-Port-Upgrade-Works.jpg",
      },
    ],
    sectors: [
      {
        name: "High-Speed Rail",
        image: "https://i.ibb.co/s9WfsLCZ/High-Speed-Rail-japan.jpg",
      },
      {
        name: "Urban Transport & Station Redevelopment",
        image:
          "https://i.ibb.co/gbvhTyG9/Urban-Transport-Station-Redevelopment-japan.jpg",
        isLarge: true,
      },
      {
        name: "Ports, Coastal & Civil Works",
        image: "https://i.ibb.co/8LzRyjBf/Ports-Coastal-Civil-Works-japan.jpg",
      },
      {
        name: "Energy & Grid Resilience",
        image: "https://i.ibb.co/sdRCwYYD/Energy-Grid-Resilience-japan.jpg",
      },
    ],
  },

  vietnam: {
    name: "Vietnam",
    established: "Since 2004",
    heroIntro:
      "Supporting Vietnam’s urban transformation through delivery of resilient transport, aviation and civil-infrastructure assets that connect people, goods and growth corridors across the country.",
    notableIntro:
      "Across Hanoi, Ho Chi Minh City and key industrial and logistics hubs, we help deliver major rail, airport, road and urban-infrastructure projects that support Vietnam’s long-term economic growth, mobility and resilience.",
    mainImg:
      "https://i.ibb.co/HL4mRnTK/Vietnam-construction.jpg",
    featuredProject: {
      title: "Long Thanh International Airport",
      location: "Dong Nai Province, Vietnam",
      image:
        "https://i.ibb.co/FkBJhZCp/Long-Thanh-International-Airport.jpg",
    },
    projects: [
      {
        title: "Ho Chi Minh City Metro Line 1",
        location: "Ho Chi Minh City, Vietnam",
        image:
          "https://i.ibb.co/pjT1b2L9/Ho-Chi-Minh-City-Metro-Line-1.webp",
      },
      {
        title: "Hanoi Metro Line 3",
        location: "Hanoi, Vietnam",
        image:
          "https://i.ibb.co/Hf5PF2dq/Hanoi-Metro-Line-3.jpg",
      },
      {
        title: "North–South High-Speed Railway Preparatory Works",
        location: "Vietnam",
        image:
          "https://i.ibb.co/ksN3ygyF/North-South-High-Speed-Railway-Preparatory-Works.webp",
      },
    ],
    sectors: [
      {
        name: "Rail & Metro",
        image:
          "https://i.ibb.co/hF6cBD9K/Rail-Metro-Vietnam.jpg",
      },
      {
        name: "Airports & Aviation Infrastructure",
        image:
          "https://i.ibb.co/qMgBCGC9/Airports-Aviation-Infrastructure-Vietnam.jpg",
      },
      {
        name: "Roads, Bridges & Urban Mobility",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Ports, Logistics & Industrial Infrastructure",
        image:
          "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
        isLarge: true,
      },
    ],
  },

  "south-korea": {
    name: "South Korea",
    established: "Since 2002",
    heroIntro:
      "Supporting South Korea's next generation of connected cities through resilient transport, advanced aviation, and high-performance urban infrastructure.",
    notableIntro:
      "From Seoul's dense metropolitan network to the country's industrial corridors and coastal gateways, we bring disciplined delivery and local insight to complex EPC programmes.",
    mainImg: "https://i.ibb.co/2YqYZ6x2/South-Korea.jpg",
    featuredProject: {
      title: "Incheon International Airport Terminal 2 Expansion",
      location: "Incheon, South Korea",
      image: "https://i.ibb.co/VpqpvD5t/Incheon-International-Airport-Terminal-2-Expansion.avif",
    },
    projects: [
      {
        title: "GTX-A Metropolitan Express Rail",
        location: "Seoul–Paju, South Korea",
        image: "https://i.ibb.co/1Y11qFfF/GTX-A-Metropolitan-Express-Rail.webp",
      },
      {
        title: "Seoul–Sejong Expressway",
        location: "Seoul–Sejong, South Korea",
        image: "https://i.ibb.co/mmSFjjZ/Seoul-Sejong-Expressway.jpg",
      },
      {
        title: "Busan New Port Container Terminal",
        location: "Busan, South Korea",
        image: "https://i.ibb.co/5gvFHmbB/Busan-New-Port-Container-Terminal.jpg",
      },
    ],
    sectors: [
      {
        name: "Urban Rail & Metropolitan Transit",
        image: "https://i.ibb.co/ynh54R3Y/South-Korea-Urban-Rail-Metropolitan-Transit.jpg",
      },
      {
        name: "Smart Highways & Mobility Systems",
        image: "https://i.ibb.co/VWMWGw9N/South-Korea-Smart-Highways-Mobility-Systems.jpg",
        isLarge: true,
      },
      {
        name: "Airport & Airside Infrastructure",
        image: "https://i.ibb.co/C3c2Rs9y/South-Korea-Airport-Airside-Infrastructure.jpg",
      },
      {
        name: "Ports, Shipyards & Industrial Logistics",
        image: "https://i.ibb.co/GvqRbxBD/South-Korea-Ports-Shipyards-Industrial-Logistics.jpg",
      },
    ],
  },
};

export const getDefaultLocation = (stateName) => {
  // Format the name nicely
  const formattedName = stateName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    name: formattedName,
    established: "Since 2000",
    heroIntro: `Since 2000, partnerships with customers across ${formattedName} have turned bold visions into landmark projects that strengthen communities.`,
    notableIntro: `Working with leading institutions in ${formattedName}, we deliver projects across healthcare, transportation, energy, commercial and cultural sectors that support thriving communities.`,
    featuredProject: {
      title: `${formattedName} Regional Medical Center & Innovation Hub`,
      location: `${formattedName}`,
      image: featuredImg,
    },
    projects: [
      {
        title: `${formattedName} Infrastructure & Transportation Link`,
        location: `${formattedName}`,
        image: proj1Img,
      },
      {
        title: `${formattedName} Community & Cultural Center`,
        location: `${formattedName}`,
        image: proj2Img,
      },
      {
        title: `State University of ${formattedName} Campus Expansion`,
        location: `${formattedName}`,
        image: proj3Img,
      },
    ],
    sectors: [
      { name: "Energy Transition", image: sector1Img },
      { name: "Smart Cities", image: sector2Img, isLarge: true },
      { name: "Civil Infrastructure", image: sector3Img },
      { name: "Science + Technology", image: sector4Img },
    ],
    contacts: [
      {
        name: "Robert V. Sterling, PE",
        role: "Group CEO & Founder",
        dept: "EXECUTIVE",
        image: contact1Img,
      },
      {
        name: "Dr. Sunita Deshmukh",
        role: "Global COO",
        dept: "EXECUTIVE",
        image: contact2Img,
      },
      {
        name: "Vikramaditya Rao",
        role: "VP of Project Execution",
        dept: "INFRASTRUCTURE",
        image: contact3Img,
      },
      {
        name: "Dr. Elena Rostova",
        role: "Chief Technology Officer",
        dept: "TECHNOLOGY",
        image: contact4Img,
      },
    ],
  };
};
