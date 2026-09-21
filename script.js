document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     Random sparkles (shared by both scenes; color is handled
     purely in CSS via the --sparkle-color variable, so we
     never need to regenerate them when the scene changes).
     --------------------------------------------------------- */
  const SPARKLE_COUNT = 60;
  const sparkleContainer = document.getElementById('sparkles');

  for (let i = 0; i < SPARKLE_COUNT; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';

    const size = (Math.random() * 2.6 + 1.4).toFixed(1);
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${(Math.random() * 3 + 2.2).toFixed(2)}s`;
    sparkle.style.animationDelay = `${(Math.random() * 6).toFixed(2)}s`;

    sparkleContainer.appendChild(sparkle);
  }

  /* ---------------------------------------------------------
     Scene 1 -> Scene 2 transition
     --------------------------------------------------------- */
  const body = document.body;
  const introScene = document.getElementById('scene-intro');
  const bouquetScene = document.getElementById('scene-bouquet');
  const continueBtn = document.getElementById('continue-btn');

  continueBtn.addEventListener('click', () => {
    body.setAttribute('data-scene', 'bouquet');
    introScene.classList.remove('active');
    bouquetScene.classList.add('active');
  });

  /* ---------------------------------------------------------
     Envelope / letter interaction
     --------------------------------------------------------- */
  const stage = document.getElementById('bouquet-stage');
  const envelopeBtn = document.getElementById('envelope-btn');
  const letter = document.getElementById('letter');

  envelopeBtn.addEventListener('click', () => {
    const isOpen = stage.classList.toggle('letter-open');
    letter.setAttribute('aria-hidden', String(!isOpen));
  });

  // Also allow clicking the open letter (or pressing Escape) to close it again.
  letter.addEventListener('click', () => {
    stage.classList.remove('letter-open');
    letter.setAttribute('aria-hidden', 'true');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && stage.classList.contains('letter-open')) {
      stage.classList.remove('letter-open');
      letter.setAttribute('aria-hidden', 'true');
    }
  });

});
