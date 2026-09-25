// Page titles shown in the browser tab
const titles = { home: "Home", televisions: "Televisions", about: "About Us" };

// Show one page and hide the others, and highlight its nav link
function showPage(pageId) {
  if (!titles[pageId]) pageId = "home";

  document.querySelectorAll(".page").forEach(section => {
    section.classList.toggle("active", section.id === pageId);
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    const isCurrent = link.dataset.page === pageId;
    link.classList.toggle("active", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.title = titles[pageId] + " | Appliance Energy";
}

// Nav links and the logo all carry data-page
document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const pageId = link.dataset.page;
    history.pushState(null, "", "#" + pageId);
    showPage(pageId);
  });
});

// Browser back/forward buttons
window.addEventListener("popstate", () => showPage(location.hash.slice(1)));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Initial page from the URL hash (defaults to home)
showPage(location.hash.slice(1));
