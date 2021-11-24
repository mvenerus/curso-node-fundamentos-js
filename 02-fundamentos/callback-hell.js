const empleados = [
    {
    id: 1,
    nombre: 'mariano'
    },
    {
        id: 2,
        nombre: 'denisse'
    },
    {
        id: 3,
        nombre: 'marta'
    }
];

const salarios = [
    {
    id: 1,
    salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find(e => e.id === id);

    if (empleado) {
        callback(null, empleado.nombre);
    } else {
        callback(`Empleado con ${ id } no existe`);
    }
}

const getSalario = ( id, callback ) => {
    const salario = salarios.find(e => e.id === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con ${ id } no existe`);
    }
}


const id = 3

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log ('ERROR!');
        return console.log (err);
    };

    getSalario(id, (err, salario) => {
        if (err) {
            console.log ('ERROR!');
            return console.log (err);
        };
    
        console.log('el empleado: ', empleado, ' tienen un salario de: ', salario);
    }
    )
}
)


