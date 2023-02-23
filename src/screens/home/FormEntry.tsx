import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import Input from "../../components/Input";
import useAlertMessage, { Varian } from "../../hooks/useAlertMessage";

interface Props {
  fecha: string;
  nombre: string;
  cargo: string;
  cedula: string;
  horaEntrada: string;
  dineroEntrada: string;
  firmaEntrada: string;
  observaciones: string;
}

const dafaultInputs: Props = {
  fecha: "",
  nombre: "",
  cargo: "",
  cedula: "",
  horaEntrada: "",
  dineroEntrada: "",
  firmaEntrada: "",
  observaciones: "",
};

function FormEntry() {
  const [dataInputs, setDataInputs] = useState<Props>({
    fecha: "",
    nombre: "",
    cargo: "",
    cedula: "",
    horaEntrada: "",
    dineroEntrada: "",
    firmaEntrada: "",
    observaciones: "",
  });
  const { isAlert, messages, alertMessage } = useAlertMessage();

  const handleChange = (text: string, field: string) => {
    setDataInputs({ ...dataInputs, [field]: text });
  };

  const fetchPostData = async (e: any) => {
    try {
      const res = await fetch(
        "https://asistencia-backend.vercel.app/api/entrada",
        {
          method: "POST",
          body: JSON.stringify(dataInputs),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      const resJSON = await res.json();
      console.log(resJSON);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <Form className="mt-5">
      <Row>
        <Col lg={4} sm={6}>
          <Input
            title="Fecha *"
            placeHolder="Fecha"
            controlId="Fecha"
            type="Date"
            value={dataInputs.fecha}
            handleChange={(e) => handleChange(e.target.value, "fecha")}
          />
        </Col>
        <Col lg={4} sm={6}>
          <Input
            title="Hora *"
            placeHolder="Hora"
            controlId="Hora"
            type="time"
            value={dataInputs.horaEntrada}
            handleChange={(e) => handleChange(e.target.value, "horaEntrada")}
          />
        </Col>
        <Col lg={4}>
          <Input
            title="Cargo *"
            placeHolder="Cargo"
            controlId="Cargo"
            value={dataInputs.cargo}
            handleChange={(e) => handleChange(e.target.value, "cargo")}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Input
            title="Nombre *"
            placeHolder="Nombre"
            formText="Ingrese su nombre completo"
            controlId="Nombre"
            value={dataInputs.nombre}
            handleChange={(e) => handleChange(e.target.value, "nombre")}
          />
        </Col>
        <Col lg={4} sm={6}>
          <Input
            title="Cédula *"
            placeHolder="Cédula"
            controlId="Cedula"
            type="number"
            value={dataInputs.cedula}
            handleChange={(e) => handleChange(e.target.value, "cedula")}
          />
        </Col>
        <Col lg={4} sm={6}>
          <Input
            title="Dinero reportado *"
            placeHolder="$"
            controlId="Dinero"
            type="number"
            value={dataInputs.dineroEntrada}
            handleChange={(e) => handleChange(e.target.value, "dineroEntrada")}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8} sm={12}>
          <Input
            title="Firma (nombre de quien entra) *"
            placeHolder="Firma (nombre de quien entra)"
            controlId="Firma"
            value={dataInputs.firmaEntrada}
            handleChange={(e) => handleChange(e.target.value, "firmaEntrada")}
          />
        </Col>
        <Col lg={2}></Col>
      </Row>
      <Input
        title="Observaciones *"
        placeHolder="Observaciones"
        controlId="Observaciones"
        isTextArea="textarea"
        value={dataInputs.observaciones}
        heightTextarea
        handleChange={(e) => handleChange(e.target.value, "observaciones")}
      />
      {isAlert && (
        <Alert variant={messages?.variant}>{messages?.message}</Alert>
      )}

      <Button
        type="submit"
        variant="success"
        onClick={(e) => {
          e.preventDefault();
          const flat: boolean = Object.values(dataInputs).some(
            (item) => item === ""
          );
          if (flat)
            return alertMessage(Varian.Info, "Debe llenar todos lo campos");
          fetchPostData(e);
          alertMessage(Varian.Success, "Datos enviados correctamente");
          setDataInputs(dafaultInputs);
        }}
      >
        Completar
      </Button>
    </Form>
  );
}

export default FormEntry;
