function solve() {

    const liElements = document.querySelectorAll('li');
    const input = document.querySelector('input');
    const addBtn = document.querySelector('button');
    const numbers = {
        'a':  1, 'b':  2, 'c':  3, 'd':  4, 'e':  5, 'f':  6, 'g':  7, 'h': 8,  'i':  9,
        'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18,
        's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
      };

    if(liElements === null || input === null || addBtn === null){
        throw new Error('Missing DOM Element!');
    }

    addBtn.addEventListener('click', (e) => {
        let name = input.value;
        let nameFirsLetter = name.substring(0, 1);
        let index = numbers[nameFirsLetter] - 1;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        liElements[index].textContent ===''? liElements[index].textContent = name : liElements[index].textContent += ', ' + name;
        liElements[index].textContent = liElements[index].textContent.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
        input.value = '';

    })
}