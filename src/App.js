import { Fallback, router } from './router'
import { RouterProvider } from 'react-router-dom'
import { store } from './state/index'
import { Provider } from 'react-redux'

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

function App () {
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </Provider>
  )
}

export default App
