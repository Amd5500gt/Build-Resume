


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
