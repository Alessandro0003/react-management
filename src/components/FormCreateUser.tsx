import { useState } from 'react'
import { Box, Button, TextField, Snackbar, Alert } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { SchemaUser } from '../types/schema/schema-user'
import { CreateUsers } from '../types/http/users/create-users'

export function FormCreateUser() {
  const { handleSubmit, control } = useForm<SchemaUser>() // Remove register from useForm

  const { mutateAsync, error } = CreateUsers()

  const [snackbarErrorOpen, setSnackbarErrorOpen] = useState(false)
  const [snackbarSuccessOpen, setSnackbarSuccessOpen] = useState(false)

  const onSubmit = async (data: SchemaUser) => {
    try {
      await mutateAsync(data)
      setSnackbarSuccessOpen(true)

      setTimeout(() => {
        setSnackbarSuccessOpen(false)
      }, 2000)
    } catch (error) {
      setSnackbarErrorOpen(true)

      setTimeout(() => {
        setSnackbarErrorOpen(false)
      }, 2000)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbarErrorOpen(false)
    setSnackbarSuccessOpen(false)
  }

  return (
    <Box>
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
            name="name"
            control={control}
            rules={{ required: 'is name required' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="Name"
                placeholder="Enter Name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                sx={{ marginBottom: '15px' }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: 'is email required' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="Email"
                placeholder="Enter Email"
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
      </Box>
      <Snackbar
        open={snackbarErrorOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert severity="error" onClose={handleCloseSnackbar}>
          {error?.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={snackbarSuccessOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert severity="success" onClose={handleCloseSnackbar}>
          Formulário enviado com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  )
}
