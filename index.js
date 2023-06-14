const thankYouMessages = [];

function writeCards(names,event) {
    for(let i = 0; i < names.length; i++){
       const messages = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
       thankYouMessages.push(messages);
    }
    return thankYouMessages;
}
function countDown(number) {
    let countDown = 10
    while(countDown>=0) {
        console.log(countDown--);
    }
}
