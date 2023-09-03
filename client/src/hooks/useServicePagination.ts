import { useState } from "react"

export const useServicePagination = (services: any, servicesPerPage: number) => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const totalPages = Math.ceil(services.length / servicesPerPage)
    const startIndex = currentPage * servicesPerPage
    const endIndex = startIndex + servicesPerPage
    const servicesPaginated = services.slice(startIndex, endIndex)

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
        servicesPaginated,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
    }
}

