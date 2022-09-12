//code implementation of card counting in blackjack
//the count is incremented for cards 2-6, remains unchanged for 7,8 and 9 and is decremented for 10 'J' 'Q' 'K' and 'A'
//the player then bets if count is positive and holds if count is zero or negative(all other cases)

let count = 0;

function cc(card) {
  
switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

//test cases

console.log(cc(2), cc(3),cc('J'));
