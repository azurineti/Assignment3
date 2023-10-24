// Get all elements with the class "accordion" and store them in the 'acc' array
var acc = document.getElementsByClassName("accordion");
var i;

// Loop through all elements in the 'acc' array
for (i = 0; i < acc.length; i++) {
  // Add a click event listener to each "accordion" element
  acc[i].addEventListener("click", function() {
    // Toggle the "active" class for the clicked element
    this.classList.toggle("active");

    // Find the next sibling element of the clicked "accordion," which is typically the hidden content
    var panel = this.nextElementSibling;

    // Check if the hidden content's max height is set
    if (panel.style.maxHeight) {
      // If it's set, set it to null to hide the content
      panel.style.maxHeight = null;
    } else {
      // If it's not set, set it to the scroll height, effectively showing the content
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}




// -----------------------------------------------------------

// This function is called when a tab is clicked and takes two parameters:
// - evt: the event object representing the click
// - cityName: the name of the city tab to open
function openCity(evt, cityName) {
    // Declare variables to store tab content and tab links
    var i, tabcontent, tablinks;

    // Get all elements with class "tabcontent" (tab content)
    tabcontent = document.getElementsByClassName("tabcontent");

    // Loop through all tab content elements and hide them by setting their display to "none"
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class "tablinks" (tab links)
    tablinks = document.getElementsByClassName("tablinks");

    // Loop through all tab link elements and remove the "active" class from their className
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Display the tab content associated with the clicked city by setting its display to "block"
    document.getElementById(cityName).style.display = "block";

    // Add the "active" class to the clicked tab link to indicate that it's currently active
    evt.currentTarget.className += " active";
}





