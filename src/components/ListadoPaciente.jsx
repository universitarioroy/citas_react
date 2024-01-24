import { useEffect } from "react"
import { Paciente } from "./Paciente"



const ListadoPaciente=(props)=>{
    useEffect(()=>{
        if(props.pacientes.length>0){
            console.log('Nuevo paciente')
        }
    },[props.pacientes]);
    
    return(
        <div className="md:w-1/2 md:h-screen overflow-y-scroll">
            {
                props.pacientes && props.pacientes.length ? (
                    <>
                    <h2 className="font-black text-3xl text-center">Listado de paciente</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {' '}
                        <span className="text-indigo-600 font-bold ">Pacientes  y citas</span>
                    </p>
                    
                    {props.pacientes.map((paciente)=>{
                        return <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={props.setPaciente}
                            eliminarPaciente={props.eliminarPaciente}
                        />
                    })}
                    </>
                
                ):(
                    <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {' '}
                    <span className="text-indigo-600 font-bold ">Pacientes  y citas</span>
                    </p>
                    </>
                )
            }
            

           
        </div>
        
    )
}

export {ListadoPaciente}