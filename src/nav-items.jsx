import { Home, BookOpen, Brain, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Theorems",
    to: "/theorems",
    icon: <BookOpen className="h-4 w-4" />,
    page: <div>Theorems Page</div>, // Placeholder
  },
  {
    title: "Philosophy",
    to: "/philosophy",
    icon: <Brain className="h-4 w-4" />,
    page: <div>Philosophy Page</div>, // Placeholder
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <div>Contact Page</div>, // Placeholder
  },
];