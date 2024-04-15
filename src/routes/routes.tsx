import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Home'
import { CreateUser } from '../pages/CreateUser'
import { ListingPurchaseUser } from '../pages/ListingPurchaseUser'
import { FormProducts } from '../pages/FormProducts'
import { ListingProduct } from '../pages/ListingProduct'

const queryClient = new QueryClient()

export function RoutesPages() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<CreateUser />} />
          <Route
            path="/listing-purchase-users"
            element={<ListingPurchaseUser />}
          />
          <Route path="/form-product" element={<FormProducts />} />
          <Route path="/product-list" element={<ListingProduct />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
