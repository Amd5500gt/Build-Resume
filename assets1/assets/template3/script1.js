// Photo Upload
const photoInput = document.getElementById('photo');
const photoPreviewDisplay = document.getElementById('preview-photo-display');

photoInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      photoPreviewDisplay.src = e.target.result;
      photoPreviewDisplay.style.display = 'block'; // Show the photo in the preview
    };
    reader.readAsDataURL(file);
  }
});

// Generate Resume
function generateResume() {
  // Populate preview with form data
  document.getElementById('preview-full-name').innerText = document.getElementById('full-name').value;
  document.getElementById('preview-dob').innerText = document.getElementById('dob').value;
  document.getElementById('preview-email').innerText = document.getElementById('email').value;
  document.getElementById('preview-phone').innerText = document.getElementById('phone').value;
  document.getElementById('preview-address').innerText = document.getElementById('address').value;
  document.getElementById('preview-school').innerText = document.getElementById('school').value;
  document.getElementById('preview-degree').innerText = document.getElementById('degree').value;
  document.getElementById('preview-graduation-year').innerText = document.getElementById('year').value;
  document.getElementById('preview-company').innerText = document.getElementById('company').value;
  document.getElementById('preview-job-title').innerText = document.getElementById('job-title').value;
  document.getElementById('preview-job-duration').innerText = document.getElementById('job-duration').value;
  document.getElementById('preview-job-description').innerText = document.getElementById('job-description').value;
  document.getElementById('preview-project-title').innerText = document.getElementById('project-title').value;
  document.getElementById('preview-project-description').innerText = document.getElementById('project-description').value;
  document.getElementById('preview-certification').innerText = document.getElementById('certification').value;
  document.getElementById('preview-certification-year').innerText = document.getElementById('certification-year').value;

  // Populate skills and languages
  const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
  const skillsList = document.getElementById('preview-skills');
  skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');

  const languages = document.getElementById('language').value.split(',').map(lang => lang.trim());
  const languagesList = document.getElementById('preview-languages');
  languagesList.innerHTML = languages.map(lang => `<li>${lang}</li>`).join('');

  // Show the preview
  document.getElementById('resume-preview').style.display = 'block';
}

// Print/Download PDF
function printResume() {
  window.print();
}
function loadFormData() {
  const savedData = localStorage.getItem('resumeFormData');
  if (savedData) {
    const formData = JSON.parse(savedData);
    document.getElementById('full-name').value = formData.fullName;
    document.getElementById('dob').value = formData.dob;
    document.getElementById('email').value = formData.email;
    document.getElementById('phone').value = formData.phone;
    document.getElementById('address').value = formData.address;
    document.getElementById('school').value = formData.school;
    document.getElementById('degree').value = formData.degree;
    document.getElementById('year').value = formData.year;
    document.getElementById('company').value = formData.company;
    document.getElementById('job-title').value = formData.jobTitle;
    document.getElementById('job-duration').value = formData.jobDuration;
    document.getElementById('job-description').value = formData.jobDescription;
    document.getElementById('project-title').value = formData.projectTitle;
    document.getElementById('project-description').value = formData.projectDescription;
    document.getElementById('certification').value = formData.certification;
    document.getElementById('certification-year').value = formData.certificationYear;
    document.getElementById('skills').value = formData.skills;
    document.getElementById('language').value = formData.language;
    document.getElementById('hobbies').value = formData.hobbies;
  }
}

// Save form data on input change
document.querySelectorAll('#resume-form input, #resume-form textarea, #resume-form select').forEach(input => {
  input.addEventListener('input', saveFormData);
});

