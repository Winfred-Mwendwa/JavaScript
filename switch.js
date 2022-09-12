// switch statement is used to test several conditions (cases)
function switchCase(num) {

    let answer='';
    switch (num) {
        case 1:
            answer='bob';
            break;
        case 2:
            answer='carol';
            break;
        case 3:
            answer='june';
            break;
        default:
            answer= 'person';
            break;
    }
    return answer;
}
console.log(switchCase(2));

// where multiple values give the same result
function switchInCase(num) {

    let answer='';
    switch (num) {
        case 1:
        case 2:
        case 3:
            answer='bob';
            break;
        case 4:
        case 5:
            answer='carol';
            break;
        case 6:
        case 7:
            answer='june';
            break;
        default:
            answer= 'person';
            break;
    }
    return answer;
}
console.log(switchInCase(2));
