import React from "react";
import {
  AvForm,
  AvField,
  AvInput,
  AvGroup,
} from "availity-reactstrap-validation";
import { Label, Button } from "reactstrap";
import { useRef } from "react";

/**
 * Se encarga de la limpieza
 * @param {*} param0 carga los valores
 * @returns devuelve un formulario de listas
 */
const ListaPrincipal = ({ _onSubmit }) => {
  let form = useRef(); //limpiar campos

  /**
   * resetear
   * @param {*} values reasetea valores
   */
  const _onSubmitL = (values) => {
    _onSubmit(values);
    form.reset();
  };

  return (
    <>
      <h3 className="mb-3">Nueva Lista</h3>

      <AvForm
        ref={(c) => (form = c)}
        onValidSubmit={(_, values) => _onSubmitL(values)}
      >
        <AvGroup className="mb-3">
          <AvField name="nombre" label="Nombre" required />
        </AvGroup>

        <div className="text-end">
          <Button color="primary">Guardar</Button>
        </div>
      </AvForm>
    </>
  );
};

export default ListaPrincipal;
