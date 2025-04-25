window.addEventListener("DOMContentLoaded", function() {
  let current_language = localStorage.getItem("current_language");
  if (current_language === null) {
    current_language = "content/en";
  }
  // Set the option in the select element to have the "selected" attribute
  var selectElement = document.getElementById("select_language");
  var selectedOption = selectElement.querySelector(
    'option[value="' + current_language + '"]'
  );
  if (selectedOption) {
    selectedOption.setAttribute("selected", "");
  }
  // Remove items from navigation which do not correpond to current language
  const navlist = document.getElementsByClassName("visible-links");
  Array.from(navlist).forEach(element => {
    if (element.id !== current_language.split("/")[2]) {
      element.style.display = "none";
    }
  });
});

// Change language for current page
function change_language() {
  var selectElement = document.getElementById("select_language");
  var value = selectElement.options[selectElement.selectedIndex].value;
  // Get the current page URL
  const currentPageUrl = window.location.href;
  current_language = localStorage.getItem("current_language");
  localStorage.setItem("current_language", value);
  window.location.href = currentPageUrl.replace(
    current_language,
    value
  );
}
