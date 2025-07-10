import { Route, Routes } from 'react-router'
import { HomePage } from '../pages/homePage'
import ProductRoutes from '../pages/routes'
import  {Page404}  from '../pages/404page'

export const AppRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/product/*' element={<ProductRoutes/>} />
            <Route path='*' element={<Page404/>} />
        </Routes>
  )
}
