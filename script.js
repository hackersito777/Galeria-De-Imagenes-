const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    resetActiveImages();
    container.querySelector('.gallery-image').classList.add('active');
  });

  container.addEventListener('mouseleave', () => {
    container.querySelector('.gallery-image').classList.remove('active');
  });
});

function resetActiveImages() {
  imageContainers.forEach(container => {
    container.querySelector('.gallery-image').classList.remove('active');
  });
}
