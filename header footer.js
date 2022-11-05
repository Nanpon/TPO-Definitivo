let cad = `<header>
    <img id="encabezado" src="./Elementos Graficos/encabezado.png" alt="Entrenador">
    <div id="menu">
        <nav><a href="index.html">SOBRE MI</a></nav>
        <nav><a href="resenias.html">OPINIONES</a></nav>
        <nav><a href="entrenamiento.html">ENTRENAMIENTO</a></nav>
        <nav><a href="nutricion.html">NUTRICIÓN</a></nav>
    </div>
</header>`

document.getElementById("idheader").innerHTML = cad;

cad = `<footer>
    <a href="https://www.facebook.com/" target="_blank"><img class="redes" src="./Elementos Graficos/facebook.png" alt="facebook"></a> 
    <a href="https://www.instagram.com/" target="_blank"><img class="redes" src="./Elementos Graficos/instagram.png" alt="instagram"></a>
    <a href="https://wa.me/ + número prefijo país" target="_blank"><img class="redes" src="./Elementos Graficos/whatsapp.png" alt="whatsapp"></a>
</footer>`

document.getElementById("idfooter").innerHTML = cad;