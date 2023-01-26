import React from 'react';

const Todo: React.FC = ({ items }) => {
   const [isCheked, setIsCheked] = React.useState(true);
   const onClikChek = () => {
      setIsCheked(!isCheked);
   };

   return (
      <li className={isCheked ? 'list-group-item ' : 'bg-slate-400 list-group-item ml-96'} onClick={onClikChek}>
         <p className="list-group-item ">
            <label className="form-check-label">{items}</label>
         </p>
      </li>
   );
};

export default Todo;
