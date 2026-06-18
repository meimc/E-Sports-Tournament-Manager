function mostrarJugadores() {
  let contenedor = document.getElementById("listaJugadores");

  contenedor.innerHTML = "";

  jugadores.forEach((jugador) => {
    let card = document.createElement("div");

    card.innerHTML = `
      <div
            class="min-w-3xs m-6 p-6 bg-green-700 border rounded-2xl border-green-500 shadow-lg shadow-green-200 ring-green-400"
          >
            <h3 class="text-xl">${jugador.nickname}</h3>
            <p class="text-sm mb-2.5">Nivel: ${jugador.nivel}</p>

            <p class="text-base font-bold mr-3">
              Equipo: ${jugador.equipo ?? "Sin equipo"}
            </p>
            <p class="text-base">Victorias: ${jugador.victorias}</p>
            <p class="text-base">Derrotas: ${jugador.derrotas}</p>
            <p class="text-base font-bold">Puntaje: ${jugador.puntaje}</p>
            <button>Editar</button>
            <button>Mover</button>
          </div>
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
      <h6>${equipo.id}</h6>
      <p>${equipo.entrenador}</p>
      <hr>
    `;

    contenedor.appendChild(card);
  });
}
