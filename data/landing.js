import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Import testimonial images
import ananyaImage from './65.jpg';
import davidImage from './66.jpg';
import isabellaImage from './67.jpg';

// Stats Data
export const statsData = [
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Real-Time Insights",
    description:
      "Track your financial activity with up-to-date graphs and summaries",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Scan and organize receipts with automatic data extraction",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Management",
    description:
      "Set spending limits and monitor progress with intelligent budgeting tools",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Unified Account Hub",
    description:
      "View and manage all your bank accounts and cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency Support",
    description:
      "Easily track spending in different currencies with automatic conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Alerts",
    description:
      "Receive useful tips and reminders based on your spending behavior",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Sign Up with Spendo",
    description:
      "Create an account and connect your financial sources in just a few clicks",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Monitor Your Activity",
    description:
      "Spendo automatically tracks, categorizes, and visualizes your transactions",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Stay In Control",
    description:
      "Use budgeting tools and alerts to make informed financial decisions",
  },
];

// Testimonials Data with imported images
export const testimonialsData = [
  {
    name: "Dhruvi",
    role: "Tech Entrepreneur",
    image: ananyaImage,
    quote:
      "Spendo has been a game-changer for my personal and business finances. It's simple, powerful, and keeps everything organized.",
  },
  {
    name: "Arjun",
    role: "Remote Consultant",
    image: davidImage,
    quote:
      "Thanks to Spendo, managing receipts and expenses while traveling is no longer a headache. It saves me hours every month.",
  },
  {
    name: "Saanvi",
    role: "Investment Strategist",
    image: isabellaImage,
    quote:
      "I love how Spendo brings all my accounts together and helps me stay on top of my goals without the complexity of traditional tools.",
  },
];
