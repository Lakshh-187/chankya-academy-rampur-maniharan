import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, AlertTriangle, Phone, Mail, ShieldAlert, Heart } from "lucide-react";
import ciaLogo from "@/assets/cia-logo.jpg";

const Safety = () => {
  return (
    <>
      <SEO 
        title="Safety Policies - POSH & Child Protection | Chanakya International Academy"
        description="Comprehensive safety policies including Prevention of Sexual Harassment (POSH) and Child Protection Policy ensuring a safe environment for all staff and students at Chanakya International Academy, Rampur."
        keywords="POSH policy, child safety, POCSO compliance, school safety, Chanakya International Academy, Rampur school safety, child protection"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-12 h-12 text-blue-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Safety Policies
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensuring a safe, dignified, and protective environment for all students and staff
            </p>
          </div>

          {/* Policy Tabs */}
          <Tabs defaultValue="posh" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-8 h-auto">
              <TabsTrigger value="posh" className="text-base py-4 data-[state=active]:bg-red-600 data-[state=active]:text-white">
                <ShieldAlert className="w-5 h-5 mr-2" />
                POSH Policy
              </TabsTrigger>
              <TabsTrigger value="child-safety" className="text-base py-4 data-[state=active]:bg-green-600 data-[state=active]:text-white">
                <Heart className="w-5 h-5 mr-2" />
                Child Safety Policy
              </TabsTrigger>
            </TabsList>

            {/* POSH Policy Tab Content */}
            <TabsContent value="posh">
              <section className="mb-16">
            <Card className="border-2 border-blue-200 shadow-xl">
              {/* Letterhead */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-6">
                    <img 
                      src={ciaLogo} 
                      alt="Chanakya International Academy Logo" 
                      className="w-24 h-24 bg-white rounded-lg p-2"
                    />
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Chanakya International Academy</h2>
                      <p className="text-blue-100 text-lg">Rampur, Uttar Pradesh</p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">+91 70176 08009</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">info@ciarampur.org</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader className="bg-red-50 border-b-2 border-red-200">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <div>
                    <CardTitle className="text-3xl text-red-900">
                      Prevention of Sexual Harassment (POSH) Policy
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-2">
                      Policy Version: 1.0 | Date of Issue: 2024 | Next Review: 2025
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                {/* Preamble */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default">1</Badge> Preamble & Purpose
                  </h3>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Chanakya International Academy</strong> is committed to ensuring a safe, dignified, and gender-equitable workplace for all employees, volunteers, and associates. This policy upholds the school's zero-tolerance stance towards all forms of sexual harassment and ensures compliance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013 ("POSH Act").
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our school believes that every employee, whether teaching, non-teaching, contractual, visiting, or volunteer, has the right to work in an environment free from discrimination, hostility, or intimidation—including any form of physical, verbal, visual, written, or online sexual harassment.
                    </p>
                  </div>
                </div>

                {/* Internal Committee */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default">2</Badge> Internal Committee (POSH Act 2013)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Objective:</strong> To prevent and address any incident of sexual harassment in the school workplace and to ensure dignity, equality, and respect for all staff and students.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-blue-100">
                          <TableHead className="font-bold">Name</TableHead>
                          <TableHead className="font-bold">Designation</TableHead>
                          <TableHead className="font-bold">Role / Responsibility</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Mrs. Sarika Tomar</TableCell>
                          <TableCell>Managing Head</TableCell>
                          <TableCell>Presiding Officer – Heads committee, ensures fairness</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mr. Lavish Tomar</TableCell>
                          <TableCell>Managing Head</TableCell>
                          <TableCell>Member – Administrative support, policy oversight</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mr. Mayank Rana</TableCell>
                          <TableCell>School Teacher</TableCell>
                          <TableCell>Member – Investigation support</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mr. Shwetabh Sharma</TableCell>
                          <TableCell>School Teacher</TableCell>
                          <TableCell>Member – Awareness & training coordinator</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mrs. R.K.</TableCell>
                          <TableCell>School Teacher</TableCell>
                          <TableCell>Member – Record keeper</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mrs. S.S.</TableCell>
                          <TableCell>School Teacher</TableCell>
                          <TableCell>Member – Internal communication lead</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mr. Lakshay Choudhary</TableCell>
                          <TableCell>External Member – POSH & POCSO Expert</TableCell>
                          <TableCell>External Advisor – Legal expertise & case review</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 mt-4">
                    <p className="font-semibold text-gray-900">Contact for POSH Complaints:</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-amber-700" />
                        <a href="mailto:info@ciarampur.org" className="text-blue-600 hover:underline">info@ciarampur.org</a>
                      </span>
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-amber-700" />
                        <a href="tel:+917017608009" className="text-blue-600 hover:underline">+91 70176 08009</a>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Legal Framework */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default">3</Badge> Legal Framework
                  </h3>
                  <p className="text-gray-700 mb-3">This policy is framed under:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</li>
                    <li>The Rules notified thereunder (2013)</li>
                    <li>Vishaka Guidelines, 1997</li>
                    <li>CBSE Circular on Sexual Harassment Redressal Mechanisms in Schools (2017 onwards)</li>
                    <li>National Commission for Women (NCW) advisories and MHRD circulars</li>
                  </ul>
                </div>

                {/* Scope & Applicability */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default">4</Badge> Scope & Applicability
                  </h3>
                  <div className="bg-green-50 p-6 rounded-lg space-y-3">
                    <p className="text-gray-700">This policy applies to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>All women employees — teaching, non-teaching, contractual, temporary, part-time, outsourced, and volunteers</li>
                      <li>Female interns, student teachers, consultants, vendors, and any woman visiting or associated with the school in any capacity</li>
                      <li>It also covers harassment by any person at the workplace, including other employees, parents, vendors, visitors, or even external personnel</li>
                    </ul>
                    <p className="text-gray-700 mt-4"><strong>"Workplace" includes:</strong></p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>School premises (classrooms, staffrooms, offices, playgrounds, hostels, buses, etc.)</li>
                      <li>School events (excursions, functions, workshops, training, sports)</li>
                      <li>Online / virtual spaces used for school work (emails, chats, LMS, social media, etc.)</li>
                    </ul>
                  </div>
                </div>

                {/* Definition of Sexual Harassment */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default">5</Badge> Definition of Sexual Harassment
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Under Section 2(n) of the POSH Act, sexual harassment includes any one or more of the following unwelcome acts or behaviour:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-red-100">
                          <TableHead className="font-bold">Category</TableHead>
                          <TableHead className="font-bold">Examples</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Physical contact or advances</TableCell>
                          <TableCell>Touching, hugging, brushing against, invading personal space</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Demand for sexual favours</TableCell>
                          <TableCell>Implicit or explicit demands for sexual acts in exchange for favours, promotion, or leniency</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Sexually coloured remarks</TableCell>
                          <TableCell>Jokes, comments, innuendoes, or offensive language about gender, appearance, or body</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Showing pornography</TableCell>
                          <TableCell>Displaying, sharing, or sending sexually explicit images, videos, links</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Other unwelcome conduct</TableCell>
                          <TableCell>Staring, leering, suggestive gestures, messages, songs, or emojis</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Digital / online harassment</TableCell>
                          <TableCell>Unwanted online messages, stalking, sexting, inappropriate video calls, or sharing private images</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Prohibition & Policy Commitment */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default">6</Badge> Prohibition & Policy Commitment
                  </h3>
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600 space-y-3">
                    <p className="text-gray-700">
                      <strong>Chanakya International Academy</strong> prohibits any form of sexual harassment within or connected to the workplace.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>All complaints will be treated confidentially, impartially, and promptly</li>
                      <li>Retaliation against any complainant or witness is strictly prohibited</li>
                      <li>False / malicious complaints, if proven after due inquiry, may attract disciplinary action</li>
                    </ul>
                  </div>
                </div>

                {/* Complaint Mechanism */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default">7</Badge> Complaint Mechanism & Procedure
                  </h3>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">7.1 How to File a Complaint</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                    <li>Complaint must be made in writing within 3 months from the date of incident (extendable to 6 months by IC if justified)</li>
                    <li>It may be submitted to the Presiding Officer / IC member / dedicated email / complaint box</li>
                    <li>The IC can assist the complainant in writing if required</li>
                    <li>Anonymous complaints are discouraged but can trigger internal vigilance</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">7.2 Inquiry Process</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-blue-100">
                          <TableHead className="font-bold">Step</TableHead>
                          <TableHead className="font-bold">Timeline / Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">1. Receipt of complaint</TableCell>
                          <TableCell>Within 3 working days acknowledge receipt</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2. Preliminary assessment</TableCell>
                          <TableCell>Check scope under POSH Act; if valid, initiate inquiry</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">3. Notice to Respondent</TableCell>
                          <TableCell>Respondent given 10 working days to reply</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">4. Hearings</TableCell>
                          <TableCell>Conducted confidentially, allowing both parties to present evidence & witnesses</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">5. Interim Relief (if needed)</TableCell>
                          <TableCell>Transfer, leave, or restraining orders to protect complainant</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">6. Inquiry Report</TableCell>
                          <TableCell>Completed within 90 days; findings submitted to Head of School</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">7. Action</TableCell>
                          <TableCell>Management must act within 60 days of receiving IC recommendations</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">8. Appeal</TableCell>
                          <TableCell>Either party may appeal within 90 days to the District Officer / Appellate Authority</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Awareness & Training */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default">8</Badge> Awareness, Sensitization & Training
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-purple-100">
                          <TableHead className="font-bold">Audience</TableHead>
                          <TableHead className="font-bold">Mode of Awareness</TableHead>
                          <TableHead className="font-bold">Frequency</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">All Employees</TableCell>
                          <TableCell>Orientation on POSH law, conduct, complaint mechanism</TableCell>
                          <TableCell>On joining + annual refreshers</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Teachers & Staff</TableCell>
                          <TableCell>Interactive workshops, scenario-based sessions</TableCell>
                          <TableCell>Once every 6 months</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Students (Age 14+)</TableCell>
                          <TableCell>Gender sensitivity, respect, consent education</TableCell>
                          <TableCell>Yearly through life-skills curriculum</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Parents</TableCell>
                          <TableCell>Orientation on school's safety & respect policies</TableCell>
                          <TableCell>Annual PTMs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">IC Members</TableCell>
                          <TableCell>Capacity-building on legal procedures, trauma care</TableCell>
                          <TableCell>Annual</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Helpline Resources */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default">9</Badge> Helpline & Resources
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <p className="font-semibold text-gray-900 mb-2">National Commission for Women (NCW) Helpline</p>
                      <p className="text-2xl font-bold text-blue-600">7827-170-170</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                      <p className="font-semibold text-gray-900 mb-2">Local Police / Women's Cell</p>
                      <p className="text-2xl font-bold text-purple-600">1091</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-600">
                      <p className="font-semibold text-gray-900 mb-2">National Helpline (Women in Distress)</p>
                      <p className="text-2xl font-bold text-pink-600">181</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                      <p className="font-semibold text-gray-900 mb-2">POSH Portal for Online Complaint</p>
                      <a href="https://www.shebox.nic.in" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-semibold">www.shebox.nic.in</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
            </TabsContent>

            {/* Child Safety Policy Tab Content */}
            <TabsContent value="child-safety">
              <section>
            <Card className="border-2 border-green-200 shadow-xl">
              {/* Letterhead */}
              <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-6">
                    <img 
                      src={ciaLogo} 
                      alt="Chanakya International Academy Logo" 
                      className="w-24 h-24 bg-white rounded-lg p-2"
                    />
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Chanakya International Academy</h2>
                      <p className="text-green-100 text-lg">Rampur, Uttar Pradesh</p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">+91 70176 08009</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">info@ciarampur.org</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader className="bg-green-50 border-b-2 border-green-200">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-600" />
                  <div>
                    <CardTitle className="text-3xl text-green-900">
                      Child Safety & Protection Policy
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-2">
                      Policy Version: 1.0 | Date of Adoption: 2024 | Next Review: 2025
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                {/* Preamble */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">1</Badge> Preamble / Philosophy / Vision
                  </h3>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Chanakya International Academy</strong> is committed to providing a safe, secure, nurturing, and child-friendly environment in which all students can grow physically, emotionally, socially, intellectually, and morally.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>We adopt a zero tolerance approach to all forms of abuse, harassment, neglect, exploitation, bullying (online or offline), and violence</li>
                      <li>The best interests of the child will be the primary consideration in all decision-making</li>
                      <li>This policy aims to prevent, identify, respond to, and monitor all forms of risk to children's well-being, dignity, health, and safety</li>
                    </ul>
                  </div>
                </div>

                {/* Child Protection Committee */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">2</Badge> Child Protection Committee
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Objective:</strong> To ensure a safe, supportive, and protective environment for every child in the school by preventing, identifying, and addressing any form of abuse, neglect, or exploitation—offline or online.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-green-100">
                          <TableHead className="font-bold">Name</TableHead>
                          <TableHead className="font-bold">Designation</TableHead>
                          <TableHead className="font-bold">Role / Responsibility</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Mr. Lavish Tomar</TableCell>
                          <TableCell>Managing Head</TableCell>
                          <TableCell>Chairperson – Overall supervision, policy oversight</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mrs. Sarika Tomar</TableCell>
                          <TableCell>Managing Head</TableCell>
                          <TableCell>Co-Chair – Policy review, parent liaison</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mr. Mayank Rana</TableCell>
                          <TableCell>School Teacher</TableCell>
                          <TableCell>Member – Student safety coordination</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mr. Shwetabh Sharma</TableCell>
                          <TableCell>School Teacher</TableCell>
                          <TableCell>Member – Awareness and reporting facilitation</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mrs. R.K.</TableCell>
                          <TableCell>School Teacher</TableCell>
                          <TableCell>Member – Counseling and child well-being</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mrs. S.S.</TableCell>
                          <TableCell>School Teacher</TableCell>
                          <TableCell>Member – Training and documentation</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mr. Lakshay Choudhary</TableCell>
                          <TableCell>External Member – POSH & POCSO Expert</TableCell>
                          <TableCell>Advisor – Legal guidance, external monitoring</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 mt-4">
                    <p className="font-semibold text-gray-900">Contact for Child Safety Concerns:</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-amber-700" />
                        <a href="mailto:info@ciarampur.org" className="text-blue-600 hover:underline">info@ciarampur.org</a>
                      </span>
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-amber-700" />
                        <a href="tel:+917017608009" className="text-blue-600 hover:underline">+91 70176 08009</a>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Legal Framework */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">3</Badge> Legal & Guiding Framework
                  </h3>
                  <p className="text-gray-700 mb-3">This policy is informed by:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>The Protection of Children from Sexual Offences (POCSO) Act, 2012 (and its Rules)</li>
                    <li>The NCPCR "Manual on Safety & Security of Children in Schools"</li>
                    <li>NCPCR's "Preventing Bullying & Cyberbullying Guidelines"</li>
                    <li>Guidelines on School Safety & Security, Ministry of Education, Government of India</li>
                    <li>The National Commission for Protection of Child Rights (NCPCR) guidelines and manuals</li>
                    <li>The "Handbook on Implementation of POCSO Act, 2012 for School Management and Staff"</li>
                  </ul>
                </div>

                {/* Scope & Applicability */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">4</Badge> Scope & Applicability
                  </h3>
                  <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                    <p className="text-gray-700">This policy applies to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>All students enrolled in <strong>Chanakya International Academy</strong>, including during co-curricular, extracurricular activities, transport, hostels, and excursions</li>
                      <li>All staff (teaching, non-teaching, contractual, volunteers, interns)</li>
                      <li>All visitors, third-party service providers, contractors, etc.</li>
                      <li>All contexts including on-campus, off-campus (field trips, excursions), online/digital interaction (e-learning, digital platforms, social media), transport, hostel, etc.</li>
                    </ul>
                  </div>
                </div>

                {/* Definitions & Types of Harm */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">5</Badge> Definitions & Types of Harm
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-red-100">
                          <TableHead className="font-bold">Type of Harm</TableHead>
                          <TableHead className="font-bold">Definition</TableHead>
                          <TableHead className="font-bold">Examples / Indicators</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Physical abuse</TableCell>
                          <TableCell>Intentional bodily harm inflicted on a child</TableCell>
                          <TableCell>Unexplained bruises, burns, fractures, avoiding physical contact, fear of certain persons</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Emotional / psychological abuse</TableCell>
                          <TableCell>Repeated verbal, emotional maltreatment harming self-worth</TableCell>
                          <TableCell>Insults, shouting, humiliation, threat, rejection, persistent criticism</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Sexual abuse / harassment</TableCell>
                          <TableCell>Any sexual act or attempt, exploitation involving children</TableCell>
                          <TableCell>Inappropriate touching, exposure, sexual gestures, grooming, indecent messages, pornography exposure</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Neglect</TableCell>
                          <TableCell>Failure to provide basic needs or supervision</TableCell>
                          <TableCell>Poor hygiene, malnutrition, unattended medical issues, absenteeism, lack of supervision</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Bullying / cyberbullying</TableCell>
                          <TableCell>Repeated aggressive behaviour among peers</TableCell>
                          <TableCell>Name-calling, exclusion, threats, spreading rumors, harmful messages, sharing intimate images</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Cyber / digital risks</TableCell>
                          <TableCell>Online grooming, harassment, exposure to harmful content</TableCell>
                          <TableCell>Unsolicited messages, inappropriate content sharing, hacking, identity theft, online sexual solicitation</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Self-harm / suicidal ideation</TableCell>
                          <TableCell>Behaviour or ideation causing self-injury</TableCell>
                          <TableCell>Cutting, overdose, talk of self-harm, severe depression</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Roles & Responsibilities */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">6</Badge> Roles & Responsibilities
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-purple-100">
                          <TableHead className="font-bold">Stakeholder</TableHead>
                          <TableHead className="font-bold">Key Responsibilities</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">School Leadership</TableCell>
                          <TableCell>
                            • Adopt and enforce this policy<br/>
                            • Allocate budget, infrastructure resources<br/>
                            • Monitor compliance and oversee reporting<br/>
                            • Liaise with external agencies (police, CWCs, etc.)
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Child Protection Committee</TableCell>
                          <TableCell>
                            • Review policy & updates<br/>
                            • Handle complaints, investigations, follow-ups<br/>
                            • Maintain case records (secure)<br/>
                            • Plan and monitor training, awareness
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Teachers / Staff</TableCell>
                          <TableCell>
                            • Undergo induction and regular training<br/>
                            • Be vigilant, maintain professional boundaries<br/>
                            • Report any suspicion immediately to CPO<br/>
                            • Maintain confidentiality, dignity of child
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Students</TableCell>
                          <TableCell>
                            • Be aware of their rights and safety<br/>
                            • Participate in awareness programs<br/>
                            • Use reporting mechanisms if they feel unsafe<br/>
                            • Respect peers, avoid perpetrating bullying
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Parents / Guardians</TableCell>
                          <TableCell>
                            • Support the policy, attend orientation programs<br/>
                            • Encourage children to speak out<br/>
                            • Monitor children's online use<br/>
                            • Report concerns or changes in behaviour to school
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Prevention Strategies */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">7</Badge> Prevention Strategies & Safeguards
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <h4 className="font-semibold text-gray-900 mb-2">Safe Recruitment</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Police verification for all staff</li>
                        <li>Background checks</li>
                        <li>Child-safety clearance certificates</li>
                        <li>Written code of conduct</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                      <h4 className="font-semibold text-gray-900 mb-2">Training & Sensitization</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Induction training on POCSO</li>
                        <li>Regular refresher sessions</li>
                        <li>Age-appropriate student awareness</li>
                        <li>Parent orientation programs</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                      <h4 className="font-semibold text-gray-900 mb-2">Safe Infrastructure</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>CCTV surveillance in common areas</li>
                        <li>Secure boundary walls, gated entry</li>
                        <li>Safe toilets with good visibility</li>
                        <li>Regular maintenance, hazard audits</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                      <h4 className="font-semibold text-gray-900 mb-2">Digital Safety</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Content filtering & firewall</li>
                        <li>Strong password policies</li>
                        <li>Digital literacy training</li>
                        <li>Monitoring official channels only</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Response Procedures */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">8</Badge> Response & Redressal Procedures
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                      <h4 className="font-semibold text-gray-900 mb-2">8.1 Immediate Response</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Ensure the safety of the child (remove from harm)</li>
                        <li>Provide emotional support; listen, reassure</li>
                        <li>Preserve evidence without tampering</li>
                        <li>Avoid leading questions; record child's narrative in their own words</li>
                        <li>Maintain confidentiality</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                      <h4 className="font-semibold text-gray-900 mb-2">8.2 Reporting & Escalation</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>CPO receives complaint and escalates internally</li>
                        <li>Within 24 hours, determine external reporting need</li>
                        <li>Mandatory reporting to Police / CWC under Section 19, POCSO Act</li>
                        <li>Inform parents / guardians (unless it would place child at risk)</li>
                        <li>Facilitate immediate medical care if needed</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <h4 className="font-semibold text-gray-900 mb-2">8.3 Follow-up & Support</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Provide counselling / psychological support</li>
                        <li>Monitor safety plan, risk mitigation</li>
                        <li>Remedial measures for responsible staff if necessary</li>
                        <li>Reintegration support, peer acceptance</li>
                        <li>Periodic review of case closure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Helpline Resources */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">9</Badge> Emergency Helplines & Resources
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <p className="font-semibold text-gray-900 mb-2">ChildLine (24x7 Helpline)</p>
                      <p className="text-2xl font-bold text-blue-600">1098</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                      <p className="font-semibold text-gray-900 mb-2">Women & Child Helpline</p>
                      <p className="text-2xl font-bold text-purple-600">181</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-600">
                      <p className="font-semibold text-gray-900 mb-2">National Commission for Protection of Child Rights</p>
                      <p className="text-lg font-bold text-pink-600">011-23478200</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                      <p className="font-semibold text-gray-900 mb-2">Cyber Crime Reporting</p>
                      <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-semibold">cybercrime.gov.in</a>
                    </div>
                  </div>
                </div>

                {/* Policy Review */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Badge variant="default" className="bg-green-600">10</Badge> Policy Review & Amendment
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>This policy shall be reviewed at least once every academic year</li>
                      <li>Any amendments require approval by school management and Child Protection Committee</li>
                      <li>All staff will be informed of changes and retrained as needed</li>
                      <li>Updated versions will be available on the school website and notice boards</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </>
  );
};

export default Safety;
