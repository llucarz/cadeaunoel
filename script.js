let solution='indochine'
let $=function (id){
    return window.document.getElementById(id);
};

const toogle=(elementId)=>{
    let elm=$(elementId);
    if(elm.style.display==='none'){
        elm.style.display='';
    }
    else{
        elm.style.display='none';
    }
};
$('bt-start').addEventListener('click', function () {
    const proposition = $('proposition').value;
    if (proposition.toLowerCase().trim() === solution) {
        toogle("step2")
        toogle("step1")

        return;
    }
    displayReponse('Non, c\'est pas ça !')
})
let displayReponse=function (message){
    $('reponse').innerHTML=message
}

$('proposition').addEventListener('change', function (){
        let proposition = $('proposition').value;

})

function OuvertureCadeau() {
    window.open("beauregard.pdf"); }







// tu avais mis step1 & 2 dans une class dans le HTML alors qu'il fallait un id




