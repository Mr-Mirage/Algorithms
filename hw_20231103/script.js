// Постройте частотный словарь букв русского (или английского) алфавита.

const letterFrequency = text =>{
    const letterSave = {}; // Пустой объект для хранения частоты каждой буквы
    const textClean = text.replace(/\s/g, ''); // новая строка без пробелов 
    
    for (const letter of textClean) {
        const letterLowerCase = letter.toLowerCase(); // переводим всё в нижний регистр
        
        if(letterSave[letterLowerCase]){ // проходим чиклоп по каждой букве
            letterSave[letterLowerCase]++; // порверка сузествует ли запись этой буквы, если да то увеличиваем её на 1
        }else{
            letterSave[letterLowerCase] = 1; // если нет то создаём новую запись 
        }
    }
    return letterSave; // возвращаем полученные даные
}

const checkText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
const result = letterFrequency(checkText);

console.log(result);
