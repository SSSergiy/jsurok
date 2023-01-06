

function Input({ onChange }:any) {
	const onChangeValue = (event: any) => {
	onChange(event.target.value)
	}
	return (<>
	<input type='text' className='form-control' placeholder='add quest'
				onChange={onChangeValue}
				/>
	</>)
}

export default Input