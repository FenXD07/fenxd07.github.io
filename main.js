/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, headerId, mainId) =>{
   const toggle = document.getElementById(toggleId),
         sidebar = document.getElementById(sidebarId),
         header = document.getElementById(headerId),
         main = document.getElementById(mainId)
         img = document.getElementById('dynamic-img');
   if(toggle && sidebar && header && main){
       toggle.addEventListener('click', ()=>{
            /* Dynamic avatar */
            if (sidebar.classList.contains('show-sidebar')) {
            // If the sidebar is active, switch to 'hamster1.jpg'
            img.src = 'assets/img/Hamster1.png';
            } else {
                // If the sidebar is inactive, switch back to 'hamster.jpg'
                img.src = 'assets/img/Hamster.png';
            }
           /* Show sidebar */
           sidebar.classList.toggle('show-sidebar')
           /* Add padding header */
           header.classList.toggle('left-pd')
           /* Add padding main */
           main.classList.toggle('left-pd')
       })
   }
}
showSidebar('header-toggle','sidebar', 'header', 'main')


/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__link');

function linkColor(event) {
    const subMenu = this.nextElementSibling; // Get the next sibling of the clicked link
    const isArrowClick = event.target.classList.contains('ri-arrow-drop-right-line'); // Check if the arrow is clicked

    // If the clicked link has a submenu
    if (subMenu && subMenu.classList.contains('SubDocument')) {
        // If the arrow is clicked, toggle submenu visibility
        if (isArrowClick) {
            event.preventDefault(); // Prevent default action of the link

            // Toggle the submenu's active state
            const isActive = subMenu.classList.toggle('active'); // Toggle active class

            // Adjust max height for submenu visibility
            subMenu.style.maxHeight = isActive ? subMenu.scrollHeight + "px" : 0;

            // Remove 'active-link' from all links first
            sidebarLink.forEach(link => link.classList.remove('active-link'));

            // Add 'active-link' to the current link if the submenu is active
            if (isActive) {
                this.classList.add('active-link');
            }
        }
    } else {
        // If it doesn't have a submenu, remove active link from others
        sidebarLink.forEach(link => link.classList.remove('active-link'));
        this.classList.add('active-link'); // Add active link to the clicked link
    }
}

// Add event listeners to the links
sidebarLink.forEach(link => link.addEventListener('click', linkColor));



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



