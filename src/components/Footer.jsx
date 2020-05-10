import React from 'react';

function Footer(){
    let today = new Date().getFullYear();

    return(
        <footer>
            <p>
               Aditya Nair &copy; {today}
            </p>
        </footer>
    );
}

export default Footer;