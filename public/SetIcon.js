document.addEventListener('DOMContentLoaded', function() {
  const link = document.createElement('link');
  link.rel = 'shortcut icon'; // or 'icon' for newer browsers
  link.href = '/ico.jpg'; // Replace with your desired icon path
  document.head.appendChild(link);

  // For older browsers that might not support 'shortcut icon'
  document.querySelector('head').innerHTML += '<link rel="icon" href="/ico.jpg">';
});