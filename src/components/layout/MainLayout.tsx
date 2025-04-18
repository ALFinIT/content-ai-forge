
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
