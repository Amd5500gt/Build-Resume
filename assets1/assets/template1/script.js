// script.js
document.addEventListener('DOMContentLoaded', function () {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        setTimeout(() => {
            group.classList.add('animate__animated', 'animate__fadeInUp');
        }, index * 200); // Staggered animation delay
    });
});

document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const fatherName = document.getElementById('fatherName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const educationDetails = document.getElementById('educationDetails').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value;
    const certifications = document.getElementById('certifications').value;
    const references = document.getElementById('references').value;
    const profileImage = document.getElementById('profileImage').files[0];

    // Validate form
    if (
        firstName && lastName && age && dob && fatherName && email && phone && address && city && state &&
        school && degree && educationDetails && experience && skills && projects && certifications && references
    ) {
        let imageUrl = '';
        if (profileImage) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imageUrl = e.target.result;
                generateResume(
                    firstName, lastName, age, dob, fatherName, email, phone, address, city, state,
                    school, degree, educationDetails, experience, skills, projects, certifications, references, imageUrl
                );
            };
            reader.readAsDataURL(profileImage);
        } else {
            generateResume(
                firstName, lastName, age, dob, fatherName, email, phone, address, city, state,
                school, degree, educationDetails, experience, skills, projects, certifications, references, imageUrl
            );
        }
    } else {
        // Display error message
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        document.getElementById('formMessage').style.color = 'red';
    }
});

function generateResume(
    firstName, lastName, age, dob, fatherName, email, phone, address, city, state,
    school, degree, educationDetails, experience, skills, projects, certifications, references, imageUrl
) {
    // Generate resume content
    const resumeContent = `
        <div class="resume-header">
            ${imageUrl ? `<img src="${imageUrl}" alt="Profile Image">` : ''}
            <h1>${firstName} ${lastName}</h1>
            <p>${email} | ${phone} | ${address}, ${city}, ${state}</p>
        </div>

        <div class="resume-left">
            <h2>Personal Details</h2>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Father's Name:</strong> ${fatherName}</p>

            <h2>Education</h2>
            <p><strong>School/University:</strong> ${school}</p>
            <p><strong>Degree:</strong> ${degree}</p>
            <p>${educationDetails.replace(/\n/g, '<br>')}</p>

            <h2>Skills</h2>
            <p>${skills.replace(/\n/g, '<br>')}</p>

           
        </div>

        <div class="resume-right">
            <h2>Employment History</h2>
            <p>${experience.replace(/\n/g, '<br>')}</p>

            <h2>Projects</h2>
            <p>${projects.replace(/\n/g, '<br>')}</p>
            
             <h2>Certifications</h2>
            <p>${certifications.replace(/\n/g, '<br>')}</p>

            <h2>References</h2>
            <p>${references.replace(/\n/g, '<br>')}</p>
            
             
        </div>
    `;

    // Insert resume content into the page
    document.getElementById('resumeContent').innerHTML = resumeContent;

    // Show the generated resume section
    document.getElementById('generatedResume').style.display = 'block';

    // Clear form fields
    document.getElementById('resumeForm').reset();

    // Display success message
    document.getElementById('formMessage').textContent = 'Resume generated successfully!';
    document.getElementById('formMessage').style.color = 'green';
}

function printResume() {
    window.print(); // Print the resume
}