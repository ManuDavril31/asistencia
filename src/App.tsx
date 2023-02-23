import Image from "react-bootstrap/Image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./theme/default.css";
import logo from "./img/logo.png";
import FormEntry from "./screens/home/FormEntry";
import FormOut from "./screens/home/FormOut";

function App() {
  return (
    <div className="container paddingButton">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Image src={logo} fluid className="img-center mt-2 mb-3" />
          <h1 className="text-center">
            Libro de asistencia y registro del dinero del personal
          </h1>
          <h2 className="text-center mt-3 mb-5">Formulario de Asistencia</h2>
          <Tabs
            defaultActiveKey="Entrada"
            id="justify-tab-example"
            className="mb-3 border border-dark"
            justify
          >
            <Tab title="Entrada" eventKey="Entrada">
              <FormEntry />
            </Tab>
            <Tab title="Salida" eventKey="salida">
              <FormOut />
            </Tab>
          </Tabs>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default App;
