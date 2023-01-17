function switchCheck(a) {
    switch (a) {
        case 1:
            console.log('alpha');
            break;
        case 2:
            console.log('beta');
            break;
        case 3:
            console.log('gamma');
            break;

        default:
            console.log('ooops');
    }
}
switchCheck(3);
console.log('\n\n');

function switchCheckChar(a) {
    switch (a) {
        case 'Vishwas':
            console.log('alpha');
            break;
        case 'Vikas':
            console.log('beta');
            break;
        case 2*2-4:
            console.log('gamma called');
            break;
        default:
            console.log('ooops');
    }
}
switchCheckChar(0);
