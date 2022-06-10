function toggleText() {
  const button = document.getElementsByClassName('toggle-text-button')[0];
  const text = document.getElementById('text');

  button.addEventListener('click', () => {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', 'hidden');
    }
  });
}
