import React, { useState } from 'react'
import { Box, TextField, Button, Snackbar, Alert } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { CreateProduct } from '../types/http/product/create-product'
import { CreateProductSchema } from '../types/schema/schema-product'

export const FormProduct: React.FC = () => {
  const { handleSubmit, control } = useForm<CreateProductSchema>()
  const { mutateAsync } = CreateProduct()

  const [snackbarSuccessOpen, setSnackbarSuccessOpen] = useState(false)

  const onSubmit = async (data: CreateProductSchema) => {
    await mutateAsync(data)
    setSnackbarSuccessOpen(true)
    setTimeout(() => {
      setSnackbarSuccessOpen(false)
    }, 1000)
  }

  const handleCloseSnackbar = () => {
    setSnackbarSuccessOpen(false)
  }

  return (
    <Box
      sx={{
        padding: '10px',
        display: 'flex',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Controller
          name="product"
          control={control}
          rules={{ required: 'is name required' }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="text"
              label="Product"
              placeholder="Enter Product"
              variant="outlined"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ marginBottom: '15px' }}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          rules={{ required: 'is price required' }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="text"
              label="Price"
              placeholder="Enter Price"
              variant="outlined"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ marginBottom: '15px' }}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: 'is description required' }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="text"
              label="Description"
              placeholder="Enter Description"
              variant="outlined"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ marginBottom: '15px' }}
            />
          )}
        />
        <Controller
          name="quantity"
          control={control}
          rules={{ required: 'is quantity required' }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="number"
              label="Quantity"
              placeholder="Enter Quantity"
              variant="outlined"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ marginBottom: '15px' }}
            />
          )}
        />
        <Box mt={2} textAlign="right" width="100%">
          <Button variant="contained" type="submit">
            Send
          </Button>
        </Box>
      </form>
      <Snackbar
        open={snackbarSuccessOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert severity="success" onClose={handleCloseSnackbar}>
          Product created successfully!
        </Alert>
      </Snackbar>
    </Box>
  )
}
