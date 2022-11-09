//Вивести на сторінку таблицю 10 × 10,
//заповнену числами від 1 до 100
//(таблиця створюється за допомогою JavaScript).
//У HTML файлі для тих, хто забув,
//наведено приклад, як виглядає структура таблиці
//{/* <body>
//	<div class="wrapper">
//		<div class="container">
//			<!-- <table>
//                <tr>
//                    <td>1</td>
//                </tr>
//            </table> -->
//		</div>
//	</div> */}
const tableElement = document.querySelector(".container")
const addTable = document.createElement("table");
tableElement.append(addTable)
let accum = 1;
for (let index = 0; index < 10; index++) {
	const rowTable = addTable.insertRow()
	for (let j = 0; j < 10; j++) {
		const tableCell = rowTable.insertCell()
		tableCell.innerText = `${accum++}`
	}
}
console.log(tableElement);
