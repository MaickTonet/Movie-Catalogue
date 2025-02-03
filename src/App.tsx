import { HelmetProvider } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { AppSidebar } from './components/app-sidebar'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'

// TODO: ajust light theme colors

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <SidebarProvider>
          <AppSidebar />
          <main className='w-full'>
            <header className='sticky top-0 z-50 flex items-center bg-background p-2 text-lg font-bold shadow lg:px-4'>
              <div className='flex w-full items-center space-x-3'>
                <SidebarTrigger className='hover:text-white lg:hidden' />
                <Link to={'/'} className='w-full'>
                  Movie's Catalogue
                </Link>
              </div>
              <ModeToggle />
            </header>
            {children}
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
