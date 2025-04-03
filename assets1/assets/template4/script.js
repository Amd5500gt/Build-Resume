$(document).ready(function () {
    function updatePreview() {
        // Personal Information
        let firstName = $("#firstname").val().trim();
        let lastName = $("#lastname").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phoneno").val().trim();
        let fatherName = $("#fathername").val().trim();
        let dob = $("#dob").val().trim();
        let address = $("#address").val().trim();
        let state = $("#state").val().trim();

        $("#previewName").text(firstName + " " + lastName);
        $("#previewEmail").text(email);
        $("#previewPhone").text(phone);
        $("#previewFatherName").text(fatherName);
        $("#previewDOB").text(dob);
        $("#previewAddress").text(address);
        $("#previewState").text(state);

        // Show or hide personal details section
        if (fatherName || dob || address || state) {
            $("#previewPersonalSection").show();
        } else {
            $("#previewPersonalSection").hide();
        }

        // Handle Image Upload
        let imageInput = document.getElementById("image");
        if (imageInput.files && imageInput.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $("#previewImage").attr("src", e.target.result).show();
            };
            reader.readAsDataURL(imageInput.files[0]);
        }

        // Achievements Section
        let achievementsHTML = "";
        $('div[data-repeater-list="achievements"] div[data-repeater-item]').each(function () {
            let title = $(this).find('[name="achieve_title"]').val().trim();
            let description = $(this).find('[name="achieve_description"]').val().trim();
            if (title && description) {
                achievementsHTML += `<p><strong>${title}:</strong> ${description}</p>`;
            }
        });
        $("#previewAchievements").html(achievementsHTML);

        // Show or hide Achievements section
        if (achievementsHTML) {
            $("#previewAchievementsSection").show();
        } else {
            $("#previewAchievementsSection").hide();
        }

        // Education Section
        let educationHTML = "";
        let hasEducation = false;
        $('div[data-repeater-list="education"] div[data-repeater-item]').each(function () {
            let school = $(this).find('[name="edu_school"]').val().trim();
            let degree = $(this).find('[name="edu_degree"]').val().trim();
            let city = $(this).find('[name="edu_city"]').val().trim();
            let startDate = $(this).find('[name="edu_start_date"]').val().trim();
            let endDate = $(this).find('[name="edu_graduation_date"]').val().trim();
            const description = $(this).find('[name="edu_description"]').val().trim();

            if (school && degree) {
                educationHTML += `<p><strong>${degree}</strong> at ${school}, ${city} (${startDate} - ${endDate})</p> <p>${description}</p>`;
                hasEducation = true;
            }
        });

        if (hasEducation) {
            $("#previewEducation").html(educationHTML);
            $("#previewEducationSection").show();
        } else {
            $("#previewEducationSection").hide();
        }

        // Experience Section
        let experienceHTML = "";
        let hasExperience = false;
        $('div[data-repeater-list="experience"] div[data-repeater-item]').each(function () {
            let title = $(this).find('[name="exp_title"]').val().trim();
            let company = $(this).find('[name="exp_organization"]').val().trim();
            let location = $(this).find('[name="exp_location"]').val().trim();
            let startDate = $(this).find('[name="exp_start_date"]').val().trim();
            let endDate = $(this).find('[name="exp_end_date"]').val().trim();
            const description = $(this).find('[name="exp_description"]').val().trim();

            if (title && company) {
                experienceHTML += `<p><strong>${title}</strong> at ${company}, ${location} (${startDate} - ${endDate})</p> <p>${description}</p>`;
                hasExperience = true;
            }
        });

        if (hasExperience) {
            $("#previewExperience").html(experienceHTML);
            $("#previewExperienceSection").show();
        } else {
            $("#previewExperienceSection").hide();
        }

        // Skills Section
        let skillsHTML = "";
        let hasSkills = false;
        $('div[data-repeater-list="skills"] div[data-repeater-item]').each(function () {
            let skill = $(this).find('[name="skill"]').val().trim();
            if (skill) {
                skillsHTML += `<li>${skill}</li>`;
                hasSkills = true;
            }
        });

        if (hasSkills) {
            $("#previewSkills").html(skillsHTML);
            $("#previewSkillsSection").show();
        } else {
            $("#previewSkillsSection").hide();
        }

        // Projects Section
        let projectsHTML = "";
        let hasProjects = false;
        $('div[data-repeater-list="projects"] div[data-repeater-item]').each(function () {
            let projTitle = $(this).find('[name="proj_title"]').val().trim();
            let projLink = $(this).find('[name="proj_link"]').val().trim();
            let description = $(this).find('[name="proj_description"]').val().trim();

            if (projTitle) {
                projectsHTML += `<p><strong>${projTitle}</strong> - <a href="${projLink}" target="_blank">${projLink}</a></p> <p>${description}</p>`;
                hasProjects = true;
            }
        });

        if (hasProjects) {
            $("#previewProjects").html(projectsHTML);
            $("#previewProjectsSection").show();
        } else {
            $("#previewProjectsSection").hide();
        }

        // Show the preview section
        $("#previewSection").show();
    }

    // Trigger preview update on input change
    $("#resumeForm input").on("input", updatePreview);
    $("#resumeForm textarea").on("input", updatePreview);
    $("#image").on("change", updatePreview);

    // Preview button action
    $("#previewButton").click(updatePreview);

});

