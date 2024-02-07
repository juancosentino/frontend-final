import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactPage from "./pages/ContactPage"
import ErrorPage from "./pages/ErrorPage"
import WePage from "./pages/WePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from './pages/RegisterPage'
import PlansPage from './pages/PlansPage'
import ProductPage from "./pages/ProductPage"
import ProductsPage from "./pages/ProductsPage"
import UserPage from "./pages/UserPage"
import AdminPage from "./pages/AdminPage"
import TurnosPage from "./pages/turnosPage"
import ProductsAlimento from "./pages/ProductsAlimento"
import ProductsAccesorios from "./pages/ProductsAccesorios"
import ProductsJuguetes from "./pages/ProductsJuguetes"
import AdminPacientesPage from "./pages/AdminPacientesPage"
import AdminTurnosPage from "./pages/AdminTurnosPage"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Contact" element={<ContactPage/>} />
          <Route path="/We" element={<WePage/>} />
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/Register" element={<RegisterPage/>}></Route>
          <Route path="/Plans" element={<PlansPage/>}></Route>
          <Route path="/Product/:id" element={<ProductPage/>}></Route>
          <Route path="/Products" element={<ProductsPage/>}></Route>
          <Route path="/User" element={<UserPage/>}></Route>
          <Route path="/Admin" element={<AdminPage/>}></Route>
          <Route path="/Turnos" element={<TurnosPage/>} ></Route>
          <Route path="/Alimento" element={<ProductsAlimento/>} ></Route>
          <Route path="/Accesorio" element={<ProductsAccesorios/>} ></Route>
          <Route path="/Juguetes" element={<ProductsJuguetes/>} ></Route>
          <Route path="/adminPacientes" element={<AdminPacientesPage/>} ></Route>
          <Route path="/adminTurnos" element={<AdminTurnosPage/>} ></Route>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
