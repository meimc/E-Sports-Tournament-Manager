### PROYECTO 4

# GESTOR DE TORNEO DE VIDEOJUEGOS

(E-Sports Tournament Manager)

## Introducción

Los torneos de videojuegos reúnen a cientos de jugadores y equipos que compiten por convertirse en campeones. Para organizar un torneo de este tipo es necesario administrar jugadores, equipos, partidas, resultados y estadísticas.

En este proyecto cada equipo desarrollará una plataforma web para gestionar un torneo completo de eSports utilizando únicamente JavaScript Vanilla.

La aplicación deberá permitir registrar jugadores, formar equipos, simular enfrentamientos y generar estadísticas automáticamente.

Todo deberá realizarse utilizando únicamente:

- HTML5
- Tailwind CSS 4.3
- CSS (si es necesario)
- JavaScript Vanilla

No se permite utilizar bases de datos, LocalStorage, APIs, frameworks o librerías externas.

### Contexto

La organización Cyber League organizará el campeonato más importante del año.
Se espera la participación de decenas de jugadores distribuidos en distintos equipos.
La organización necesita una plataforma para administrar todo el torneo sin depender de internet ni de bases de datos.
El sistema deberá mantener toda la información en memoria mediante arreglos y objetos.

### Historia

La empresa Cyber League organiza un torneo internacional de videojuegos.
Los organizadores necesitan un sistema que permita registrar jugadores, crear equipos, simular partidas, actualizar automáticamente las estadísticas y determinar al campeón del torneo.
Como desarrolladores, su misión será construir una herramienta que facilite la organización completa del campeonato.

## Objetivo General

Desarrollar una aplicación web para administrar un torneo de videojuegos utilizando JavaScript Vanilla, aplicando funciones, objetos, arreglos y manipulación dinámica del DOM.

## Objetivos Específicos

El proyecto debe demostrar el uso de:

- Funciones
- Objetos
- Arreglos
- Métodos avanzados de arreglos
- Manipulación del DOM
- Eventos
- Delegación de eventos
- Organización del código

## Competencias que serán evaluadas

El estudiante deberá demostrar que puede:

- Diseñar modelos de datos relacionados.
- Administrar información utilizando objetos y arreglos.
- Manipular el DOM dinámicamente.
- Resolver problemas mediante programación.
- Implementar reglas de negocio.
- Generar estadísticas utilizando JavaScript.

## Alcance

La aplicación permitirá:

- registrar jugadores
- crear equipos
- administrar equipos
- simular partidas
- actualizar estadísticas
- generar rankings
- declarar un campeón

Todo deberá ejecutarse sin recargar la página.

## Tecnologías Permitidas

> [!TIP]
>
> - HTML5
> - CSS3
> - Tailwind CSS 4.3
> - JavaScript Vanilla

## Tecnologías Prohibidas

> [!CAUTION]
>
> - React
> - Vue
> - Angular
> - Bootstrap
> - jQuery
> - LocalStorage
> - SessionStorage
> - Bases de datos
> - APIs
> - Fetch
> - Axios
> - Async/Await
> - Promesas

## Modelo de Datos

Jugador

```
{
    id:1,
    nombre:"Carlos Pérez",
    nickname:"Shadow",
    nivel:85,
    victorias:10,
    derrotas:2,
    puntaje:1450,
    equipo:"Titanes"
}
```

Equipo

```
{
    id:1,
    nombre:"Titanes",
    entrenador:"Luis Gómez",
    jugadores:[],
    victorias:0,
    derrotas:0,
    puntos:0
}
```

Partida

```
{
    id:1,
    equipoLocal:"Titanes",
    equipoVisitante:"Phoenix",
    ganador:"",
    perdedor:"",
    puntosGanador:3
}
```

Historial

```
{
    fecha:"",
    descripcion:"",
    tipo:"Partida"
}
```

## Requerimientos Funcionales

- [ ] RF01

* Mostrar la pantalla principal del torneo.

- [ ] RF02

* Registrar jugadores.
* Mínimo: 20 jugadores.

- [ ] RF03

* Registrar equipos.
* Mínimo: 4 equipos.

- [x] RF04

* Cada jugador deberá mostrar:
  - nickname
  - nombre
  - nivel
  - victorias
  - derrotas
  - puntaje
  - equipo

