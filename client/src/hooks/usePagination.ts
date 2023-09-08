import { useEffect, useState } from 'react'

export const usePagination = (
  items: any,
  itemsPerPage: number,
  filter?: string | undefined
  // rating?: number
): {
    itemsPaginated: any
    currentPage: number
    totalPages: number
    filters: string
    // rating: number
    nextPage: () => void
    prevPage: () => void
    startPage: () => void
    finalPage: () => void
  } => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const itemsPaginated = items.slice(startIndex, endIndex)

  const nextPage = (): void => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = (): void => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const startPage = (): void => {
    setCurrentPage(0)
  }

  const finalPage = (): void => {
    setCurrentPage(totalPages - 1)
  }

  useEffect(() => {
    setCurrentPage(0)
  }, [filter])

  return {
    itemsPaginated,
    currentPage,
    totalPages,
    startPage,
    finalPage,
    nextPage,
    prevPage
  }
}
