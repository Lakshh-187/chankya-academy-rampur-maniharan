import { Link } from "react-router-dom";
import { GraduationCap, Sparkles } from "lucide-react";

export const FloatingCoursesButton = () => {
  return (
    <Link
      to="/courses"
      aria-label="View class-wise courses"
      className="fixed left-4 bottom-24 md:left-6 md:bottom-28 z-50 group"
    >
      <div className="relative">
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 animate-ping opacity-60" />
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 blur-md opacity-70 group-hover:opacity-100 transition" />

        {/* Main button */}
        <div className="relative flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-2xl border-2 border-white hover:scale-110 transition-transform duration-300">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold text-sm hidden sm:inline">Courses</span>
          <Sparkles className="h-4 w-4 text-yellow-200 animate-pulse" />
        </div>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden md:group-hover:block whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg">
          View class-wise courses & books
        </div>
      </div>
    </Link>
  );
};
