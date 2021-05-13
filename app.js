console.log('app is running!')

let screen = document.getElementById('screen')

function display(val){
    screen.value += val
    let regex = /^[\d\+\/\*\.\- \(\)]*$/
    let str = screen.value
    if (regex.test(str)) {
        screen.classList.remove('is-invalid')
    } else{
        screen.value = 'Invalid Operation';
        screen.classList.add('is-invalid')
    }
}

function solve() {
    try {
        screen.value = eval(screen.value)
    } catch (e) {
        screen.value = 'Invalid Operation'
        screen.classList.add('is-invalid')
        console.log(e.message);
    }
}

document.getElementById('delete').addEventListener('click', () => {
    screen.classList.remove('is-invalid')
    screen.value = ''
})
