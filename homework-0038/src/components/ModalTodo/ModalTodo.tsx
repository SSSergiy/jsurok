const ModalTodo = () => {
  return (
    <>
      <div id='popup' className='popup'>
        <div className='popup__body'>
          <div className='popup__content'>
            <a href='#header' className='popup__close close-popup'>
              X
            </a>
            <div className='popup__title'>ADD plis persone</div>
            <div className='popup__text'>
              <div>
                <form>
                  <div>
                    <div>
                      <div>
                        <label htmlFor='control-hooks_Name' title='Name'>
                          Name
                        </label>
                      </div>
                      <div>
                        <input
                          placeholder='Name'
                          id='control-hooks_Name'
                          type='text'
                          value=''
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor='control-hooks_FamilName' title='FamilName'>
                      FamilName
                    </label>
                    <div>
                      <input placeholder='FamilName' type='text' value='' />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='control-hooks_Phone' title='Phone'>
                      Phone
                    </label>
                    <div>
                      <input
                        role='spinbutton'
                        step='1'
                        placeholder='Phone'
                        id='control-hooks_Phone'
                        value=''
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
                      <button type='button'>
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
