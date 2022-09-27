import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CoursesRoutes } from '../courses/routes/CoursesRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={ <AuthRoutes /> } />
      <Route path="/*" element={ <CoursesRoutes /> } />
    </Routes>
  )
}
