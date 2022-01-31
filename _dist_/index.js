/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const urlBase = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);
    return newPrice;
}

//web api
//Conectarnos al server
window
    .fetch(`${urlBase}/api/avo`)
    //procesar la respuesta y convertirla a JSON
    .then ((respuesta) => respuesta.json())
    //JSON  -> data -> Renderizar info browser
    .then((responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {
            //crear imagen
            const imagen = document.createElement("img");
            imagen.src = `${urlBase}${item.image}`;
            imagen.style = "margin: 0 auto";

            //crear titulo
            const title = document.createElement("h2");
            title.textContent = item.name; 
            title.style.textAlign = "center";
            // title.style = "font-size: 2rem"; 
            //La segunda forma de agregar estilos es en forma de objeto:
            // title.style.fontSize = "3rem";
            //La tercera forma de agregar estilos es a travez de una clase:
            title.className = "muy-grande text-zinc-600"

            //crear precio
            const price = document.createElement("div");
            price.className = "text-gray-600";
            price.textContent = formatPrice(item.price);
            price.style.textAlign = "center";


            const container = document.createElement("div");
            container.append(imagen, title, price);

            todosLosItems.push(container);
        });

    appNode.append(...todosLosItems);
    });
//en lo anterior, en lugar de promesas tambien se puede usar Async/await, RETO
