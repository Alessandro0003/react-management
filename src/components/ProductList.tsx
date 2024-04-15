import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { FetchPurchases } from '../types/http/product/fetch-product'

interface Row {
  product: string
  price: string
  description: string
  quantity: number
}

export function ListingPurchaseUsers({ rows }: { rows: Row[] }) {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '40px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product 📦</TableCell>
              <TableCell align="right">Price of the Product</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.product}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2} textAlign="center" width="100%">
        <Button
          component={Link}
          href="/form-product"
          variant="contained"
          color="primary"
          sx={{
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
            textTransform: 'none',
          }}
        >
          Add New Product
        </Button>
      </Box>
    </Box>
  )
}

export const ProductList: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const purchases = await FetchPurchases()

      const rowsData: Row[] = purchases.map((purchase) => ({
        product: purchase.product || '',
        price: purchase.price || '',
        description: purchase.description || '',
        quantity: purchase.quantity || 0,
      }))

      setRows(rowsData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return <ListingPurchaseUsers rows={rows} />
}
