import TheaderHtml from './components/TheaderHtml/TheaderHtml';
import TbodyHtml from './components/TbodyHtml/TbodyHtml';
import ButtonModal from './components/ButtonModal/ButtonModal';
import ModalTodo from './components/ModalTodo/ModalTodo';
import { useState } from 'react';

function App() {
  const [modalOpened, setModalOpened] = useState(false);
  const [name, setName] = useState([]);
  const handleNameChange = (name: any) => {
    setName(name);
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
