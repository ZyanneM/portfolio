const slideItems = document.querySelectorAll('.work-card');
const sliderDots = document.querySelectorAll('.slider-dots li');
const selectedItem = 0;

function handleClick(event) {
  console.log(event.target.index);
}

slideItems.forEach((slideItem, index) => {
  slideItem.index = index;
  slideItem.addEventListener('click', handleClick);
});

export { slideItems, sliderDots, selectedItem, handleClick };
