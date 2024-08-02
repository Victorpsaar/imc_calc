import Formulario from "./components/Formulario";

function App() {
  return (
    <>
    <header className="header">
      <h1 className="title">Calculadora de IMC</h1>
    </header>
    <div className="container">
        <Formulario /> 
    </div>
    <footer className="footer">
      <p>&copy; Todos os direitos reservados à Porto Productions</p>
    </footer>
    </>
  )
}

export default App
