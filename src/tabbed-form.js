const tabs = document.querySelectorAll('.tab');
const contentSections = document.querySelectorAll('.tab-content');
const directionalLinks = document.querySelectorAll('.directional-link');

tabs.forEach((tab) => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();

        hideTabContent();

        const href = e.target.hash || e.target.children[0].hash; // OR condition allows for click in padding area
        if (href) {
            const id = href.slice(1); // remove hash # symbol
            const selectedTabContent = document.getElementById(id);

            this.classList.add('active-tab');
            showTabContent(selectedTabContent);
        }
    })
})

directionalLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    hideTabContent();

    const href = e.target.hash;

    const selectedTab = Array.from(tabs).find((tab) => {
      const link = tab.querySelector('.tablink');
      return link.hash === href;
    });
    selectedTab.classList.add('active-tab');

    const id = href.slice(1); // remove hash # symbol
    const selectedTabContent = document.getElementById(id);
    showTabContent(selectedTabContent);
  });
});

// hide all but the first tab on load
hideTabContent();
tabs[0].classList.add('active-tab');
showTabContent(contentSections[0]);

function hideTabContent() {
    tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
    });
    contentSections.forEach((section) => {
    section.classList.replace('active-tab', 'inactive-tab');
    section.classList.add('inactive-tab');
  });
}

function showTabContent(currentContent) {
    currentContent.classList.replace('inactive-tab', 'active-tab');
}

function rtv_handleSubmit(evt) {
  // Try to parse dates into salesforce format
  // YYYY-MM-DD -> MM/DD/YYYY

  try {
      document.querySelectorAll(".rtv-form-group>input[type=date]").forEach((dateInput) => {
          console.log("found a date field", dateInput.value);
          var hiddenField = document.getElementById(dateInput.id.substring(0, dateInput.id.length - 8));
          var bits = dateInput.value.split("-");
          if (bits.length === 3) {
              // YYYY-MM-DD format from a date picker
              var sfDate = bits[1] + "/" + bits[2] + "/" + bits[0];
              hiddenField.value = sfDate;
              console.log("converted to", sfDate);
          } else {
              // Missing or MM/DD/YYYY format for fallback browsers without a datepicker
              hiddenField.value = dateInput.value;
          }
      });
  } catch (e) {
      console.log("could not convert the date for salesforce");
  }
  return true;
}