// Automatic save functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load saved data if it exists
    loadResumeData();
    
    // Set up automatic saving on form changes
    const form = document.getElementById('resumeForm');
    form.addEventListener('input', debounce(function() {
        saveResumeData();
    }, 500));
    
    // Clear data button functionality
    document.querySelector('button[onclick="clearResumeData()"]').addEventListener('click', clearResumeData);
});

// Debounce function to prevent too frequent saves
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

// Save form data to localStorage
function saveResumeData() {
    const formData = new FormData(document.getElementById('resumeForm'));
    const formDataObj = {};
    
    // Convert FormData to object
    formData.forEach((value, key) => {
        // Handle repeatable sections
        if (key.includes('[') && key.includes(']')) {
            const baseKey = key.split('[')[0];
            const index = key.match(/\[(.*?)\]/)[1];
            const subKey = key.split(']')[1].replace('[', '').replace(']', '');
            
            if (!formDataObj[baseKey]) formDataObj[baseKey] = [];
            if (!formDataObj[baseKey][index]) formDataObj[baseKey][index] = {};
            formDataObj[baseKey][index][subKey] = value;
        } else {
            formDataObj[key] = value;
        }
    });
    
    // Handle image separately
    const imageInput = document.getElementById('image');
    if (imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            formDataObj.imageData = e.target.result;
            localStorage.setItem('resumeData', JSON.stringify(formDataObj));
            console.log('Resume data saved automatically');
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        localStorage.setItem('resumeData', JSON.stringify(formDataObj));
        console.log('Resume data saved automatically');
    }
}

// Load form data from localStorage
function loadResumeData() {
    const savedData = localStorage.getItem('resumeData');
    if (!savedData) return;
    
    const formDataObj = JSON.parse(savedData);
    
    // Fill basic fields
    for (const key in formDataObj) {
        if (Array.isArray(formDataObj[key])) {
            // Handle repeatable sections
            formDataObj[key].forEach((item, index) => {
                for (const subKey in item) {
                    const input = document.querySelector(`[name="${key}[${index}][${subKey}]"]`);
                    if (input) input.value = item[subKey];
                }
            });
        } else {
            const input = document.querySelector(`[name="${key}"]`);
            if (input) input.value = formDataObj[key];
        }
    }
    
    // Handle image
    if (formDataObj.imageData) {
        document.getElementById('previewImage').src = formDataObj.imageData;
    }
    
    // Trigger preview update
    updateResumePreview();
}

// Clear all saved data
function clearResumeData() {
    if (confirm('Are you sure you want to clear all saved data?')) {
        localStorage.removeItem('resumeData');
        document.getElementById('resumeForm').reset();
        document.getElementById('previewImage').src = '';
        updateResumePreview();
        console.log('All saved data cleared');
    }
}
document.addEventListener('contextmenu', event => event.preventDefault());