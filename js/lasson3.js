let actionUsers = prompt(
  'Выбирите одну операцыю, и введите ее в поле для ввода(в круглых скобках, привиден пример операции): oперацыя умножения - (*), oперацыя диления - (/), oперацыя минус - (-), oперацыя плюс - (+),'
);
let oneNumber = prompt(
  'Выбирите первое число для операции(ето число будет находится справа от знака операции): пример --- (первое число) * (второе число) = (результат), '
);
oneNumber = Number(oneNumber);
let twoNumber = prompt(
  'Выбирите второе число для операции(ето число будет находится справа от знака операции): пример --- (первое число) * (второе число) = (результат), '
);
twoNumber = Number(twoNumber);
let expressionResult;
let resultAlert;
if (actionUsers === '*') {
  expressionResult = oneNumber * twoNumber;
  alert(`${oneNumber} * ${twoNumber} = ${expressionResult}`);
} else if (actionUsers === '-') {
  expressionResult = oneNumber - twoNumber;
  alert(`${oneNumber} - ${twoNumber} = ${expressionResult}`);
} else if (actionUsers === '+') {
  expressionResult = oneNumber + twoNumber;
  alert(`${oneNumber} + ${twoNumber} = ${expressionResult}`);
} else if (actionUsers === '/') {
  expressionResult = oneNumber / twoNumber;
  alert(`${oneNumber} / ${twoNumber} = ${expressionResult}`);
}
