import { Movie } from '@/types/movieTypes'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'

export default function BreadcrumbPath({ movie }: { movie: Movie }) {
  return (
    <Breadcrumb className={'mb-6 p-4'}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={'/'} className={'text-muted-foreground'}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className={'max-w-28 truncate sm:max-w-sm'}>{movie.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
