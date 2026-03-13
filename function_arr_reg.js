const carro ={
    marca : "Toyota",
    modelo : "Hilux",
    año : 2026,
    velocidad : 0,
    encendido : false,
    arrancar : function(){
        this.encendido = true
        console.log(`El ${this.marca} ${this.modelo} esta encendido`)
    },
    apagar : () =>{
        this.encendido = false
        this.velocidad = 0
        console.log(`El ${this.marca} ${this.modelo} esta apagado`)
    } //ESTO NO FUNCIONA DEBIDO A QUE ES UNA ARROW FUNCTION Y NO TIENE SU PROPIO THIS 
}

carro.arrancar()
carro.apagar() //toma valores undefined

