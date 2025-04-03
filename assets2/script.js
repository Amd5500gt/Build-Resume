


// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})
document.getElementById('renderPreviewButton').addEventListener('click', function () {
    // Collect form data
    const formData = {
      fullname: document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value,
      phoneno: document.getElementById('phoneno').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      summary: document.getElementById('summary').value,
      skills: Array.from(document.querySelectorAll('[name="skill"]')).map(input => input.value),
      achievements: Array.from(document.querySelectorAll('[name="achieve_title"]')).map((input, index) => ({
        title: input.value,
        description: document.querySelectorAll('[name="achieve_description"]')[index].value,
      })),
      education: Array.from(document.querySelectorAll('[name="edu_school"]')).map((input, index) => ({
        school: input.value,
        degree: document.querySelectorAll('[name="edu_degree"]')[index].value,
        city: document.querySelectorAll('[name="edu_city"]')[index].value,
        startDate: document.querySelectorAll('[name="edu_start_date"]')[index].value,
        graduationDate: document.querySelectorAll('[name="edu_graduation_date"]')[index].value,
        description: document.querySelectorAll('[name="edu_description"]')[index].value,
      })),
      experience: Array.from(document.querySelectorAll('[name="exp_title"]')).map((input, index) => ({
        title: input.value,
        organization: document.querySelectorAll('[name="exp_organization"]')[index].value,
        location: document.querySelectorAll('[name="exp_location"]')[index].value,
        startDate: document.querySelectorAll('[name="exp_start_date"]')[index].value,
        endDate: document.querySelectorAll('[name="exp_end_date"]')[index].value,
        description: document.querySelectorAll('[name="exp_description"]')[index].value,
      })),
      projects: Array.from(document.querySelectorAll('[name="proj_title"]')).map((input, index) => ({
        title: input.value,
        link: document.querySelectorAll('[name="proj_link"]')[index].value,
        description: document.querySelectorAll('[name="proj_description"]')[index].value,
      })),
    };
  
    // Generate the preview HTML
    const previewHTML = `
      <style>
        body {
          font-family: Arial, sans-serif;
        }
  
        h3 {
          margin-bottom: 10px;
        }
  
        .bg-green {
          background-color: #4CAF50;
        }
  
        .text-white {
          color: white;
        }
  
        .fw-6 {
          font-weight: 600;
        }
  
        .ls-1 {
          letter-spacing: 1px;
        }
  
        .preview-cnt {
          display: flex;
          width: 100%;
          max-width: 800px;
          border: 1px solid #ccc;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
  
        .preview-cnt-l {
          flex: 1;
          background-color: #4CAF50;
          color: white;
          padding: 20px;
        }
  
        .preview-cnt-r {
          flex: 2;
          background-color: white;
          padding: 20px;
        }
  
        .preview-blk-title h3 {
          margin-bottom: 10px;
          color: #4CAF50;
        }
  
        .preview-item {
          margin-bottom: 10px;
        }
  
        .preview-item-val {
          display: block;
        }
  
        .preview-blk-list {
          margin-top: 10px;
        }
  
        .skills-items .preview-item-val {
          display: inline-block;
          padding: 5px 10px;
          margin-right: 10px;
          background-color: #4CAF50;
          color: white;
          border-radius: 5px;
        }
  
        .achievements-items .preview-item-val {
          display: block;
        }
  
        .educations-items .preview-item-val {
          display: block;
        }
  
        .experiences-items .preview-item-val {
          display: block;
        }
  
        .projects-items .preview-item-val {
          display: block;
        }
      <section id="preview-sc" class="print_area">
        <div class="container">
          <div class="preview-cnt">
            <div class="preview-cnt-l bg-green text-white">
              <div class="preview-blk">
                <div class="preview-image">
                  <img src="${document.getElementById('image').value}" alt="Profile Image" id="image_dsp" />
                </div>
                <div class="preview-item preview-item-name">
                  <span class="preview-item-val fw-6">${formData.fullname}</span>
                </div>
                <div class="preview-item">
                  <span class="preview-item-val text-uppercase fw-6 ls-1">Designation</span>
                </div>
              </div>
  
              <div class="preview-blk">
                <div class="preview-blk-title">
                  <h3>About</h3>
                </div>
                <div class="preview-blk-list">
                  <div class="preview-item">
                    <span class="preview-item-val">${formData.phoneno}</span>
                  </div>
                  <div class="preview-item">
                    <span class="preview-item-val">${formData.email}</span>
                  </div>
                  <div class="preview-item">
                    <span class="preview-item-val">${formData.address}</span>
                  </div>
                  <div class="preview-item">
                    <span class="preview-item-val">${formData.summary}</span>
                  </div>
                </div>
              </div>
  
              <div class="preview-blk">
                <div class="preview-blk-title">
                  <h3>Skills</h3>
                </div>
                <div class="skills-items preview-blk-list">
                  ${formData.skills.map(skill => `<div class="preview-item"><span class="preview-item-val">${skill}</span></div>`).join('')}
                </div>
              </div>
            </div>
  
            <div class="preview-cnt-r bg-white">
              <div class="preview-blk">
                <div class="preview-blk-title">
                  <h3>Achievements</h3>
                </div>
                <div class="achievements-items preview-blk-list">
                  ${formData.achievements.map(achievement => `
                    <div class="preview-item">
                      <span class="preview-item-val"><strong>${achievement.title}</strong>: ${achievement.description}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
  
              <div class="preview-blk">
                <div class="preview-blk-title">
                  <h3>Education</h3>
                </div>
                <div class="educations-items preview-blk-list">
                  ${formData.education.map(edu => `
                    <div class="preview-item">
                      <span class="preview-item-val"><strong>${edu.school}</strong> - ${edu.degree}</span>
                      <span class="preview-item-val">${edu.city} | ${edu.startDate} - ${edu.graduationDate}</span>
                      <span class="preview-item-val">${edu.description}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
  
              <div class="preview-blk">
                <div class="preview-blk-title">
                  <h3>Experience</h3>
                </div>
                <div class="experiences-items preview-blk-list">
                  ${formData.experience.map(exp => `
                    <div class="preview-item">
                      <span class="preview-item-val"><strong>${exp.title}</strong> at ${exp.organization}</span>
                      <span class="preview-item-val">${exp.location} | ${exp.startDate} - ${exp.endDate}</span>
                      <span class="preview-item-val">${exp.description}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
  
              <div class="preview-blk">
                <div class="preview-blk-title">
                  <h3>Projects</h3>
                </div>
                <div class="projects-items preview-blk-list">
                  ${formData.projects.map(proj => `
                    <div class="preview-item">
                      <span class="preview-item-val"><strong>${proj.title}</strong></span>
                      <span class="preview-item-val"><a href="${proj.link}" target="_blank">${proj.link}</a></span>
                      <span class="preview-item-val">${proj.description}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  
    // Render the preview
    const previewSection = document.createElement('div');
    previewSection.innerHTML = previewHTML;
    document.body.appendChild(previewSection);
  });
  document.addEventListener('contextmenu', event => event.preventDefault());