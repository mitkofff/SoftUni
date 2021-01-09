function solve() {
   let sendBtn = document.querySelector('#send');
   let inputText = document.querySelector('#chat_input');

   let parent = document.querySelector('#chat_messages');
   let myProfile = document.querySelectorAll('.my-profile')[0];
   let myMessage = document.querySelectorAll('.my-message')[0];

   if(parent === null || myProfile === null || myMessage === null 
      || sendBtn === null || inputText === null)
      {
         throw new Error ("Invalid DOM");
      }
      
   sendBtn.addEventListener('click', (e) => {
      let messageText = inputText.value;
      let newMyProfile = myProfile.cloneNode(true);
      let newMyMessage = myMessage.cloneNode(true);
      newMyMessage.textContent = messageText;
      parent.appendChild(newMyProfile);
      parent.appendChild(newMyMessage);
      console.log(messageText);
   })



}


