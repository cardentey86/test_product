import { BrowserRouter } from 'react-router'
import './App.css'
import { Layout } from './components/layout'
import { AppRoutes } from './routes/appRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <AppRoutes/>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
