
function initCart () {
    if(!window.localStorage.getItem('cart'))
        window.localStorage.setItem('cart', '[]')
}

function addCartDragon (nome, qnt){
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    let obj = {
        nome,
        qnt
    }
    cart.push(obj)
    
        for (i=0; i<cart.length; i++){
            if (cart[i].nome == "Dragon Roll" ){
                let newqntc = cart[i].qnt
                newqntc = newqntc + 1
                cart[i].qnt = newqntc
                console.log(cart[i])                                  
          }
            }
       
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

function addCartCalifornia (nome, qnt){
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    let obj = {
        nome,
        qnt
    }
    cart.push(obj)
    
        for (i=0; i<cart.length; i++){
            if (cart[i].nome == "California Roll" ){
                let newqntc = cart[i].qnt
                newqntc = newqntc + 1
                cart[i].qnt = newqntc
                console.log(cart[i])                                  
          }
            }
       
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

function addCartDynamite (nome, qnt){
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    let obj = {
        nome,
        qnt
    }
    cart.push(obj)
    
        for (i=0; i<cart.length; i++){
            if (cart[i].nome == "Dynamite Roll" ){
                let newqntc = cart[i].qnt
                newqntc = newqntc + 1
                cart[i].qnt = newqntc
                console.log(cart[i])                                  
            }
            }
       
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

