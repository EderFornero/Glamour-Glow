import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReports, deleteReport } from '../../redux/actions'
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
import { Tooltip } from '@mui/material'
import CheckSvg from '../../assets/UserTableButtons/CheckSvg'
import toast, { Toaster } from 'react-hot-toast'

const ReportsList: React.FC = () => {
  const dispatch = useDispatch()
  const reports = useSelector((state: RootState) => state.reports)

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

  const handleReport = (_id: string): void => {
    const response = dispatch(deleteReport(_id))
    if (response !== null) {
      toast.success('Report Checked!')
    }
  }

  const rows = reports.map((report) => ({
    description: report.description,
    _id: report._id
  }))

  return (
    <Box sx={{ width: '100%' }}>
      <Toaster
        toastOptions={{
          style: {
            marginTop: '100px'
          }
        }}
      />
      <TableContainer>
        <Table aria-labelledby="tableTitle" size='medium' className={style['table-container']}>
          <TableHead className={style['table-head']}>
            <TableRow className={style['table-row']}>
            <TableCell><h2></h2></TableCell>
              <TableCell className={style['table-cell']}><h1>Reports List</h1></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row._id}>
                    <div className={style['div-profile-image']}>
                    <div className={style.bottom}>
                    <Tooltip title='Check Report' placement='top'>
                      <button className={style['btn-delete-disable']} onClick={(): void => { handleReport(row._id) }}><CheckSvg /></button>
                    </Tooltip>
                  </div>
                  </div>
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
