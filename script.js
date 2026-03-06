document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".input-container");
  const input = document.querySelector("#search");
  const articles = document.querySelectorAll(".article");

  if (!form || !input || articles.length === 0) return;

  function showAllArticles() {
    articles.forEach((article) => {
      article.style.display = "block";
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchValue = input.value.trim().toLowerCase();

    if (searchValue === "") {
      showAllArticles();
      return;
    }

    let matches = 0;

    articles.forEach((article) => {
      const text = article.textContent.toLowerCase();

      if (text.includes(searchValue)) {
        article.style.display = "block";
        matches++;
      } else {
        article.style.display = "none";
      }
    });

    if (matches === 0) {
      alert("Nothing found.");
      input.value = "";
      showAllArticles();
    }
  });

  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      showAllArticles();
    }
  });
});
