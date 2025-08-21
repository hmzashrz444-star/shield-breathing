// Tiny helper so this works out-of-the-box
// If the image can't be found, show a friendly hint.
document.addEventListener('DOMContentLoaded', function () {
  const img = document.querySelector('.shield img');
  const help = document.getElementById('help');

  function showHelp(){
    if(help) help.style.display = 'inline-block';
  }

  // If the image errors (missing, wrong filename, etc.), show helper UI.
  if (img) {
    img.addEventListener('error', showHelp, { once: true });

    // If the image is cached and fine, no need to show help.
    // If it hasn't loaded after a short delay, it might be 404 — nudge the user.
    setTimeout(() => {
      if (!img.complete || (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0)) {
        showHelp();
      }
    }, 800);
  }
});
