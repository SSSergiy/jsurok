import Todo from './components/Todo';
import { addTodo, selectCount } from './rdx/reducer.js';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
interface StateTodos{
	quest: string
	id: number
	key: number
}[]
interface StateTodo{
	quest: string
	id: number
	key: number
}



function App() {
   const [namer, setName] = React.useState('');
   const dispatch = useDispatch();
	const todoQuestt:StateTodos = useSelector(selectCount);
   const handleIncrement = React.useCallback(() => {
      dispatch(
         addTodo({
            quest: namer,
            id: 1,
            key: 2,
         })
      );
   }, [dispatch, namer]);
   const onChangeValue = (event: any) => {
      event.preventDefault();
      setName(event.target.value);
   };
   const handleClear = () => {
      setName('');
   };

   return (
      <>
         <ul className="list-group">
            {todoQuestt.map((item:StateTodo, index:number) => (
               <Todo item={item.quest} list={index} />
            ))}
         </ul>
            <input
               value={namer}
               type="text"
               className="form-control"
               placeholder="add quest"
               onChange={onChangeValue}
            />
         <button
            className="btn btn-outline-secondary bg-indigo-100 "
            type="button"
            onClick={() => {
               handleIncrement();
               handleClear();
            }}
         >
            Criete to-do
         </button>
      </>
   );
}
export default App;
