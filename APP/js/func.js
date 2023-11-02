const main = document.getElementById("main");

async function get(){

    const response = await fetch("http://localhost/page_select/API/select.php");

    const data = await response.json();

    console.log(data); 


    data.forEach(element => {
        main.innerHTML += ` <div class="card">
        <div class="card-titulo">
            <h3>${element.titulo}</h3>
        </div>
        <div class="card-descricao">
            <p>${element.descricao}</p>
        </div>
    </div>`
    });
}

get();