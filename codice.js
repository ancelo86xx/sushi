
function initCart () {
    if(!window.localStorage.getItem('cart'))
    window.localStorage.setItem('cart', '[]')
}
 
function addCart (nome, qnt, price){
    
    if(qnt == '' || isNaN(qnt) || 0) qnt = 1
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    v = price
    if (!cart){
        initCart()
    }
    let found = false
    for (i=0; i<cart.length; i++){
        if (nome == cart[i].nome){
            cart[i].qnt += parseInt(qnt)
            cart[i].price = cart[i].qnt * v
            found = true
        }
    }
        if(!found){
        cart.push({
            nome,
            qnt: parseInt(qnt),
            price : qnt * price

        })
    }
    
    window.localStorage.setItem('cart', JSON.stringify(cart))          
    getCart()
    return v
}


function modCart (i){
    
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    let v = cart[i].price / cart[i].qnt
    qnt = prompt('inserisci quantita')
    if(qnt == 0 ||  '') {
    removeItem (i)
    }
    else{
        cart[i].qnt = parseInt(qnt)
	   cart[i].price = cart[i].qnt * v
        window.localStorage.setItem('cart', JSON.stringify(cart)) 
          
        getCart()
    }
    }

function getCart(){
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    let riga = ''
    let body = document.getElementById('bodyTable')
    for (i=0; i<cart.length; i++){
      riga += '<tr><td>' + cart[i].nome + '</td><td>' + cart[i].qnt + '</td><td>' + cart[i].price + ' €</td><td><button onclick="removeItem('+i+')">elimina</button></td><td><button onclick="modCart('+i+')">Modifica</button></td></tr>'
    }
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

