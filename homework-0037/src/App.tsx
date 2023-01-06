import ButtonComponent from './components/ButtonComponent';
import Input from './components/Input';
import Todo from './components/Todo';
import React from 'react';
type todoQuestt = [{quest:string,id:number,key:number

}];


function App() {
  let todoQuestt = [
    { quest: 'Woshez', id: 0, key: 0 },
    { quest: 'swiming', id: 1, key: 1 },
    { quest: 'jumping', id: 2, key: 2 }
  ];

  const [todoQuest, setCount] = React.useState(todoQuestt);
  const [name, setName] = React.useState('');
  const hendlerOnChenge = (name: string) => {
    setName(name);
  };
  const addQuest = (e: string) => {
    setCount([
      ...todoQuest,
      { quest: e, id: todoQuest.length, key: todoQuest.length }
    ]);
  };
  return (
    <>
      <div className='list-group'>
        {todoQuest.map(({ quest, id }, index) => (
          <Todo key={index} quest={quest} id={id} />
        ))}
      </div>
      <form className='input-group mb-3'>
        <Input onChange={hendlerOnChenge} />
        <ButtonComponent addQuest={addQuest} name={name} />
      </form>
    </>
  );
}
export default App;
