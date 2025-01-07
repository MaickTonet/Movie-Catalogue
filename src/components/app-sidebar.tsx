import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useGenreQuery } from '@/hooks/use-genre-query'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChartBarStacked, ChevronDown, Clapperboard, Search, Star, Tv } from 'lucide-react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './theme-provider'
import { ScrollArea } from './ui/scroll-area'

const GenreList = memo(function GenreList({ genres }: { genres: Array<{ id: number; name: string }> }) {
  return (
    <SidebarMenu className={'flex px-[10%]'}>
      {genres.map((genre) => (
        <SidebarMenuItem key={genre.id}>
          <SidebarMenuButton asChild>
            <button>{genre.name}</button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
})

// Componente principal memorizado
export const AppSidebar = memo(function AppSidebar() {
  const { theme } = useTheme()
  const { movieGenres } = useGenreQuery()
  const { seriesGenres } = useGenreQuery()

  return (
    <Sidebar className={'border-r-border/20 shadow'}>
      <SidebarHeader>
        <Link to={'/'}>
          <img
            src={theme === 'dark' ? 'public/logo-ipsum-dark.svg' : 'public/logo-ipsum.svg'}
            alt={'Logo demonstrativa do projeto'}
            draggable={false}
            className={'mt-6 w-full'}
          />
        </Link>
      </SidebarHeader>
      <SidebarContent className={'mt-10'}>
        <ScrollArea className={'scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin'}>
          <SidebarGroup>
            <SidebarGroupContent className={'flex flex-col gap-12'}>
              <SidebarMenu>
                <SidebarMenuItem className={'flex items-center justify-center'}>
                  <button
                    className={
                      'flex w-[80%] items-center gap-3 rounded-2xl bg-secondary p-2 text-lg font-semibold shadow-md transition-colors hover:bg-secondary/60'
                    }>
                    <Search />
                    Buscar Filme
                  </button>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarMenu className={'gap-4 px-[5%]'}>
                <SidebarMenuItem className={'flex items-center justify-center'}>
                  <SidebarMenuButton asChild>
                    <a href={'/'} className={'flex items-center text-xl'}>
                      <Star /> Filmes Premiados
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className={'flex items-center justify-center'}>
                  <SidebarMenuButton asChild>
                    <a href={'/'} className={'flex items-center text-xl'}>
                      <Clapperboard /> Novos Filmes
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className={'flex items-center justify-center'}>
                  <SidebarMenuButton asChild>
                    <a href={'/'} className={'flex items-center text-xl'}>
                      <Tv /> Séries de TV
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarMenu>
                <Collapsible defaultOpen className={'group/collapsible'}>
                  <SidebarGroup>
                    <SidebarGroupLabel asChild>
                      <CollapsibleTrigger>
                        <p className={'flex gap-2 text-lg font-medium'}>
                          <ChartBarStacked />
                          Filmes
                        </p>
                        <ChevronDown
                          className={'ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180'}
                        />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                      <SidebarGroupContent className={'mt-2'}>
                        <GenreList genres={movieGenres} />
                      </SidebarGroupContent>
                    </CollapsibleContent>
                  </SidebarGroup>
                </Collapsible>
                <Collapsible defaultOpen className={'group/collapsible'}>
                  <SidebarGroup>
                    <SidebarGroupLabel asChild>
                      <CollapsibleTrigger>
                        <p className={'flex gap-2 text-lg font-medium'}>
                          <ChartBarStacked />
                          Séries
                        </p>
                        <ChevronDown
                          className={'ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180'}
                        />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                      <SidebarGroupContent className={'mt-2'}>
                        <GenreList genres={seriesGenres} />
                      </SidebarGroupContent>
                    </CollapsibleContent>
                  </SidebarGroup>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
})
