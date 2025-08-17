console.log("Script loaded");
// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll('.que');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('.icon');

      const isOpen = answer.style.display === 'block';

      // Close all answers first
      document.querySelectorAll('.ans').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.icon').forEach(i => i.src = 'assets/images/plus.svg');

      // If current one was closed, open it
      if (!isOpen) {
        answer.style.display = 'block';
        icon.src = 'assets/images/close.svg'; // change to your ✖️ icon path
      }
    });
  });
});
