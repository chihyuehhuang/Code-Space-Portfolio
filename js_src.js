//This function to load nav bar & footer
function loadNav(elementid, page) {
    fetch([page])
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

// Call the function to load the nav bar and footer
loadNav('navbar', 'nav.html');
loadNav('footer', 'footer.html'); 
loadNav('header', 'header.html'); 