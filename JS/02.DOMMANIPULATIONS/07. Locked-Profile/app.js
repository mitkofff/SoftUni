function lockedProfile() {
    const divContainer = document.getElementById('container');

    divContainer.addEventListener('click', function (e){
        if(e.target.tagName === 'BUTTON'){
            let parrent = e.target.parentElement;
            let lockBtn = parrent.firstElementChild.nextElementSibling.nextElementSibling;
            let userName = lockBtn.getAttribute('name').slice(0, -6);

            if(!lockBtn.checked){
                let moreInfoDiv = document.getElementById(userName + 'HiddenFields');
                if(e.target.textContent === "Show more"){
                    e.target.textContent = 'Hide it';
                    moreInfoDiv.style.display = 'block';
                }
                else{
                    e.target.textContent = 'Show more';
                    moreInfoDiv.style.display = 'none';
                }
            }
        }
    })
}
