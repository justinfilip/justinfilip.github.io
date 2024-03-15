async function disableActivePages() {
    // reset any currently selected nav buttons
    var activeNavButtons = document.getElementsByClassName("button-selected");
    for (let i = 0; i < activeNavButtons.length; i++) {
        activeNavButtons[i].className = "nav-button";
    }

    // let disablePage = await disableActivePages();
    var activePages = document.getElementsByClassName("details-active");
    console.log(activePages)
    for (let j = 0; j < activePages.length; j++) {
        activePages[j].className = "details-inactive";
    }

    return "";
}

addEventListener("load", (e) => {

    // Home button
    document.getElementById("homeButton").addEventListener('click', async (e) => {

        // reset any active pages and nav buttons
        let disablePage = await disableActivePages();

        // set the clicked nav button to the selected theme
        e.target.className = "button-selected";

        document.getElementById("home").className = "details-active";
    });

    // Projects button
    document.getElementById("projectsButton").addEventListener('click', async (e) => {

        // reset any active pages and nav buttons
        let disablePage = await disableActivePages();

        // set the clicked nav button to the selected theme
        e.target.className = "button-selected";

        document.getElementById("projects").className = "details-active";
    });
});