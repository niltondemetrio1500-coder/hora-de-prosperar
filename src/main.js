import {
  OFFERS,
  PORTALS,
  PREPARATION_DELAY_MS,
  PREPARATION_MESSAGES,
  PREPARATION_REDIRECT_DELAY_MS,
  QUESTIONS,
  OFFER_RESERVATION_SECONDS,
  OFFER_REVEAL_SECONDS,
} from './funnel-data.js';

const $ = (selector, root = document) => root.querySelector(selector);
const make = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};
const readVisitorName = () => new URLSearchParams(window.location.search).get('nome')?.trim() || 'Você';
const pageWithName = (path, name) => `${path}?nome=${encodeURIComponent(name)}`;

const journeyForm = $('#journey-form');
if (journeyForm) {
  const nameInput = $('#journey-name');
  const errorMessage = $('#name-error');

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
    window.location.assign(pageWithName('/frase', name));
  });

  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim()) {
      errorMessage.hidden = true;
      nameInput.removeAttribute('aria-invalid');
    }
  });
}

const visitorName = $('#visitor-name');
if (visitorName) visitorName.textContent = readVisitorName();

const phraseContinue = $('#phrase-continue');
if (phraseContinue) {
  phraseContinue.addEventListener('click', () => {
    window.location.assign(pageWithName('/jornada', readVisitorName()));
  });
}

function initJourney() {
  const name = readVisitorName();
  document.querySelectorAll('[data-visitor-name]').forEach((slot) => { slot.textContent = name; });

  const state = { index: 0, balance: 0, unlocked: new Set() };
  const portalsContainer = $('#funnel-portals');
  const progressPercent = $('#funnel-progress-pct');
  const progressFill = $('#funnel-progress-fill');
  const progressBar = $('.funnel-progress[role="progressbar"]');
  const questionCard = $('#funnel-question-card');
  const overlay = $('#funnel-overlay');
  const modal = $('#funnel-modal');
  const moneyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL', minimumFractionDigits: 2,
  });

  function renderPortals() {
    portalsContainer.replaceChildren();
    PORTALS.forEach((portal) => {
      const unlocked = state.unlocked.has(portal.id);
      const tile = make('div', `funnel-portal${unlocked ? ' is-open' : ''}`);
      tile.setAttribute('aria-label', unlocked ? portal.name : 'Bloqueado');
      if (unlocked) {
        const image = make('img');
        image.src = portal.image;
        image.alt = '';
        tile.append(image, make('span', 'funnel-portal__name', portal.name));
      } else {
        tile.append(
          make('span', 'funnel-portal__lock', '🔒'),
          make('span', 'funnel-portal__name', 'Bloqueado'),
        );
      }
      portalsContainer.append(tile);
    });
  }

  function setBalance() {
    $('#funnel-hud-balance').textContent = moneyFormat.format(state.balance);
  }

  function advance() {
    state.index += 1;
    if (state.index >= QUESTIONS.length) {
      window.location.assign(pageWithName('/preparando', name));
      return;
    }
    renderQuestion();
  }

  function openInterstitial(interstitial) {
    modal.replaceChildren();
    const content = make('div', 'funnel-modal__content');
    content.append(
      make('p', 'funnel-name funnel-modal__name', name),
      make('p', 'funnel-modal__desc', interstitial.text),
    );
    const button = make('button', 'funnel-btn', interstitial.cta);
    button.type = 'button';
    button.addEventListener('click', () => {
      overlay.hidden = true;
      advance();
    });
    content.append(button);
    modal.append(content);
    overlay.hidden = false;
    button.focus();
  }

  function openUnlock(portalId, question) {
    const portal = PORTALS.find((item) => item.id === portalId);
    if (!portal) {
      advance();
      return;
    }

    state.unlocked.add(portal.id);
    renderPortals();
    modal.replaceChildren();
    const content = make('div', 'funnel-modal__content funnel-modal__content--unlocked');
    content.append(make('p', 'funnel-modal__kicker', 'DESBLOQUEADO!'));
    const image = make('img', 'funnel-modal__img');
    image.src = portal.image;
    image.alt = portal.name;
    content.append(image, make('h3', 'funnel-modal__title', portal.name));

    const description = portal.id === 'mult100'
      ? `${name}, ${portal.description}`
      : portal.description;
    content.append(make('p', 'funnel-modal__desc', description));
    if (portal.id === 'mult100') {
      content.append(make('p', 'funnel-modal__balance', `Novo Saldo: ${moneyFormat.format(state.balance)}`));
    }

    const button = make('button', 'funnel-btn', portal.cta);
    button.type = 'button';
    button.addEventListener('click', () => {
      overlay.hidden = true;
      if (question.interstitial) openInterstitial(question.interstitial);
      else advance();
    });
    content.append(button);
    modal.append(content);
    overlay.hidden = false;
    button.focus();
  }

  function acceptAnswer(question, balanceChange = 0) {
    state.balance += balanceChange;
    setBalance();
    if (question.unlocks) openUnlock(question.unlocks, question);
    else advance();
  }

  function renderQuestion() {
    const question = QUESTIONS[state.index];
    const percent = Math.round(((state.index + 1) / QUESTIONS.length) * 100);
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;
    progressBar.setAttribute('aria-valuenow', String(percent));
    questionCard.replaceChildren(
      make('span', 'funnel-chip', question.section),
      make('h2', 'funnel-question', question.question.replaceAll('{nome}', name)),
    );

    if (question.type === 'number') {
      const form = make('form', 'funnel-answer-form');
      const input = make('input', 'funnel-input');
      input.type = 'text';
      input.inputMode = 'numeric';
      input.autocomplete = 'off';
      input.maxLength = 12;
      input.placeholder = question.placeholder;
      input.setAttribute('aria-label', question.placeholder);

      const button = make('button', 'funnel-btn', 'Continuar');
      button.type = 'submit';
      button.disabled = true;
      input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '');
        button.disabled = !input.value;
      });
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const amount = Number(input.value);
        if (!input.value || !Number.isFinite(amount)) return;
        acceptAnswer(question, amount * 101);
      });
      form.append(input, button);
      questionCard.append(form);
      input.focus();
      return;
    }

    const options = make('div', 'funnel-options');
    question.options.forEach((label) => {
      const button = make('button', 'funnel-option', label);
      button.type = 'button';
      button.addEventListener('click', () => {
        const bonus = question.unlocks === 'abundance' ? 2_000_000 : 0;
        acceptAnswer(question, bonus);
      });
      options.append(button);
    });
    questionCard.append(options);
    $('.funnel-option', options)?.focus({ preventScroll: true });
  }

  renderPortals();
  setBalance();
  renderQuestion();
}

