
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, FileText, GraduationCap } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Facilities", href: "/facilities" },
    { name: "CIA Official", href: "/cia-official" },
    { name: "Establishments", href: "/establishments" },
    { name: "Management", href: "/management" },
    { name: "Gallery", href: "/gallery" },
    { name: "Policies", href: "/policies" },
    { name: "Standard Execution", href: "/standard-execution" },
    { name: "Safety", href: "/safety" },
    { name: "Store", href: "/store" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg flex items-center justify-center transform rotate-3">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">CIA</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">Chanakya</h1>
                <p className="text-sm text-blue-600 font-medium">International Academy</p>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link to="/mandatory-disclosure">
              <Button 
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold"
              >
                <FileText className="mr-2 h-4 w-4" />
                Mandatory Disclosure
              </Button>
            </Link>
            
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open("https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20about%20admissions", "_blank")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Admission Open
            </Button>
          </div>

          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link to="/mandatory-disclosure" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="outline"
                  className="w-full mt-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Mandatory Disclosure
                </Button>
              </Link>
              
              <Button 
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  window.open("https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20about%20admissions", "_blank");
                  setIsOpen(false);
                }}
              >
                <Phone className="mr-2 h-4 w-4" />
                Admission Open
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
