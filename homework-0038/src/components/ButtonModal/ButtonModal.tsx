import {FC} from "react";

const ButtonModal: FC = ({ openModal }) => {
	// console.log(openModal);
	
  return (
    <>
      <button type='button' onClick={openModal}>
        <span>Add Character</span>
      </button>
    </>
  );
};
export default ButtonModal;
