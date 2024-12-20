import { AppSidebar } from "./components/appSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <header className="flex items-center gap-2 p-2 font-bold text-lg shadow ">
          <SidebarTrigger className="lg:hidden hover:text-white"  />
          <h2 className="lg:pl-4">Movie's Catalogue Project</h2>
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}
