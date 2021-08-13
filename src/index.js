module.exports = function toReadable(number) {
    const toNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const toNinety = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    const hundred = 'hundred';
    if (number === 0) return 'zero';
    if (number < 20) return toNineteen[number];
    if (number >= 20 && number < 100) {
        let decades = Math.floor(number / 10);
        let units = number % 10;
        return (`${toNinety[decades]}${toNineteen[units]}`).trim()
    }
    if (number >= 100 && number <= 999) {
        let hundreds = Math.floor(number / 100);
        let decades = Math.floor((number - hundreds * 100) / 10);
        let units = number % 10;
        if( number % 100 <= 19 ){
            units = number % 100
        }
        return (`${toNineteen[hundreds]} ${hundred} ${toNinety[decades]}${toNineteen[units]}`).trim()
    }
}
