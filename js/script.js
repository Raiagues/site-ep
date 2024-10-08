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
        
        // Remove active class from all buttons
        document.querySelectorAll('.btn-2').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to the clicked button
        this.classList.add('active');
        
        // Hide all other content sections
        document.querySelectorAll('.hidden-content').forEach(content => {
            content.classList.remove('show');
        });
        
        // Show the corresponding content section
        const target = document.getElementById(this.getAttribute('data-target'));
        target.classList.add('show');
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

document.querySelectorAll('.btn-details').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const content = document.getElementById(targetId);
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
  
    var form = document.getElementById("signup-form");
    var params = {
        from_name: form.name.value,
        email_id: form.email.value,
        message: form.message.value
    };
  
    emailjs.send("service_ubzp5kb", "template_pez9ddl", params)
        .then(function (res) {
            showPopup("Sua mensagem foi enviada com sucesso!");
            form.reset(); 
        })
        .catch(function (err) {
            showPopup("Falha ao enviar a mensagem: " + err.text);
        });
  }
  
  function showPopup(message) {
    document.getElementById("popup-message").textContent = message;
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }