import React , {useState} from 'react';
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';

function App(){

  const [type , setType] = useState('password');
  const [icon , setIcon] = useState(eyeOff);

  const handleClick = () => {
    if(type === 'password'){
      setType('text');
      setIcon(eyeOff)
    }else{
      setType('password');
      setIcon(eye)
    }
  }
  
  return (
      <div className = "wrapper">
        <div className='input-fields'>
            <span onClick = {handleClick} ><Icon icon={icon} size={25} /></span>
            <input type={type} placeholder = 'Password' />
        </div>
      </div>
  );
}

export default App;
