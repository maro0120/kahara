(() => {
  const photo = document.querySelectorAll('.flex-product-photo');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('anime-under');
      } else {
        // entry.target.classList.remove('anime-under');
      }
    });
  });
  
  photo.forEach(img => {
    observer.observe(img);
  });
})();

(() => {
  const target = document.querySelectorAll('.right-text');
 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('anime-right');
      } else {
        // entry.target.classList.remove('anime-under');
      }
    });
  });
  target.forEach(p => {
    observer.observe(p);
  });
})();

(() => {
  const target = document.querySelectorAll('.left-text');
 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('anime-left');
      } else {
        // entry.target.classList.remove('anime-under');
      }
    });
  });
  target.forEach(p => {
    observer.observe(p);
  });
})();
