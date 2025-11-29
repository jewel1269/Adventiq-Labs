interface ServiceItem {
  name: string;
  description: string; // Added description field
  href: string;
  icon: string;
  color: string;
}

export const servicesList: ServiceItem[] = [
  {
    name: "Web Application",
    description: "Build interactive and dynamic web apps",
    href: "/services/web",
    icon: "LayoutGrid",
    color: "text-blue-400",
  },
  {
    name: "App Development",
    description: "Develop user-friendly mobile applications",
    href: "/services/app",
    icon: "Server",
    color: "text-purple-400",
  },
  {
    name: "AI Agent Development",
    description: "Create intelligent AI-driven solutions",
    href: "/services/ai-agent",
    icon: "Megaphone",
    color: "text-green-400",
  },
  {
    name: "E-commerce Solutions",
    description: "Launch efficient online stores",
    href: "/services/web",
    icon: "ShoppingCart",
    color: "text-red-400",
  },
  {
    name: "WordPress Solutions",
    description: "Design and optimize WordPress websites",
    href: "/services/web",
    icon: "Globe",
    color: "text-red-400",
  },
];
