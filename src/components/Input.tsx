import Form from "react-bootstrap/Form";

interface Props {
  title: string;
  type?: string;
  placeHolder: string;
  formText?: string;
  value?: string | number;
  handleChange?: (text: any) => void;
  controlId: string;
  isTextArea?: any;
  heightTextarea?: boolean;
}

function Input({
  title,
  type = "default",
  placeHolder,
  formText,
  value,
  handleChange,
  controlId,
  isTextArea,
  heightTextarea = false,
}: Props) {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        // required
        value={value}
        type={type}
        placeholder={placeHolder}
        as={isTextArea}
        style={{
          height: heightTextarea ? 200 : undefined,
        }}
        className="border border-dark"
        onChange={handleChange}
      ></Form.Control>
      <Form.Text>{formText}</Form.Text>
    </Form.Group>
  );
}

export default Input;
