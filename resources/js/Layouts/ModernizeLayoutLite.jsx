// resources/js/Layouts/ModernizeLayoutLite.jsx
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

export default function ModernizeLayoutLite({ children }) {
  const theme = createTheme(); // fallback if Modernize theme isn’t ready yet
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: 24 }}>{children}</div>
    </ThemeProvider>
  );
}
