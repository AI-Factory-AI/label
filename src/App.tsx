import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Learn from "./pages/Leaderboards";
import Enterprise from "./pages/Enterprise";
import Government from "./pages/Government";
import Customers from "./pages/Customers";
import Documentation from "./pages/Documentation";
import Resources from "./pages/Resources";
import RequestQuota from "./pages/RequestQuota";
import ClientDashboard from "./pages/ClientDashboard";
import LabelerDashboard from "./pages/LabelerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Api from "./pages/Api";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="labilo-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/government" element={<Government />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/request-quota" element={<RequestQuota />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/labeler-dashboard" element={<LabelerDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/api" element={<Api />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