- [x] RF05

* Permitir crear nuevos equipos.

- [ ] RF06

* Permitir editar equipos.

- [ ] RF07

* Permitir eliminar equipos vacíos.

- [ ] RF08

* Permitir mover jugadores entre equipos.

- [ ] RF09

* No permitir que un equipo tenga más de 6 jugadores.

- [ ] RF10

* Mostrar una lista de partidas.

- [ ] RF11

* Permitir seleccionar dos equipos para disputar una partida.

- [ ] RF12

* Seleccionar manualmente el ganador.

- [ ] RF13

* Actualizar automáticamente:
  - victorias
  - derrotas
  - puntajes
  - ranking
  - historial

- [ ] RF14

* Mostrar el ranking de jugadores.

- [ ] RF15

* Mostrar el ranking de equipos.

- [ ] RF16

* Permitir buscar jugadores.

- [ ] RF17

* Permitir filtrar jugadores por:
  - equipo
  - nivel
  - victorias

- [ ] RF18

* Ordenar jugadores por:
  - nombre
  - puntaje
  - victorias

- [ ] RF19

* Mostrar estadísticas generales.

- [ ] RF20

* Mostrar el campeón del torneo.

## Requerimientos No Funcionales

- La aplicación deberá:
  - ser responsive
  - utilizar Tailwind
  - actualizar la interfaz dinámicamente
  - tener código organizado
  - evitar duplicación de lógica
  - ser intuitiva para el usuario

## Reglas de Negocio

- [ ] RN01 - Cada jugador solo puede pertenecer a un equipo.

- [ ] RN02 - Un equipo debe tener entre 3 y 6 jugadores para poder disputar una partida.

- [x] RN03 - No pueden existir jugadores con el mismo nickname.

- [ ] RN04 - Cada victoria suma 3 puntos al equipo.

- [ ] RN05 - Cada victoria suma 1 victoria al jugador.

- [ ] RN06 - Cada derrota aumenta el contador de derrotas.

- [ ] RN07 - El puntaje del jugador aumenta en 50 puntos por cada victoria.

- [ ] RN08 - El puntaje nunca puede ser negativo.

- [ ] RN09 - No se puede eliminar un equipo que tenga jugadores registrados.

- [ ] RN10 - Cada partida debe registrarse automáticamente en el historial.

## Casos de Uso

- [ ] CU01 - Registrar jugador

* Actor
  - Administrador
* Flujo
  1. Selecciona "Nuevo jugador".
  2. Completa el formulario.
  3. Guarda la información.
  4. El jugador aparece en la lista.

- [ ] CU02 - Crear equipo

* Actor
  - Administrador
* Flujo
  1. Selecciona "Nuevo equipo".
  2. Ingresa el nombre.
  3. Guarda.
  4. El equipo aparece disponible.

- [ ] CU03 - Simular partida

* Actor
  - Administrador
* Flujo
  1. Selecciona dos equipos.
  2. Elige el ganador.
  3. Presiona "Finalizar partida".
  4. El sistema actualiza todas las estadísticas.

- [ ] CU04 - Consultar ranking

* Actor
  - Administrador
* Flujo
  1. Abre el panel de estadísticas.
  2. Consulta el ranking actualizado.

## Wireframe

```
Pantalla Principal

--------------------------------------------------------

E-SPORTS TOURNAMENT MANAGER

--------------------------------------------------------

Equipos

[ Titanes ]

[ Phoenix ]

[ Warriors ]

[ Legends ]

--------------------------------------------------------

Jugadores

[Card]

[Card]

[Card]

--------------------------------------------------------

Partidas

--------------------------------------------------------

Ranking

--------------------------------------------------------

Historial

--------------------------------------------------------


Tarjeta de Jugador

+----------------------------------+

🎮 Shadow

Carlos Pérez

Nivel: 85

Equipo: Titanes

Victorias: 10

Derrotas: 2

Puntaje: 1450

[Editar]

[Mover]

+----------------------------------+
```

## Funciones Obligatorias

Deberán existir funciones equivalentes a:

