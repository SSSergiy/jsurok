// import styles from "./Todo.module.scss"
// console.log(styles);

import React from 'react';

function Todo({ quest, id,index }: any) {
  const [isCheked, setIsCheked] = React.useState(true);
  const onClikChek = () => {
    setIsCheked(!isCheked);
  };
  return (
    <>
      <p key={index}
        className={
          isCheked ? 'list-group-item ' : 'bg-slate-400 list-group-item ml-96'
        }
        onClick={onClikChek}
      >
        <label className='form-check-label' htmlFor={id}>
          {quest}
        </label>
      </p>
    </>
  );
}

export default Todo;
