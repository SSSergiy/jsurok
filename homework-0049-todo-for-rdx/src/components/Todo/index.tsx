import React from 'react';

function Todo({ item }) {
   const [isCheked, setIsCheked] = React.useState(true);
   const onClikChek = () => {
      setIsCheked(!isCheked);
   };

   return (
      <li className={isCheked ? 'list-group-item ' : 'bg-slate-400 list-group-item ml-96'} onClick={onClikChek}>
         <p className="list-group-item ">
            <label className="form-check-label">{item}</label>
         </p>
      </li>
   );
}

export default Todo;
