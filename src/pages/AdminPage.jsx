import NavbarC from "../components/NavbarC"
import FooterC from "../components/FooterC"

const AdminPage = () => {
  return (
    <div>
        <NavbarC/>
        
        <div  style={{height:'60vh'}}>
          <header>
            <h1>Bienvenido al Panel de Administración</h1>
          </header>
          
          <section>
            <p>¡Hola, administrador! Esperamos que tengas un día excelente.</p>
            <p>Versión del Sistema: 1.0.0</p>
          </section>
        </div>

        <FooterC/>
    </div>
  )
}

export default AdminPage