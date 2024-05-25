const listaEquipo = ["Espada +1 ATK","Espada +1 ATK", "2 Espadas +1 ATK 2 ataques por acción (no se puede usar escudos)", "2 Espadas +1 ATK 2 ataques por acción (no se puede usar escudos)", "Espada a dos manos +2 ATK no se puede usar escudos", "Alabarda +1 ATK alcance no se puede usar escudos", "Arco +1 ATK no se puede usar escudos", "Arco +1 ATK no se puede usar escudos", "Ballesta +2 ATK no se puede usar escudos (1 acción de recarga)", "Armadura de cuero +1 DEF", "Armadura de cuero +1 DEF", "Armadura de malla +2 DEF", "Armadura de malla +2 DEF", "Armadura completa +3 DEF","Escudo Repetir dado DEF", "Escudo Repetir dado DEF", "Poción de Vida cura 2HP", "Poción de Vida cura 2HP", "Flechas / Virotes x10", "Flechas / Virotes x10", "Flechas / Virotes x10", "Flechas / Virotes x10", "Hechizo - Misil magico (ATK 5+ 2 enemiegos)", "Hechizo - Armadura (+1 DEF + 1 turno | Se puede lanzar otros hechizos)", "Hechizo - Controlar Criatura (controlar 1 criatura post turno)", "Hechizo - Paralizar (evita que active una criatura)"]

const cartaEquipoObtenida = document.querySelector("#cartasEquipo");

let cantidadEquipoRestante = listaEquipo.length;

listaEquipo.sort(function() { return Math.random() - 0.5 });


const tomarCartaEquipo = () => {
    cartaEquipoObtenida.innerHTML = listaEquipo[cantidadEquipoRestante - 1];
    cantidadEquipoRestante --;
    if (cantidadEquipoRestante < 0)  cantidadEquipoRestante = listaEquipo.length;
}


const listaEventos = ["No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","No pasa nada","Carta Criatura","Carta Criatura","Carta Criatura","Carta Criatura","Carta Criatura x2","Trampa que daña a los jugadores que no evadan +4 evadir","Trampa que daña a los jugadores que no evadan +4 evadir","Trampa que daña a los jugadores que no evadan +4 evadir","Frenesi de las criaturas (juegan otro turno)","Frenesi de las criaturas (juegan otro turno)",];

const cartaEventoObtenida = document.querySelector("#cartasEventos");

let cantidadEventosRestante = listaEventos.length;

listaEventos.sort(function() { return Math.random() - 0.5 });


const tomarCartaEvento = () => {
    cartaEventoObtenida.innerHTML = listaEventos[cantidadEventosRestante - 1];
    cantidadEventosRestante --;
    if (cantidadEventosRestante < 0)  cantidadEventosRestante = listaEquipo.length;
}



const listaCriatura = ["Pasillo - Vacio | habitación - 3 Goblins","Pasillo - Vacio | habitación - 3 Orcos","Pasillo - Vacio | habitación - 2 Lobos","Pasillo - 1 Goblin | habitación - 3 Goblins","Pasillo - 1 Goblin | habitación - 3 Orcos","Pasillo - 1 Goblin | habitación - 2 Lobos","Pasillo - 1 Orco | habitación - 3 Goblins","Pasillo - 1 Orco | habitación - 3 Orcos","Pasillo - 1 Orco | habitación - 2 Lobos","Pasillo - 1 Lobo | habitación - 3 Lobos","Pasillo - 1 Lobo | habitación - 3 Lobos","Pasillo - 1 Lobo | habitación - 3 Lobos","Pasillo - 2 Goblins | habitación - 1 Araña","Pasillo - 2 Goblins | habitación - 2 Goblins y 2 Orcos","Pasillo - 2 Orcos | habitación - 1 troll","Pasillo - 2 Orcos | habitación - 2 Goblins y 2 Orcos","Pasillo - 1 Goblin y 1 Orco | habitación - 1 Araña","Pasillo - 1 Goblin y 1 Orco | habitación - 1 troll"]

const cartaCriaturaObtenida = document.querySelector("#cartasCriaturas");

let cantidadCriaturasRestantes = listaCriatura.length;

listaCriatura.sort(function() { return Math.random() - 0.5 });


const tomarCartaCriatura = () => {
    cartaCriaturaObtenida.innerHTML = listaCriatura[cantidadCriaturasRestantes - 1];
    cantidadCriaturasRestantes --;
    if (cantidadCriaturasRestantes < 0)  cantidadCriaturasRestantes = listaCriatura.length;
}