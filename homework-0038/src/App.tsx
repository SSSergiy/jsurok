import TheaderHtml from './components/TheaderHtml/TheaderHtml';
import TbodyHtml from './components/TbodyHtml/TbodyHtml';
import ButtonModal from './components/ButtonModal/ButtonModal';
import ModalTodo from './components/ModalTodo/ModalTodo';

function App() {
  return (
    <>
      <center >
        <table style={{border:"1px solid "}}>
          <TheaderHtml />
          <TbodyHtml />
        </table>
      </center>
      <center>
        <ButtonModal />
      </center>
      <ModalTodo />
    </>
  );
}
export default App;
