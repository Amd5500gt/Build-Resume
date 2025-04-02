


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

function applyStyle(style) {
    const resumePreview = document.getElementById("resume-preview");

    // Remove existing style classes
    resumePreview.classList.remove("modern", "creative", "traditional");

    // Apply new style
    resumePreview.classList.add(style);
    
    alert("Applied " + style + " resume style!");
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cv-form"); // Change this to your form's ID
    const fields = form.querySelectorAll("input, textarea, select");

    // Load saved data on page load
    fields.forEach(field => {
        const savedValue = localStorage.getItem(field.id);
        if (savedValue) {
            field.value = savedValue;
        }
    });

    // Save data on change
    fields.forEach(field => {
        field.addEventListener("input", function () {
            localStorage.setItem(field.id, field.value);
        });
    });

    // Add a "Clear Data" button if needed
    document.getElementById("clearData").addEventListener("click", function () {
        localStorage.clear();
        fields.forEach(field => field.value = "");
    });
});