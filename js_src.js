//This function to load nav bar & footer
function loadNav(elementid, page) {
    return fetch([page])
        // first check if the response is ok, then return the text content of the response
        .then(response => {
            if (!response.ok) {
                console.error('Failed to load ' + page + ': ' + response.status);
                return;
            }
            return response.text();
        })
        // then insert the loaded content into the specified element; data is the text content of the response
        .then(data => {
            document.getElementById(elementid).innerHTML = data;
            })
        }


function updateToppadding() {
    // Look for the header container or the inner div with class .header
    const headerElement = document.getElementById('header');
    const navElement = document.getElementById('navbar');
    const root = document.documentElement;
    
    const headerheight = headerElement?.offsetHeight ?? 0; // if element exist, return offset otherwise 0
    const navheight = navElement?.offsetHeight ?? 0;
    const totalheight = headerheight + navheight
    root.style.setProperty('--top-pading-height', totalheight + 'px');
    console.log("Top padding updated to: " + totalheight + "px");
    }

// Update on load and whenever the window is resized
// Call the function to load the nav bar and footer
Promise.all([
    loadNav('navbar', 'nav.html'),
    loadNav('footer', 'footer.html'),
    loadNav('header', 'header.html')
]).then(() => {
    updateToppadding();
}).catch(err => console.error("Error loading: ", err))

window.addEventListener('resize', updateToppadding);
