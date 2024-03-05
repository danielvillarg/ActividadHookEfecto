import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { mascotaId } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
      const URL = `https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json`
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          const mascotaEncontrada = data.find(mascota => mascota.id === parseInt(mascotaId));
          setMascota(mascotaEncontrada);
        })
  }, [mascotaId]);

  return (
    <div className="container">
      {mascota ? (
        <div>
          <h1>{mascota.nombre}</h1>
          <img src={mascota.foto} alt={mascota.descripcion} />
          <p>{mascota.raza}</p>
          <p>{mascota.descripcion}</p>
        </div>
      ) : (
        <p>Cargando mascota...</p>
      )}
    </div>
  );
}

export default Detail;