import { SEO } from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Film, Lightbulb, Target, Users, FileText, TrendingUp, Award, BookOpen, Rocket, Globe, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import bissBannerHero from "@/assets/biss-banner-hero.jpg";
import bissUncifBanners from "@/assets/biss-uncif-banners.jpg";

const StandardExecution = () => {
  return (
    <>
      <SEO
        title="Standard Execution - SSSC, School Cinema & Incubation Cell | Chanakya International Academy"
        description="Explore our School Safety & Standard Committee, School Cinema platform for student innovation, and Incubation Cell supporting student initiatives, internships, and innovation."
        keywords="school safety committee, school cinema, incubation cell, student innovation, school standards, Chanakya International Academy"
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
              Excellence Through Innovation
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Building a safe, innovative, and excellence-driven learning environment through our comprehensive framework
            </p>
          </div>
        </section>

        {/* Main Tabs Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs defaultValue="sssc" className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 mb-12 h-auto bg-white shadow-lg">
              <TabsTrigger 
                value="sssc" 
                className="text-base py-4 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white flex flex-col items-center gap-2"
              >
                <Shield className="w-6 h-6" />
                <span>SSSC</span>
              </TabsTrigger>
              <TabsTrigger 
                value="cinema" 
                className="text-base py-4 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white flex flex-col items-center gap-2"
              >
                <Film className="w-6 h-6" />
                <span>School Cinema</span>
              </TabsTrigger>
              <TabsTrigger 
                value="incubation" 
                className="text-base py-4 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white flex flex-col items-center gap-2"
              >
                <Lightbulb className="w-6 h-6" />
                <span>Incubation Cell</span>
              </TabsTrigger>
            </TabsList>

            {/* SSSC Tab Content */}
            <TabsContent value="sssc" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  School Safety & Standard Committee (SSSC)
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ensuring comprehensive safety and academic excellence through structured governance and coordination
                </p>
              </div>

              {/* Governance Structure */}
              <Card className="border-2 border-blue-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Governing Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Designation</TableHead>
                        <TableHead className="font-bold">Core Role</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Chairperson (Principal / Head of School)</TableCell>
                        <TableCell>Leads the SSSC; approves reports, ensures resources & compliance, presents annual report to management</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Safety Audit Officer (SAO)</TableCell>
                        <TableCell>Conducts safety audits using checklist; coordinates with POSH, Child Safety, Data Protection, and Safe Culture Club Heads; prepares the Annual Safety Report</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Standard Audit Officer (StAO)</TableCell>
                        <TableCell>Conducts academic/standard audits using standard checklist; coordinates with Department Heads, Program Leads, and Incubation Cell; prepares the Annual Academic & Standard Report</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Coordination Flowchart */}
              <Card className="border-2 border-blue-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-blue-600" />
                    Coordination Structure
                  </CardTitle>
                  <CardDescription>Hierarchical structure and reporting lines</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-200">
                    <div className="text-center space-y-6">
                      <div className="bg-blue-600 text-white py-3 px-6 rounded-lg inline-block font-bold text-lg">
                        Chairperson (Principal)
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-purple-100 p-6 rounded-lg">
                          <h4 className="font-bold text-purple-900 mb-3">Safety Audit Officer (SAO)</h4>
                          <div className="text-sm space-y-1">
                            <div>→ POSH Head</div>
                            <div>→ Child Safety Head</div>
                            <div>→ Safe Culture Club</div>
                            <div>→ DPDPA Officer</div>
                          </div>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg">
                          <h4 className="font-bold text-green-900 mb-3">Standard Audit Officer (StAO)</h4>
                          <div className="text-sm space-y-1">
                            <div>→ Department Heads</div>
                            <div>→ Program Leads</div>
                            <div>→ Incubation Cell</div>
                            <div>→ Club Heads</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* SAO Responsibilities */}
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-purple-600" />
                    Safety Audit Officer (SAO) - Detailed Responsibilities
                  </CardTitle>
                  <CardDescription>Making the school safe, compliant, and audit-ready</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {[
                          "Use Safety Checklist to audit infrastructure safety",
                          "Monitor fire & electrical safety systems",
                          "Ensure POCSO, POSH, and Child Safety implementation",
                          "Oversee cyber safety & DPDPA compliance",
                          "Conduct quarterly inspections and document findings",
                          "Coordinate with all safety committee heads"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                      <div className="space-y-2">
                        <Badge className="bg-purple-600 text-white">Quarterly Audit Summary</Badge>
                        <Badge className="bg-purple-600 text-white">Corrective Action Tracker</Badge>
                        <Badge className="bg-purple-600 text-white">Annual School Safety Report</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* StAO Responsibilities */}
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-green-600" />
                    Standard Audit Officer (StAO) - Detailed Responsibilities
                  </CardTitle>
                  <CardDescription>Ensuring academic excellence and NEP-NCF alignment</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {[
                          "Use Academic Standard Checklist for audits",
                          "Review departmental plans & lesson audits",
                          "Monitor NEP-NCF implementation",
                          "Assess skill-based & experiential learning",
                          "Track innovation, incubation, and AI integration",
                          "Evaluate teacher training & program outcomes"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                      <div className="space-y-2">
                        <Badge className="bg-green-600 text-white">Biannual Audit Reports</Badge>
                        <Badge className="bg-green-600 text-white">Standard Progress Tracker</Badge>
                        <Badge className="bg-green-600 text-white">Annual Academic & Innovation Report</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sub-Committees */}
              <Card>
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <CardTitle>Sub-Committees & Representatives</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Category</TableHead>
                        <TableHead className="font-bold">Head / Representative</TableHead>
                        <TableHead className="font-bold">Core Focus</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { category: "POSH Committee", head: "POSH Head", focus: "Prevention of workplace harassment" },
                        { category: "Child Safety Committee", head: "CSC Head", focus: "Child protection, POCSO, safety drills" },
                        { category: "Safe Culture Club", head: "President", focus: "Awareness campaigns, wellbeing drives" },
                        { category: "DPDPA Officer", head: "Data Rep", focus: "Data privacy & consent management" },
                        { category: "Department Heads", head: "Academic HODs", focus: "Curriculum & assessment standards" },
                        { category: "Program Leads", head: "NEP / AI / SDG Programs", focus: "Implementation & teacher development" },
                        { category: "Incubation Cell Lead", head: "Innovation Mentor", focus: "Internships, projects, authorship" },
                        { category: "Club Presidents", head: "Student/Teacher leads", focus: "Student engagement & creativity" }
                      ].map((item, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-semibold">{item.category}</TableCell>
                          <TableCell>{item.head}</TableCell>
                          <TableCell>{item.focus}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* School Cinema Tab Content */}
            <TabsContent value="cinema" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  School Cinema 🎬
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Where students are the actors, teachers are the directors, and learning becomes the story!
                </p>
              </div>

              {/* What is School Cinema */}
              <Card className="border-2 border-purple-200 shadow-xl bg-gradient-to-br from-purple-50 to-white">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Film className="w-8 h-8" />
                    What is School Cinema?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    School Cinema is a revolutionary platform where students pitch their initiatives, innovations, projects, talents, creations, and subject theories in a practical and engaging way. Every episode showcases your school's ideas and achievements through short films, reels, and stories published on social media and compiled into an annual magazine.
                  </p>
                  <div className="bg-purple-100 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-purple-900">Platform Highlights:</h4>
                    <ul className="space-y-2">
                      {[
                        "Students are the actors - showcasing real learning",
                        "Teachers are the directors - guiding creative expression",
                        "Learning becomes the story - making education visual and engaging",
                        "Episodes published on social media platforms",
                        "Compiled into an annual school magazine"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Film className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Process Flow */}
              <Card className="border-2 border-purple-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-purple-600" />
                    School Cinema Process Flow
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg border-2 border-purple-200">
                    <div className="flex flex-wrap justify-center gap-4 items-center">
                      <Badge className="bg-purple-600 text-white text-base py-2">Student Pitch</Badge>
                      <span>→</span>
                      <Badge className="bg-purple-500 text-white text-base py-2">Teacher Review</Badge>
                      <span>→</span>
                      <Badge className="bg-purple-600 text-white text-base py-2">Production</Badge>
                      <span>→</span>
                      <Badge className="bg-purple-500 text-white text-base py-2">Publishing</Badge>
                      <span>→</span>
                      <Badge className="bg-purple-600 text-white text-base py-2">Annual Magazine</Badge>
                      <span>→</span>
                      <Badge className="bg-green-600 text-white text-base py-2">Global Opportunities</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Content Categories */}
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                    What Students Can Showcase
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: "Initiatives", items: ["Social drives", "Community projects", "Awareness campaigns"] },
                      { title: "Innovation", items: ["Tech projects", "Scientific experiments", "Creative solutions"] },
                      { title: "Projects & Talents", items: ["Art & performances", "Research work", "Subject practicals"] },
                      { title: "Creations", items: ["Inventions", "Designs", "Digital content"] },
                      { title: "Theory to Practice", items: ["Science experiments", "Math in real life", "History reenactments"] },
                      { title: "Everything Creative", items: ["Poetry & stories", "Music & dance", "Sports achievements"] }
                    ].map((category, idx) => (
                      <div key={idx} className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-bold text-purple-900 mb-3">{category.title}</h4>
                        <ul className="space-y-1">
                          {category.items.map((item, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Partner Support */}
              <Card className="bg-gradient-to-r from-green-50 to-purple-50 border-2 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-green-600" />
                    UTHA & UIRAD Connect Support
                  </CardTitle>
                  <CardDescription>Connecting best students with global opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <Rocket className="w-6 h-6" />, title: "Global Opportunities", desc: "Connect with international programs and competitions" },
                      { icon: <Lightbulb className="w-6 h-6" />, title: "Incubation Support", desc: "Turn ideas into reality with mentorship and resources" },
                      { icon: <Award className="w-6 h-6" />, title: "Scholarships & Grants", desc: "Financial support for outstanding projects and initiatives" },
                      { icon: <FileText className="w-6 h-6" />, title: "Recommendations", desc: "Endorsements for university applications and internships" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Incubation Cell Tab Content */}
            <TabsContent value="incubation" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Incubation Cell 🚀
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Empowering students through innovation, internships, and initiatives
                </p>
              </div>

              {/* What is Incubation Cell */}
              <Card className="border-2 border-green-200 shadow-xl bg-gradient-to-br from-green-50 to-white">
                <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Lightbulb className="w-8 h-8" />
                    What is the Incubation Cell?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The Incubation Cell is a dedicated support system that helps students transform their ideas into reality. It provides comprehensive assistance in initiatives, internships, innovation, authorship, AI for education, gamified learning activities, and connects students with mentors through workshops, sessions, and seminars.
                  </p>
                </CardContent>
              </Card>

              {/* Incubation Cell Structure */}
              <Card className="border-2 border-green-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-green-600" />
                    Incubation Cell Structure & Support Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
                    <div className="text-center">
                      <Badge className="bg-green-600 text-white text-lg py-3 px-6 mb-6">Incubation Cell</Badge>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                        <Badge className="bg-blue-500 text-white py-2">Initiatives</Badge>
                        <Badge className="bg-blue-500 text-white py-2">Internships</Badge>
                        <Badge className="bg-blue-500 text-white py-2">Innovation</Badge>
                        <Badge className="bg-blue-500 text-white py-2">Author Program</Badge>
                        <Badge className="bg-blue-500 text-white py-2">AI for Education</Badge>
                        <Badge className="bg-blue-500 text-white py-2">Gamified Learning</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Areas */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Rocket className="w-8 h-8" />,
                    title: "Student Initiatives",
                    color: "blue",
                    points: [
                      "Help launch social and educational initiatives",
                      "Provide resources and mentorship",
                      "Connect with NGOs and community partners",
                      "Track progress and impact measurement"
                    ]
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Internships",
                    color: "purple",
                    points: [
                      "Connect students with industry internships",
                      "Coordinate with companies and startups",
                      "Provide pre-internship skill training",
                      "Monitor internship experiences and outcomes"
                    ]
                  },
                  {
                    icon: <Lightbulb className="w-8 h-8" />,
                    title: "Innovation Projects",
                    color: "orange",
                    points: [
                      "Support science and technology projects",
                      "Provide lab facilities and equipment",
                      "Help with patent filing and documentation",
                      "Facilitate participation in competitions"
                    ]
                  },
                  {
                    icon: <BookOpen className="w-8 h-8" />,
                    title: "Author Program",
                    color: "pink",
                    points: [
                      "Guide students in writing and publishing",
                      "Connect with publishers and literary agents",
                      "Organize writing workshops and sessions",
                      "Support research paper publication"
                    ]
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "AI for Education",
                    color: "indigo",
                    points: [
                      "Integrate AI tools in learning",
                      "Teach AI literacy and ethics",
                      "Support AI-based student projects",
                      "Organize AI hackathons and challenges"
                    ]
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: "Gamified Activities",
                    color: "green",
                    points: [
                      "Create engaging learning games",
                      "Gamify subject content for better retention",
                      "Develop interactive quizzes and challenges",
                      "Build educational mobile apps"
                    ]
                  }
                ].map((area, idx) => (
                  <Card key={idx} className={`border-l-4 border-l-${area.color}-600 hover:shadow-lg transition-shadow`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-2 bg-${area.color}-100 text-${area.color}-600 rounded-lg`}>
                          {area.icon}
                        </div>
                        {area.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {area.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mentor Connection */}
              <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    Mentor Connection & Support
                  </CardTitle>
                  <CardDescription>Building bridges to industry experts and thought leaders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { type: "Workshops", desc: "Hands-on skill development sessions", icon: "🛠️" },
                      { type: "Seminars", desc: "Expert talks on industry trends", icon: "🎤" },
                      { type: "Mentorship", desc: "One-on-one guidance from professionals", icon: "👥" },
                      { type: "Networking", desc: "Connect with alumni and industry", icon: "🤝" },
                      { type: "Projects", desc: "Real-world problem solving", icon: "💡" },
                      { type: "Competitions", desc: "Participate in national/global events", icon: "🏆" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.type}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Success Roadmap */}
              <Card className="border-2 border-green-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-green-600" />
                    Student Success Roadmap
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 p-8 rounded-lg border-2 border-blue-200">
                    <div className="flex flex-wrap justify-center gap-3 items-center">
                      <Badge className="bg-blue-600 text-white py-2">Idea</Badge>
                      <span>→</span>
                      <Badge className="bg-green-600 text-white py-2">Incubation Support</Badge>
                      <span>→</span>
                      <Badge className="bg-purple-600 text-white py-2">Skill Development</Badge>
                      <span>→</span>
                      <Badge className="bg-orange-600 text-white py-2">Execution</Badge>
                      <span>→</span>
                      <Badge className="bg-pink-600 text-white py-2">Recognition</Badge>
                      <span>→</span>
                      <Badge className="bg-green-700 text-white py-2">Global Success</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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