const journeyForm = document.querySelector('#journey-form');

if (journeyForm) {
  const nameInput = document.querySelector('#journey-name');
  const errorMessage = document.querySelector('#name-error');

  journeyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();

    if (!name) {
      errorMessage.hidden = false;
      nameInput.setAttribute('aria-invalid', 'true');
      nameInput.focus();
      return;
    }

    errorMessage.hidden = true;
    nameInput.removeAttribute('aria-invalid');
    window.location.assign(`/frase?nome=${encodeURIComponent(name)}`);
  });

  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim()) {
      errorMessage.hidden = true;
      nameInput.removeAttribute('aria-invalid');
    }
  });
}

const visitorName = document.querySelector('#visitor-name');
if (visitorName) {
  const name = new URLSearchParams(window.location.search).get('nome')?.trim();
  visitorName.textContent = name || 'Você';
}
