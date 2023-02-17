import React from 'react'
import { Routes, Route,} from "react-router-dom";

import  HeroesRoutes from '../heroes/routes/HeroesRoutes'
import LoginPage from '../auth/page/LoginPage';



const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={ <HeroesRoutes />} />
        </Routes>
    </>
  )
}

export default AppRouter
