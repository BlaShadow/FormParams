import React from 'react';
import './App.css';
import RecipeReviewCard from './NiceCard';
import NotFoundCard from './NotFound';


const parseParameters = () => {
  
  const rawItems = window.location.search.replace("?", "").split("&");

  const result = rawItems.map((item) => {
    const [key, value] = item.split("=")
      return {[key]: decodeURIComponent(value)}
    }).reduce((prev, item) => {
      return {
        ...prev,
        ...item,
      }
    }, {});

  return result;
}

const validarParametros = (values: {[id: string]: string}) => {
  const keys = Object.keys(values);
  const requiredKeys = ['nombre', 'fecha', 'hora', 'detalles', 'consulta'];

  let remain = requiredKeys.filter((key) => keys.indexOf(key) === -1);

  return remain;
}

interface RequestBody {
  nombre: string;
  fecha: string;
  hora: string;
  detalles: string;
  consulta: string;
}


function App() {    
  const parameters = parseParameters();
  const remain = validarParametros(parameters);
  const isValid = remain.length === 0;
  console.log('Parameters', parameters, remain);

  const item = parameters as any as RequestBody;

  return (
    <div className="App"
      style={{
        backgroundColor: '#F0F0F0',
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      { isValid &&
        <RecipeReviewCard
          dateStr={item.fecha}
          name={item.nombre}
          details={item.detalles}
          categoria={item.consulta}
          hora={item.hora}
        />
      }

      { (isValid === false) &&
        <NotFoundCard
          name={'Peticion incompleta'}
          details={`Parametros faltantes`}
          items={remain}
        />
      }
    </div>
  );
}

export default App;
