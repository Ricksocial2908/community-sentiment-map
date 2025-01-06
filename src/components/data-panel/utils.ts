interface InvestmentProject {
  category: string;
  amount: number;
  description: string;
  subProjects: string[];
}

export const getLocationSpecificProjects = (location: string): InvestmentProject[] => {
  const projectsByLocation = {
    "US East (N. Virginia)": [
      { 
        category: "STEM Initiatives", 
        amount: 6250000,
        description: "Supporting K-12 STEM programs",
        subProjects: [
          "AWS Think Big Space Program - $2.5M",
          "Local School Robotics Clubs - $1.2M",
          "Code.org Partnership - $800K",
          "Science Fair Sponsorships - $500K"
        ]
      },
      { 
        category: "Local Community Projects", 
        amount: 6250000,
        description: "Community development initiatives",
        subProjects: [
          "Digital Literacy Programs - $2M",
          "Community Tech Hub - $1.5M",
          "Public Library Tech Updates - $1M",
          "Senior Digital Skills Program - $500K"
        ]
      },
      { 
        category: "Sports Facilities", 
        amount: 5000000,
        description: "Sports and recreation support",
        subProjects: [
          "AWS Park Run Series - $1.5M",
          "Youth Sports Programs - $1M",
          "Community Sports Center - $1.5M",
          "School Athletics Support - $1M"
        ]
      },
      { 
        category: "Charitable Donations", 
        amount: 7500000,
        description: "Supporting local charities",
        subProjects: [
          "Food Bank Technology - $2M",
          "Healthcare Initiative - $1.5M",
          "Emergency Services Support - $1.5M",
          "Environmental Programs - $1M"
        ]
      }
    ],
    "US West (Oregon)": [
      { 
        category: "Renewable Energy Initiative", 
        amount: 6300000, 
        description: "Solar and wind power projects",
        subProjects: [
          "Wind Farm Development - $3M",
          "Solar Panel Installation - $2M",
          "Energy Storage Systems - $1.5M",
          "Grid Integration - $1M"
        ]
      },
      { 
        category: "Forest Conservation", 
        amount: 4500000, 
        description: "Local ecosystem protection",
        subProjects: [
          "Forest Preservation - $2M",
          "Wildlife Protection - $1.5M",
          "Habitat Restoration - $1M",
          "Research Programs - $500K"
        ]
      },
      { 
        category: "Tech Apprenticeships", 
        amount: 3600000, 
        description: "Youth career development",
        subProjects: [
          "Coding Bootcamps - $1.5M",
          "Internship Programs - $1M",
          "Mentorship Initiative - $800K",
          "Career Fairs - $700K"
        ]
      },
      { 
        category: "Innovation Lab", 
        amount: 3600000, 
        description: "Community research center",
        subProjects: [
          "Research Facilities - $1.5M",
          "Equipment & Tools - $1M",
          "Educational Programs - $800K",
          "Community Workshops - $700K"
        ]
      }
    ],
    "Europe (Ireland)": [
      { 
        category: "Green Energy Projects", 
        amount: 7500000, 
        description: "Sustainable power solutions",
        subProjects: [
          "Wind Energy Projects - $2.5M",
          "Solar Installations - $2M",
          "Energy Storage - $1.5M",
          "Smart Grid Development - $1M"
        ]
      },
      { 
        category: "Digital Skills Academy", 
        amount: 6250000, 
        description: "Technology education center",
        subProjects: [
          "Training Facilities - $2M",
          "Course Development - $1.5M",
          "Student Support - $1M",
          "Industry Partnerships - $500K"
        ]
      },
      { 
        category: "Community Broadband", 
        amount: 6250000, 
        description: "Rural internet access",
        subProjects: [
          "Infrastructure Development - $2M",
          "Equipment Installation - $1.5M",
          "Technical Support - $1M",
          "Community Training - $500K"
        ]
      },
      { 
        category: "Local Tech Startups", 
        amount: 5000000, 
        description: "Entrepreneurship support",
        subProjects: [
          "Startup Funding - $1.5M",
          "Mentorship Programs - $1M",
          "Workspace Support - $800K",
          "Networking Events - $700K"
        ]
      }
    ],
    "Asia Pacific (Tokyo)": [
      { 
        category: "Smart City Initiative", 
        amount: 7500000, 
        description: "Urban technology integration",
        subProjects: [
          "IoT Infrastructure - $2.5M",
          "Data Analytics Platform - $2M",
          "Smart Transportation - $1.5M",
          "Public Safety Systems - $1M"
        ]
      },
      { 
        category: "STEM Education Center", 
        amount: 6250000, 
        description: "Youth technology programs",
        subProjects: [
          "Learning Labs - $2M",
          "Robotics Programs - $1.5M",
          "Coding Workshops - $1M",
          "Teacher Training - $500K"
        ]
      },
      { 
        category: "Disaster Resilience", 
        amount: 6250000, 
        description: "Community safety infrastructure",
        subProjects: [
          "Early Warning Systems - $2M",
          "Emergency Response - $1.5M",
          "Infrastructure Hardening - $1M",
          "Community Training - $500K"
        ]
      },
      { 
        category: "Innovation Hub", 
        amount: 5000000, 
        description: "Research and development center",
        subProjects: [
          "Research Facilities - $1.5M",
          "Lab Equipment - $1M",
          "Innovation Programs - $800K",
          "Collaboration Space - $700K"
        ]
      }
    ]
  };

  return projectsByLocation[location as keyof typeof projectsByLocation] || [
    { 
      category: "STEM Initiatives", 
      amount: 6250000,
      description: "Supporting K-12 STEM programs",
      subProjects: [
        "Local School Programs",
        "Coding Bootcamps",
        "Teacher Training",
        "Educational Resources"
      ]
    },
    { 
      category: "Local Community Projects", 
      amount: 6250000,
      description: "Community development initiatives",
      subProjects: [
        "Digital Access Programs",
        "Community Centers",
        "Skills Training",
        "Infrastructure Support"
      ]
    },
    { 
      category: "Sports Facilities", 
      amount: 5000000,
      description: "Sports and recreation support",
      subProjects: [
        "Sports Programs",
        "Facility Maintenance",
        "Youth Athletics",
        "Community Events"
      ]
    },
    { 
      category: "Charitable Donations", 
      amount: 7500000,
      description: "Supporting local charities",
      subProjects: [
        "Local Initiatives",
        "Healthcare Support",
        "Emergency Services",
        "Environmental Programs"
      ]
    }
  ];
};
