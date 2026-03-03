function StudentView({ student }){
    if(!student){
        return <p>No hay estudiante</p>
    }

    return(
        <div>
            <p>
                <h3>Estudiante actual</h3>
                Nombre: {student.name} <br />
                Edad: {student.age} <br />
                Codigo: {student.code} 
            </p>
        </div>
    )
}

export default StudentView