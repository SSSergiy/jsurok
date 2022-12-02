
function retrieveFormValue(event) {
  event.preventDefault();
	const isCheckboxOrRadio = (type) => ['checkbox', 'radio'].includes(type);
	const { form } = document.forms;
	const values = {};
	
  for (let field of form) {
    const { name } = field;
    const { type, checked, value } = field;
    if (name) {
      if (isCheckboxOrRadio(type)) {
        values[value] = checked;
      } else {
        values[name] = value;
      }
    }
	}
	
  values.purchaseDate = new Date().toISOString().split('T')[0];
  
	if (Object.keys(values).length) {
		
		form.toggleAttribute("hidden")
		const tableElement = document.querySelector('.container');
		const addTable = document.createElement('table');
		tableElement.append(addTable);

		for (const key in values) {
			const rowTable = addTable.insertRow();
			rowTable.insertCell().innerText = key;
			if (!values[key]) {
				rowTable.insertCell().innerText = values[key];
			} if (values[key]) {
				rowTable.insertCell().innerText = values[key];
			}
		}
	}
}
form.addEventListener('submit', retrieveFormValue);

