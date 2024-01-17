const rubrik_ruta = document.querySelector("#rubrik");
const text_ruta = document.querySelector("#text");
const main = document.querySelector("main");
let array = [];
const nyckel = "artiklar";

function add_text()
{
    let artikel = {
        rubrik:rubrik_ruta.value,
        text:text_ruta.value
    }

    array.push(artikel);
    let json = JSON.stringify(array);
    window.localStorage.setItem(nyckel, json);

    let articleElement = document.createElement("article");

    let h2Element = document.createElement("h2");
    h2Element.innerText = artikel.rubrik;
    articleElement.appendChild(h2Element);

    let pElement = document.createElement("p");
    pElement.innerText = artikel.text;

    articleElement.appendChild(pElement);

    main.appendChild(articleElement);
}

function read_from_ls()
{
    let json_data = window.localStorage.getItem(nyckel);
    let artikel_array = JSON.parse(json_data);

    for (let index = 0; index < artikel_array.length; index++)
    {
        let articleElement = document.createElement("article");

        let h2Element = document.createElement("h2");
        h2Element.innerText = artikel_array[index].rubrik;
        articleElement.appendChild(h2Element);
    
        let pElement = document.createElement("p");
        pElement.innerText = artikel_array[index].text;
        articleElement.appendChild(pElement);
    
        main.appendChild(articleElement);
    }
}

function toggle_mode()
{
    let articles = document.querySelectorAll("article");
    document.body.classList.toggle("dark");
    for (let index = 0; index < articles.length; index++)
    {
        articles[index].classList.toggle("dark");
    }
}
