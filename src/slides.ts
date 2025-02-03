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

  // remove animation from the style for every image
  images.forEach((image) => {
    image.style.animation = '';
  });

  //pick the right image
  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = 'fade 0.5s';
});

// when i put my mouse over slide area, put all of the images in a radom place

slideArea?.addEventListener('mouseover', function () {
  images?.forEach((image) => {
    const x = 25 * Math.floor(Math.random() * 5) - 50; //snapping to grid
    const y = 25 * Math.floor(Math.random() * 5) - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

//when i move my mouse away, put the images back.
slideArea?.addEventListener('mouseout', function () {
  images?.forEach((image) => {
    image.style.transform = '';
  });
});
