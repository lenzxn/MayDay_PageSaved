document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".input-container");
  const input = document.querySelector("#search");

  if (form && input) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const searchValue = input.value.trim();

      if (searchValue === "") {
        alert("Please enter a search term.");
        input.focus();
        return;
      }

      alert(`You searched for: ${searchValue}`);
    });
  }
});
