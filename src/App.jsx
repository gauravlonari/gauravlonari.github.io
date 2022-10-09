import React from 'react'
import Global from './Global'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Error404 from './components/error404/Error404'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Global/>}></Route>
        <Route path="*" element={<Error404 theme={{color:"#FAF9F6",backgroundColor:"#121212"}}/>}></Route>
      </Routes>
    
    </BrowserRouter>    
  )
}
