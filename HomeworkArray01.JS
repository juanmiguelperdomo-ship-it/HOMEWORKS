let array = [1,2,3,4,5,6,7,8,9,10]
let nombres = ["Juan", "Marta", "Andrea"]

//TOLOCALsTRING

function metodoToLocalString(){
    const precio = [1000000,20000,3000]

    toLocalString = precio.toLocaleString("es-CO")
    console.log(toLocalString)
}

metodoToLocalString()

//LENGTH 

function metodoLength (){
    const a = [1,2,3,4,5,6,7,8,9,10]

    a.length = 3
    console.log(a)
}
metodoLength ()



//UNSHIFT()

function metodoUnshift(){
    array = [1,2,3,4,5,6,7,8,9,10]

    array.unshift(0)
    console.log(array)
}

metodoUnshift()


//PUSH()

function metodoPush(){
    array = [1,2,3,4,5,6,7,8,9,10]

    array.push(11)
    console.log(array)
}

metodoPush()

//SHIFT()

function metodoShift(){
    array = [1,2,3,4,5,6,7,8,9,10]

    array.shift()
    console.log(array)
}

metodoShift()


//POP()

function metodoPop(){
    array = [1,2,3,4,5,6,7,8,9,10]

    array.pop()
    console.log(array)
}

metodoPop()



//MAP()

function metodoMap(){
    array = [1,2,3,4,5,6,7,8,9,10]

    const por2 = array.map( x => x *2)
    console.log(por2)
}

metodoMap()

//FILTER
function metodoFilter(){

    const array2 = array.filter(x => x > 5)
    console.log(array2)
}

metodoFilter()

//FIND
function metodoFind(){

    const find = array.find (x => x > 5)
    console.log(find)
}

metodoFind()

//INCLUDES ()

function metodoIncludes(){

    let includes = array.includes(5)
    console.log(includes)
}

metodoIncludes()

//REDUCE ()

function metodoReduce(){

    const reduce = array.reduce((ac, x) => {
        return ac + x
    },0)
    console.log(reduce)
}

metodoReduce()

//REDUCERIGHT

function metodoReduceRight(){
    const letras = ["J","U","A","N"]
    const reduceRight = letras.reduceRight((ac,x) => ac + x, "")
    console.log(reduceRight)
}

metodoReduceRight()

//FOREACH

function metodoForEach(){

    nombres.forEach((x) => {
        const letras = x.length
        console.log(`El nombre de ${x} tiene ${letras} letras`)
    })
}

metodoForEach()

//SLICE ()
function metodoSlice(){
    const slice = array.slice(-3)
    console.log(slice)
}

metodoSlice()

//SPLICE 

function metodoSplice(){
    const estudiantes = [{nombre : "Juan", Nota : 3.5, Ciudad : "Cali"}, {nombre : "Andrea", Nota : 2.0, Ciudad : "Cali"}, {nombre : "Jhon", Nota : 2.7, Ciudad : "Cali"},{nombre : "Natalia", Nota : 4.0, Ciudad : "Cali"}]

    const reprobado = estudiantes.splice(1,2)

    console.log(reprobado)
}

metodoSplice()

//SORT 

function metodoSort(){
    const array3 = [1,2,3,4,5,6,7,8,9,10]
    const sort = array3.sort((a,b) => {return b-a})
    
    console.log(sort)
}

metodoSort()


//SOME ()

function metodoSome(){
    
    const some = nombres.some((x) =>{
        return x.length < 0 || x[0] === "M"
    })
    console.log(some)
}

metodoSome()

//EVERY ()

function metodoEvery(){
    const estudiantes = [{Nombre : "Juan", Nota : 3.5, Ciudad : "Cali"}, {Nombre : "Andrea", Nota : 2.0, Ciudad : "Cali"}, {Nombre : "Jhon", Nota : 2.7, Ciudad : "Cali"},{Nombre : "Natalia", Nota : 4.0, Ciudad : "Cali"}]

    const evey = estudiantes.every((x) =>{
        return estudiantes.Nota > 3.0
    })
    console.log(`¿Todos han aprobado el curso? ${evey}`) 
}

metodoEvery()


//FINDINDEX ()

function metodoFindIndex(){
    const estudiantes = [{Nombre : "Juan", Nota : 3.5, Ciudad : "Cali"}, {Nombre : "Andrea", Nota : 2.0, Ciudad : "Cali"}, {Nombre : "Jhon", Nota : 2.7, Ciudad : "Cali"},{Nombre : "Natalia", Nota : 4.0, Ciudad : "Cali"}]

    const findIndex = estudiantes.findIndex(x => x.Nombre === "Andrea")
    console.log(findIndex)
}

metodoFindIndex()

//FINDLAST 

