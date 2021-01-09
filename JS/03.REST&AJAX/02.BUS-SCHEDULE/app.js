function solve() {
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');
    const infoElement = document.querySelector('.info');

    let uri = currentUri('depot');
    let currentName;

    function depart() {
        fetch(uri)
            .then((response) => response.json())
            .then((data) => {
                const {name, next} = data;
                infoElement.textContent = `Next stop ${name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
                currentName = name;

                uri = currentUri(next)
            })
            .catch(err => {
                infoElement.textContent = 'Invalid busstop ID'
            });
    }

    function arrive() {
            infoElement.textContent = `Arriving at ${currentName}`;
            departBtn.disabled = false;
            arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}
function currentUri(currentId){
    return `https://judgetests.firebaseio.com/schedule/${currentId}.json`;
}

let result = solve();
