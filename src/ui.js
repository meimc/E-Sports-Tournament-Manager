function mostrarJugadores() {
  let contenedor = document.getElementById("listaJugadores");

  contenedor.innerHTML = "";

  jugadores.forEach((jugador) => {
    let card = document.createElement("div");

    card.innerHTML = `
      <h3>${jugador.nickname}</h3>
      <p>${jugador.nombre}</p>
      <p>Nivel: ${jugador.nivel}</p>
      <p>Victorias: ${jugador.victorias}</p>
      <p>Derrotas: ${jugador.derrotas}</p>
      <p>Puntaje: ${jugador.puntaje}</p>
      <hr>
    `;

    contenedor.appendChild(card);
  });
}

function mostrarEquipos() {
  let contenedor = document.getElementById("listaEquipos");

  contenedor.innerHTML = "";

  equipos.forEach((equipo) => {
    let card = document.createElement("div");

    card.innerHTML = `
      <h3>${equipo.nombre}</h3>
      <p>${equipo.entrenador}</p>
      <hr>
    `;

    contenedor.appendChild(card);
  });
}
