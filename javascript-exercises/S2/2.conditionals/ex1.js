const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
let Aprovados = [];
for(let i = 0; i < alumns.length; i++){
    let buenosAlumnos = alumns[i];
    if(buenosAlumnos.T1 && buenosAlumnos.T2 == true || buenosAlumnos.T3 && buenosAlumnos.T2 == true || buenosAlumnos.T1 && buenosAlumnos.T3 == true){
        buenosAlumnos.isApproved = "isApproved";
        console.log(buenosAlumnos);
    }else{
        buenosAlumnos.isNotApproved = "isNotApproved";
        console.log(buenosAlumnos);
    }
}