// Load saved data when the page loads
window.addEventListener('load', loadFormData);

  function getRandomLightColor() {
    let r = Math.floor(Math.random() * 156) + 100; // Light Red (100-255)
    let g = Math.floor(Math.random() * 156) + 100; // Light Green (100-255)
    let b = Math.floor(Math.random() * 156) + 100; // Light Blue (100-255)
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackground() {
    document.body.style.background = getRandomLightColor();

    // Add animated circles
    document.querySelectorAll('.circle').forEach(circle => circle.remove()); // Remove old circles

    for (let i = 0; i < 5; i++) {
        let circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = `${Math.random() * 150 + 50}px`;
        circle.style.height = circle.style.width;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(circle);
    }
}

setInterval(changeBackground, Math.random() * 2000 + 3000); // Change every 3-5 seconds
changeBackground(); // Run on load

function getRandomLightColor() {
  let r = Math.floor(Math.random() * 156) + 100; // Light Red (100-255)
  let g = Math.floor(Math.random() * 156) + 100; // Light Green (100-255)
  let b = Math.floor(Math.random() * 156) + 100; // Light Blue (100-255)
  return `rgb(${r}, ${g}, ${b})`;
}

function changeBackground() {
  document.body.style.backgroundColor = getRandomLightColor();
}

function addShapes() {
  document.querySelectorAll('.bubble, .square, .glow').forEach(e => e.remove()); // Clear old shapes

  for (let i = 0; i < 5; i++) {
      let bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.width = `${Math.random() * 100 + 50}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
      document.body.appendChild(bubble);
  }

  for (let i = 0; i < 3; i++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.style.top = `${Math.random() * 100}%`;
      square.style.left = `${Math.random() * 100}%`;
      square.style.width = `${Math.random() * 50 + 30}px`;
      square.style.height = square.style.width;
      square.style.animationDuration = `${Math.random() * 4 + 3}s`;
      document.body.appendChild(square);
  }

  for (let i = 0; i < 2; i++) {
      let glow = document.createElement('div');
      glow.classList.add('glow');
      glow.style.top = `${Math.random() * 100}%`;
      glow.style.left = `${Math.random() * 100}%`;
      glow.style.animationDuration = `${Math.random() * 6 + 4}s`;
      document.body.appendChild(glow);
  }
}

function startAnimation() {
  changeBackground();
  addShapes();
  setInterval(() => {
      changeBackground();
      addShapes();
  }, 4000); // Change every 4 seconds smoothly
}

startAnimation();


// Data Saving Functionality
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("resume-form");
  const inputs = form.querySelectorAll("input, textarea, select");
  
  // Load saved data
  inputs.forEach(input => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }
  });

  // Save data on input
  inputs.forEach(input => {
    input.addEventListener("input", function() {
      localStorage.setItem(input.id, input.value);
    });
  });

  // Handle photo separately since it's a file input
  const photoInput = document.getElementById("photo");
  photoInput.addEventListener("change", function() {
    if (this.files && this.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        localStorage.setItem("photoData", e.target.result);
      }
      reader.readAsDataURL(this.files[0]);
    }
  });

  // Load photo if saved
  const savedPhoto = localStorage.getItem("photoData");
  if (savedPhoto) {
    document.getElementById("preview-photo-display").src = savedPhoto;
  }
});

// Your existing generateResume function
function generateResume() {
  // Get all form values
  const fullName = document.getElementById("full-name").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const school = document.getElementById("school").value;
  const degree = document.getElementById("degree").value;
  const year = document.getElementById("year").value;
  const company = document.getElementById("company").value;
  const jobTitle = document.getElementById("job-title").value;
  const jobDuration = document.getElementById("job-duration").value;
  const jobDescription = document.getElementById("job-description").value;
  const projectTitle = document.getElementById("project-title").value;
  const projectDescription = document.getElementById("project-description").value;
  const certification = document.getElementById("certification").value;
  const certificationYear = document.getElementById("certification-year").value;
  const skills = document.getElementById("skills").value;
  const language = document.getElementById("language").value;
  const hobbies = document.getElementById("hobbies").value;

  // Update preview with form values
  document.getElementById("preview-full-name").textContent = fullName;
  document.getElementById("preview-dob").textContent = dob;
  document.getElementById("preview-email").textContent = email;
  document.getElementById("preview-phone").textContent = phone;
  document.getElementById("preview-address").textContent = address;
  document.getElementById("preview-school").textContent = school;
  document.getElementById("preview-degree").textContent = degree;
  document.getElementById("preview-graduation-year").textContent = year;
  document.getElementById("preview-company").textContent = company;
  document.getElementById("preview-job-title").textContent = jobTitle;
  document.getElementById("preview-job-duration").textContent = jobDuration;
  document.getElementById("preview-job-description").textContent = jobDescription;
  document.getElementById("preview-project-title").textContent = projectTitle;
  document.getElementById("preview-project-description").textContent = projectDescription;
  document.getElementById("preview-certification").textContent = certification;
  document.getElementById("preview-certification-year").textContent = certificationYear;
  
  // Handle skills list
  const skillsList = document.getElementById("preview-skills");
  skillsList.innerHTML = "";
  skills.split(",").forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    }
  });

  // Handle languages
  const languagesList = document.getElementById("preview-languages");
  languagesList.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = language;
  languagesList.appendChild(li);

  // Handle photo preview
  const photoInput = document.getElementById("photo");
  if (photoInput.files && photoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("preview-photo-display").src = e.target.result;
      localStorage.setItem("photoData", e.target.result);
    };
    reader.readAsDataURL(photoInput.files[0]);
  }

  // Show the preview section
  document.getElementById("resume-preview").style.display = "block";
}

// Your existing printResume function
function printResume() {
  window.print();
}

// Clear all saved data (add this to a button if needed)
function clearSavedData() {
  if (confirm("Are you sure you want to clear all saved data?")) {
    localStorage.clear();
    location.reload();
  }
}
document.addEventListener('contextmenu', event => event.preventDefault());