const books = [
    {
        name: 'After',
        year: '2018',
        id: 1
    },
    {
        name: 'Purble Hibiscus',
        year: '2005',
        id: 2
    },
    {
        name: 'Before',
        year: '2018',
        id: 3
    },
    {
        name: 'Arrow of God',
        year: '1990',
        id: 4
    },
    {
        name: 'It ends with us',
        year: '2020',
        id: 5
    },
    {
        name: 'Chasing Red',
        year: '2018',
        id: 6
    },
] 


function getBookByIndex(books, index) {
    
    if (index >= 0 && index < books.length) {
        const book = books[index];
        return { name: book.name, year: book.year };
    } else {
       return null;
    }
}

while  (true) {
    let inputIndex = parseInt(prompt('Enter the index of the book'))

    if (!isNaN(inputIndex)){
        console.log(getBookByIndex(inputIndex))
        break
    } else {
        console.log('Invalid input. Please enter a number.')
    }
}


//const result = getBookByIndex(books, 2);
//console.log(result); //name : Before, year : 2018