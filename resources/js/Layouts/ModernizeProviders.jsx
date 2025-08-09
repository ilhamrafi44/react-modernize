import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// ✅ use your real Modernize store
import store from '@modernize/store/Store'

export default function ModernizeProviders({ children }) {
  return (
    <HelmetProvider>
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    </HelmetProvider>
  )
}
