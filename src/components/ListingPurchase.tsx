import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { FetchPurchases } from '../types/http/product/fetch-product'
import { FetchUser } from '../types/http/users/fetch-users'

interface Row {
  user: string
  product: string
  price: string
  description: string
  quantity: number
}

export function ListingPurchaseUsers({ rows }: { rows: Row[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Listing Cart Purchases🛒</TableCell>
            <TableCell align="right">Name User</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Price Purchase</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                Users
              </TableCell>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export function ListingPurchase() {
  const [rows, setRows] = useState<Row[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const usersData = await FetchUser()
      const purchasesData = await FetchPurchases()

      const rowsData: Row[] = []
      usersData.forEach((user) => {
        if (user && user.purchases) {
          user.purchases.forEach((purchaseId) => {
            const purchase = purchasesData.find(
              (purchase) => purchase.id === purchaseId,
            )
            if (purchase) {
              rowsData.push({
                user: user.name,
                product: purchase.product || '',
                price: purchase.price || '',
                description: purchase.description || '',
                quantity: purchase.quantity || 0,
              })
            }
          })
        }
      })

      setRows(rowsData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return <ListingPurchaseUsers rows={rows} />
}
