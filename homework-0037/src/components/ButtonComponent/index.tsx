function ButtonComponent({ addQuest,name }: any) {
	return (
		<>
    <button
      className='btn btn-outline-secondary bg-indigo-100 '
      type='button'
				onClick={() => {addQuest(name)}}
    >
      Criete to-do
    </button>
		</>
	)
}

export default ButtonComponent;
