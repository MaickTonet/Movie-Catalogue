import { HelmetProvider } from 'react-helmet-async';
import { AppSidebar } from './components/app-sidebar';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';

// TODO: ajust light theme colors

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <SidebarProvider>
          <AppSidebar />
          <main className='w-full'>
            <header className='flex items-center p-2 font-bold text-lg lg:px-4 shadow '>
              <div className='flex items-center w-full space-x-3'>
                <SidebarTrigger className='lg:hidden hover:text-white' />
                <h2>Movie's Catalogue</h2>
              </div>
              <ModeToggle />
            </header>
            {children}
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
