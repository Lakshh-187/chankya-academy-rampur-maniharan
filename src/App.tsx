
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Legal from "./pages/Legal";
import Facilities from "./pages/Facilities";
import CIAOfficial from "./pages/CIAOfficial";
import Establishments from "./pages/Establishments";
import Management from "./pages/Management";
import Gallery from "./pages/Gallery";
import Store from "./pages/Store";
import MandatoryDisclosure from "./pages/MandatoryDisclosure";
import Policies from "./pages/Policies";
import StandardExecution from "./pages/StandardExecution";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/cia-official" element={<CIAOfficial />} />
              <Route path="/establishments" element={<Establishments />} />
              <Route path="/management" element={<Management />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/store" element={<Store />} />
              <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/standard-execution" element={<StandardExecution />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
