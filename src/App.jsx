import './App.css'
import {useEffect, useState} from 'react'
import Header from './components/header'
import { Formulario } from './components/Formulario'
import { ListadoPaciente } from './components/ListadoPaciente'
//import {Paciente} from './components/Paciente'

function App() {
  const initalValue=[];
  const [pacientes,setPacientes]=useState(initalValue);
  const [paciente,setPaciente]=useState({});
  
  const eliminarPaciente=(id)=>{
    const aceptar=confirm('Estas de acuerdo?');
    if(aceptar){
      const filtroPacinte=pacientes.filter(item=>item.id!==id);
      setPacientes(filtroPacinte);
    }
  }

  useEffect(()=>{
    const loadingLocalStorage=()=>{
      setPacientes(JSON.parse(localStorage.getItem('pacientes')) ?? initalValue);
    }
    loadingLocalStorage();
  },[]);
  
  useEffect(()=>{
      if(initalValue!==pacientes){
        localStorage.setItem('pacientes',JSON.stringify(pacientes));
        
        }
      
  },[pacientes]);
  
  return (
      <div className="container mx-auto mt-20">
        <Header/>  
        <div className="mt-12 md:flex  ">
          <Formulario
            setPacientes={setPacientes}
            pacientes={pacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPaciente
            
            pacientes={pacientes}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
  )
}

export  { App }
