// pick all of the images and layer them based on the z-index
const slideArea = document.querySelector<HTMLDivElement>('.slides');
const images = slideArea?.querySelectorAll<HTMLImageElement>('img');

// Ensure images is defined and has elements before using
if (!images || images.length === 0) {
  console.error('No images found in .slides');
}

// we want to keep track of two things
let currentSlide: number = 0;
let z: string = '1';

// when i click slide area, change the slide based on z index
slideArea?.addEventListener('click', function () {
  if (!images) return; // Prevents accessing undefined NodeList

  currentSlide = currentSlide + 1;

  if (currentSlide > images?.length - 1) {
    currentSlide = 0;
  }
  z = z + 1;

  //pick the right image
  images[currentSlide].style.zIndex = z;
});
