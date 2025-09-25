document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
    const answer = item.querySelector('.faq-answer');
    answer.classList.toggle('show');
  });
});


function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.querySelectorAll('button').forEach(button => {
  if (button.textContent.includes('QUERO MEU GUIA AGORA')) {
    button.addEventListener('click', () => {
      scrollToSection('offer');
    });
  }
});
