import { Movie } from '@/types/movieTypes';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

export default function BreadcrumbPath({ movie }: { movie: Movie }) {
  return (
    <Breadcrumb className={'p-4 mb-6'}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={'/'} className={'text-muted-foreground'}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className={'max-w-28 sm:max-w-sm truncate'}>{movie.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
