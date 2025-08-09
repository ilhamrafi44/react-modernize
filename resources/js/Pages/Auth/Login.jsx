// resources/js/Pages/Auth/Login.jsx
import React from 'react';
import { Head } from '@inertiajs/react';
import ModernizeLogin from '@/modernize/views/authentication/auth1/Login';

export default function Login(props) {
  return (
    <>
      <Head title="Login" />
      <ModernizeLogin {...props} />
    </>
  );
}
