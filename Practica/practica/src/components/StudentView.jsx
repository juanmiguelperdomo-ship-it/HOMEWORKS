function StudentView({ student }){
    if(!student){
        return <p>No hay estudiante</p>
    }

    return(
        <div>
            <h2>Estudiante actual</h2>
            <p>
                Nombre: {student.name} <br />
                Edad: {student.age} <br />
                Codigo: {student.code} 
            </p>
        </div>
    )
}

export default StudentView