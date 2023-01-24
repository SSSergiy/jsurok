import Todo from './components/Todo';
import { addTodo, selectTodos } from './rdx/reducer.js';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
interface StateTodo {
   quest: string;
   id: number;
}
type  StateTodos = StateTodo[]

const App: React.FC = () => {
   const [name, setName] = React.useState('');
   const dispatch = useDispatch();
   const todoQuestt: StateTodos = useSelector(selectTodos);
   const handleAddTodo = React.useCallback(() => {
      dispatch(
         addTodo({
            quest: name,
            id: Math.floor(Math.random() * 15),
         })
      );
   }, [dispatch, name]);
   const handleChangeValue = (event) => {
      event.preventDefault();
		 setName(event.target.value);
		 
   };
   const handleClear = () => {
      setName('');
   };

   return (
      <>
         <ul className="list-group">
            {todoQuestt.map((item: StateTodo, index: number) => (
               <Todo items={item.quest} key={index + 1} />
            ))}
         </ul>
         <input value={name} type="text" className="form-control" placeholder="add quest" onChange={handleChangeValue} />
         <button
            className="btn btn-outline-secondary bg-indigo-100 "
            type="button"
            onClick={() => {
               handleAddTodo();
               handleClear();
            }}
         >
            Criete to-do
         </button>
      </>
   );
};
export default App;
