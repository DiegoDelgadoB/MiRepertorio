let url = "http://localhost:3000/cancion";

let canciones = [];

window.onload = () => {
    let tbody = document.getElementById("cuerpo");
    let cancion = document.getElementById("cancion");
    let artista = document.getElementById("artista");
    let tono = document.getElementById("tono");
    const crea = document.getElementById('agregar');
    crea.addEventListener('click', nuevaCancion)

    function nuevaCancion() {
        cancion;
        artista;
        tono;
        let tada = {
            cancion: cancion.value,
            artista: artista.value,
            tono: tono.value,
        };
        console.log(data);
        axios.post(url, data).then(() => getData(tbody, cancion, artista, tono));
    };

    getData(tbody, cancion, artista, tono)
};
