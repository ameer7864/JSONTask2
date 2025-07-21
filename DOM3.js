let container = document.createElement("div");
container.className = "container"
let loader = document.getElementById("loader");

function fetchData(){
    var url = "https://fakestoreapi.com/products";
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}

function displayData(data){
    for(var obj of data){
        var item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
            <img src = '${obj.image}' class = 'image'>
            <p class = 'text'>${obj.title} + ' - ' + <span>'${obj.price}</span></p>
            <p class = 'description'>${obj.description}</p>
            <p class = 'rating'>${obj.rating.rate}</p>
        `
        container.appendChild(item);
    }
    loader.remove();
    document.body.appendChild(container)
}
fetchData();