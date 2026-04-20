import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, ShoppingCart, Info, GraduationCap, Sparkles } from "lucide-react";
import { SEO } from "@/components/SEO";

interface Book {
  name: string;
  publication: string;
  author: string;
  price: number | string;
  url?: string;
}

interface ClassCourse {
  className: string;
  label: string;
  gradient: string;
  accent: string;
  books: Book[];
}

const courses: ClassCourse[] = [
  {
    className: "UKG",
    label: "Upper Kindergarten",
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    accent: "pink",
    books: [
      { name: "भाषा आनंदी", publication: "LITTLE LEARNERS", author: "ANJU AGARWAL", price: 299 },
      { name: "ENGLISH PRIMER", publication: "LITTLE LEARNERS", author: "SARTHAK AGARWAL", price: 255 },
      { name: "गीतांजली RHYME", publication: "LITTLE LEARNERS", author: "KARAN AGARWAL", price: 149 },
      { name: "Math Matrix", publication: "ALITE BOOKS", author: "ATUL AGARWAL", price: 220 },
      { name: "TINY TOTS (English Cursive)", publication: "ARCHIKA PUBLICATION", author: "SAKSHI SANGWAN", price: 230 },
      { name: "PICTURE MAGIC", publication: "LITTLE LEARNERS", author: "—", price: 175 },
      { name: "ART COLLECTION", publication: "ELITE PUBLICATION", author: "SUGANDHA SHARMA", price: 185 },
    ],
  },
  {
    className: "I",
    label: "Class 1",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    accent: "purple",
    books: [
      { name: "Sugandha (Hindi)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 260 },
      { name: "Sugandha (Vyakaran)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 230 },
      { name: "Abeer Hindi Sulekh", publication: "ALLWIN PUBLICATION", author: "SAFFRON SERIES", price: 130 },
      { name: "Madhur (Sanskrit)", publication: "SUMAN PUBLICATION", author: "DAYA GOYAL", price: 230 },
      { name: "Maths Xtreme", publication: "ALLWIN PUBLICATION", author: "DR. VINAMRA SHARMA", price: 360 },
      { name: "EVS", publication: "GREEN BOOK HOUSE", author: "KUMAR GHOSH", price: 290 },
      { name: "English Reader (Waves)", publication: "SPARKING BOOKS", author: "Y.K. SAHNI", price: 260 },
      { name: "English Grammar", publication: "GREEN BOOK HOUSE", author: "ANITA CHOUDHARY", price: 260 },
      { name: "Cursive Writing", publication: "NAV PUBLICATION", author: "RAVI SHARMA", price: 150 },
      { name: "Computer", publication: "THE OPEN BOOKS PRESS", author: "AMIT K SHARMA", price: 170 },
      { name: "Art Ideas", publication: "ABC ADVANCE PUBLICATION", author: "SHIVANK SHARMA", price: 210 },
    ],
  },
  {
    className: "II",
    label: "Class 2",
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    accent: "blue",
    books: [
      { name: "Sugandha (Hindi)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 280 },
      { name: "Sugandha (Vyakaran)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 250 },
      { name: "Abeer Hindi Sulekh", publication: "ALLWIN PUBLICATION", author: "SAFFRON SERIES", price: 130 },
      { name: "Madhur (Sanskrit)", publication: "SUMAN PUBLICATION", author: "DAYA GOYAL", price: 230 },
      { name: "Maths Xtreme", publication: "ALLWIN PUBLICATION", author: "DR. VINAMRA SHARMA", price: 370 },
      { name: "EVS", publication: "GREEN BOOK HOUSE", author: "KUMAR GHOSH", price: 489 },
      { name: "English Reader (Waves)", publication: "SPARKING BOOKS", author: "Y.K. SAHNI", price: 320 },
      { name: "English Grammar", publication: "GREEN BOOK HOUSE", author: "ANITA CHOUDHARY", price: 280 },
      { name: "Cursive Writing", publication: "NAV PUBLICATION", author: "RAVI SHARMA", price: 150 },
      { name: "Computer", publication: "THE OPEN BOOKS PRESS", author: "AMIT K SHARMA", price: 185 },
      { name: "Art Ideas", publication: "ABC ADVANCE PUBLICATION", author: "SHIVANK SHARMA", price: 210 },
    ],
  },
  {
    className: "III",
    label: "Class 3",
    gradient: "from-emerald-500 via-green-500 to-lime-400",
    accent: "emerald",
    books: [
      { name: "Sugandha (Hindi)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 310 },
      { name: "Sugandha (Vyakaran)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 270 },
      { name: "Madhur (Sanskrit)", publication: "SUMAN PUBLICATION", author: "DAYA GOYAL", price: 230 },
      { name: "Maths Xtreme", publication: "ALLWIN PUBLICATION", author: "DR. VINAMRA SHARMA", price: 400 },
      { name: "Social Science", publication: "RACHNA SAGAR PVT. LTD.", author: "MS. MADHUSMITA ACHARYA", price: 489 },
      { name: "Science", publication: "RACHNA SAGAR PVT. LTD.", author: "RAJENDER SHAH", price: 519 },
      { name: "English Reader", publication: "NAV PUBLICATION", author: "PARUL GUPTA", price: 320 },
      { name: "English Grammar", publication: "RACHNA SAGAR PVT. LTD.", author: "J.K. GANGAL", price: 449, url: "https://rachnasagar.in/cbse/together-with-get-going-english-grammar-for-class-3?id=764" },
      { name: "Computer", publication: "THE OPEN BOOKS PRESS", author: "AMIT K SHARMA", price: 185 },
    ],
  },
  {
    className: "IV",
    label: "Class 4",
    gradient: "from-amber-500 via-orange-500 to-red-400",
    accent: "amber",
    books: [
      { name: "Sparsh (Hindi)", publication: "NAVKAR BOOKS INTERNATIONAL", author: "DEEP SHIKHA SHARMA & GARIMA JOSHI", price: 380 },
      { name: "Sugandha (Vyakaran)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 330 },
      { name: "Madhur (Sanskrit)", publication: "SUMAN PUBLICATION", author: "DAYA GOYAL", price: 230 },
      { name: "Maths Xtreme", publication: "ALLWIN PUBLICATION", author: "DR. VINAMRA SHARMA", price: 450 },
      { name: "Social Science", publication: "RACHNA SAGAR PVT. LTD.", author: "MS. MADHUSMITA ACHARYA", price: 499 },
      { name: "Science", publication: "RACHNA SAGAR PVT. LTD.", author: "RAJENDER SHAH", price: 539 },
      { name: "English Reader", publication: "NAV PUBLICATION", author: "PARUL GUPTA", price: 340 },
      { name: "English Grammar", publication: "RACHNA SAGAR PVT. LTD.", author: "J.K. GANGAL", price: 479, url: "https://www.rachnasagar.in/cbse/together-with-get-going-english-grammar-for-class-4?id=765" },
      { name: "Computer", publication: "THE OPEN BOOKS PRESS", author: "AMIT K SHARMA", price: 200 },
    ],
  },
  {
    className: "V",
    label: "Class 5",
    gradient: "from-indigo-500 via-blue-500 to-cyan-400",
    accent: "indigo",
    books: [
      { name: "Sparsh (Hindi)", publication: "NAVKAR BOOKS INTERNATIONAL", author: "DEEP SHIKHA SHARMA & GARIMA JOSHI", price: 380 },
      { name: "Sugandha (Vyakaran)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 315 },
      { name: "Madhur (Sanskrit)", publication: "SUMAN PUBLICATION", author: "DAYA GOYAL", price: 230 },
      { name: "Maths Xtreme", publication: "ALLWIN PUBLICATION", author: "DR. VINAMRA SHARMA", price: 490 },
      { name: "Social Science", publication: "RACHNA SAGAR PVT. LTD.", author: "MS. MADHUSMITA ACHARYA", price: 519 },
      { name: "Science", publication: "RACHNA SAGAR PVT. LTD.", author: "RAJENDER SHAH", price: 569, url: "https://rachnasagar.in/cbse/together-with-e-science-for-class-5?id=2954" },
      { name: "English Reader", publication: "NAV PUBLICATION", author: "RAJESH PRATAP", price: 350 },
      { name: "English Grammar", publication: "RACHNA SAGAR PVT. LTD.", author: "J.K. GANGAL", price: 479, url: "https://rachnasagar.in/cbse/together-with-get-going-english-grammar-for-class-5?id=464" },
      { name: "Computer", publication: "THE OPEN BOOKS PRESS", author: "AMIT K SHARMA", price: 200 },
    ],
  },
  {
    className: "VI",
    label: "Class 6",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    accent: "rose",
    books: [
      { name: "Sparsh (Hindi)", publication: "NAVKAR BOOKS INTERNATIONAL", author: "DEEP SHIKHA SHARMA & GARIMA JOSHI", price: 380 },
      { name: "Sugandha (Vyakaran)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 345 },
      { name: "Madhur (Sanskrit)", publication: "SUMAN PUBLICATION", author: "DAYA GOYAL", price: 250 },
      { name: "Mathematics", publication: "BHARTI BHAVAN", author: "R.S. AGGARWAL", price: 450 },
      { name: "Social Science", publication: "RACHNA SAGAR PVT. LTD.", author: "MS. SHAKUNTALA GHOSH", price: 599, url: "https://rachnasagar.in/cbse/together-with-e-social-science-for-class-6?id=2961" },
      { name: "Science", publication: "RACHNA SAGAR PVT. LTD.", author: "HARSHA ARYA", price: 639, url: "https://rachnasagar.in/cbse/together-with-e-science-for-class-6?id=2953" },
      { name: "English Reader", publication: "NAV PUBLICATION", author: "RISHI SHARMA", price: 370 },
      { name: "English Grammar", publication: "RACHNA SAGAR PVT. LTD.", author: "J.K. GANGAL", price: 499, url: "https://rachnasagar.in/cbse/together-with-get-going-english-grammar-for-class-6?id=465" },
      { name: "Computer", publication: "RACHNA SAGAR PVT. LTD.", author: "VIKAS WADAWAN", price: 519 },
    ],
  },
  {
    className: "VII",
    label: "Class 7",
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    accent: "teal",
    books: [
      { name: "Sparsh (Hindi)", publication: "NAVKAR BOOKS INTERNATIONAL", author: "DEEP SHIKHA SHARMA & GARIMA JOSHI", price: 380 },
      { name: "Sugandha (Vyakaran)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 360 },
      { name: "Madhur (Sanskrit)", publication: "SUMAN PUBLICATION", author: "DAYA GOYAL", price: 270 },
      { name: "Mathematics (Part-I)", publication: "BHARTI BHAVAN", author: "R.S. AGGARWAL", price: 450 },
      { name: "Mathematics (Part-II)", publication: "BHARTI BHAVAN", author: "R.S. AGGARWAL", price: 240 },
      { name: "Social Science (Part-I)", publication: "RACHNA SAGAR PVT. LTD.", author: "MS. SHAKUNTALA GHOSH", price: 489, url: "https://rachnasagar.in/cbse/together-with-e-social-science-for-class-7?id=2960" },
      { name: "Social Science (Part-II)", publication: "RACHNA SAGAR PVT. LTD.", author: "MS. MADHUSMITA ACHARYA", price: 269 },
      { name: "Science", publication: "RACHNA SAGAR PVT. LTD.", author: "HARSHA ARYA", price: 629, url: "https://rachnasagar.in/cbse/together-with-e-science-for-class-7?id=2952" },
      { name: "English Reader", publication: "NAV PUBLICATION", author: "RISHI SHARMA", price: 370 },
      { name: "English Grammar", publication: "RACHNA SAGAR PVT. LTD.", author: "J.K. GANGAL", price: 499, url: "https://rachnasagar.in/cbse/together-with-get-going-english-grammar-for-class-7?id=466" },
      { name: "Computer", publication: "RACHNA SAGAR PVT. LTD.", author: "VIKAS WADAWAN", price: 519 },
    ],
  },
  {
    className: "VIII",
    label: "Class 8",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    accent: "violet",
    books: [
      { name: "Sparsh (Hindi)", publication: "NAVKAR BOOKS INTERNATIONAL", author: "DEEP SHIKHA SHARMA & GARIMA JOSHI", price: 380 },
      { name: "Sugandha (Vyakaran)", publication: "SPARKING BOOKS", author: "MANMOHAN SAHDEV", price: 380 },
      { name: "Madhur (Sanskrit)", publication: "SUMAN PUBLICATION", author: "DAYA GOYAL", price: 290 },
      { name: "Mathematics (Part-I)", publication: "BHARTI BHAVAN", author: "R.S. AGGARWAL", price: 285 },
      { name: "Mathematics (Part-II)", publication: "BHARTI BHAVAN", author: "R.S. AGGARWAL", price: "—" },
      { name: "Social Science", publication: "RACHNA SAGAR PVT. LTD.", author: "MS. SHAKUNTALA GHOSH", price: 359, url: "https://rachnasagar.in/cbse/together-with-e-social-science-for-class-8?id=2959" },
      { name: "Science", publication: "RACHNA SAGAR PVT. LTD.", author: "HARSHA ARYA", price: 639, url: "https://rachnasagar.in/cbse/together-with-e-science-for-class-8?id=2951" },
      { name: "English Reader", publication: "NAV PUBLICATION", author: "RISHI SHARMA", price: 425 },
      { name: "English Grammar", publication: "RACHNA SAGAR PVT. LTD.", author: "J.K. GANGAL", price: 499, url: "https://rachnasagar.in/cbse/together-with-get-going-english-grammar-for-class-8?id=467" },
      { name: "Computer", publication: "RACHNA SAGAR PVT. LTD.", author: "SEEMA GUPTA", price: 519 },
    ],
  },
];

const Courses = () => {
  const [activeClass, setActiveClass] = useState<string>("UKG");
  const current = courses.find((c) => c.className === activeClass) || courses[0];

  const scrollToClass = (cls: string) => {
    setActiveClass(cls);
    const el = document.getElementById(`class-${cls}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEO
        title="Class-wise Courses & Books | Chanakya International Academy Rampur"
        description="Explore class-wise course books for UKG to Class 8 at Chanakya International Academy. View publications, authors and prices. Buy from any vendor of your choice."
        keywords="CIA Rampur courses, CBSE books class-wise, school book list, class 1 to 8 books, Rampur Maniharan school courses"
        canonicalUrl="https://ciarampur.com/courses"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-yellow-300 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-cyan-300 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Academic Year 2024-25</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Class-wise Courses & Books</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Browse the complete book list for every class — publications, authors and prices, all in one place.
          </p>
        </div>
      </section>

      {/* Note */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <Card className="border-0 shadow-xl bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-l-4 border-amber-500">
          <CardContent className="p-6 flex gap-4 items-start">
            <div className="p-3 rounded-full bg-amber-100 shrink-0">
              <Info className="h-6 w-6 text-amber-700" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-amber-900 mb-1">Important Note for Parents & Students</h3>
              <p className="text-amber-900/90 leading-relaxed">
                We have created this page so that students and parents have complete information about class-wise courses
                and can purchase the required books from <strong>any vendor of their choice</strong> — local bookshops,
                online stores, or official publisher websites. There is no obligation to buy from any specific seller.
                Click the <strong>"Buy Online"</strong> button (where available) to visit the publisher's official store.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Class selector */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {courses.map((c) => (
            <button
              key={c.className}
              onClick={() => scrollToClass(c.className)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeClass === c.className
                  ? `bg-gradient-to-r ${c.gradient} text-white shadow-lg scale-105`
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* All class sections */}
        <div className="space-y-12">
          {courses.map((cls) => (
            <div key={cls.className} id={`class-${cls.className}`} className="scroll-mt-24">
              <div className={`rounded-2xl bg-gradient-to-r ${cls.gradient} p-6 md:p-8 mb-6 shadow-xl`}>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur">
                      <GraduationCap className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{cls.label}</h2>
                      <p className="text-white/90 text-sm">Class {cls.className} • {cls.books.length} books</p>
                    </div>
                  </div>
                  <Badge className="bg-white/20 text-white border-0 hover:bg-white/30 text-base px-4 py-1.5">
                    CBSE Curriculum
                  </Badge>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cls.books.map((book, idx) => (
                  <Card
                    key={idx}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 overflow-hidden"
                  >
                    <div className={`h-1.5 bg-gradient-to-r ${cls.gradient}`} />
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${cls.gradient} text-white shrink-0`}>
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-base leading-tight text-gray-900">
                          {book.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Publication</div>
                      <div className="text-sm font-semibold text-gray-800">{book.publication}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide pt-1">Author</div>
                      <div className="text-sm text-gray-700">{book.author}</div>
                      <div className="flex items-center justify-between pt-3 border-t mt-3">
                        <div>
                          <div className="text-xs text-gray-500">Approx. Price</div>
                          <div className="text-xl font-bold text-gray-900">
                            {typeof book.price === "number" ? `₹${book.price}` : book.price}
                          </div>
                        </div>
                        {book.url ? (
                          <Button
                            size="sm"
                            onClick={() => window.open(book.url, "_blank")}
                            className={`bg-gradient-to-r ${cls.gradient} text-white border-0 hover:opacity-90`}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Buy Online
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        ) : (
                          <Badge variant="outline" className="text-xs">Any vendor</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <Card className="mt-12 border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-6 text-center">
            <p className="text-gray-700">
              <strong>Disclaimer:</strong> Prices are indicative and may vary by vendor and edition. The school does
              not endorse any particular bookseller. Parents are free to purchase books from the source most convenient
              to them.
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Courses;
