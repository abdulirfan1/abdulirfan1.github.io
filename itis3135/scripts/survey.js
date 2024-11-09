document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const courseContainer = document.getElementById('course-container');
    const addCourseButton = document.getElementById('add-course');
    const introMessage = document.getElementById('intro-message'); 

    function addCourse() {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course-entry');

        courseDiv.innerHTML = `
            <input type="text" name="courses[]" placeholder="Enter a course" required>
            <button type="button" class="delete-course">Delete</button>
        `;

        courseContainer.appendChild(courseDiv);

        courseDiv.querySelector('.delete-course').addEventListener('click', () => {
            courseDiv.remove();
        });
    }

    addCourseButton.addEventListener('click', addCourse);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        introMessage.style.display = 'none';

        const formData = new FormData(form);
        const userName = formData.get('name');
        const content = document.createElement('div');
        content.innerHTML = `<h2>${userName}'s Introduction Page:</h2>`;

        const imageFile = formData.get('image');
        if (imageFile) {
            const imageURL = URL.createObjectURL(imageFile);
            const imageCaption = formData.get('image-caption') || '';
            content.innerHTML += `
                <figure style="text-align: center;">
                    <img src="${imageURL}" alt="Uploaded Image" width="200">
                    <figcaption>${imageCaption}</figcaption>
                </figure>
            `;
        }

        formData.forEach((value, key) => {
            if (key === 'courses[]') {
                const courseValues = formData.getAll('courses[]');
                content.innerHTML += `<p><strong>Courses:</strong> ${courseValues.join(', ')}</p>`;
            } else if (key !== 'agree' && key !== 'image' && key !== 'image-caption') {
                const formattedKey = key.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
                content.innerHTML += `<p><strong>${formattedKey}:</strong> ${value}</p>`;
            }
        });

        const newFormButton = document.createElement('button');
        newFormButton.textContent = "Start New Form";
        newFormButton.type = "button";
        newFormButton.addEventListener('click', () => {
            location.reload();
        });

        content.appendChild(newFormButton);

        form.replaceWith(content);
    });

    form.addEventListener('reset', () => {
        form.reset();
    });
});
