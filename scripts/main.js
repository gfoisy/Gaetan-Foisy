// Mobile navbar: the bars icon (#clicker) opens and closes the full-screen menu.
// Loaded with `defer` from _includes/head.html, so the page is parsed before this runs.

const clicker = document.getElementById('clicker');
const current = document.getElementById('current');
const compressed = document.getElementById('compressed');
const body = document.getElementById('body');
let menuOpen = false;

function openMenu() {
  compressed.style.display = 'flex';
  body.style.overflowY = 'hidden';   // stop the page scrolling behind the menu
  menuOpen = true;
}

function closeMenu() {
  compressed.style.display = '';
  current.style.cssText = '';
  body.style.overflowY = 'scroll';
  menuOpen = false;
}

clicker.addEventListener('click', function () {
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Resizing (e.g. rotating a phone) closes the menu so it can't get stuck open on desktop.
window.addEventListener('resize', function () {
  current.style.cssText = '';
  compressed.style.display = 'none';
  menuOpen = false;
});
