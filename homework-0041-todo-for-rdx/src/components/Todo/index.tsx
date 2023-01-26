import React from 'react';

function Todo({ item, list }) {
   const random = list + Math.floor(Math.random() * 1000000000000);

   const [isCheked, setIsCheked] = React.useState(true);
   const onClikChek = () => {
      setIsCheked(!isCheked);
   };

   return (
      <li
         key={random + list}
         className={isCheked ? 'list-group-item ' : 'bg-slate-400 list-group-item ml-96'}
         onClick={onClikChek}
      >
         <p className="list-group-item ">
            <label className="form-check-label">{item}</label>
         </p>
      </li>
   );
}

export default Todo;
