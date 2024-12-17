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
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import {
  ChartBarStacked,
  ChevronDown,
  Clapperboard,
  Search,
  Star,
  Tv,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useGenreQuery } from "@/hooks/useGenreQuery";
import { Link } from "react-router-dom";

export function AppSidebar() {
  const { movieGenres } = useGenreQuery();
  const { seriesGenres } = useGenreQuery();

  return (
    <Sidebar className="border-r-white/20 shadow">
      <SidebarHeader>
        <Link to={"/"}>
          <img
            src="public/logo-ipsum.svg"
            alt="Logo demonstrativa do projeto"
            draggable={false}
            className="w-full mt-6"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent className="mt-10">
        <ScrollArea className="scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin">
          <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-12">
              <SidebarMenu>
                <SidebarMenuItem className="flex items-center justify-center">
                  <button className="flex items-center gap-3 bg-secondary p-2 w-[80%] rounded-2xl font-semibold shadow-md text-lg transition-colors hover:bg-secondary/60">
                    <Search />
                    Buscar Filme
                  </button>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarMenu className="px-[5%] gap-4">
                <SidebarMenuItem className="flex items-center justify-center">
                  <SidebarMenuButton asChild>
                    <a href="/" className="flex items-center text-xl ">
                      <Star /> Filmes Premiados
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="flex items-center justify-center">
                  <SidebarMenuButton asChild>
                    <a href="/" className="flex items-center  text-xl">
                      <Clapperboard /> Novos Filmes
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="flex items-center justify-center">
                  <SidebarMenuButton asChild>
                    <a href="/" className="flex items-center  text-xl">
                      <Tv /> Séries de TV
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarMenu>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarGroup>
                    <SidebarGroupLabel asChild>
                      <CollapsibleTrigger>
                        <p className="flex gap-2 text-lg font-medium">
                          <ChartBarStacked />
                          Filmes
                        </p>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                      <SidebarGroupContent className="mt-2">
                        <SidebarMenu className="flex px-[10%]">
                          {movieGenres.map((genre) => (
                            <SidebarMenuItem key={genre.id}>
                              <SidebarMenuButton asChild>
                                <button>{genre.name}</button>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </CollapsibleContent>
                  </SidebarGroup>
                </Collapsible>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarGroup>
                    <SidebarGroupLabel asChild>
                      <CollapsibleTrigger>
                        <p className="flex gap-2 text-lg font-medium">
                          <ChartBarStacked />
                          Séries
                        </p>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                      <SidebarGroupContent className="mt-2">
                        <SidebarMenu className="flex px-[10%]">
                          {seriesGenres.map((genre) => (
                            <SidebarMenuItem key={genre.id}>
                              <SidebarMenuButton asChild>
                                <button>{genre.name}</button>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
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
  );
}
