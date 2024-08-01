// module.exports = function reverse (n) {
  
// }
function reverse(num) {
    // Преобразуем число в строку
    let numStr = num.toString();
    
    // Разбиваем строку на массив символов, переворачиваем его и объединяем обратно в строку
    let reversedStr = numStr.split('').reverse().join('');
    
    // Преобразуем перевернутую строку обратно в число и возвращаем
    return parseInt(reversedStr, 10);
  }
  
  module.exports = reverse;