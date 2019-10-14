import React, {useState} from 'react';

const ButtonComponent = (props) => {
  const { onClick, children } = props;

//   const [state, setState] = useState(false)
//     const getAll = () => {
//         setState(!state) 
//       }
  return (
    //{state && 
        <button
      onClick={(e) => onClick(e)} //onClick={() => getAll()}
    >
      {children}
    </button>
    //}
  )
}

export default ButtonComponent;