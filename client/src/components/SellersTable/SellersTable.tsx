import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import ConfirmationReleasePay from '../ConfirmationReleasePay/ConfirmationReleasePay'
import styled from 'styled-components'
import style from './SellersTable.module.css'
import { useDispatch } from 'react-redux'
import { disableSellerAdmin, enableSellerAdmin } from '../../redux/actions'
import DisableButton from '../../assets/UserTableButtons/DisableSvg'
import DolarButton from '../../assets/UserTableButtons/DollarSvg'
import axios from '../../redux/axiosService'
import toast, { Toaster } from 'react-hot-toast'
import { Tooltip } from '@mui/material'
const API_URL = import.meta.env.VITE_SERVER_URL

interface Data {
  _id: string
  sellerName: string
  images: string
  sellerEmail: string
  sellerPhone: string
  isActive: boolean
  role: string
  createdAt: string
  accountBalance: number
}

interface EnhancedTableProps {
  rows: Data[]
}

interface SellerInfo {
  sellerId: string
  sellerName: string
  sellerEmail: string
  accountBalance: number
}

interface ActiveInfo {
  sellerId: string
  isActive: boolean
}

export default function UsersTable (props: EnhancedTableProps): JSX.Element {
  const { rows } = props
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [sellerInfo, setSellerInfo] = useState<SellerInfo>({
    sellerId: '',
    sellerName: '',
    sellerEmail: '',
    accountBalance: 0
  })

  const [isActiveOpen, setisActiveOpen] = useState<boolean>(false)
  const [activeInfo, setActiveInfo] = useState<ActiveInfo>({
    sellerId: '',
    isActive: false
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
      const response = dispatch(disableSellerAdmin(_id))
      if (response !== null) {
        toast.success('Seller disabled succesfully')
      }
    } else {
      setActiveInfo({ ...activeInfo, sellerId: _id, isActive: false })
      setisActiveOpen(true)
    }
  }

  const handleDolar = (_id: string, accountBalance: number, sellerEmail: string, sellerName: string): void => {
    setSellerInfo({ ...sellerInfo, sellerId: _id, accountBalance, sellerEmail, sellerName })
    setIsModalOpen(true)
  }

  const handleBalanceDeduction = async (): Promise<void> => {
    const endpointDeduction = `${API_URL}admin/payment/${sellerInfo.sellerId}`
    const endpointMail = `${API_URL}confirmedTransfer`
    setIsModalOpen(false)
    try {
      const response = await axios.post(endpointDeduction, { payment: sellerInfo.accountBalance })
      const mail = await axios.post(endpointMail, {
        sellerEmail: sellerInfo.sellerEmail,
        sellerName: sellerInfo.sellerName,
        accountBalance: sellerInfo.accountBalance
      })
      if (response !== null && mail !== null) {
        toast.success('Balance deducted succesfully', {
          style: {
            border: '1px solid #3d36be',
            padding: '16px',
            color: '#1eb66d'
          },
          iconTheme: {
            primary: '#6e66ff',
            secondary: '#FFFAEE'
          }
        })
        setSellerInfo({ ...sellerInfo, sellerId: '', sellerEmail: '', sellerName: '', accountBalance: 0 })
      }
    } catch (error) {
      toast.error('Could not deduct balance, please try again', {
        style: {
          border: '1px solid #3d36be',
          padding: '16px',
          color: 'red'
        },
        iconTheme: {
          primary: 'red',
          secondary: '#FFFAEE'
        }
      })
    }
  }

  const handleEnable = async (): Promise<void> => {
    dispatch(enableSellerAdmin(activeInfo.sellerId))
    console.log(activeInfo.sellerId)
    setisActiveOpen(false)
  }

  const closeRelease = (): void => {
    setIsModalOpen(false)
    setSellerInfo({ ...sellerInfo, sellerId: '', sellerEmail: '', sellerName: '', accountBalance: 0 })
  }

  const closeActive = (): void => {
    setisActiveOpen(false)
    setActiveInfo({ ...activeInfo, sellerId: '', isActive: false })
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Toaster />
      <TableContainer>
        <Table aria-labelledby='tableTitle' size='medium' className={style['table-container']}>
          <TableHead className={style['table-head']}>
            <TableRow className={style['table-row']}>
              <TableCell className={style['table-cell']}>
                <p>Seller Image</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Name</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Email</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Balance</p>
              </TableCell>
              <TableCell className={style['table-cell']}>
                <p>Phone Number</p>
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
                  <ProfileImage src={row.images}></ProfileImage>
                  <div className={style.bottom}>
                    <Tooltip title='Disable Seller' placement='top'>
                      <button
                        className={style['btn-delete-disable']}
                        onClick={(): void => {
                          handleDisable(row._id, row.isActive)
                        }}
                      >
                        <DisableButton />
                      </button>
                    </Tooltip>
                    <Tooltip title='Release Money' placement='top'>
                      <button
                        className={style['btn-delete-disable']}
                        onClick={(): void => {
                          handleDolar(row._id, row.accountBalance, row.sellerEmail, row.sellerName)
                        }}
                      >
                        <DolarButton />
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <TableCell className={style['table-cell']}>
                  <p>{row.sellerName}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>{row.sellerEmail}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>${row.accountBalance}</p>
                </TableCell>
                <TableCell className={style['table-cell']}>
                  <p>{row.sellerPhone}</p>
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
      {isModalOpen && <ConfirmationReleasePay message='Are you sure you want to release the money?' onConfirm={handleBalanceDeduction} onCancel={closeRelease} />}
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
