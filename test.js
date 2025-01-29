document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const cars = document.querySelectorAll('.car');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Function to show the current car
    function showCar(index) {
        cars.forEach((car, i) => {
            if (i === index) {
                car.style.display = 'block';
            } else {
                car.style.display = 'none';
            }
        });
    }

    // Display the first car on load
    showCar(currentIndex);

    // Previous button event listener
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? cars.length - 1 : currentIndex - 1;
        showCar(currentIndex);
    });

    // Next button event listener
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === cars.length - 1) ? 0 : currentIndex + 1;
        showCar(currentIndex);
    });
});
