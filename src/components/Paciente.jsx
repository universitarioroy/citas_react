import { useEffect } from "react";



function Paciente({paciente,setPaciente,eliminarPaciente}){
    
    const {nombre,propietario,email,fecha,sintomas,id}=paciente

    const importarPaciente=(key)=>{
        setPaciente(key);
    }

    // useEffect(()=>{
    //     console.log('El componente esta listo...');
    // },[]);
    return(
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email {''}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas {''}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-around">
            <button
                type="button"
                className="btn bg-green-500 rounded px-5 py-2 hover:bg-green-700 font-bold"
                onClick={()=>{

                    importarPaciente(paciente)
                }
                }
            >Editar</button>
            <button
                type="button"
                className="btn bg-red-600 rounded px-5 py-2 ml-2 hover:bg-red-700 font-bold"
                onClick={()=>{eliminarPaciente(id)}}
            >Eliminar</button>
        </div>

    </div>

    );
}

export {Paciente}