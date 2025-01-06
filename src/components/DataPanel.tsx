import { Hotspot } from "@/lib/types";
import { MetricsCard } from "./MetricsCard";
import { RecommendationsList } from "./RecommendationsList";
import { PDFReport } from "./PDFReport";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface DataPanelProps {
  hotspot: Hotspot | null;
  isVisible: boolean;
}

export const DataPanel = ({ hotspot, isVisible }: DataPanelProps) => {
  if (!hotspot) return null;

  const getLocationSpecificProjects = (location: string) => {
    const projectsByLocation = {
      "US East (N. Virginia)": [
        { 
          category: "STEM Initiatives", 
          amount: hotspot.metrics.investmentToDate * 0.25,
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
          amount: hotspot.metrics.investmentToDate * 0.25,
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
          amount: hotspot.metrics.investmentToDate * 0.2,
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
          amount: hotspot.metrics.investmentToDate * 0.3,
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
          amount: hotspot.metrics.investmentToDate * 0.35, 
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
          amount: hotspot.metrics.investmentToDate * 0.25, 
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
          amount: hotspot.metrics.investmentToDate * 0.2, 
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
          amount: hotspot.metrics.investmentToDate * 0.2, 
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
          amount: hotspot.metrics.investmentToDate * 0.3, 
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
          amount: hotspot.metrics.investmentToDate * 0.25, 
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
          amount: hotspot.metrics.investmentToDate * 0.25, 
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
          amount: hotspot.metrics.investmentToDate * 0.2, 
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
          amount: hotspot.metrics.investmentToDate * 0.3, 
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
          amount: hotspot.metrics.investmentToDate * 0.25, 
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
          amount: hotspot.metrics.investmentToDate * 0.25, 
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
          amount: hotspot.metrics.investmentToDate * 0.2, 
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
        amount: hotspot.metrics.investmentToDate * 0.25,
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
        amount: hotspot.metrics.investmentToDate * 0.25,
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
        amount: hotspot.metrics.investmentToDate * 0.2,
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
        amount: hotspot.metrics.investmentToDate * 0.3,
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

  const investmentBreakdown = getLocationSpecificProjects(hotspot.name);

  return (
    <div className={`
      fixed right-0 top-0 h-full w-[600px] bg-gray-900/95 backdrop-blur-xl
      transform transition-transform duration-500 ease-in-out
      border-l border-white/10 overflow-y-auto
      ${isVisible ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">{hotspot.name}</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="ml-4">
                Generate Report
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[80vh]">
              <PDFReport hotspot={hotspot} />
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <MetricsCard
            label="Community Sentiment"
            value={`${hotspot.metrics.sentiment}%`}
            trend={hotspot.metrics.sentiment > 50 ? "up" : "down"}
          />
          <MetricsCard
            label="Articles Published"
            value={hotspot.metrics.articles}
          />
          <MetricsCard
            label="Students in Programs"
            value={hotspot.metrics.studentsEnrolled.toLocaleString()}
          />
          <MetricsCard
            label="Investment to Date"
            value={`$${(hotspot.metrics.investmentToDate / 1000000).toFixed(1)}M`}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Community Investment Breakdown</h3>
          <div className="space-y-3">
            {investmentBreakdown.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{item.category}</span>
                      <span className="text-white font-semibold">
                        ${(item.amount / 1000000).toFixed(1)}M
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                    <div className="mt-2 space-y-1">
                      {item.subProjects.map((subProject, idx) => (
                        <div key={idx} className="text-sm text-gray-400 pl-4 border-l border-gray-700">
                          {subProject}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-gray-700 h-2 rounded-full">
                  <div 
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${(item.amount / hotspot.metrics.investmentToDate) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Future Investment Required</h3>
          <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
            <span className="text-3xl font-bold text-white">
              ${(hotspot.metrics.futureRequirements / 1000000).toFixed(1)}M
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Recommendations</h3>
          <RecommendationsList
            highCost={hotspot.recommendations.highCost}
            mediumCost={hotspot.recommendations.mediumCost}
            lowCost={hotspot.recommendations.lowCost}
          />
        </div>
      </div>
    </div>
  );
};