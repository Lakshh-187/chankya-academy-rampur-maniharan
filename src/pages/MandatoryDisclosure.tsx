
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Shield, Building, Users, DollarSign, Award, BookOpen, Zap, Clock, Calendar, Droplets, MapPin, FileImage, UserCheck } from "lucide-react";

export default function MandatoryDisclosure() {
  const documents = [
    {
      title: "Trust Registration Details",
      description: "Official Trust Registration Certificate & Complete Details",
      icon: Shield,
      size: "2.5 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/1Rb8MmhQM9iwHQTrsmU1LddJkhxM-kvje/view?usp=sharing",
      highlight: true
    },
    {
      title: "Mandatory Public Disclosure",
      description: "CBSE Mandatory Public Disclosure - Complete Information",
      icon: FileText,
      size: "1.8 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/1lIU92tfhp3Uv9_Q-AYnyvYQxHodM2CSb/view?usp=sharing",
      highlight: true
    },
    {
      title: "Academic Calendar",
      description: "Complete Academic Year 2024-25 Calendar & Schedule",
      icon: Calendar,
      size: "1.2 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/16euP6woUyMSDWs14tIh3NlNk7mq8vBID/view?usp=sharing"
    },
    {
      title: "Safe Drinking Water & Sanitary Certificate",
      description: "Water Quality & Sanitation Approval Certificate",
      icon: Droplets,
      size: "1.5 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/1C71owHSvgi_B16yhg9YFOgWWu4Ewa5NN/view?usp=sharing"
    },
    {
      title: "Building Safety Certificate",
      description: "Structural Safety & Building Approval Certificate",
      icon: Building,
      size: "2.3 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/1FtBV2UkslE5XVWJ9Bj2901vNvIioyxCL/view?usp=sharing"
    },
    {
      title: "Certificate of Land",
      description: "Land Ownership & Property Documentation",
      icon: MapPin,
      size: "1.8 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/12UiRBLtoN7i29-LuY05Sfk90-oOtsqB8/view?usp=sharing"
    },
    {
      title: "Letter Head",
      description: "Official School Letter Head Template",
      icon: FileImage,
      size: "856 KB",
      type: "PDF",
      url: "https://drive.google.com/file/d/1dV5KqNl50-E1gN1sLLs31ZebXIBVQlB1/view?usp=sharing"
    },
    {
      title: "Certificate of School Recognition",
      description: "Official School Recognition Certificate",
      icon: Award,
      size: "1.9 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/1XWYk4dE1CrOgscOrnDub4FKyqvVgll5i/view?usp=sharing"
    },
    {
      title: "Board Member & Staff",
      description: "Complete Board Members & Staff Details",
      icon: UserCheck,
      size: "2.1 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/1BqCBGFkJZmqArNVaTwhTaHbFotSxYgNk/view?usp=sharing"
    },
    {
      title: "Fire Safety Certificate",
      description: "NOC from Fire Department - Valid till March 2025",
      icon: Shield,
      size: "1.5 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/1yM7CA1qVm5q0lKMbPxpjkiFqk8eM_l68/view?usp=sharing"
    },
    {
      title: "Fees Structure",
      description: "Detailed Academic Year 2024-25 Fee Structure",
      icon: DollarSign,
      size: "1.3 MB",
      type: "PDF",
      url: "https://drive.google.com/file/d/1v6mUH4gRFRaDmZ61G9-dzZ8u4q0FDvTQ/view?usp=sharing"
    },
    {
      title: "Trust Registration Certificate",
      description: "Baba Akhand Bharat Trust Registration Document",
      icon: Building,
      size: "2.1 MB",
      type: "PDF"
    },
    {
      title: "CBSE Affiliation Letter",
      description: "Board Affiliation Certificate & Recognition",
      icon: Award,
      size: "1.8 MB",
      type: "PDF"
    },
    {
      title: "Pollution Control Board NOC",
      description: "Environmental Clearance Certificate",
      icon: Zap,
      size: "1.2 MB",
      type: "PDF"
    },
    {
      title: "Academic Curriculum",
      description: "Complete CBSE Curriculum & Syllabus Details",
      icon: BookOpen,
      size: "3.2 MB",
      type: "PDF"
    },
    {
      title: "Faculty Qualification List",
      description: "Complete Staff & Teacher Qualification Details",
      icon: Users,
      size: "1.9 MB",
      type: "PDF"
    },
    {
      title: "Infrastructure & Facilities",
      description: "Complete List of School Infrastructure & Facilities",
      icon: Building,
      size: "2.8 MB",
      type: "PDF"
    }
  ];

  const handleDownload = (docTitle: string, url?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log(`Downloading: ${docTitle}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mandatory Disclosure
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Chanakya International Academy, Rampur Maniharan
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            As per CBSE guidelines and government regulations, all mandatory documents and certificates 
            are available for public inspection and audit purposes. Download official documents below.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <FileText className="h-6 w-6 text-orange-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-orange-800">
                Official Document Repository
              </h3>
              <p className="mt-2 text-orange-700">
                All documents are regularly updated and certified by respective authorities. 
                For any queries or clarifications, please contact our administration office.
              </p>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const IconComponent = doc.icon;
            const isHighlighted = doc.highlight;
            return (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 border-0 shadow-md ${
                isHighlighted ? 'bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300' : ''
              }`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      isHighlighted ? 'bg-red-100' : 'bg-blue-100'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        isHighlighted ? 'text-red-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                        {doc.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`px-2 py-1 text-xs rounded font-medium ${
                          isHighlighted ? 'bg-red-200 text-red-800' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {doc.type}
                        </span>
                        <span className="text-sm text-gray-500">{doc.size}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {doc.description}
                  </p>
                  <Button 
                    onClick={() => handleDownload(doc.title, doc.url)}
                    className={`w-full font-medium ${
                      isHighlighted 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {doc.url ? 'Download Document' : 'Coming Soon'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            For Document Verification & Queries
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Administration Office</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p className="text-blue-600 font-medium">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Principal Office</h3>
              <p className="text-gray-600">Mon - Sat: 10:00 AM - 4:00 PM</p>
              <p className="text-blue-600 font-medium">principal@chanakyaacademy.edu</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Trust Office</h3>
              <p className="text-gray-600">Mon - Fri: 10:00 AM - 3:00 PM</p>
              <p className="text-blue-600 font-medium">trust@babaakhandbharat.org</p>
            </div>
          </div>
        </div>

        {/* Last Updated Notice */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Last Updated: December 2024 | Next Review: March 2025
          </p>
        </div>
      </div>
    </div>
  );
}
