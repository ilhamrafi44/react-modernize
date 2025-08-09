import React from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Divider,
} from '@mui/material';

import { Link, useForm, Head } from '@inertiajs/react';

import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

import AuthSocialButtons from './AuthSocialButtons';

const AuthLogin = ({ title, subtitle, subtext, status }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <>
      <Head title="Login" />

      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      {status && (
        <Typography sx={{ mb: 2 }} fontSize={14} color="success.main">
          {status}
        </Typography>
      )}

      <AuthSocialButtons title="Sign in with" />

      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign in with
          </Typography>
        </Divider>
      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack>
          <Box>
            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
            <CustomTextField
              id="email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              autoComplete="username"
            />
          </Box>

          <Box>
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              id="password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
              autoComplete="current-password"
            />
          </Box>

          <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <CustomCheckbox
                    checked={data.remember}
                    onChange={(e) => setData('remember', e.target.checked)}
                  />
                }
                label="Remember this device"
              />
            </FormGroup>

            <Link
              href={route('password.request')}
              style={{ textDecoration: 'none', color: 'var(--mui-palette-primary-main)', fontWeight: 500 }}
            >
              Forgot Password?
            </Link>
          </Stack>
        </Stack>

        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            disabled={processing}
          >
            {processing ? 'Signing in…' : 'Sign In'}
          </Button>
        </Box>
      </Box>

      {subtitle}
    </>
  );
};

export default AuthLogin;
