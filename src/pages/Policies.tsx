import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FileText, Download, ChevronDown } from "lucide-react";
import { useState } from "react";
import letterheadImg from "@/assets/cia-letterhead.jpeg";

const Policies = () => {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  const policies = [
    {
      id: "participation",
      title: "High Participation of Students Policy",
      content: `Purpose

Our school is dedicated to creating an environment where every student feels encouraged, supported, and inspired to actively participate in meaningful opportunities. We believe student participation is the key to building confidence, practical exposure, and a credible portfolio that prepares them for future success in academics, careers, and social impact.

Policy Statement

Clubs, Societies, and Chapters
• The school will establish various student-led clubs, societies, and chapters to allow students to explore their interests in academics, technology, arts, culture, entrepreneurship, environment, and social development.
• Every student will be encouraged to join at least one club or society.

Incubation Cell & Innovation Hub
• The school will set up an Incubation Cell to support students with new ideas, startups, and innovation projects.
• Students will receive mentorship, guidance, and access to competitions, research, and presentation opportunities.

Student Opportunity Portal
• A dedicated online portal will list worldwide opportunities like:
  - Competitions
  - Internships
  - Research programs
  - Scholarships
  - Certifications
• All opportunities listed will be free of cost or have only minimal charges, ensuring maximum participation.

Alignment with Future Skills & SDGs
The school will prioritize opportunities that:
• Develop 21st-century skills (critical thinking, leadership, creativity, digital skills).
• Promote Sustainable Development Goals (SDGs) such as climate action, quality education, and gender equality.
• Build a credible portfolio for students' higher education and career paths.

Prohibited Activities
The school strictly prohibits:
• Participation in addictive online games, gambling, and other harmful activities.
• Financial investments in fantasy apps or schemes under the name of "financial independence."

Commitment to Equal Access
• All students, regardless of their background, will be equally encouraged to participate.
• The school will ensure that no student is left out due to lack of money, resources, or awareness.`,
    },
    {
      id: "collaboration",
      title: "Tie-ups & Collaboration Policy",
      content: `Purpose

To build strong partnerships with universities, NGOs, industries, and international organizations so that our students get world-class exposure, opportunities, and support for their future.

Policy Statement

University Partnerships
• Collaborate with national and international universities to give students access to research projects, innovation hubs, exchange programs, and mentorship.

NGO Collaborations
• Work with NGOs on social impact projects like environmental campaigns, health drives, women empowerment, and community development.
• Encourage students to participate in social internships.

Industry Tie-ups
• Build partnerships with industries to provide internships, career talks, industrial visits, and skill training.
• Invite professionals to share real-world experiences with students.

International Organizations
• Connect with global organizations (like UN bodies, international research councils, global competitions) so students can learn 21st-century skills and represent our school globally.

Equal Access
• All opportunities will be free or low-cost so every student can participate.

Expected Outcomes
• Students get practical exposure to academics, industries, and global issues.
• School reputation grows through international-level recognition.
• Students build a credible portfolio for higher studies and jobs.`,
    },
    {
      id: "funded",
      title: "Funded Program Policy",
      content: `Purpose

To ensure schools can access funding and resources through Corporate Social Responsibility (CSR) and external partners for the benefit of students, infrastructure, and the community.

Policy Statement

Scholarships through CSR
• Schools will actively seek CSR support to provide scholarships for meritorious and financially weak students.
• Every student should have equal access to quality education regardless of financial background.

Infrastructure Development
• CSR partnerships will help schools improve labs, libraries, classrooms, digital tools, and sports facilities.

Community Welfare Programs
• CSR funds will be used for health camps, awareness campaigns, tree plantation drives, and skill development workshops.
• Students will be actively involved in these projects for real-world learning.

Transparency & Accountability
• All funded programs will be implemented with clear reporting, audit, and review systems.
• A committee of school leaders and student representatives will track the usage of CSR support.

Long-term Impact
• Funded programs will focus on sustainable growth, not just short-term projects.`,
    },
    {
      id: "research",
      title: "Pilot Testing & Research Policy",
      content: `Purpose

To make our school a hub for academic innovation, wellbeing experiments, and EdTech research, so that students and teachers stay at the forefront of learning and development.

Policy Statement

Academic Innovation
• Schools will remain open to new teaching methods, curriculum pilots, and assessment techniques.
• Teachers and students may participate in pilot projects that test modern approaches to learning.

Wellbeing Experiments
• Schools will support mental health, physical fitness, and social-emotional learning programs.
• Pilot initiatives such as mindfulness sessions, stress-free classrooms, and wellness clubs will be introduced and reviewed.

EdTech Research
• Schools will collaborate with EdTech companies, universities, and startups to test digital tools, AI systems, and e-learning platforms.
• Students will get early access to innovative apps, platforms, and technology-based learning experiences.

Feedback & Evaluation
• Each pilot program will be evaluated based on student participation, outcomes, and impact on learning.
• Student and teacher feedback will play a major role in decision-making.

Expected Outcomes
• Students get early exposure to cutting-edge innovations.
• Teachers become research-driven educators.
• The school builds a reputation as a progressive, future-ready institution.`,
    },
    {
      id: "opensource",
      title: "Open Source Contribution Policy",
      content: `Purpose

To allow experts, innovators, and organizations to contribute resources, tools, and knowledge freely to schools, creating an open culture of sharing and growth.

Policy Statement

Knowledge Contributions
• Experts, researchers, and educators may contribute notes, courses, publications, and research materials for student use.
• Contributions will be accessible through the school's digital portal or library.

Technology & Tools
• Innovators and organizations can contribute software, apps, AI tools, or EdTech platforms.
• Open-source tools will be made available for free student and teacher use.

Workshops & Mentorship
• Professionals can volunteer to run seminars, workshops, or mentorship programs.
• Contributions can be virtual or in-person.

Student Collaboration
• Students will also be encouraged to contribute their projects, research, and ideas to the open-source ecosystem.
• This builds a culture of sharing, recognition, and peer learning.

Transparency & Acknowledgment
• Every contribution will be properly acknowledged and credited to the individual or organization.
• Contributions will remain free and accessible to ensure equal opportunities for all students.`,
    },
    {
      id: "clubs",
      title: "Clubs / Society / Chapter Establishment Policy",
      content: `Purpose

To encourage student leadership and active participation through student-led clubs, international chapters, and theme-based societies that build skills, awareness, and global exposure.

Policy Statement

Student-Led Clubs
• Students are free to establish interest-based clubs (e.g., AI Club, Debate Club, Eco Club, Wellbeing Club).
• Every club must have a faculty mentor for guidance, but the club will remain student-led and student-driven.

Theme-Based Societies
• Societies can be formed around larger themes such as Entrepreneurship, Women Empowerment, Environment, Arts, or Technology.
• These societies will organize events, campaigns, and projects aligned with their theme.

International Chapters
• Schools can establish international student chapters to connect with global peers.
• Chapters will be linked with international organizations, universities, or student forums.

Registration & Approval
• A formal proposal must be submitted by students for starting a club, society, or chapter.
• The proposal must include: objective, activities planned, number of members, and sustainability plan.

Accountability & Evaluation
• Each club/society will prepare an annual activity report.
• Clubs will be reviewed based on participation, learning outcomes, and community impact.`,
    },
    {
      id: "crossborder",
      title: "Cross-Border Collaboration Policy",
      content: `Purpose

To give students the chance to become global citizens by promoting student exchanges, joint projects, and virtual collaborations with schools worldwide.

Policy Statement

Global Student Exchange
• The school will partner with foreign schools and universities to allow short-term student exchange programs.
• Exchanges may be physical visits or virtual sessions.

Joint International Projects
• Students will work on collaborative projects with peers in other countries, focusing on SDGs, innovation, research, and cultural exchange.

Virtual Classrooms & Webinars
• Schools will host virtual sessions, debates, cultural programs, and expert talks with international partners.
• This will build cross-cultural communication skills.

Language & Cultural Learning
• Students will be encouraged to learn new languages, traditions, and cultural practices during collaborations.
• Schools will celebrate international days/events together with partner schools.

Equal Access
• Opportunities will be designed to ensure that all interested students can participate, not only selected groups.`,
    },
    {
      id: "certification",
      title: "International Courses & Certification Policy",
      content: `Purpose

To provide students with global learning opportunities by accessing courses and certifications from world-class platforms and universities, ensuring they gain credibility, recognition, and practical skills for the future.

Policy Statement

Access to International Platforms
Students will be encouraged to enroll in recognized courses from platforms such as:
• Google (Digital Skills & Cloud Certifications)
• Harvard, MIT, Stanford, and other universities (edX, Coursera, etc.)
• LinkedIn Learning (career-focused skill building)
• OpenAI, Gemini, and AI/tech-based learning platforms

The school will maintain a digital portal and community group where students receive updates on new free and funded international courses.

Grading & Recognition System
A special grading framework will be introduced in schools where:
• Completion of A-grade international courses will earn students extra marks and grade points.
• Certifications will be added to the student's participation portfolio and annual academic record.

Financial Aid & Free Access
• The school will guide students on how to apply for financial aid and scholarships to access paid certifications for free or at a reduced cost.
• CSR and institutional tie-ups will also support free access to premium global certifications.

Cross-Border Participation
• Students will be encouraged to join cross-border competitions, hackathons, innovation challenges, and global forums through international partner institutions.
• Participation in our tie-up universities' free programs and certifications will be promoted to maximize exposure.

Portfolio & Career Benefits
• International certifications will be added to the student's portfolio, CV, and LinkedIn profiles.
• Schools will ensure students are recognized for their global achievements and practical learning.`,
    },
    {
      id: "portfolio",
      title: "Student Portfolio Submission Policy",
      content: `Purpose

To ensure every student maintains a digital portfolio that records their achievements, projects, certifications, and participation, giving them a credible academic and career advantage.

Policy Statement

Digital Portfolio for Every Student
Every student must create and maintain a personal digital portfolio. The portfolio will include:
• Academic achievements
• Participation in clubs, societies, and competitions
• International certifications and online courses
• Innovation projects, research papers, and incubation activities
• Social internships and community impact work

Annual Submission & Review
• Portfolios must be submitted once every academic year for review.
• A Portfolio Review Committee (teachers + student representatives) will evaluate and provide feedback.

Integration with Internal Grading
• Schools will introduce a marking framework where students earn grades/points for portfolio achievements.
• High-quality portfolios will contribute to internal assessment and final grades.

Global Exposure & Recognition
• Students can use their portfolios when applying to universities, internships, scholarships, and competitions.
• The school will help students align their portfolios with global standards (LinkedIn, Common App, or university application requirements).

Technology & Access
• The school will provide access to a digital platform or portal where students can upload and update their portfolios.
• Students will receive training on portfolio design, presentation, and content writing.

Ethics & Authenticity
• All submissions must be authentic, plagiarism-free, and verified by school authorities.
• False claims or unverified documents will lead to strict action.`,
    },
    {
      id: "training",
      title: "Teacher Orientation & Training Policy",
      content: `Purpose

To ensure that teachers stay updated with global pedagogy, AI tools, and 21st-century teaching skills, while also understanding the school's programs, policies, committees, academic milestones, and culture. This helps teachers deliver practical, engaging, and future-ready education.

Policy Statement

Mandatory Professional Development
All teachers must attend orientation sessions and training workshops at the beginning of every academic year. These sessions will cover:
• School culture, vision, and values
• Details of policies, programs, committees, and milestones
• Global teaching methods and new-age skills

Continuous Learning
Teachers will undergo mandatory quarterly training on:
• Global pedagogy (international best practices)
• AI in education (using AI tools for lesson planning, assessment, and creativity)
• Gamified learning methods (game-based teaching strategies)
• Storytelling techniques (to make learning more relatable and memorable)
• Practical teaching methods (hands-on projects, real-world examples, field exposure)

Integration with School Programs & Policies
Teachers must be fully aware of and aligned with:
• Clubs, societies, and incubation cells
• Cross-border collaborations and student participation policies
• Student portfolio framework and grading system
• CSR-funded programs and open-source contributions

They will act as mentors and facilitators to guide students in these activities.

Committee Participation
• Teachers will be nominated to serve on school committees (safety, student participation, research, innovation, wellbeing, etc.).
• Each committee will include a mix of faculty, student leaders, and school management for balanced decision-making.

Skill Development & Certification
• Teachers will be encouraged to pursue international certifications in teaching, AI, digital pedagogy, and wellbeing education.
• Schools will provide financial aid, training materials, and access to global platforms.

Evaluation & Growth
Teacher performance will be evaluated based on:
• Participation in training and workshops
• Adoption of gamification, storytelling, and practical methods in classrooms
• Contribution to student participation and portfolio building
• Innovation in teaching delivery

Teachers who excel will be recognized through awards, certifications, and promotions.`,
    },
  ];

  return (
    <>
      <SEO
        title="CIA Standard Policies - Chanakya International Academy"
        description="Official policy manual of Chanakya International Academy including student participation, collaboration, research, and international certification policies."
        keywords="CIA policies, school policies, student participation, international collaboration, Chanakya International Academy"
        canonicalUrl="https://ciarampur.org/policies"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Letterhead Header */}
        <div className="relative bg-gradient-to-r from-primary/10 via-background to-primary/10 border-b-2 border-primary/20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo Section */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Chanakya International Academy
                  </h1>
                  <p className="text-muted-foreground mt-1">www.ciarampur.org</p>
                </div>
              </div>

              {/* Report Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Annual Report
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Impact Report
                </Button>
              </div>
            </div>

            {/* MOU Section */}
            <div className="mt-6 p-4 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">MoU:</span> Policy Designer & Implementor -{" "}
                <span className="text-primary font-medium">Uniford Foundation</span>
              </p>
            </div>
          </div>
        </div>

        {/* Policy Manual Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">CIA Standard Policy Manual</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive policies designed to foster student participation, global collaboration,
                and excellence in education at Chanakya International Academy.
              </p>
            </div>

            {/* Annual Report Section */}
            <div className="mb-12 p-6 bg-card rounded-lg border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Annual Report 2024–25
              </h3>

              {/* Executive Summary */}
              <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Executive Summary</h4>
                <p className="text-sm text-muted-foreground">
                  Academic Year 2024-25 marks significant progress in implementing CIA's comprehensive policy framework. 
                  This report presents policy-wise achievements, metrics, and impact across all strategic initiatives.
                </p>
              </div>

              {/* Institutional Overview */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">1. Institutional Tie-Ups & Partnerships</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border border-border p-3 text-left">Partner Organization</th>
                        <th className="border border-border p-3 text-left">Type</th>
                        <th className="border border-border p-3 text-left">Status</th>
                        <th className="border border-border p-3 text-left">Impact Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">UNCIF – BISS</td>
                        <td className="border border-border p-3">International Partnership</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span></td>
                        <td className="border border-border p-3">Cross-border collaboration</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">Uniford Foundation</td>
                        <td className="border border-border p-3">Policy Design MoU</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span></td>
                        <td className="border border-border p-3">Policy implementation & training</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Policy-wise Implementation Status */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">2. Policy-wise Implementation & Updates</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border border-border p-3 text-left">Policy Name</th>
                        <th className="border border-border p-3 text-left">Key Achievements</th>
                        <th className="border border-border p-3 text-left">Metrics</th>
                        <th className="border border-border p-3 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-medium">High Participation of Students</td>
                        <td className="border border-border p-3">
                          • WhatsApp groups created<br/>
                          • Opportunity portal launched<br/>
                          • 4-member committee formed
                        </td>
                        <td className="border border-border p-3">370+ students enrolled<br/>85% club participation</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operational</span></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">Tie-ups & Collaboration</td>
                        <td className="border border-border p-3">
                          • UNCIF partnership established<br/>
                          • Industry visit programs initiated<br/>
                          • NGO collaborations for social projects
                        </td>
                        <td className="border border-border p-3">2 international tie-ups<br/>5+ industry partners</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operational</span></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Funded Programs (CSR)</td>
                        <td className="border border-border p-3">
                          • CSR applications submitted<br/>
                          • Scholarship framework designed<br/>
                          • Infrastructure development planned
                        </td>
                        <td className="border border-border p-3">Funding proposals: 3<br/>Expected beneficiaries: 150+</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">In Progress</span></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">Pilot Testing & Research</td>
                        <td className="border border-border p-3">
                          • EdTech pilots launched<br/>
                          • Wellbeing experiments initiated<br/>
                          • Teacher feedback system established
                        </td>
                        <td className="border border-border p-3">3 pilot programs<br/>12 teachers involved</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operational</span></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Open Source Contribution</td>
                        <td className="border border-border p-3">
                          • Digital portal established<br/>
                          • Expert contributions invited<br/>
                          • Resource library created
                        </td>
                        <td className="border border-border p-3">Open resources: 25+<br/>Contributors: 8</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operational</span></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">Clubs/Society/Chapter Establishment</td>
                        <td className="border border-border p-3">
                          • AI Club established<br/>
                          • Wellbeing Club formed<br/>
                          • Faculty mentors assigned
                        </td>
                        <td className="border border-border p-3">Active clubs: 2<br/>Student members: 120+</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operational</span></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Cross-Border Collaboration</td>
                        <td className="border border-border p-3">
                          • UNCIF partnership active<br/>
                          • Virtual exchange programs planned<br/>
                          • Cultural events scheduled
                        </td>
                        <td className="border border-border p-3">Partner schools: 1<br/>Planned exchanges: 4</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Developing</span></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">International Courses & Certification</td>
                        <td className="border border-border p-3">
                          • Platform access provided<br/>
                          • Student guidance system established<br/>
                          • Grading framework designed
                        </td>
                        <td className="border border-border p-3">Enrolled students: 45<br/>Certifications earned: 12</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operational</span></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Student Portfolio Submission</td>
                        <td className="border border-border p-3">
                          • Digital platform launched<br/>
                          • Portfolio framework established<br/>
                          • Review committee formed
                        </td>
                        <td className="border border-border p-3">Portfolios created: 280<br/>Submission rate: 75%</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operational</span></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">Teacher Orientation & Training</td>
                        <td className="border border-border p-3">
                          • Quarterly training sessions held<br/>
                          • AI tools training completed<br/>
                          • Global pedagogy workshops conducted
                        </td>
                        <td className="border border-border p-3">Teachers trained: 25<br/>Training hours: 40+</td>
                        <td className="border border-border p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operational</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Establishments & Initiatives */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">3. New Establishments & Initiatives</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border border-border p-3 text-left">Program/Initiative</th>
                        <th className="border border-border p-3 text-left">Description</th>
                        <th className="border border-border p-3 text-left">Launch Date</th>
                        <th className="border border-border p-3 text-left">Beneficiaries</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-medium">School Cinema</td>
                        <td className="border border-border p-3">Value-based learning through films</td>
                        <td className="border border-border p-3">August 2024</td>
                        <td className="border border-border p-3">All students (370+)</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">Her-HaVa</td>
                        <td className="border border-border p-3">Women empowerment & SDG initiative</td>
                        <td className="border border-border p-3">September 2024</td>
                        <td className="border border-border p-3">Female students & staff</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Incubation Cell</td>
                        <td className="border border-border p-3">Student innovation & startup support</td>
                        <td className="border border-border p-3">October 2024</td>
                        <td className="border border-border p-3">60+ aspiring entrepreneurs</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">Campus Tank</td>
                        <td className="border border-border p-3">Entrepreneurship hub for student startups</td>
                        <td className="border border-border p-3">November 2024</td>
                        <td className="border border-border p-3">Student entrepreneurs</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Opportunity Portal</td>
                        <td className="border border-border p-3">Global opportunities checklist & tracking</td>
                        <td className="border border-border p-3">December 2024</td>
                        <td className="border border-border p-3">All students</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Student Participation Metrics */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">4. Student Participation Metrics</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-muted-foreground mb-1">Total Enrollment Growth</p>
                    <p className="text-3xl font-bold text-blue-600">+370</p>
                    <p className="text-xs text-muted-foreground mt-1">Students in 2 years</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-muted-foreground mb-1">Club Participation Rate</p>
                    <p className="text-3xl font-bold text-green-600">85%</p>
                    <p className="text-xs text-muted-foreground mt-1">Students in active clubs</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-sm text-muted-foreground mb-1">International Certifications</p>
                    <p className="text-3xl font-bold text-purple-600">12</p>
                    <p className="text-xs text-muted-foreground mt-1">Earned by students</p>
                  </div>
                </div>
              </div>

              {/* Strategic Milestones */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">5. Strategic Milestones for 2027</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border border-border p-3 text-left">Milestone</th>
                        <th className="border border-border p-3 text-left">Target</th>
                        <th className="border border-border p-3 text-left">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">CSR Program Partnerships</td>
                        <td className="border border-border p-3">5+ corporate partnerships</td>
                        <td className="border border-border p-3">2025-2027</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">IIT Collaborations</td>
                        <td className="border border-border p-3">2-3 IIT partnerships for research</td>
                        <td className="border border-border p-3">2025-2027</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">NGO Collaborations</td>
                        <td className="border border-border p-3">10+ NGO partnerships for social impact</td>
                        <td className="border border-border p-3">2025-2027</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">Global Organization Tie-ups</td>
                        <td className="border border-border p-3">Expand international partnerships</td>
                        <td className="border border-border p-3">2025-2027</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Student Achievement Summary */}
              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <h4 className="font-semibold text-base mb-2">6. Student Achievement Summary</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive student achievement report including competition wins, research papers, 
                  innovation projects, and social impact initiatives will be published in Q1 2025.
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  Expected highlights: International competition participations, research publications, 
                  startup launches, and community service hours.
                </p>
              </div>
            </div>

            {/* Policies List */}
            <div className="space-y-4">
              {policies.map((policy) => (
                <Collapsible
                  key={policy.id}
                  open={openPolicy === policy.id}
                  onOpenChange={() =>
                    setOpenPolicy(openPolicy === policy.id ? null : policy.id)
                  }
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                      <h3 className="text-lg font-semibold text-left">{policy.title}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          openPolicy === policy.id ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-2 p-6 bg-muted/30 rounded-lg border border-border">
                      <div className="prose prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                          {policy.content}
                        </pre>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20 text-center">
              <p className="text-sm text-muted-foreground">
                For more information or clarification on any policy, please contact the school administration.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Last Updated: Academic Year 2024-25
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policies;
