
var CharacterID = 1
var Habilidade = 0
var Habilidade1 = 1


window.addEventListener('load', function() {
    iniciarContador();
    valores();
    
});

function iniciarContador() {
    document.getElementById('ButtonDwn').addEventListener('click', function() {
        CharacterID = (CharacterID % 22) + 1; 
        valores();
        console.log(CharacterID)
        
        
    });
    
    document.getElementById('ButtonUp').addEventListener('click', function() {
        CharacterID = (CharacterID === 1) ? 22 : CharacterID - 1; 
        valores();
               

    });
}

function valores() {    
const endpoint = "https://valorant-api.com/v1/agents"
fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        console.log(dados)

        var description = document.getElementById("textinho");
        var displayName = document.getElementById("displayName");
        var ImagemSource = document.getElementById("CharacterIMG");

        description.innerHTML = dados.data[CharacterID].description;

        displayName.innerHTML = dados.data[CharacterID].displayName;

        ImagemSource.src = dados.data[CharacterID].fullPortrait;

        /////////////////////////////////////////////////////////////

        //HABILIDADE 00//

        var habilidade00Name = document.getElementById("habilidade00Name");
        var habilidade00Description = document.getElementById("habilidade00Descricao");
        //-------------//
        //HABILIDADE 01//

        var habilidade01Name = document.getElementById("habilidade01Name");
        var habilidade01Description = document.getElementById("habilidade01Descricao");
        /////////////////////////////////////////////////////////////


        /////////////////////////////////////////////////////////////
        habilidade00Name.innerHTML = dados.data[CharacterID].abilities[Habilidade].displayName;
        habilidade00Description.innerHTML = dados.data[CharacterID].abilities[Habilidade].description;

        /////////////////////////////////////////////////////////////

        habilidade01Name.innerHTML = dados.data[CharacterID].abilities[Habilidade1].displayName;
        habilidade01Description.innerHTML = dados.data[CharacterID].abilities[Habilidade1].description;

        ////////////////////////////////////////////////////////////////

        var categoria= document.getElementById("categoriaName");
        var categoriaDescription = document.getElementById("categoriaDescricao");

        categoria.innerHTML = dados.data[CharacterID].role.displayName;
        categoriaDescription.innerHTML = dados.data[CharacterID].role.description; 

    }) 
}























