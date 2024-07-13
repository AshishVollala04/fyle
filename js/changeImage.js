const projectCards = document.querySelectorAll(".project-card");
const displayImage = document.getElementById("display-image");

projectCards.forEach((card) => {
	card.addEventListener("click", () => {
		// Remove 'selected' class from all cards
		projectCards.forEach((c) => c.classList.remove("selected"));
		// Add 'selected' class to the clicked card
		card.classList.add("selected");
		// Change the image source based on the clicked card
		displayImage.src = card.getAttribute("data-image");
	});
});
