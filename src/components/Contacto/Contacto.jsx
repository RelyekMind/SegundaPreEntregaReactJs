import { useForm } from "react-hook-form";

import "./Contacto.css";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresa tu email"
          {...register("email")}
        />
        <input
          className="consulta"
          type="consulta"
          placeholder="Dejanos tu consulta"
          {...register("consulta")}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
