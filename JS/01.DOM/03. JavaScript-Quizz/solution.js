function solve() {
  let quizzie = document.querySelector('#quizzie');
  let sections = document.querySelectorAll('#quizzie section');
  let resultMessage = document.querySelector('#results h1')
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let sectionCounter = 0;
  let correctAnswersCount = 0;

  quizzie.addEventListener('click', (e) => {
    if(e.target.className === 'answer-text')
    {
      sections[sectionCounter].style.display = 'none';
      if(correctAnswers.includes(e.target.innerHTML)){
        correctAnswersCount++;
      }
      sectionCounter++;
      if(sectionCounter<correctAnswers.length)
      {
        sections[sectionCounter].style.display = 'block';
      }
      else{
        document.querySelector('#results').style.display = 'block';
        resultMessage.innerHTML = correctAnswersCount === correctAnswers.length?
        'You are recognized as top JavaScript fan!':
        `You have ${correctAnswersCount} right answers`
      }
    }
  })


}
