// resources/js/Pages/Auth/Login.jsx
import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import {
  Grid, Box, Stack, Typography,
  TextField, FormControlLabel, Checkbox,
  Button, CircularProgress
} from '@mui/material'

import PageContainer from '@modernize/components/container/PageContainer'
import Logo from '@modernize/layouts/full/shared/logo/Logo'
import img1 from '@modernize/assets/images/backgrounds/login-bg.svg'

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const submit = (e) => {
    e.preventDefault()
    post(route('login'), {
      onFinish: () => reset('password'),
    })
  }

  return (
    <PageContainer title="Login" description="This is the login page">
      <Head title="Log in" />
      <Grid container spacing={0} sx={{ overflowX: 'hidden' }}>
        {/* LEFT: branding + art */}
        <Grid
          item xs={12} sm={12} lg={7} xl={8}
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              position: 'absolute',
              inset: 0,
              opacity: 0.3,
            },
          }}
        >
          <Box position="relative">
            <Box px={3} pt={3}><Logo /></Box>
            <Box
              alignItems="center"
              justifyContent="center"
              height={'calc(100vh - 75px)'}
              sx={{ display: { xs: 'none', lg: 'flex' } }}
            >
              <img src={img1} alt="bg" style={{ width: '100%', maxWidth: 500 }} />
            </Box>
          </Box>
        </Grid>

        {/* RIGHT: form */}
        <Grid item xs={12} sm={12} lg={5} xl={4}
          display="flex" justifyContent="center" alignItems="center">
          <Box p={4} width="100%" maxWidth={420}>
            <Typography variant="h4" fontWeight={700} mb={1}>
              Welcome to Modernize
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" mb={3}>
              Your Admin Dashboard
            </Typography>

            {status && (
              <Box mb={2}>
                <Typography fontSize={14} color="success.main">{status}</Typography>
              </Box>
            )}

            <Box component="form" onSubmit={submit}>
              <Stack spacing={2.5}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  fullWidth
                  autoComplete="username"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />

                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                  autoComplete="current-password"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.remember}
                      onChange={(e) => setData('remember', e.target.checked)}
                    />
                  }
                  label="Remember me"
                  sx={{ userSelect: 'none' }}
                />

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  {canResetPassword && (
                    <Link
                      href={route('password.request')}
                      className="text-sm"
                      style={{ textDecoration: 'none', color: 'var(--mui-palette-primary-main)' }}
                    >
                      Forgot your password?
                    </Link>
                  )}

                  <Button
                    variant="contained"
                    type="submit"
                    disabled={processing}
                    endIcon={processing ? <CircularProgress size={18} /> : null}
                  >
                    Log in
                  </Button>
                </Stack>

                <Stack direction="row" spacing={1} mt={1}>
                  <Typography color="text.secondary" variant="body2">
                    New to Modernize?
                  </Typography>
                  <Link
                    href={route('register')}
                    className="text-sm"
                    style={{ textDecoration: 'none', color: 'var(--mui-palette-primary-main)' }}
                  >
                    Create an account
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
}
