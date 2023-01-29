function first() {
    // Про 10+50 кнопка
    alert(`Будет ${2+2}`)
    }
    function second() {
    // prompt() - мы можем записать данные в переменную
    let name = prompt('как тебя зовут ')
    if (name) {
    alert('привет ' + name) 
    } else {
    alert('Вход разрешен!')
    }
    }
    function third() {
    // Вставить в элемент HTML с id 'zp' вставить тысячу
    document.getElementById('zp').innerHTML = '1000$';
    }
    