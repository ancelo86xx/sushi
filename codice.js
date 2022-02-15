
function initCart () {
    if(!window.localStorage.getItem('cart'))
        /* Creo tre carrelli specifici per ogni prodotto
        window.localStorage.setItem('cartDragon', '[]')
        window.localStorage.setItem('cartCalifornia', '[]')
        window.localStorage.setItem('cartDynamite', '[]')
        */
        window.localStorage.setItem('cart', '[]')
}
        
function addCartDragon (nome, qnt){
    /*let cart = JSON.parse(window.localStorage.getItem('cartDragon'))*/
    
    let cart = JSON.parse(window.localStorage.getItem('cart'))

    let obj = {
        nome,
        qnt
    }
    cart.push(obj)
    
        for (i=0; i<cart.length; i++){
            if (cart[i].nome == "Dragon Roll" ){
                let newqnt = cart[i].qnt
                newqnt = newqnt + 1
                cart[i].qnt = newqnt
                console.log(cart[i])                                  
          }
          if(cart.length > 3){
            cart.pop(obj)
        }
  }
  window.localStorage.setItem('cart', JSON.stringify(cart)) 
  /*
  window.localStorage.setItem('cartDragon', JSON.stringify(cart))
  */
 
}

function addCartCalifornia (nome, qnt){
    /*
        let cart = JSON.parse(window.localStorage.getItem('cartCalifornia'))
        */
        let cart = JSON.parse(window.localStorage.getItem('cart'))
    let obj = {
        nome,
        qnt
    }
    cart.push(obj)
    
    
        for (i=0; i<cart.length; i++){
            if (cart[i].nome == "California Roll" ){
                let newqnt = cart[i].qnt
                newqnt = newqnt + 1
                cart[i].qnt = newqnt
                console.log(cart[i])                                  
          }
          if(cart.length > 3 ){
            cart.pop(obj)
        }
          
            }
            window.localStorage.setItem('cart', JSON.stringify(cart)) 
            /*     
  window.localStorage.setItem('cartCalifornia', JSON.stringify(cart))
  */
}

function addCartDynamite (nome, qnt){
   /* let cart = JSON.parse(window.localStorage.getItem('cartDynamite')) */
   let cart = JSON.parse(window.localStorage.getItem('cart'))
    let obj = {
        nome,
        qnt
    }
    cart.push(obj)

    
        for (i=0; i<cart.length; i++){
            if (cart[i].nome == "Dynamite Roll" ){
                let newqnt = cart[i].qnt
                newqnt = newqnt + 1
                cart[i].qnt = newqnt
                console.log(cart[i])                                  
            }
             if(cart.length > 3){
                 cart.pop(obj)
             }
            }

            window.localStorage.setItem('cart', JSON.stringify(cart)) 
            /*
  window.localStorage.setItem('cartDynamite', JSON.stringify(cart))
  */
}

