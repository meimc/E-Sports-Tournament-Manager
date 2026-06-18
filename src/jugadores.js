let jugadores = [];

function crearJugador(nombre, nickname, nivel) {
  let nuevo = {
    id: generarIdUnico(),
    nombre: nombre,
    nickname: nickname,
    nivel: nivel,
    victorias: 0,
    derrotas: 0,
    puntaje: 0,
    equipo: null,
  };

  jugadores.push(nuevo);
}
