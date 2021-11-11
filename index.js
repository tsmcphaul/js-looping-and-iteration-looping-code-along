// Code your solutions in this file

// let names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event) {
    for(let i=0; i < names.length; i++) {
        names[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return names;
}

function countDown(number){

    while (number > -1) {
        console.log(number);
        number--;
    }
}