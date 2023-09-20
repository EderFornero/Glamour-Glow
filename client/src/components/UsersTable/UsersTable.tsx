import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import styled from 'styled-components'
import style from './UsersTable.module.css'
import { useDispatch } from 'react-redux'
import { disableUser, enableUser } from '../../redux/actions'
import DisableButton from '../../assets/UserTableButtons/DisableSvg'
import ConfirmationReleasePay from '../ConfirmationReleasePay/ConfirmationReleasePay'
import { Tooltip } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'

interface Data {
  _id: string
  name: string
  lastName: string
  image: string
  email: string
  phoneNumber: string
  dateOfBirth: string
  isActive: boolean
  role: string
  createdAt: string
}

interface EnhancedTableProps {
  rows: Data[]
}

interface ActiveInfo {
  _id: string
}

export default function UsersTable (props: EnhancedTableProps): JSX.Element {
  const { rows } = props
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [isActiveOpen, setisActiveOpen] = useState<boolean>(false)
  const [activeInfo, setActiveInfo] = useState<ActiveInfo>({
    _id: ''
  })

  const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const dispatch = useDispatch()

  const handleDisable = (_id: string, isActive: boolean): void => {
    if (isActive) {
      const response = dispatch(disableUser(_id))
      if (response !== null) {
        toast.success('User disabled succesfully')
      }
    } else {
      setActiveInfo({ ...activeInfo, _id })
      setisActiveOpen(true)
    }
  }

  const handleEnable = async (): Promise<void> => {
    const response = dispatch(enableUser(activeInfo._id))
    setisActiveOpen(false)
    console.log(response)
    if (response.PromiseResult === undefined) {
      toast.success('User enable succesfully')
    }
  }

  const closeActive = (): void => {
    setisActiveOpen(false)
    setActiveInfo({ ...activeInfo, _id: '' })
  }

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
        <Table aria-labelledby='tableTitle' size='medium' className={style['table-container']}>
          <TableHead className={style['table-head']}>
            <TableRow className={style['table-row']}>
              <TableCell className={style['table-cell']}>
                <p>Profile Image</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Name</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Last Name</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Email</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Phone Number</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Date of Birth</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Is Active</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Role</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Created At</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row._id}>
                <div className={style['div-profile-image']}>
                  <ProfileImage src={row.image}></ProfileImage>
                  <div className={style.bottom}>
                    <Tooltip title='Disable User' placement='top'>
                      <button
                        className={style['btn-delete-disable']}
                        onClick={(): void => {
                          handleDisable(row._id, row.isActive)
                        }}
                      >
                        <DisableButton />
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <TableCell className={style['table-cell']}>
                  <p>{row.name}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>{row.lastName}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>{row.email}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>{row.phoneNumber}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>{row.dateOfBirth}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>{row.isActive ? 'Yes' : 'No'}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>{row.role}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>{row.createdAt}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={style['table-pagination']}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      {isActiveOpen && <ConfirmationReleasePay message='This seller are disable, you want to change to enable?' onConfirm={handleEnable} onCancel={closeActive} />}
    </Box>
  )
}

const ProfileImage = styled.img`
  width: 35px;
  height: 30px;
  margin-bottom: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  object-fit: fill;
`
