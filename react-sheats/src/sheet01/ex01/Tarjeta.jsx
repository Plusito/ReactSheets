function Tarjeta({ nombre, apellido, ocupacion, imagenURL }) {
  return (
    <div className="tarjeta">
      <img className="image" src={imagenURL} />

      <div className="nombres">
        <h1>
          {nombre} {apellido}
        </h1>

        <h3>{ocupacion}</h3>
      </div>
    </div>
  );
}

export default Tarjeta;
