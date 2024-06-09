document.addEventListener('DOMContentLoaded', function() {
    const exploreExercisesBtn = document.getElementById('explore-exercises-btn');
    const exercisesModal = document.getElementById('exercises-modal');
    const closeBtn = document.querySelector('.close-btn');
    const shopItems = document.querySelectorAll('.shop-item img');
    const imageModal = document.getElementById('image-modal');
    const enlargedImage = document.getElementById('enlarged-image');
    const closeImageModalBtn = document.querySelector('#image-modal .close-btn');

    // Display the exercises modal when "Explore Exercises" is clicked
    exploreExercisesBtn.addEventListener('click', function() {
        exercisesModal.classList.remove('hidden');
        exercisesModal.style.display = 'flex';
    });

    // Close the exercises modal when the close button is clicked
    closeBtn.addEventListener('click', function() {
        exercisesModal.classList.add('hidden');
        exercisesModal.style.display = 'none';
    });

    // Function to handle image click and open modal with enlarged image
    function handleImageClick(imgSrc) {
        enlargedImage.src = imgSrc;
        imageModal.classList.remove('hidden');
        imageModal.style.display = 'flex';
    }

    // Add event listeners to shop item images
    shopItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Image clicked:', this.src);
        });
    });

    // Close the image modal when the close button is clicked
    closeImageModalBtn.addEventListener('click', function() {
        imageModal.classList.add('hidden');
        imageModal.style.display = 'none';
    });
});





