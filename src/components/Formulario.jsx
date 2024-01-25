import  {useState,useEffect} from 'react'
import {Error} from './Error'

const Formulario=({setPacientes,pacientes,paciente,setPaciente})=>{
     const [nombre, setNombre]= useState('');
     const [propietario, setPropietario]= useState('');
     const [email, setEmail]= useState('');
     const [fecha, setFecha]= useState('');
     const [sintomas, setSintomas]= useState('');
     const [error, setError]= useState(false);
     
    
    useEffect(()=>{
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
            // console.log(paciente);
        }
    },[paciente]);  


     const getID=()=>{
        return Date.now().toString(36);
     }

     const handleSubmit=(e)=>{
        e.preventDefault();
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            console.log('Algunos de los input tiene un valor vacio');
            setError(true);
        }else{
            setError(false);
            const objPacinetes={
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
                id:getID()
            };

            if(paciente.id){
                const arrayPacinete=pacientes.map(pacienteItem=>{
                    return pacienteItem.id===paciente.id?objPacinetes:pacienteItem
                });
                setPacientes([...arrayPacinete]);
                setPaciente({});

            }else{
                setPacientes([...pacientes,objPacinetes]);
            }

            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintomas('');
            setError('');

        }
        

     }

     
    return(
        
        <div className="md:w-1/2 lg:w-2/5 m-5">
            <h1 className="font-black text-3xl text-center">Seguimiengo Pacientes</h1>
            <p className="text-lg text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 fond-bold">Administralos</span>
            </p>
            <form action="" 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit}
                >
                {error && 
                // (<Error msj={"Todos los campos son obligatoriossss"}/>
                // )
                (
                    <Error>Todos los campos son obligatoriossss</Error>
                )
                }
                
                
                
                    
                            <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-600 uppercase font-bold">Nombre Mascota</label>
                    <input type="text" 
                            placeholder="Nombre de la mascota"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            id="mascota"
                            value={nombre}
                            onChange={(e)=>{(setNombre(e.target.value))}}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-600 uppercase font-bold">Nombre Propietario</label>
                    <input type="text" 
                            placeholder="Nombre propietario"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            id="propietario"
                            value={propietario}
                            onChange={(e)=>{(setPropietario(e.target.value))}}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-600 uppercase font-bold">Email</label>
                    <input type="email" 
                            placeholder="email"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            id="email"
                            value={email}
                            onChange={(e)=>{(setEmail(e.target.value))}}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-600 uppercase font-bold">Alta</label>
                    <input type="date" 
                            placeholder="fecha"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            id="alta"
                            value={fecha}
                            onChange={(e)=>{(setFecha(e.target.value))}}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-600 uppercase font-bold">Sintomas</label>
                    <textarea name="sintomas" id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none"
                        placeholder="Describe los sintomas"
                        onChange={(e)=>{(setSintomas(e.target.value))}}
                        value={sintomas}
                    ></textarea>
                </div>

                <button
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded hover:bg-indigo-700 hover:cursor-pointer transition-all"
                >{paciente.id ? 'Editar Paciente':'Agregar Paciente'}</button>
                   
                    
                

            

            </form>
        </div>
    )

}

export {Formulario}