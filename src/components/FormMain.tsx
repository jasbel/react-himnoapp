import FormInput from "../elements/FormInput"
import GroupButtons from "./GroupButtons"

const FormMain = () => {
  return (
    <div className="bg-rose-100">
      <FormInput label="Titulo" value={''} />
      <FormInput label="Descripcion" value={''} />
      <FormInput label="Nota Musical" value={''} />
      <FormInput label="Numero de Alabanza" value={''} />
    </div>
  )
}

export default FormMain