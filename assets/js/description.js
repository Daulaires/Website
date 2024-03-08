document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to toggle project descriptions
    const projectContainers = document.querySelectorAll('.project-container');

    projectContainers.forEach(container => {
        const arrow = container.querySelector('.arrow'); // Assuming the arrow has a class 'arrow'
        const arrow2 = container.querySelector('.arrow-ptr2'); // Assuming the arrow has a class 'arrow'
        const arrow3 = container.querySelector('.arrow-ptr3'); // Assuming the arrow has a class 'arrow'
        const arrow4 = container.querySelector('.arrow-ptr4'); // Assuming the arrow has a class 'arrow'
        const arrow5 = container.querySelector('.arrow-ptr5'); // Assuming the arrow has a class 'arrow'
        const arrow6 = container.querySelector('.arrow-ptr6'); // Assuming the arrow has a class 'arrow'

        
        const description = container.querySelector('.project-description');
        const description2 = container.querySelector('.project-description2');
        const description3 = container.querySelector('.project-description3');
        const description4 = container.querySelector('.project-description4');
        const description5 = container.querySelector('.project-description5');
        const description6 = container.querySelector('.project-description6');

        
        arrow.addEventListener('click', function () {
            // Toggle the display of the description
            description.style.display = (description.style.display === 'block') ? 'none' : 'block';
            if (arrow.classList.contains('arrow-up')) {
                arrow.innerHTML = '&#9660;';
            } else {
                arrow.innerHTML = '&#9650;';
            }
            // Toggle the arrow icon based on the display state
            arrow.classList.toggle('arrow-up');
            arrow.classList.toggle('arrow-down');
        });

        arrow2.addEventListener('click', function () {
            // Toggle the display of the description
            description2.style.display = (description2.style.display === 'block') ? 'none' : 'block';
            if (arrow2.classList.contains('arrow-up')) {
                arrow2.innerHTML = '&#9660;';
            } else {
                arrow2.innerHTML = '&#9650;';
            }
            // Toggle the arrow icon based on the display state
            arrow2.classList.toggle('arrow-up');
            arrow2.classList.toggle('arrow-down');
        });

        arrow3.addEventListener('click', function () {
            // Toggle the display of the description
            description3.style.display = (description3.style.display === 'block') ? 'none' : 'block';
            if (arrow3.classList.contains('arrow-up')) {
                arrow3.innerHTML = '&#9660;';
            } else {
                arrow3.innerHTML = '&#9650;';
            }
            // Toggle the arrow icon based on the display state
            arrow3.classList.toggle('arrow-up');
            arrow3.classList.toggle('arrow-down');
        });

        arrow4.addEventListener('click', function () {
            // Toggle the display of the description
            description4.style.display = (description4.style.display === 'block') ? 'none' : 'block';
            // change the content of it to arrow up if arrow down and vice versa
            if (arrow4.classList.contains('arrow-up')) {
                arrow4.innerHTML = '&#9660;';
            } else {
                arrow4.innerHTML = '&#9650;';
            }
            // Toggle the arrow icon based on the display state
            arrow4.classList.toggle('arrow-up');
            arrow4.classList.toggle('arrow-down');
        });

        arrow5.addEventListener('click', function () {
            // Toggle the display of the description
            description5.style.display = (description5.style.display === 'block') ? 'none' : 'block';
            // change the content of it to arrow up if arrow down and vice versa
            if (arrow5.classList.contains('arrow-up')) {
                arrow5.innerHTML = '&#9660;';
            } else {
                arrow5.innerHTML = '&#9650;';
            }
            // Toggle the arrow icon based on the display state
            arrow5.classList.toggle('arrow-up');
            arrow5.classList.toggle('arrow-down');
        });

        arrow6.addEventListener('click', function () {
            // Toggle the display of the description
            description6.style.display = (description6.style.display === 'block') ? 'none' : 'block';
            // change the content of it to arrow up if arrow down and vice versa
            if (arrow6.classList.contains('arrow-up')) {
                arrow6.innerHTML = '&#9660;';
            } else {
                arrow6.innerHTML = '&#9650;';
            }
            // Toggle the arrow icon based on the display state
            arrow6.classList.toggle('arrow-up');
            arrow6.classList.toggle('arrow-down');
        });



    });
});
