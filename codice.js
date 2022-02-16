
function initCart () {
    if(!window.localStorage.getItem('cart'))
    window.localStorage.setItem('cart', '[]')
}

function addCart (nome, qnt){
    if(qnt == '' || isNaN(qnt)) qnt = 1

    let cart = JSON.parse(window.localStorage.getItem('cart'))
    if (!cart){
        initCart()
    }
    let found = false
    for (i=0; i<cart.length; i++){
        if (nome == cart[i].nome){
            cart[i].qnt += parseInt(qnt)
            found = true
        }
    }
    console.log(qnt, parseInt(qnt))
    if(!found){
        cart.push({
            nome,
            qnt: parseInt(qnt)
        })
    }
    
    window.localStorage.setItem('cart', JSON.stringify(cart))          
 
}

function getCart(){
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    let riga = ''
    let body = document.getElementById('bodyTable')
    console.log(body)
    for (i=0; i<cart.length; i++){
      riga += '<tr><td>' + cart[i].nome + '</td><td>' + cart[i].qnt + '</td><td><button onclick="removeItem('+i+')">elimina</button></td></tr>'
    }
    console.log(riga)
    body.innerHTML = riga
}

function cartEmpty(){
    window.localStorage.removeItem('cart')
    window.localStorage.setItem('cart', '[]')
    getCart()
}

function removeItem (i){
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    cart.splice(i,1);
    window.localStorage.setItem('cart', JSON.stringify(cart))   
    getCart()
   
  
    
}