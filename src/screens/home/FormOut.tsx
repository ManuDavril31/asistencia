import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "../../components/Input";
import SelectContent from "../../components/SelectContent";

function FormEntry() {
  return (
    <Form className="mt-5 align-items-center">
      <Row>
        <Col lg={4} sm={4}>
          <SelectContent
            items={[
              {
                name: "Andrea",
              },
              {
                name: "Norma",
              },
              {
                name: "Victoria",
              },
              {
                name: "Nevis",
              },
            ]}
          />
        </Col>
        <Col lg={4} sm={4}>
          <Input title="Hora" placeHolder="Hora" controlId="Hora" type="time" />
        </Col>
        <Col lg={4} sm={4}>
          <Input
            title="Dinero reportado"
            placeHolder="$"
            controlId="Dinero"
            type="number"
          />
        </Col>
      </Row>

      <Input title="Firma" placeHolder="Firma" controlId="Firma" type="file" />
      <Input
        title="Observaciones"
        placeHolder="Observaciones"
        controlId="Observaciones"
        isTextArea="textarea"
        heightTextarea
      />
      <Button type="submit" variant="success">
        Completar
      </Button>
    </Form>
  );
}

export default FormEntry;
