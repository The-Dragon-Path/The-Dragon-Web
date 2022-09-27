import { Navigate, Route, Routes } from 'react-router-dom'
import { CoursesPage } from '../pages'
import { DetailPage } from '../pages/DetailPage';

export const CoursesRoutes = () => {
  return (
    <Routes>
      <Route path="/courses" element={ <CoursesPage /> } />
      <Route path="/detail" element={ <DetailPage /> } />
      <Route path="/*" element={ <Navigate to={"/courses"} />} />
    </Routes>
  )
};
