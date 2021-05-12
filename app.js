console.log('app is running!')

const screen = document.getElementById('screen');

function display(val){
    screen.value += val
}

function solve() {

    let regex = /^([-+/*]\d+(\.\d+)?)*/
    let str = screen.value

    
    try {
        if (regex.test(str)) {
            screen.value = eval(screen.value);
        }
    } catch (e) {
        screen.value = 'Invalid Operation';
        screen.classList.add('is-invalid')
        console.log(e.message);
    }
}

document.getElementById('delete').addEventListener('click', () => {
    screen.classList.remove('is-invalid')
    screen.value = ''
})
