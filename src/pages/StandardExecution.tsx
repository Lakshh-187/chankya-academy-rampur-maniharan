import { SEO } from "@/components/SEO";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, Users, FileText, TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import bissBannerHero from "@/assets/biss-banner-hero.jpg";
import bissUncifBanners from "@/assets/biss-uncif-banners.jpg";

const StandardExecution = () => {
  const departments = [
    {
      name: "Outreach Department / Committee",
      icon: <Users className="h-6 w-6" />,
      responsibilities: [
        "Research opportunities through LinkedIn, global networks, universities, NGOs, industries, and CSR platforms",
        "Execute: Tie-Ups & Collaboration Policy",
        "Execute: Funded Program (CSR) Policy",
        "Execute: Pilot Testing & Research Policy",
        "Execute: Open Source Contribution Policy",
        "Execute: Clubs / Society / Chapter Establishment Policy",
        "Execute: Cross-Border Collaboration Policy"
      ],
      report: "Annual Outreach Report covering research, partnerships, programs initiated, impact data, and future plans"
    },
    {
      name: "HR Head / Faculty Development Lead",
      icon: <Award className="h-6 w-6" />,
      responsibilities: [
        "Execute Teacher Orientation & Training Policy",
        "Ensure teachers undergo training in AI, gamification, storytelling, practical pedagogy",
        "Maintain workshop, certification, and feedback data"
      ],
      report: "Teacher Development Annual Report with training calendar, participation records, and evaluation outcomes"
    },
    {
      name: "Program Lead – Student Council",
      icon: <Target className="h-6 w-6" />,
      responsibilities: [
        "Oversee and manage the Incubation Cell",
        "Ensure positive outcomes for High Participation Policy",
        "Manage Profile & Achievement Policy implementation",
        "Coordinate Her-HaVa Scholarship program",
        "Manage School Cinema as pitching platform",
        "Maintain Opportunity Portal for global competitions and certifications"
      ],
      report: "Quarterly progress updates and comprehensive Annual Report with participation data and impact metrics"
    }
  ];

  const incubationPrograms = [
    {
      program: "Initiators Program",
      objective: "Students launch initiatives (profit or non-profit) based on policy frameworks",
      deliverable: "Annual Impact Report on student-led initiatives"
    },
    {
      program: "Designator Program",
      objective: "Students gain recognition through certifications in POSH, POCSO, CSR, Cyber Awareness",
      deliverable: "Committee/board roles and certification records"
    },
    {
      program: "I-Backed Program",
      objective: "Counseling, portfolio building, and scholarship guidance for global universities",
      deliverable: "Student success stories and admission tracking"
    }
  ];

  const accountabilityFramework = [
    { level: "Department Heads", responsibility: "Ensure proper implementation of assigned policies" },
    { level: "Committee Members", responsibility: "Support, monitor, and document progress regularly" },
    { level: "Student Leaders", responsibility: "Participate in planning, execution, and reporting" },
    { level: "Principal / Director", responsibility: "Review and approve final reports and policy outcomes" },
    { level: "Annual Review Panel", responsibility: "External advisors review reports for quality and impact verification" }
  ];

  return (
    <>
      <SEO
        title="Standard Execution Framework - Chanakya International Academy"
        description="Comprehensive framework for executing CIA policies through organized departments, committees, and structured reporting mechanisms."
        keywords="policy execution, institutional framework, annual reporting, department structure, Chanakya International Academy"
        canonicalUrl="https://cia.edu/standard-execution"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section with Banner */}
        <section className="relative">
          <div className="w-full">
            <img 
              src={bissBannerHero} 
              alt="BISS - 1 Million Safe & Standard School Initiative" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Standard Policy Execution Framework
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ensuring every policy, program, and initiative leads to real, measurable impact through an organized system of departments, committees, and structured reporting.
            </p>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                This framework defines how schools must execute, monitor, and review the implementation of all standard policies. It ensures that policies are not just written documents, but institutionalized practices with clear accountability, measurable outcomes, and continuous improvement.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Institutional Structure */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Users className="h-8 w-8 text-blue-600" />
            Institutional Structure for Execution
          </h2>

          <div className="grid gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 text-white rounded-lg">
                      {dept.icon}
                    </div>
                    {dept.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {dept.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-orange-600" />
                        Annual Report Submission:
                      </h4>
                      <p className="text-gray-700">{dept.report}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Incubation Cell Programs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card>
            <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-purple-600" />
                Incubation Cell – Main Divisions
              </CardTitle>
              <CardDescription>
                Fostering innovation, leadership, and portfolio development through structured programs
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Program</TableHead>
                    <TableHead className="font-bold">Objective</TableHead>
                    <TableHead className="font-bold">Deliverable</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incubationPrograms.map((prog, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">
                        <Badge variant="outline" className="text-purple-700 border-purple-300">
                          {prog.program}
                        </Badge>
                      </TableCell>
                      <TableCell>{prog.objective}</TableCell>
                      <TableCell>{prog.deliverable}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Annual Report Components */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-green-600" />
                Annual Report: Components & Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Every department, committee, and program lead must prepare an Annual Report at the end of each academic session with the following components:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Initiatives and Attempts", desc: "Activities, experiments, or partnerships tried during the year" },
                  { title: "Results and Achievements", desc: "Outcomes achieved, including participation data and success stories" },
                  { title: "Impact Analysis", desc: "How initiatives benefited students, teachers, or the community" },
                  { title: "Feedback Summary", desc: "Suggestions, challenges, and improvements noted by participants" },
                  { title: "Meetings & Documentation", desc: "Details of internal/external meetings and collaborations" },
                  { title: "Future Action Plan", desc: "Clear roadmap for the upcoming year based on evaluation" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Accountability Framework */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Framework for Accountability</h2>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Level</TableHead>
                    <TableHead className="font-bold">Responsibility</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accountabilityFramework.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold text-blue-700">{item.level}</TableCell>
                      <TableCell>{item.responsibility}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Annual Checklist - 2024-25 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-t-lg">
            <h2 className="text-3xl font-bold mb-2">📋 Annual Report & Milestone Checklist (2024-25)</h2>
            <p className="text-orange-100">
              Partner Organization: Uniford Foundation | BISS – 1 Million Safe & Standard Schools Initiative
            </p>
          </div>

          <div className="space-y-8 bg-white p-6 rounded-b-lg shadow-lg">
            {/* Outreach Checklist */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded">1</span>
                Outreach Department / Committee
              </h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task / Policy Area</TableHead>
                      <TableHead>Action Steps (2024-25)</TableHead>
                      <TableHead>Outcome / Result</TableHead>
                      <TableHead>Milestone for 2025-27</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Tie-ups & Collaboration</TableCell>
                      <TableCell>Established MoU with NGOs / Universities</TableCell>
                      <TableCell>4 active MoUs signed</TableCell>
                      <TableCell>Add 3 more IIT / CSR / Intl partnerships</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Funded Programs (CSR)</TableCell>
                      <TableCell>Approached corporate partners for scholarships</TableCell>
                      <TableCell>1 CSR project funded</TableCell>
                      <TableCell>Develop joint innovation fund</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Pilot Testing & Research</TableCell>
                      <TableCell>Hosted academic or EdTech experiment</TableCell>
                      <TableCell>2 pilots completed</TableCell>
                      <TableCell>Host national-level pilot by 2026</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Open-Source Contribution</TableCell>
                      <TableCell>Accepted free tools or resources from experts</TableCell>
                      <TableCell>5 contributions received</TableCell>
                      <TableCell>Launch open digital library</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Clubs/Society/Chapter</TableCell>
                      <TableCell>Set up student-led clubs</TableCell>
                      <TableCell>AI Club, Wellbeing Club formed</TableCell>
                      <TableCell>Introduce Environment & Entrepreneurship Clubs</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Cross-Border Collaboration</TableCell>
                      <TableCell>Joint project with foreign school</TableCell>
                      <TableCell>1 virtual exchange held</TableCell>
                      <TableCell>Create annual "Global Day" event</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* HR Department Checklist */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-purple-600 text-white px-3 py-1 rounded">2</span>
                HR Department – Teacher Orientation & Training
              </h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Training Area</TableHead>
                      <TableHead>Activities Conducted</TableHead>
                      <TableHead>Participants</TableHead>
                      <TableHead>Milestone 2025-27</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Global Pedagogy</TableCell>
                      <TableCell>Workshop on storytelling & gamified learning</TableCell>
                      <TableCell>45 teachers</TableCell>
                      <TableCell>Certification from Harvard / Google for Teachers</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">AI & Digital Skills</TableCell>
                      <TableCell>AI in Teaching Workshop</TableCell>
                      <TableCell>30 teachers</TableCell>
                      <TableCell>Introduce AI-Teacher badge</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">School Policies</TableCell>
                      <TableCell>Orientation on POSH, POCSO, CSR, SDG</TableCell>
                      <TableCell>All staff</TableCell>
                      <TableCell>Integrate policy quiz annually</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Student Council Checklist */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-green-600 text-white px-3 py-1 rounded">3</span>
                Program Lead – Student Council
              </h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Program / Platform</TableHead>
                      <TableHead>Action / Initiative 2024-25</TableHead>
                      <TableHead>Outcome / Impact</TableHead>
                      <TableHead>Milestone 2025-27</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Incubation Cell</TableCell>
                      <TableCell>Launched & onboarded student startups</TableCell>
                      <TableCell>12 projects initiated</TableCell>
                      <TableCell>50+ student startups by 2027</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Her-HaVa</TableCell>
                      <TableCell>Supported girls in scholarships & training</TableCell>
                      <TableCell>15 scholarships awarded</TableCell>
                      <TableCell>Extend to inter-school chapter</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">School Cinema</TableCell>
                      <TableCell>Conducted 2 film-based pitch sessions</TableCell>
                      <TableCell>100+ participants</TableCell>
                      <TableCell>Launch annual "Pitch Fest"</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Opportunity Portal</TableCell>
                      <TableCell>Portal & WhatsApp group launched</TableCell>
                      <TableCell>300+ opportunities shared</TableCell>
                      <TableCell>Add mobile app access</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">High Participation Policy</TableCell>
                      <TableCell>Implemented participation grading</TableCell>
                      <TableCell>90% students graded</TableCell>
                      <TableCell>100% by 2027</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Student Portfolio</TableCell>
                      <TableCell>Digital portfolios maintained</TableCell>
                      <TableCell>95% students uploaded</TableCell>
                      <TableCell>AI-based portfolio verification system</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Incubation Cell Sub-Divisions */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white px-3 py-1 rounded">4</span>
                Incubation Cell Sub-Divisions
              </h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Program</TableHead>
                      <TableHead>Activities (2024-25)</TableHead>
                      <TableHead>Impact / Outcome</TableHead>
                      <TableHead>Milestone 2025-27</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Initiators Program</TableCell>
                      <TableCell>10 student-led drives completed</TableCell>
                      <TableCell>Annual Impact Report Submitted</TableCell>
                      <TableCell>Expand to 50+ initiatives</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Designator Program</TableCell>
                      <TableCell>8 trainers certified</TableCell>
                      <TableCell>Certificates issued</TableCell>
                      <TableCell>Launch "Junior Trainer Club"</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">I-Backed Program</TableCell>
                      <TableCell>22 students assisted</TableCell>
                      <TableCell>Admission offers verified</TableCell>
                      <TableCell>Annual overseas mentorship series</TableCell>
                      <TableCell><input type="checkbox" className="h-5 w-5" /></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="border-t-4 border-t-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Milestone Timeline (2025-2027)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Year</TableHead>
                    <TableHead className="font-bold">Goal</TableHead>
                    <TableHead className="font-bold">Expected Outcome</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold text-blue-700">2025</TableCell>
                    <TableCell>Complete all foundational policy executions</TableCell>
                    <TableCell>School fully aligned with international standards</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold text-blue-700">2026</TableCell>
                    <TableCell>Participate in 3+ cross-border or global projects</TableCell>
                    <TableCell>Students gain global exposure</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold text-blue-700">2027</TableCell>
                    <TableCell>Recognized under BISS 1 Million Safe & Standard Schools</TableCell>
                    <TableCell>Certification & Award ceremony</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Expected Outcomes */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-7 w-7 text-green-600" />
                Expected Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Every school functions with organized systems and departments",
                  "Policies lead to visible, measurable outcomes, not just documents",
                  "Students, teachers, and management share accountability and pride in execution",
                  "Annual reports become a transparent record of progress, innovation, and impact",
                  "Schools achieve recognition under BISS 1 Million Safe & Standard Schools Initiative",
                  "Continuous improvement cycle based on data-driven insights and feedback"
                ].map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Banner Section Above Footer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full">
            <img 
              src={bissUncifBanners} 
              alt="BISS & UNCIF - Partnership Initiatives by Uniford Foundation" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default StandardExecution;