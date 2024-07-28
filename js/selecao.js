document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".btn-details-trainee");
  const contentDisplay = document.getElementById("content-display");

  // Save default description HTML
  const defaultDescription = contentDisplay.innerHTML;

  let lastClickedId = null;
  let lastClickedContent = null;

  cards.forEach(card => {
      card.addEventListener("click", function() {
          const targetId = this.getAttribute("data-target");
          const targetContent = document.getElementById(targetId);

          if (window.innerWidth >= 500) {

            if (lastClickedId === targetId) {
                // Hide content if the same card is clicked again
                contentDisplay.innerHTML = defaultDescription;
                lastClickedId = null;
            } else {
                // Show new content
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    contentDisplay.innerHTML = targetContent.innerHTML;
                    lastClickedId = targetId;
                }
            }
        } else {
          if (lastClickedId === targetId) {
          // Hide content if the same card is clicked again
          if (lastClickedContent) {
            lastClickedContent.style.display = "none";
          }
          lastClickedId = null;
          lastClickedContent = null;
          } else {
            // Hide previous content if any
            if (lastClickedContent) {
              lastClickedContent.style.display = "none";
            }

            if (targetContent) {
              const cardRect = this.getBoundingClientRect();
              const containerRect = document.querySelector('.timeline-container').getBoundingClientRect();
              
              // Calculate top position relative to the container with fixed margin
              targetContent.style.display = "block";
              targetContent.style.position = "absolute"; // Position below the button
              targetContent.style.top = `${cardRect.bottom - containerRect.top + 20}px`; 
              targetContent.style.left = `${0}px`; // Align with the timeline container
              lastClickedContent = targetContent;
              lastClickedId = targetId;
            }
          }
        }
      });
  });
});



document.querySelectorAll('.btn-details').forEach(button => {
  button.addEventListener('click', function(event) {
      event.stopPropagation(); // Impede a propagação do clique para o card

      const targetId = this.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const card = this.closest('.card-workshops');
      const cardDescription = card.querySelector('.card-description-workshop');

      if (content.style.display === 'none' || content.style.display === '') {
          cardDescription.style.display = 'none';
      } else {
          cardDescription.style.display = 'block';
      }

      
  });
});

function handleCardClick(card) {
  document.querySelectorAll('.card-workshops').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected'); 
}

document.querySelectorAll('.card-workshops').forEach(card => {
  card.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          handleCardClick(this);
      }
  });
});