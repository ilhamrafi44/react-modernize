import React from 'react'
import { Box, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import SimpleBar from 'simplebar-react'

import ModernizeProviders from '@/Layouts/ModernizeProviders'
import { ThemeSettings } from '@modernize/theme/Theme'

import Sidebar from '@/modernize/layouts/full/vertical/sidebar/Sidebar'
import Header from '@/modernize/layouts/full/vertical/header/Header'

// Try to use Modernize’s real Sidebar/Header if they exist.
// If not found, fall back to tiny placeholders.
// let Sidebar = () => <Box sx={{ width: 260, bgcolor: 'background.paper', borderRight: 1, borderColor: 'divider', p: 2 }}>Sidebar</Box>
// let Header  = () => <Box sx={{ height: 64, borderBottom: 1, borderColor: 'divider', display:'flex', alignItems:'center', px: 2 }}>Header</Box>

// try {
//   Sidebar = require('@modernize/layouts/full/vertical/sidebar/Sidebar').default || Sidebar
// } catch(_) {}

// try {
//   Header = require('@modernize/layouts/full/vertical/header/Header').default || Header
// } catch(_) {}

function Shell({ children }) {
  const theme = ThemeSettings() // uses Redux (provided by ModernizeProviders)
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Left sidebar */}
        <Box
          component="aside"
          sx={{
            width: { xs: isMobile ? 0 : 260, lg: 260 },
            flexShrink: 0,
            display: { xs: isMobile ? 'none' : 'block', lg: 'block' },
          }}
        >
          <Sidebar />
        </Box>

        {/* Right side (header + page content) */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <Header />
          <Box sx={{ flex: 1, minHeight: 0 }}>
            <SimpleBar style={{ height: '100%' }}>
              <Box sx={{ p: { xs: 2, md: 3 } }}>
                {children}
              </Box>
            </SimpleBar>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default function ModernizeAppLayout({ children }) {
  return (
    <ModernizeProviders>
      <Shell>{children}</Shell>
    </ModernizeProviders>
  )
}
