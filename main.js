

let num = prompt('Введите число');

function func1() {
    if (num == '') {
        alert('Вы ничего не ввели')
    } else if (num == 0) {
        alert('0')
    } else if (num === null) {
        alert('Вы нажали на отмену')
    } else if (num > 0) {
        alert('Число положительное ')
    } else if (num < 0) {
        alert('Число отрицательное')
    } else {
        alert('Введите только числа')
    }

}
func1()