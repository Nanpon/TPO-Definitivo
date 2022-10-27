const aplicacion = document.querySelector(`.referencias`) 

const url = `https://jsonplaceholder.typicode.com/users`
fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        console.log(usuario.name, usuario.email)
        const p = document.createElement('p')
        p.innerHTML = usuario.name + "&nbsp; &nbsp; &nbsp;" + usuario.email
        aplicacion.appendChild(p)
    });
})
.catch(err => console.log(err))