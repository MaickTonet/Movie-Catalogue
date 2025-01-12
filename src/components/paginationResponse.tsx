import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useSearchParams } from 'react-router-dom'

interface PaginationResponseProps {
  totalPages: number
}

export function PaginationResponse({ totalPages }: PaginationResponseProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page') ?? 1)

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      if (page < 1 || page > totalPages) return prev
      prev.set('page', page.toString())
      return prev
    })
  }

  // Gera array de páginas a serem mostradas
  const getPageNumbers = () => {
    const pages: number[] = []
    let start = Math.max(1, currentPage - 2)
    const end = Math.min(totalPages, start + 4)

    // Ajusta o início se estiver próximo ao final
    if (end === totalPages) {
      start = Math.max(1, end - 4)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <Pagination className='my-8'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            aria-disabled={currentPage <= 1}
          />
        </PaginationItem>

        {/* Primeira página */}
        {getPageNumbers()[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
            </PaginationItem>
            {getPageNumbers()[0] > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {/* Páginas numeradas */}
        {getPageNumbers().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink onClick={() => handlePageChange(page)} isActive={currentPage === page}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Última página */}
        {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(totalPages)}>{totalPages}</PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            aria-disabled={currentPage >= totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
