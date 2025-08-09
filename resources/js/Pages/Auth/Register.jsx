import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import {
  Grid, Box, Typography, Stack,
  TextField, Button, CircularProgress
} from '@mui/material'

import ModernizeProviders from '@/Layouts/ModernizeProviders'
import PageContainer from '@modernize/components/container/PageContainer'
import Logo from '@modernize/layouts/full/shared/logo/Logo'
import img1 from '@modernize/assets/images/backgrounds/login-bg.svg'

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const submit = (e) => {
    e.preventDefault()
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    })
  }

  return (
    <ModernizeProviders>
      <PageContainer title="Register" description="This is the register page">
        <Head title="Register" />
        <Grid container spacing={0} justifyContent="center" sx={{ overflowX: 'hidden' }}>
          {/* LEFT: art + branding */}
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

          {/* RIGHT: register form */}
          <Grid
            item xs={12} sm={12} lg={5} xl={4}
            display="flex" justifyContent="center" alignItems="center"
          >
            <Box p={4} width="100%" maxWidth={420}>
              <Typography variant="h4" fontWeight={700} mb={1}>
                Welcome to Modernize
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" mb={3}>
                Create your account
              </Typography>

              <Box component="form" onSubmit={submit}>
                <Stack spacing={2.5}>
                  <TextField
                    label="Full Name"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                    autoComplete="username"
                  />
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                    fullWidth
                    autoComplete="new-password"
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    error={!!errors.password_confirmation}
                    helperText={errors.password_confirmation}
                    fullWidth
                    autoComplete="new-password"
                  />

                  <Stack direction="row" spacing={1}>
                    <Typography color="text.secondary" variant="body2">
                      Already have an account?
                    </Typography>
                    <Link
                      href={route('login')}
                      style={{ textDecoration: 'none', color: 'var(--mui-palette-primary-main)' }}
                    >
                      Sign in
                    </Link>
                  </Stack>

                  <Button
                    variant="contained"
                    type="submit"
                    disabled={processing}
                    endIcon={processing ? <CircularProgress size={18} /> : null}
                  >
                    Create account
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </ModernizeProviders>
  )
}
