document.addEventListener('DOMContentLoaded', function () {
    const ikonMediaSosial = document.querySelectorAll('.icons');
  
    ikonMediaSosial.forEach(function (ikon) {
      ikon.addEventListener('click', function () {
        const url = ikon.parentElement.href;
        alert('Anda mengklik ikon dengan URL: ' + url);
      });
    });
  });