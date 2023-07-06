// document.addEventListener('DOMContentLoaded', function() {
//     const carouselImages = document.querySelectorAll('.carousel-item');
//     const carouselIndicators = document.querySelectorAll('.carousel-indicators button');
//     let currentIndex = 0;
  
//     function showNextSlide() {
//       const previousIndex = currentIndex;
//       currentIndex = (currentIndex + 1) % carouselImages.length;
  
//       if (carouselImages[previousIndex]) {
//         carouselImages[previousIndex].classList.remove('active');
//         carouselIndicators[previousIndex].classList.remove('active');
//       }
//       carouselImages[currentIndex].classList.add('active');
//       carouselIndicators[currentIndex].classList.add('active');   
//     }
  
//     setInterval(showNextSlide, 3000);
//   });
  