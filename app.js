
var typed = new Typed('#element', {
    strings: ['JS developer','Frontend Developer', 'Vedio Editor', 'Web Developer'],
    typeSpeed: 50,
});
    
// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        //navbar.style.backgroundColor = 'rgb(97, 97, 177)'; // Darker color
        navbar.style.zIndex = 1
    } else {
        navbar.style.backgroundColor = 'rgb(18, 18, 60)'; // Transparent
    }
});


const btn = document.getElementById('downloadButton')
btn.addEventListener('click', function() {
    const resumeUrl = 'resume3.pdf'; // Ensure this path is 

     // Toggle the visibility of the iframe
    const iframe = document.getElementById('resumeDisplay');
    if (iframe.src === resumeUrl && iframe.classList.contains('visible')) {
        iframe.classList.remove('visible');
    } else {
        iframe.src = resumeUrl;
        iframe.classList.add('visible');
    }
    // Display the resume in the iframe
    document.getElementById('resumeDisplay').src = resumeUrl;
});

const fbtn = document.getElementById('fortbtn');
fbtn.addEventListener('click',function(){
    const resumeUrl = 'resume3.pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf'; // The name of the downloaded file
    link.style.display = 'none'; // Hide the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

