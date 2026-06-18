let equipos = [];

function crearEquipo(nombre, entrenador) {
  let nuevo = {
    id: generarIdUnico(),
    nombre: nombre,
    entrenador: entrenador,
    jugadores: [],
    victorias: 0,
    derrotas: 0,
    puntos: 0,
  };

  equipos.push(nuevo);
}

function moverJugador(jugadorId, equipoId) {
  let jugador = jugadores.find((j) => j.id === jugadorId);
  let equipoDestino = equipos.find((e) => e.id === equipoId);

  if (!jugador || !equipoDestino) return;
  if (equipoDestino.jugadores.length >= 6) {
    alert("El equipo ya tiene 6 jugadores");
    return;
  }

  equipos.forEach((equipo) => {
    equipo.jugadores = equipo.jugadores.filter((j) => j.id !== jugadorId);
  });

  equipoDestino.jugadores.push(jugador);
  jugador.equipo = equipoDestino.nombre;
}
