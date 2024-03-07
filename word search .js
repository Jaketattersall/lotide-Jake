const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (let column = 0; column < letters[0].length; column++) {
        let columnWord = '';
        for (let row = 0; row < letters.length; row++) {

            columnWord += letters[row][column];
            console.log(columnWord);
        }
        if (columnWord.includes(word))
            return true;
    }
    return false;
}

module.exports = wordSearch