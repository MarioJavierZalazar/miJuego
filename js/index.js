const listaEquipo = ["Espada","Espada", "2 Espadas", "2 Espadas", "Espada a dos manos", "Alabarda", "Arco", "Arco", "Ballesta", "Armadura de cuero", "Armadura de cuero", "Armadura de malla", "Armadura de malla", "Armadura completa", "Poción de Vida", "Poción de Vida", "Flechas / Virotes", "Flechas / Virotes", "Flechas / Virotes", "Flechas / Virotes", "Hechizo - Misil magico", "Hechizo - Armadura", "Hechizo - Controlar Criatura", "Hechizo - Paralizar"]

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