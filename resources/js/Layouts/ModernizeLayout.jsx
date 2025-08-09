// resources/js/Layouts/ModernizeLayout.jsx
import { CssBaseline, ThemeProvider } from '@mui/material'
import ModernizeTheme from '@modernize/theme' // verify actual export shape

export default function ModernizeLayout({ children }) {
  const theme = ModernizeTheme?.default || ModernizeTheme; // handles default export vs named

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display:'flex', minHeight:'100vh' }}>
        {/* Temporarily disable until store/context is wired
        <Sidebar />
        */}
        <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
          {/* <Header /> */}
          <div style={{ padding:24 }}>{children}</div>
        </div>
      </div>
    </ThemeProvider>
  )
}
