import TheaderHtml from './components/TheaderHtml/TheaderHtml';
import TbodyHtml from './components/TbodyHtml/TbodyHtml';
import ButtonModal from './components/ButtonModal/ButtonModal';
import ModalTodo from './components/ModalTodo/ModalTodo';
import { useState } from 'react';
import { Table } from 'antd';
// import type { ColumnsType } from 'antd/es/table';

function App() {
  const [modalOpened, setModalOpened] = useState(false);
  const [name, setName] = useState([]);
  const [getChangess, setChangess] = useState(name);
  getChangess.length ? name.push(getChangess) : undefined;
  const handleNameChange = (name: any) => {
    setName(name);
  };
  const getChanges = (names: any) => {
    setChangess(names);
  };
  return (
    <>
      <center>
        <table style={{ border: '10px solid' }}>
          <TheaderHtml />
          <TbodyHtml onChange={handleNameChange} />
        </table>
      </center>
      <center>
        <ButtonModal openModal={() => setModalOpened(true)} />
      </center>
      <ModalTodo
        closeModal={() => setModalOpened(false)}
        length={name.length}
        modalOpened={modalOpened}
        onChange={name}
      />
    </>
  );
}
export default App;
