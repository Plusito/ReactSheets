import Tarjeta from "./Tarjeta";

function ListaDeTarjetas() {
  return (
    <div classname="listadetarjetas">
      <Tarjeta
        nombre="Coco"
        apellido="Drilo"
        ocupacion="Secretly freelancer"
        imagenURL="https://content.nationalgeographic.com.es/medio/2025/08/04/cotorra-argentina_c2a34efe_1018163_250804092546_1280x893.webp"
      />
    </div>
  );
}

export default ListaDeTarjetas;
