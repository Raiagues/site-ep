document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".btn-details-trainee");
  const contentDisplay = document.getElementById("content-display");

  // Save default description HTML
  const defaultDescription = contentDisplay.innerHTML;

  let lastClickedId = null;

  cards.forEach(card => {
      card.addEventListener("click", function() {
          const targetId = this.getAttribute("data-target");

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
          contentDisplay.style.display = "block";
        }
      });
  });
});



