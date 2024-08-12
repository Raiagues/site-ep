document.querySelectorAll('.list-question').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetAnswer = document.getElementById(targetId);

    const isActive = targetAnswer.style.display === 'block';

    document.querySelectorAll('.list-answer').forEach(answer => {
      answer.style.display = 'none';
    });

    if (!isActive) {
      targetAnswer.style.display = 'block';
    }
  });
});