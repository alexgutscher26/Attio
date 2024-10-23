

import { Sidebar } from "@/components/common/Sidebar";
import { MainContent } from "@/components/dashboard/MainContent";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}