- [ ] iniciarSistema()
- [ ] crearJugador()
- [ ] editarJugador()
- [ ] eliminarJugador()
- [ ] crearEquipo()
- [ ] editarEquipo()
- [ ] eliminarEquipo()
- [ ] moverJugador()
- [ ] simularPartida()
- [ ] actualizarRanking()
- [ ] mostrarJugadores()
- [ ] mostrarEquipos()
- [ ] mostrarHistorial()
- [ ] calcularEstadisticas()
- [ ] mostrarCampeon()
- [ ] reiniciarTorneo()

## Métodos de Arreglos Obligatorios

Todos deberán utilizarse al menos una vez.

- [ ] push()
- [ ] pop()
- [ ] shift()
- [ ] unshift()
- [ ] slice()
- [ ] splice()
- [ ] concat()
- [ ] join()
- [ ] indexOf()
- [ ] includes()
- [ ] map()
- [ ] filter()
- [ ] reduce()
- [ ] some()
- [ ] every()

## Manipulación del DOM

Obligatorio utilizar:

- [ ] createElement()
- [ ] appendChild()
- [ ] insertBefore()
- [ ] remove()
- [ ] textContent
- [ ] innerHTML
- [ ] getAttribute()
- [ ] setAttribute()
- [ ] removeAttribute()
- [ ] classList.add()
- [ ] classList.remove()
- [ ] classList.toggle()
- [ ] classList.contains()

## Eventos

Como mínimo:

- [ ] click
- [ ] submit
- [ ] keydown
- [ ] mouseover
- [ ] mouseout

Además deberán demostrar:

- [ ] addEventListener()
- [ ] removeEventListener()
- [ ] event.preventDefault()
- [ ] event.stopPropagation()
- [ ] Delegación de eventos
- [ ] Capturing y Bubbling (al menos una demostración práctica de cada uno)

## Restricciones Técnicas

> [!CAUTION]
> No se aceptarán proyectos que:
>
> - tengan todo el código JavaScript en un único archivo
> - utilicen variables globales innecesarias
> - recarguen la página para actualizar la información
> - utilicen alert() como interfaz principal
> - repitan código de manera significativa
> - empleen tecnologías no autorizadas

## Se recomienda la siguiente estructura:

```
/
│── index.html
│
├── css/
│     styles.css
│
├── js/
│     app.js
│     jugadores.js
│     equipos.js
│     partidas.js
│     ranking.js
│     ui.js
│
├── assets/
│     img/
│     icons/
```

## Funcionalidades Bonus (+2 puntos)

Implementar una o más de las siguientes características:

- [ ] Simulación automática de partidas con probabilidades basadas en el nivel promedio del equipo.
- [ ] Sistema de eliminación directa (bracket) con cuartos de final, semifinal y final.
- [ ] Distintivos para el MVP (jugador con mayor puntaje) y el Mejor Equipo.
- [ ] Vista de calendario con las partidas programadas.
- [ ] Tema oscuro/claro.
- [ ] Animaciones de transición entre pantallas.
- [ ] Panel de estadísticas visuales utilizando únicamente HTML, CSS y JavaScript (sin librerías).

Nota: El puntaje máximo seguirá siendo 20 puntos. Las funcionalidades bonus servirán para compensar pequeñas deficiencias o como criterio de desempate.

## Entregables

Cada equipo deberá entregar:

- [ ] Código fuente organizado en carpetas.
- [ ] Archivo README.md con descripción del proyecto, instrucciones de ejecución y distribución de responsabilidades.
- [ ] Presentación de máximo 10 minutos.
- [ ] Diagrama simple del modelo de datos (jugadores, equipos y partidas).
- [ ] Repositorio en GitHub (si el docente lo solicita).

## Rúbrica de Evaluación (20 puntos)

> [!IMPORTANT]
> Criterio de Puntaje
> TOTAL 20
>
> - Organización y estructura del proyecto 2
> - Uso correcto de funciones (declaradas, expresión y flecha) 2
> - Modelado mediante objetos 2
> - Uso de arreglos y métodos (map, filter, reduce, etc.) 3
> - Manipulación dinámica del DOM 3
> - Manejo de eventos y delegación 2
> - Cumplimiento de los requerimientos funcionales 3
> - Diseño e interfaz de usuario 2
> - Calidad del código (modularidad, legibilidad y reutilización) 1
