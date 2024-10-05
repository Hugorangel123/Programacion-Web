const imagenElement = document.getElementById('M1');
const siguienteBoton = document.getElementById('Siguiente');
const anteriorBoton = document.getElementById('Regresar');

const imagenes = [
    'img/Mascaras/DEKU-MASK.png',                // Deku Mask
    'img/Mascaras/ZORA-MASK.png',                // Zora Mask
    'img/Mascaras/GORON-MASK.png',               // Goron Mask
    'img/Mascaras/FIERA-MASK.png',               // Fierce Deity's Mask (Fiera Mask)
    'img/Mascaras/GIANT-MASK.png',               // Giant Mask
    'img/Mascaras/MAJORAS-MASK.png',             // Majora's Mask
    'img/Mascaras/43px-Kamaros-Mask.png',        // Todas las demás
    'img/Mascaras/50px-Bunny-Hood.png',
    'img/Mascaras/52px-Garos-Mask.png',
    'img/Mascaras/52px-Moons-Mask.png',
    'img/Mascaras/57px-Great-Fairy-s-Mask.png',
    'img/Mascaras/57px-Keaton-Mask-Model.png',
    'img/Mascaras/63px-Suns-Mask.png',
    'img/Mascaras/67px-Couples-Mask.png',
    'img/Mascaras/71px-Stone-Mask.png',
    'img/Mascaras/74px-Blast-Mask.png',
    'img/Mascaras/74px-Captains-Hat.png',
    'img/Mascaras/74px-Mask-of-Truth.png',
    'img/Mascaras/74px-Odolwas-Remains.png',
    'img/Mascaras/78px-Don-Geros-Mask.png',
    'img/Mascaras/80px-All-Night-Mask.png',
    'img/Mascaras/80px-Bremen-Mask.png',
    'img/Mascaras/80px-Gibdo-Mask.png',
    'img/Mascaras/80px-Gohts-Remains.png',
    'img/Mascaras/80px-Gyorgs-Remains.png',
    'img/Mascaras/80px-Kafeis-Mask.png',
    'img/Mascaras/80px-Mask-of-Scents.png',
    'img/Mascaras/80px-Postmans-Hat.png',
    'img/Mascaras/80px-Romanis-Mask.png',
    'img/Mascaras/80px-Troupe-Leaders-Mask.png',
    'img/Mascaras/80px-Twinmolds-Remains.png'
];

let indiceActual = 0;

function cambiarImagen() {
    imagenElement.src = imagenes[indiceActual];
}

siguienteBoton.onclick = () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    cambiarImagen();
};

anteriorBoton.onclick = () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    cambiarImagen();
};

cambiarImagen();
