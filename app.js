const oDisco = { Artista: "", Año: "", Genero: "", Album: "", Cantidad: "", Precio: "" };
let vArtista = "";
let vAño = "0";
let vGenero = "";
let vAlbum = "";
let vCantidad = 0;
let vPrecio = 0;

function fcargarArtista() {
    vArtista = prompt("Ingrese el nombre del artista");
    if (vArtista == "" || vArtista.length < 3 || vArtista == null) {
        console.log("El nombre del artista no puede estar vacio ni tener menos de 3 caracteres");
        return;
    } else {
        oDisco.Artista = vArtista;

    }
}

function fcargarAñoAlbum() {
    vAño = prompt("Ingrese el año del disco");
    if (vAño == "" || vAño < 1900 || vAño == null) {
        console.log("El año del disco no puede estar vacio ni ser anterior a 1900");

    } else {
        oDisco.Año = vAño;
    }
}

function fcargarGeneroAlbum() {
    vGenero = prompt("Ingrese el genero del disco");
    if (vGenero == "" || vGenero.length < 3 || vGenero == null) {
        console.log("El genero del disco no puede estar vacio ni tener menos de 3 caracteres");

    } else {
        oDisco.Genero = vGenero;

    }
}

function fcargarNombreAlbum() {
    vAlbum = prompt("Ingrese el album del disco");
    if (vAlbum == "" || vAlbum.length < 3 || vAlbum == null) {
        console.log("El nombre disco no puede estar vacio ni tener menos de 3 caracteres");

    } else {
        oDisco.Album = vAlbum;
    }
}

function fcargarCantDiscos() {
    vCantidad = prompt("Ingrese la cantidad de discos");
    if (vCantidad == "" || vCantidad == null) {
        console.log("La cantidad de discos no puede estar vacio ");

    } else {
        oDisco.Cantidad = vCantidad;
    }
}

function fcargarPrecioDisco() {
    vPrecio = prompt("Ingrese el precio del disco");
    if (vPrecio == "" || vPrecio == null) {
        console.log("El precio del disco no puede estar vacio ");

    } else {
        oDisco.Precio = vPrecio;
    }
}

function crearDisco(oDisco) {
    fcargarArtista();
    fcargarAñoAlbum();
    fcargarGeneroAlbum();
    fcargarNombreAlbum();
    fcargarCantDiscos();
    fcargarPrecioDisco();


}

let aCatalogo = [];

function fapp() {
    let vcontrol = prompt("Desea cargar un disco? (s/n)");
    if (vcontrol == null || vcontrol == "") {
        console.log("No se puede cargar ningun disco, debido a que no se ingreso ningun valor");
        return;

    }
    while (vcontrol == "s") {
        crearDisco(oDisco);
        aCatalogo.push(oDisco);
        console.log("Disco cargado con exito");
        let sOpcion = prompt("Desea agregar otro disco? (s/n)");
        if (sOpcion == "n") {
            break;
        }

    }
    fMostrarCatalogo();
}

function fMostrarCatalogo() {
    let sCadena = "";
    for (let i = 0; i < aCatalogo.length; i++) {
        sCadena += "Artista: " + aCatalogo[i].Artista + "\n";
        sCadena += "Año: " + aCatalogo[i].Año + "\n";
        sCadena += "Genero: " + aCatalogo[i].Genero + "\n";
        sCadena += "Album: " + aCatalogo[i].Album + "\n";
        sCadena += "Cantidad: " + aCatalogo[i].Cantidad + "\n";
        sCadena += "Precio: " + aCatalogo[i].Precio + "\n";
        console.log(sCadena);
    }

}
fapp();