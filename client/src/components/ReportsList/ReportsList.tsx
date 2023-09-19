import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReports } from '../../redux/actions'
import type { RootState } from '../../redux/types'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import style from './ReportsList.module.css'

const ReportsList: React.FC = () => {
  const dispatch = useDispatch()
  const sellers = useSelector((state: RootState) => state.reports)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  useEffect(() => {
    dispatch(getReports())
  }, [])

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const rows = sellers.map((report) => ({
    description: report.description,
    _id: report._id
  }))

  console.log(rows)

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table aria-labelledby="tableTitle" size='medium' className={style['table-container']}>
          <TableHead className={style['table-head']}>
            <TableRow className={style['table-row']}>
              <TableCell className={style['table-cell']}><h1>Reports List</h1></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row._id}>
                  <TableCell className={style['table-cell']}><p>{row.description}</p></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={style['table-pagination']}>
      <TablePagination
        component="div"
        count={rows?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </Box>
  )
}

export default ReportsList
