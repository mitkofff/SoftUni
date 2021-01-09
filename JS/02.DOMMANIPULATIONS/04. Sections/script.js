function create(words) {
   const mainDiv = document.getElementById('content');
   if(mainDiv === null){
      throw new Error('Missing DOM element!');
   }
   
   for( i=0; i<words.length; i++){
      let div = createDomElement('div');
      let p1 = createDomElement('p', words[i]);
      div.appendChild(p1);
      mainDiv.appendChild(div);
   }
}

function createDomElement(elementType, content){
   let element = document.createElement(elementType);
   element.textContent = content;
   return element;
}