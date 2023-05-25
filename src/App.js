import { useState } from 'react';
import "./app.css";

export default function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    
    <div style={{backgroundColor:"lemonchiffon"}} className='main'>
      <label style={{color:"chocolate"}} >
      <div style={{backgroundColor:"ThreeDDarkShadow"}} className='main'>
      <input 
      type='datetime-local'
      />
      </div>
        <input 
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I liked this
      </label>
      <p style={{color:"chocolate", backgroundColor:"WindowFrame"}} className='main'>You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
  
  );
}
