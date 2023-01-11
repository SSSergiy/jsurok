import { useState } from 'react';
const ModalTodo = ({ closeModal, modalOpened, length,onChange}) => {
	
	
  const [obj, setObj] = useState([]);
	console.log(obj);
  const addUser = (e) => {
    e.preventDefault();
    setObj({
      name: e.target[0].value,
      username: e.target[1].value,
			phone: e.target[2].value,
			key: length + 1+ "",
			id: length + 1 + "",
		})
		onChange.push(obj)
		e.target[0].value=""
		 e.target[1].value=""
		e.target[2].value = ""
  };
 
  return (
    <>
      <div id='popup' className={`popup ${modalOpened ? 'popups' : null}`}>
        <div className='popup__body '>
          <div
            className={`popup__content ${
              modalOpened ? 'popup__contents' : null
            }`}
          >
            <a
              href='#header'
              className='popup__close close-popup'
              onClick={closeModal}
            >
              X
            </a>
            <div className='popup__title'>ADD please persone</div>
            <div className='popup__text'>
              <div>
                <form noValidate onSubmit={addUser}>
                  <div>
                    <div>
                      <div>
                        <label htmlFor='control-hooks_Name' title='name'>
                          name
                        </label>
                      </div>
                      <div>
                        <input
                          placeholder='Name'
                          id='control-hooks_Name'
                          type='text'
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor='control-hooks_FamilName' title='username'>
                      username
                    </label>
                    <div>
                      <input placeholder='username' type='text' />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='control-hooks_Phone' title='phone'>
                      phone
                    </label>
                    <div>
                      <input
                        role='spinbutton'
                        step='1'
                        placeholder='phone'
                        id='control-hooks_Phone'
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingTop: '30px'
                    }}
                  >
                    <div>
                      <button type='submit'>
                        <span>Save</span>
                      </button>
                    </div>
                    <div>
                      <button onClick={closeModal} type='button'>
                        <span>Exit</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTodo;