if ($('#funnel-quiz')) initJourney();

function initPreparation() {
  const name = readVisitorName();
  document.querySelectorAll('[data-visitor-name]').forEach((slot) => { slot.textContent = name; });
  const message = $('#preparation-message');
  const percentage = $('#preparation-percent');
  const fill = $('#preparation-fill');
  let progress = 0;

  const timer = window.setInterval(() => {
    progress = Math.min(progress + 1, 100);
    percentage.textContent = `${progress}%`;
    fill.style.width = `${progress}%`;
    const messageIndex = Math.min(
      PREPARATION_MESSAGES.length - 1,
      Math.floor((progress / 100) * PREPARATION_MESSAGES.length),
    );
    message.textContent = PREPARATION_MESSAGES[messageIndex];

    if (progress === 100) {
      window.clearInterval(timer);
      window.setTimeout(() => {
        window.location.assign(pageWithName('/ultima-etapa', name));
      }, PREPARATION_REDIRECT_DELAY_MS);
    }
  }, PREPARATION_DELAY_MS);
}

if ($('#preparation-progress')) initPreparation();

function initFinalOffer() {
  const name = readVisitorName();
  document.querySelectorAll('[data-visitor-name]').forEach((slot) => { slot.textContent = name; });

  const date = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date());
  const dateSlot = $('#today-date');
  if (dateSlot) dateSlot.textContent = date;

  const offers = $('#offer-section');
  const waiting = $('#offer-waiting');
  const countdown = $('#offer-countdown');
  let remaining = OFFER_RESERVATION_SECONDS;
  const params = new URLSearchParams(window.location.search);
  const unlockNow = params.get('liberar') === '1';

  const renderTimer = () => {
    const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
    const seconds = String(remaining % 60).padStart(2, '0');
    countdown.textContent = `${minutes}:${seconds}`;
  };

  function revealOffers() {
    waiting.hidden = true;
    offers.hidden = false;
    renderTimer();
    window.setInterval(() => {
      remaining = Math.max(0, remaining - 1);
      renderTimer();
    }, 1000);
  }

  if (unlockNow) revealOffers();
  else window.setTimeout(revealOffers, OFFER_REVEAL_SECONDS * 1000);

  const grid = $('#offer-grid');
  OFFERS.forEach((offer) => {
    const card = make('article', `vsl-card${offer.badge ? ' vsl-card--glow' : ''}`);
    if (offer.badge) card.append(make('span', 'vsl-badge', offer.badge));
    const image = make('img', 'vsl-seed-image');
    image.src = offer.image;
    image.alt = '';
    const link = make('a', 'vsl-seed-btn', offer.label);
    link.href = offer.href;
    link.rel = 'noopener noreferrer';
    card.append(image, link);
    grid.append(card);
  });
}

if ($('#offer-section')) initFinalOffer();
