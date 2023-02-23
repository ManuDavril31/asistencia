/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Form from "react-bootstrap/Form";

interface Props {
  name: string;
}

interface Items {
  items: Props[];
}

function SelectContent({ items }: Items) {
  const renderItem = () => {
    const inputSelect = document.getElementById("selects");
    items.forEach((item) => {
      const selectItem = document.createElement("option");
      selectItem.innerHTML = item.name;
      inputSelect?.append(selectItem);
    });
  };
  useEffect(() => {
    renderItem();
  }, []);

  return (
    <Form.Group>
      <Form.Label>Seleccionar...</Form.Label>
      <Form.Select id="selects" className="border border-dark">
        <option defaultValue="Seleccionar...">Seleccionar...</option>
      </Form.Select>
    </Form.Group>
  );
}

export default SelectContent;
