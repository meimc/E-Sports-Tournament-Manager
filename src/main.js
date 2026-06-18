let boton = document.getElementById("btnNuevoJugador");
let form = document.getElementById("registroJugador");

boton.addEventListener("click", function () {
  form.style.display = "block";
});

//Registro del Jugador
document
  .getElementById("registroJugador")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let nickname = document.getElementById("nickname").value;
    let nivel = Number(document.getElementById("nivel").value);

    //Verificación del nickname
    let existe = jugadores.some(
      (j) => j.nickname.toLowerCase() === nickname.toLowerCase(),
    );

    if (existe) {
      alert("El nickname ya está en uso");
      return;
    }

    crearJugador(nombre, nickname, nivel);

    //Crear ficha del jugador
    mostrarJugadores();

    form.reset(); // limpiar
    form.style.display = "none"; // ocultar otra vez
  });

//Registro del Equipo
document.getElementById("formEquipo").addEventListener("submit", function (e) {
  e.preventDefault();

  let nombre = document.getElementById("nombreEquipo").value;
  let entrenador = document.getElementById("entrenador").value;

  let existe = equipos.some(
    (e) => e.nombre.toLowerCase() === nombre.toLowerCase(),
  );

  //Verificación del nombre del equipo
  if (existe) {
    alert("El nombre del equipo ya está en uso");
    return;
  }

  crearEquipo(nombre, entrenador);

  mostrarEquipos();
});
