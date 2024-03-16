async function disableActivePages() {
    // reset any currently selected nav buttons
    var activeNavButtons = document.getElementsByClassName("button-selected");

    for (let i = 0; i < activeNavButtons.length; i++) {
        activeNavButtons[i].className = "nav-button";
    }

    // reset any current active details pages
    var activePages = document.getElementsByClassName("details-active");

    for (let j = 0; j < activePages.length; j++) {
        activePages[j].className = "details-inactive";
    }

    return null;
}

addEventListener("load", (e) => {

    // Home button
    document.getElementById("homeButton").addEventListener('pointerdown', async (e) => {

        // reset any active pages and nav buttons
        let disablePage = await disableActivePages();

        // set the clicked nav button to the selected theme
        e.target.className = "button-selected";

        document.getElementById("home").className = "details-active";
    });

    // Projects button
    document.getElementById("projectsButton").addEventListener('pointerdown', async (e) => {

        // reset any active pages and nav buttons
        let disablePage = await disableActivePages();

        // set the clicked nav button to the selected theme
        e.target.className = "button-selected";

        document.getElementById("projects").className = "details-active";
    });

    // Social button
    document.getElementById("socialButton").addEventListener('pointerdown', async (e) => {

        // reset any active pages and nav buttons
        let disablePage = await disableActivePages();

        // set the clicked nav button to the selected theme
        e.target.className = "button-selected";

        document.getElementById("social").className = "details-active";
    });
});