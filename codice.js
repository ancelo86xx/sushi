let riepilogo = document.getElementById ('riepilogo');
let ordine = document.getElementById('Ordina');
let qCalifornia = document.getElementById('qCalifornia');


ordine.addEventListener('click',()=>{
    window.open("pagamento.html", "_target");
    qCalifornia.innerHTML = (Dynamite);
    })



    let California = document.getElementById ('California');
   California.addEventListener('click',()=>{
    California= prompt('Inserisci la quantità');
    console.log('California: ' + California + 'pz');
    return California;

})


let Dynamite = document.getElementById ('Dynamite');
Dynamite.addEventListener('click',()=>{
    Dynamite= prompt('Inserisci la quantità');
    console.log('Dynamite: ' + Dynamite + 'pz');

})

let Dragon = document.getElementById ('Dragon');
Dragon.addEventListener('click',()=>{
    Dragon= prompt('Inserisci la quantità');
    console.log('Dragon: ' + Dragon + 'pz');

})

let Philadelphia = document.getElementById ('Philadelphia');
Philadelphia.addEventListener('click',()=>{
    let qntPhiladelphia;
    qntPhiladelphia= prompt('Inserisci la quantità');
    console.log('Philadelphia: ' + qntPhiladelphia + 'pz');

})

let Shrimp = document.getElementById ('Shrimp');
Shrimp.addEventListener('click',()=>{
    let qntShrimp;
    qntShrimp= prompt('Inserisci la quantità');
    console.log('Shrimp: ' + qntShrimp + 'pz');
    return qntShrimp;

})

let Rainbow = document.getElementById ('Rainbow');
Rainbow.addEventListener('click',()=>{
    let qntRainbow;
    qntRainbow= prompt('Inserisci la quantità');
    console.log('Rainbow: ' + qntRainbow + 'pz');

})
