import { useState } from "react"

export const usePagination = (items: any, itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const totalPages = Math.ceil(items.length / itemsPerPage)
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const itemsPaginated = items.slice(startIndex, endIndex)

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    return {
        itemsPaginated,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
    }
}

