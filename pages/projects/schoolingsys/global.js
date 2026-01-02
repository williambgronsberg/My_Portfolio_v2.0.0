/**
 * @Author: William Berge Groensberg
 * @Date:   2025-04-29 11:06:02
 * @Last Modified by:   William Berge Groensberg
 * @Last Modified time: 2025-05-13 08:41:29
 */

    document.addEventListener("DOMContentLoaded", function () {
        const header = document.getElementById("headerjs");

        header.innerHTML = `
            

            <nav class="nav">
                <figure class="logo">
                    <img src="static-img/SandøyaMont_liggende.png" alt="Skolens logo">
                </figure>
                <ul class="nav-list">
                    <li><a href="index.html">Hjem</a></li>
                    <li><a href="utforsk.html">Utforsk</a></li>
                    <li><a href="#">Kontakt oss</a></li>
                </ul>
            </nav>
        `;
    });

    function updateCopyright() {
        document.querySelector('.c-year').textContent = new Date().getFullYear();
    }

    window.onload = updateCopyright;

