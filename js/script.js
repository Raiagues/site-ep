let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 


document.querySelectorAll('.btn-2').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Hide all other content sections
        document.querySelectorAll('.hidden-content').forEach(content => {
            if (content !== document.getElementById(this.getAttribute('data-target'))) {
                content.style.display = 'none';
            }
        });

        // Toggle the clicked button's content
        const target = document.getElementById(this.getAttribute('data-target'));
        if (target.style.display === 'none' || target.style.display === '') {
            target.style.display = 'block';
        } else {
            target.style.display = 'none';
        }
    });
});

 

function toggleContent(targetId) {
    const contents = document.querySelectorAll('.description');
    contents.forEach(content => content.style.display = 'none');
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
        targetContent.style.display = 'block';
    } else {
        targetContent.style.display = 'none';
    }
}