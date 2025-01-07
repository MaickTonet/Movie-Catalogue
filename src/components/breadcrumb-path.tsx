import { Fragment } from 'react/jsx-runtime'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'

export default function BreadcrumbPath({ search, path }: { search: boolean; path: string | null }) {
  return (
    <Breadcrumb className={'mb-6 p-4'}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={'/'} className={'text-muted-foreground'}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {search && (
          <Fragment>
            <BreadcrumbItem>Buscar</BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage className={'max-w-28 truncate sm:max-w-sm'}>{path}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