function metodoFindLast(){
    const estudiantes = [{Nombre : "Juan", Nota : 3.5, Ciudad : "Cali"}, {Nombre : "Andrea", Nota : 2.0, Ciudad : "Cali"}, {Nombre : "Jhon", Nota : 2.7, Ciudad : "Cali"},{Nombre : "Natalia", Nota : 4.0, Ciudad : "Cali"}]
    
    const findLast = estudiantes.findLast(x => x.Nota >= 3.0)

    console.log(findLast)
}

metodoFindLast()

//FINDLASTINDEX 

function metodoFindLastIndex(){
    const estudiantes = [{Nombre : "Juan", Nota : 3.5, Ciudad : "Cali"}, {Nombre : "Andrea", Nota : 2.0, Ciudad : "Cali"}, {Nombre : "Jhon", Nota : 2.7, Ciudad : "Cali"},{Nombre : "Natalia", Nota : 4.0, Ciudad : "Cali"}]
    
    const findLastIndex = estudiantes.findLastIndex(x => x.Nota >= 3.0)

    console.log(findLastIndex)
}

metodoFindLastIndex()

//CONCAT ()

function metodoConcat(){
    const estudiantes = [{Nombre : "Juan", Nota : 3.5, Ciudad : "Cali"}, {Nombre : "Andrea", Nota : 2.0, Ciudad : "Cali"}, {Nombre : "Jhon", Nota : 2.7, Ciudad : "Cali"},{Nombre : "Natalia", Nota : 4.0, Ciudad : "Cali"}]
    const estudiantes2 = [{Nombre : "Linda", Nota : 3.8, Ciudad : "Cali"}, {Nombre : "Jose", Nota : 1.2, Ciudad : "Cali"}, {Nombre : "Nicolas", Nota : 2.5, Ciudad : "Cali"},{Nombre : "Laura", Nota : 4.4, Ciudad : "Cali"}]

    const clase = estudiantes.concat(estudiantes2)

    console.log("La informacion de los etudiantes de la carrera de informatica es la siguiente: ", clase)

}

metodoConcat()

//INDEXOF

function metodoIndexOf(){
    const indexOf = nombres.indexOf("Juan")

    console.log(indexOf)
}

metodoIndexOf()

//LASTINDEXOF

function metodoLastIndexOf(){
    const nombres2 = ["Juan", "Andrea", "Juan", "Natalia"]

    const lastIndexOf = nombres2.lastIndexOf("Juan")

    console.log(lastIndexOf)
}

metodoLastIndexOf()

//FLAT ()

function metodoFlat(){
    const array2 = [1,2,3,[4,[5]],[6],7,8,[[9,[10]]]]

    const flat = array2.flat(3)

    console.log(flat)
}

metodoFlat()

//FLATMAP ()

function metodoFlatMap(){
    const estudiantes = [{Nombre : ["Juan"], Nota : 3.5, Ciudad : "Cali"}, {Nombre : ["Andrea"], Nota : 2.0, Ciudad : "Cali"}, {Nombre : ["Jhon"], Nota : 2.7, Ciudad : "Cali"},{Nombre : ["Natalia"], Nota : 4.0, Ciudad : "Cali"}]

    const flatMap = estudiantes.flatMap(x => x.Nombre)

    console.log(flatMap)
}

metodoFlatMap()

//JOIN ()

function metodoJoin(){
    
    const join = nombres.join("\n")

    console.log(join)
}

metodoJoin()

//REVERSE ()

function meotodoReverse(){
    const numeros = [1,2,3,0,12,24]
    const reverse = numeros.reverse()

    console.log(reverse)

}

meotodoReverse()

//FILL ()

function metodoFill(){
    const array4 = [1,2,3,4,5,6,7,8,9,10]
    
    array4.fill(0,2,8)
    console.log(array4)
}

metodoFill()

//COPYWITHIN ()

function metodoWithin(){
    const array4 = [1,2,3,4,5,6,7,8,9,10]


    array4.copyWithin(0,4,8)
    console.log(array4)
}

metodoWithin()

//ENTRIES ()

function metodoEntries(){

    const entries = nombres.entries()

    for (const [index,x] of nombres.entries()){
        console.log(index,x)
    }
}
metodoEntries()

//KEYS ()

function metodoKeys(){
    for(const index of nombres.keys()){
        console.log(index)
    }

}

 metodoKeys()

//VALUES ()

function metodoValues(){
    for(const index of nombres.values()){
        console.log(index)
    }
}

metodoValues()

//TOSORTED

function metodoToSorted(){
    const toSorted = array.toSorted((a,b)=> {return b-a})

    console.log(toSorted)
}
metodoToSorted()

//TOREVERSED 

function metodoToReversed(){
    const toReversed = nombres.toReversed()

    console.log(toReversed)
}

metodoToReversed()

//TOSPLICED

function metodoToSpliced(){
    const toSpliced = array.toSpliced(0,5).toSpliced(5,0,11)

    console.log(toSpliced)

}


metodoToSpliced()

//AT ()

function metodoAt(){
    const at = nombres.at(-3)

    console.log(at)
}

metodoAt()  