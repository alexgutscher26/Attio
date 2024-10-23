'use client';

import Link from "next/link";
import { Home, User, Settings, FileText, DollarSign } from "lucide-react"; // Updated icons

export function Sidebar() {
  // Removed isOpen state management
  // const [isOpen, setIsOpen] = useState(true); // Start with the sidebar open
  const links = [
    { name: "Dashboard", route: "/dashboard", icon: <Home /> },
    { name: "Profile", route: "/user-profile", icon: <User /> },
    { name: "Expenses", route: "/expenses", icon: <FileText /> }, // New link for expenses
    { name: "Income", route: "/income", icon: <DollarSign /> }, // New link for income tracking
    { name: "Settings", route: "/settings", icon: <Settings /> },
  ];

  // Removed toggleSidebar function
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen); // Toggle the sidebar open/close state
  // };

  return (
    <aside className={`fixed inset-y-0 left-0 bg-black text-white h-screen p-4 transition-transform translate-x-0`}>
      {/* Removed button to toggle sidebar */}
      {/* <button onClick={toggleSidebar} className="text-white mb-4">
        {isOpen ? <X /> : <Menu />}
      </button> */}
      <h2 className="text-xl font-bold mb-4 px-4">GigGuard</h2>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <Link href={link.route} className="flex items-center p-2 hover:bg-gray-700 rounded">
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
