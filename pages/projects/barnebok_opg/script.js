/**
 * @Author: William Berge Groensberg
 * @Date:   2025-05-10 15:18:14
 * @Last Modified by:   William Berge Groensberg
 * @Last Modified time: 2025-05-20 08:02:31
 */




// this is the function that starts when start button on the index.html is pressed
// it will create a new html page with the content of the book
function start() {

    document.body.innerHTML = ` 
    
    <style>
         * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #f49f1c;
            color: #030e4f;
            font-family: sans-serif;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden; /* Prevent scrolling */
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 30px;
        }

        .image-title-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            position: relative; /* Added for stacking context */
            margin-bottom: 100px; /* Added for spacing */
        }

        .image-container {
            width: 500px;
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            position: relative; /* Added for stacking context */
            z-index: 0; /* Set image container to background */
        }

        .image-container img {
            width: 100%;
            height: auto;
            object-fit: cover;
            background-color: #f49f1c;
        }

        #title1 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 85px;
            color: #030e4f;
            
            
           
             /* Brought title to the front */
            padding-top: 110px;
        }

        #sub-title {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 22px;
            color: #ffffff;
            margin-left: 0px;
            position: absolute;
            z-index: 2; /* Brought subtitle to the front */
        }

        .nam {
            display: flex;
            justify-content: center;
            align-items: center;
          
            width: 100%;
            position: relative; /* Ensure buttons appear above the image */
            z-index: 5; /* Brought buttons to the front */
        }

        .nam button {
            background-color: #030e4f;
            color: #f49f1c;
            border: none;
            height: 100px;
            width: 400px;
            font-size: 30px;
            cursor: pointer;
            border-radius: 50px;
            z-index: 1;
            margin-left: 40px;
            margin-right: 40px;
        }

        @media (max-width: 768px) {
            .image-title-wrapper {
                flex-direction: column;
            }

            #title {
                font-size: 50px;
            }

            .nam {
                flex-direction: column;
                gap: 10px;
            }
            .nam button {
                width: 80%;
            }
        }
              /* Navigation Bar Styling */
        .navbar {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            /* Align back button to the left */
            padding: 10px 20px;
            background: transparent;
            /* Transparent background for minimalism */
        }

        .back-button {
            font-size: 1rem;
            color: #333;
            text-decoration: none;
            padding: 5px 10px;
            border: none;
            background: none;
            cursor: pointer;
            transition: color 0.3s ease;
            text-decoration: underline;
            text-decoration-thickness: 4px;
        }

        .back-button:hover {
            color: #555;
        }

        /* Main Content Styling */


        nav {
            width: 100%;
            display: flex;
            
            align-items: center;
            padding: 10px 20px;
            background-color: transparent;
            /* Invisible background */
            position: absolute;
            z-index: 99999999;
            top: 0;
            left: 0;
        }
    </style>
 <nav>
        <a href="index.html" class="back-button">START PÅ NYTT</a>
       
    </nav>
    <main>
        <h1 id="title1">
            velg hva han skal lære
        </h1>
        <section class="nam">
            <button onclick="itButton()">IT</button>
            <div class="image-title-wrapper">
                <section class="image-container">
                    <img src="assets/itEllerHtml.svg" alt="Illustrasjon fra boken">
                </section>
            </div>
                    <button onclick="htmlButton()">HTML</button>
               
          
        </section>
    </main>
    `;

}



function itButton() {
    // this function will be called when the it button is pressed
    // it will create a new html page with the content of the book
    document.body.innerHTML = ` <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #f49f1c;
            color: #030e4f;
            font-family: sans-serif;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            /* Prevent scrolling */
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 30px;
        }

        .image-title-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            position: relative;
            /* Added for stacking context */
            margin-bottom: 100px;
            /* Added for spacing */
        }

        .image-container {
            width: 600px;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;
            /* Added for stacking context */
            z-index: 0;
padding-right: 100px;
            /* Set image container to background */
        }

        .image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            background-color: #f49f1c;
            display: block;
            margin: auto;
        }

        #title2 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 85px;
            color: #030e4f;



            /* Brought title to the front */
            padding-top: 110px;
        }

        #sub-title {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 22px;
            color: #ffffff;
            margin-left: 0px;
            position: absolute;
            z-index: 2;
            /* Brought subtitle to the front */
        }

        .nam {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 30px;
            margin-bottom: 50px;
            
        }


        .nam button {
            background-color: #030e4f;
            color: #f49f1c;
            border: none;
            height: 100px;
            width: 400px;
            font-size: 30px;
            cursor: pointer;
            border-radius: 50px;
            z-index: 1;
            margin-left: 20px;
            margin-right: 20px;
        }

        @media (max-width: 768px) {
            .image-title-wrapper {
                flex-direction: column;
            }

            #title {
                font-size: 50px;
            }

            .nam {
                flex-direction: column;
                gap: 10px;
            }

            .nam button {
                width: 80%;
            }
        }
              /* Navigation Bar Styling */
        .navbar {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            /* Align back button to the left */
            padding: 10px 20px;
            background: transparent;
            /* Transparent background for minimalism */
        }

        .back-button {
            font-size: 1rem;
            color: #333;
            text-decoration: none;
            padding: 5px 10px;
            border: none;
            background: none;
            cursor: pointer;
            transition: color 0.3s ease;
            text-decoration: underline;
            text-decoration-thickness: 4px;
        }

        .back-button:hover {
            color: #555;
        }

        /* Main Content Styling */


        nav {
            width: 100%;
            display: flex;
            
            align-items: center;
            padding: 10px 20px;
            background-color: transparent;
            /* Invisible background */
            position: absolute;
            z-index: 99999999;
            top: 0;
            left: 0;
        }
        </style>
        
 <nav>
        <a href="index.html" class="back-button">START PÅ NYTT</a>
       
    </nav>
    <main>
        <h1 id="title2">
            hvor skal han lære IT?
        </h1>

        <section class="nam">
        <a href="choosesiteIt.html">
        <button >På Skole</button>
        </a>
            <div class="image-container">
                <img src="assets/hvorsted.svg" alt="Illustrasjon fra boken">
            </div>
            <button onclick="hjemmeIt()">Hjemme</button>
        </section>
    </main>`;

}

function htmlButton() {

    // this function will be called when the it button is pressed
    // it will create a new html page with the content of the book
    document.body.innerHTML = ` <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #f49f1c;
            color: #030e4f;
            font-family: sans-serif;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            /* Prevent scrolling */
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 30px;
        }

        .image-title-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            position: relative;
            /* Added for stacking context */
            margin-bottom: 100px;
            /* Added for spacing */
        }

        .image-container {
            width: 600px;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;
            /* Added for stacking context */
            z-index: 0;
padding-right: 100px;
            /* Set image container to background */
        }

        .image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            background-color: #f49f1c;
            display: block;
            margin: auto;
        }

        #title2 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 85px;
            color: #030e4f;



            /* Brought title to the front */
            padding-top: 110px;
        }

        #sub-title {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 22px;
            color: #ffffff;
            margin-left: 0px;
            position: absolute;
            z-index: 2;
            /* Brought subtitle to the front */
        }

        .nam {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 30px;
            margin-bottom: 50px;
            
        }


        .nam button {
            background-color: #030e4f;
            color: #f49f1c;
            border: none;
            height: 100px;
            width: 400px;
            font-size: 30px;
            cursor: pointer;
            border-radius: 50px;
            z-index: 1;
            margin-left: 20px;
            margin-right: 20px;
        }

        @media (max-width: 768px) {
            .image-title-wrapper {
                flex-direction: column;
            }

            #title {
                font-size: 50px;
            }

            .nam {
                flex-direction: column;
                gap: 10px;
            }

            .nam button {
                width: 80%;
            }
        }
              /* Navigation Bar Styling */
        .navbar {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            /* Align back button to the left */
            padding: 10px 20px;
            background: transparent;
            /* Transparent background for minimalism */
        }

        .back-button {
            font-size: 1rem;
            color: #333;
            text-decoration: none;
            padding: 5px 10px;
            border: none;
            background: none;
            cursor: pointer;
            transition: color 0.3s ease;
            text-decoration: underline;
            text-decoration-thickness: 4px;
        }

        .back-button:hover {
            color: #555;
        }

        /* Main Content Styling */


        nav {
            width: 100%;
            display: flex;
            
            align-items: center;
            padding: 10px 20px;
            background-color: transparent;
            /* Invisible background */
            position: absolute;
            z-index: 99999999;
            top: 0;
            left: 0;
        }
    </style>
     <nav>
        <a href="index.html" class="back-button">START PÅ NYTT</a>
       
    </nav>

    <main>
        <h1 id="title2">
            hvor skal han lære HTML?
        </h1>

        <section class="nam">
            <a href="choosesiteHtml.html">
            <button>På Skole</button>
            </a>
            <div class="image-container">
                <img src="assets/hvorsted.svg" alt="Illustrasjon fra boken">
            </div>
            
            <button onclick="hjemmeHtml()">Hjemme</button>
        </section>
        <script>
        startDownload();
       </script>
        
    </main>`;

}



function hjemmeHtml() {
    document.body.innerHTML = ` <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #f49f1c;
            color: #030e4f;
            font-family: sans-serif;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            /* Prevent scrolling */
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 30px;
        }

        .image-title-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            position: relative;
            /* Added for stacking context */
            margin-bottom: 100px;
            /* Added for spacing */
        }

        .image-container {
            width: 600px;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;
            /* Added for stacking context */
            z-index: 0;
            padding-right: 100px;
            /* Set image container to background */
        }

        .image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            background-color: #f49f1c;
            display: block;
            margin: auto;
        }

        #title2 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 30px;
            color: #030e4f;
            margin-bottom: 8px;
            margin-top: 0px;


            /* Brought title to the front */

        }

        #title2 h2 {
            font-size: 50px;
            
            text-align: center;
        }

        #sub-title {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 22px;
            color: #ffffff;
            margin-left: 0px;
            position: absolute;
            z-index: 2;
            /* Brought subtitle to the front */
        }

        .nam {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 30px;
            margin-bottom: 50px;

        }


        .nam button {
            background-color: #030e4f;
            color: #f49f1c;
            border: none;
            height: 100px;
            width: 400px;
            font-size: 30px;
            cursor: pointer;
            border-radius: 50px;
            z-index: 1;
            margin-left: 20px;
            margin-right: 20px;
        }

        @media (max-width: 768px) {
            .image-title-wrapper {
                flex-direction: column;
            }

            #title {
                font-size: 50px;
            }

            .nam {
                flex-direction: column;
                gap: 10px;
            }

            .nam button {
                width: 80%;
            }
        }

        area {
            cursor: pointer;
            outline: #030e4f;
        }

        area:hover {
            outline: 2px solid #030e4f;
            transition: outline 0.3s ease;
        }
              /* Navigation Bar Styling */
        .navbar {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            /* Align back button to the left */
            padding: 10px 20px;
            background: transparent;
            /* Transparent background for minimalism */
        }

        .back-button {
            font-size: 1rem;
            color: #333;
            text-decoration: none;
            padding: 5px 10px;
            border: none;
            background: none;
            cursor: pointer;
            transition: color 0.3s ease;
            text-decoration: underline;
            text-decoration-thickness: 4px;
        }

        .back-button:hover {
            color: #555;
        }

        /* Main Content Styling */


        nav {
            width: 100%;
            display: flex;
            
            align-items: center;
            padding: 10px 20px;
            background-color: transparent;
            /* Invisible background */
            position: absolute;
            z-index: 99999999;
            top: 0;
            left: 0;
        }
    </style>

     <nav>
        <a href="index.html" class="back-button">START PÅ NYTT</a>
       
    </nav>
    <main>


        <section id="title2">
            <h1>VELG AT HAN SKAL LÆRE MED PC PÅ INTERNETT</h1>
            <h2>Klikk på pcen</h2>
        </section>


        <img src="assets/nam.png" usemap="#nam" alt="">
        <map name="nam">

            

            <area 
            shape="circle" 
            coords="160,285,40" 
            href="javascript:void(0)" 
            onclick="pcHtml()" 
            alt="pc">
        </map>


    </main>
 `


}


function hjemmeIt() {
    document.body.innerHTML = ` <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #f49f1c;
            color: #030e4f;
            font-family: sans-serif;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            /* Prevent scrolling */
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 30px;
        }

        .image-title-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            position: relative;
            /* Added for stacking context */
            margin-bottom: 100px;
            /* Added for spacing */
        }

        .image-container {
            width: 600px;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;
            /* Added for stacking context */
            z-index: 0;
            padding-right: 100px;
            /* Set image container to background */
        }

        .image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            background-color: #f49f1c;
            display: block;
            margin: auto;
        }

        #title2 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 30px;
            color: #030e4f;
            margin-bottom: 8px;
            margin-top: 0px;


            /* Brought title to the front */

        }

        #title2 h2 {
            font-size: 50px;
            
            text-align: center;
        }

        #sub-title {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 22px;
            color: #ffffff;
            margin-left: 0px;
            position: absolute;
            z-index: 2;
            /* Brought subtitle to the front */
        }

        .nam {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 30px;
            margin-bottom: 50px;

        }


        .nam button {
            background-color: #030e4f;
            color: #f49f1c;
            border: none;
            height: 100px;
            width: 400px;
            font-size: 30px;
            cursor: pointer;
            border-radius: 50px;
            z-index: 1;
            margin-left: 20px;
            margin-right: 20px;
        }

        @media (max-width: 768px) {
            .image-title-wrapper {
                flex-direction: column;
            }

            #title {
                font-size: 50px;
            }

            .nam {
                flex-direction: column;
                gap: 10px;
            }

            .nam button {
                width: 80%;
            }
        }

        area {
            cursor: pointer;
            outline: #030e4f;
        }

        area:hover {
            outline: 2px solid #030e4f;
            transition: outline 0.3s ease;
        }
              /* Navigation Bar Styling */
        .navbar {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            /* Align back button to the left */
            padding: 10px 20px;
            background: transparent;
            /* Transparent background for minimalism */
        }

        .back-button {
            font-size: 1rem;
            color: #333;
            text-decoration: none;
            padding: 5px 10px;
            border: none;
            background: none;
            cursor: pointer;
            transition: color 0.3s ease;
            text-decoration: underline;
            text-decoration-thickness: 4px;
        }

        .back-button:hover {
            color: #555;
        }

        /* Main Content Styling */


        nav {
            width: 100%;
            display: flex;
            
            align-items: center;
            padding: 10px 20px;
            background-color: transparent;
            /* Invisible background */
            position: absolute;
            z-index: 99999999;
            top: 0;
            left: 0;
        }
    </style>
 <nav>
        <a href="index.html" class="back-button">START PÅ NYTT</a>
       
    </nav>
    <main>


        <section id="title2">
            <h1>VELG AT HAN SKAL LÆRE MED pc og INTERNETT</h1>
            <h2>Klikk på pcen</h2>
        </section>


        <img src="assets/nam.png" usemap="#nam" alt="">
        <map name="nam">

            

            <area 
            shape="circle" 
            coords="160,285,40" 
            href="javascript:void(0)" 
            onclick="pcIt()" 
            alt="pc">
        </map>


    </main>
 `

}




function pcHtml() {
    // this function will be called when the it button is pressed
    // it will create a new html page with the content of the book
    document.body.innerHTML = ` <style>
            /* Global styles */

            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body {
                background-color: #f49f1c;
                color: #030e4f;
                font-family: sans-serif;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                /* Prevent scrolling */
            }

            main {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                gap: 30px;
            }

            .image-title-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 30px;
                flex-wrap: wrap;
                position: relative;
                /* Added for stacking context */
                margin-bottom: 100px;
                /* Added for spacing */
            }

            .image-container {
                width: 600px;
                height: 600px;
                display: flex;
                justify-content: center;
                align-items: center;

                position: relative;
                /* Added for stacking context */
                z-index: 0;
                padding-right: 100px;
                /* Set image container to background */
            }

            .image-container img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                background-color: #f49f1c;
                display: block;
                margin: auto;
            }

            #title2 {
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                letter-spacing: 4px;
                font-size: 30px;
                color: #030e4f;
                margin-bottom: 8px;
                margin-top: 0px;


                /* Brought title to the front */

            }

            #title2 h2 {
                font-size: 50px;

                text-align: center;
            }

            #sub-title {
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                letter-spacing: 4px;
                font-size: 22px;
                color: #ffffff;
                margin-left: 0px;
                position: absolute;
                z-index: 2;
                /* Brought subtitle to the front */
            }

            .nam {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                gap: 30px;
                margin-bottom: 50px;

            }


            .nam button {
                background-color: #030e4f;
                color: #f49f1c;
                border: none;
                height: 100px;
                width: 400px;
                font-size: 30px;
                cursor: pointer;
                border-radius: 50px;
                z-index: 1;
                margin-left: 20px;
                margin-right: 20px;
            }

            @media (max-width: 768px) {
                .image-title-wrapper {
                    flex-direction: column;
                }

                #title {
                    font-size: 50px;
                }

                .nam {
                    flex-direction: column;
                    gap: 10px;
                }

                .nam button {
                    width: 80%;
                }
            }

            area {
                cursor: pointer;
                outline: #030e4f;
            }

            area:hover {
                outline: 2px solid #030e4f;
                transition: outline 0.3s ease;
            }



            .progress-container {
                width: 100%;
                max-width: 400px;
                background-color: #ddd;
                border-radius: 10px;
                overflow: hidden;
                height: 30px;
                margin: 20px 0;
                box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
            }

            .progress-bar {
                height: 100%;
                width: 0%;
                background-color: #030e4f;
                text-align: center;
                color: white;
                font-weight: bold;
                line-height: 30px;
                transition: width 0.2s ease;
            }

            img {
                width: 700px;
                height: auto;

            }

            #screen {
                position: absolute;
                top: 10%;
                left: 30%;
                width: 510px;
                height: auto;
               
                z-index: 99999;
            }

  /* Navigation Bar Styling */
        .navbar {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            /* Align back button to the left */
            padding: 10px 20px;
            background: transparent;
            /* Transparent background for minimalism */
        }

        .back-button {
            font-size: 1rem;
            color: #333;
            text-decoration: none;
            padding: 5px 10px;
            border: none;
            background: none;
            cursor: pointer;
            transition: color 0.3s ease;
            text-decoration: underline;
            text-decoration-thickness: 4px;
        }

        .back-button:hover {
            color: #555;
        }

        /* Main Content Styling */


        nav {
            width: 100%;
            display: flex;
            
            align-items: center;
            padding: 10px 20px;
            background-color: transparent;
            /* Invisible background */
            position: absolute;
            z-index: 99999999;
            top: 0;
            left: 0;
        }
            
        </style>
         <nav>
        <a href="index.html" class="back-button">START PÅ NYTT</a>
       
    </nav>
<figure>
    <img id="screen" src="assets/jsAnimationPc.gif" alt="">
    <img src="assets/laptop_frontview.svg" usemap="#nam" alt="">
</figure>

    </main>

    <script>

    </script>
    </body>`
    setTimeout(ferdigside, 15000);


}

function ferdigside() {
    document.body.innerHTML = `   <main>

    <style>

img {
            width: 800px;
            height: auto;
            
        }

        area {
            cursor: pointer;
            outline: #030e4f;
        }

        area:hover {
            outline: 2px solid #030e4f;
            transition: outline 0.3s ease;
        }

        /* Global styles */

* {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #f49f1c;
            color: #030e4f;
            font-family: sans-serif;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            /* Prevent scrolling */
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 30px;
        }

        .image-title-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            position: relative;
            /* Added for stacking context */
            margin-bottom: 100px;
            /* Added for spacing */
        }

        .image-container {
            width: 600px;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;
            /* Added for stacking context */
            z-index: 0;
            padding-right: 100px;
            /* Set image container to background */
        }

        .image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            background-color: #f49f1c;
            display: block;
            margin: auto;
        }

        #title2 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 30px;
            color: #030e4f;
            margin-bottom: 8px;
            margin-top: 0px;


            /* Brought title to the front */

        }

        #title2 h2 {
            font-size: 50px;
            
            text-align: center;
        }

        #sub-title {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 4px;
            font-size: 22px;
            color: #ffffff;
            margin-left: 0px;
            position: absolute;
            z-index: 2;
            /* Brought subtitle to the front */
        }

        .nam {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 30px;
            margin-bottom: 50px;

        }


        .nam button {
            background-color: #030e4f;
            color: #f49f1c;
            border: none;
            height: 100px;
            width: 400px;
            font-size: 30px;
            cursor: pointer;
            border-radius: 50px;
            z-index: 1;
            margin-left: 20px;
            margin-right: 20px;
        }

        @media (max-width: 768px) {
            .image-title-wrapper {
                flex-direction: column;
            }

            #title {
                font-size: 50px;
            }

            .nam {
                flex-direction: column;
                gap: 10px;
            }

            .nam button {
                width: 80%;
            }
        }

        area {
            cursor: pointer;
            outline: #030e4f;
        }

        area:hover {
            outline: 2px solid #030e4f;
            transition: outline 0.3s ease;
        }

        .progress-container {
  width: 100%;
  max-width: 400px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
  height: 30px;
  margin: 20px 0;
  box-shadow: inset 0 1px 4px rgba(0,0,0,0.2);
}

.progress-bar {
  height: 100%;
  width: 0%;
  background-color: #030e4f;
  text-align: center;
  color: white;
  font-weight: bold;
  line-height: 30px;
  transition: width 0.2s ease;
}

          /* Navigation Bar Styling */
        .navbar {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            /* Align back button to the left */
            padding: 10px 20px;
            background: transparent;
            /* Transparent background for minimalism */
        }

        .back-button {
            font-size: 1rem;
            color: #333;
            text-decoration: none;
            padding: 5px 10px;
            border: none;
            background: none;
            cursor: pointer;
            transition: color 0.3s ease;
            text-decoration: underline;
            text-decoration-thickness: 4px;
        }

        .back-button:hover {
            color: #555;
        }

        /* Main Content Styling */


        nav {
            width: 100%;
            display: flex;
            
            align-items: center;
            padding: 10px 20px;
            background-color: transparent;
            /* Invisible background */
            position: absolute;
            z-index: 99999999;
            top: 0;
            left: 0;
        }
    </style>
 <nav>
        <a href="index.html" class="back-button">START PÅ NYTT</a>
       
    </nav>
        <section id="title2">
            <h1 id="title">da er han ferdig å lære</h1>
            <h2 id="h2">Nå er det din tur</h2>
            
        </section>

<script>
    

</script>
     




    </main>

`
}


function pcIt() {
 
    document.body.innerHTML = ` <style>
            /* Global styles */

            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body {
                background-color: #f49f1c;
                color: #030e4f;
                font-family: sans-serif;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                /* Prevent scrolling */
            }

            main {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                gap: 30px;
            }

            .image-title-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 30px;
                flex-wrap: wrap;
                position: relative;
                /* Added for stacking context */
                margin-bottom: 100px;
                /* Added for spacing */
            }

            .image-container {
                width: 600px;
                height: 600px;
                display: flex;
                justify-content: center;
                align-items: center;

                position: relative;
                /* Added for stacking context */
                z-index: 0;
                padding-right: 100px;
                /* Set image container to background */
            }

            .image-container img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                background-color: #f49f1c;
                display: block;
                margin: auto;
            }

            #title2 {
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                letter-spacing: 4px;
                font-size: 30px;
                color: #030e4f;
                margin-bottom: 8px;
                margin-top: 0px;


                /* Brought title to the front */

            }

            #title2 h2 {
                font-size: 50px;

                text-align: center;
            }

            #sub-title {
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                letter-spacing: 4px;
                font-size: 22px;
                color: #ffffff;
                margin-left: 0px;
                position: absolute;
                z-index: 2;
                /* Brought subtitle to the front */
            }

            .nam {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                gap: 30px;
                margin-bottom: 50px;

            }


            .nam button {
                background-color: #030e4f;
                color: #f49f1c;
                border: none;
                height: 100px;
                width: 400px;
                font-size: 30px;
                cursor: pointer;
                border-radius: 50px;
                z-index: 1;
                margin-left: 20px;
                margin-right: 20px;
            }

            @media (max-width: 768px) {
                .image-title-wrapper {
                    flex-direction: column;
                }

                #title {
                    font-size: 50px;
                }

                .nam {
                    flex-direction: column;
                    gap: 10px;
                }

                .nam button {
                    width: 80%;
                }
            }

            area {
                cursor: pointer;
                outline: #030e4f;
            }

            area:hover {
                outline: 2px solid #030e4f;
                transition: outline 0.3s ease;
            }



            .progress-container {
                width: 100%;
                max-width: 400px;
                background-color: #ddd;
                border-radius: 10px;
                overflow: hidden;
                height: 30px;
                margin: 20px 0;
                box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
            }

            .progress-bar {
                height: 100%;
                width: 0%;
                background-color: #030e4f;
                text-align: center;
                color: white;
                font-weight: bold;
                line-height: 30px;
                transition: width 0.2s ease;
            }

            img {
                width: 700px;
                height: auto;

            }

            #screen {
                position: absolute;
                top: 10%;
                left: 30%;
                width: 510px;
                height: auto;
               
                z-index: 99999;
            }
                  /* Navigation Bar Styling */
        .navbar {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            /* Align back button to the left */
            padding: 10px 20px;
            background: transparent;
            /* Transparent background for minimalism */
        }

        .back-button {
            font-size: 1rem;
            color: #333;
            text-decoration: none;
            padding: 5px 10px;
            border: none;
            background: none;
            cursor: pointer;
            transition: color 0.3s ease;
            text-decoration: underline;
            text-decoration-thickness: 4px;
        }

        .back-button:hover {
            color: #555;
        }

        /* Main Content Styling */


        nav {
            width: 100%;
            display: flex;
            
            align-items: center;
            padding: 10px 20px;
            background-color: transparent;
            /* Invisible background */
            position: absolute;
            z-index: 99999999;
            top: 0;
            left: 0;
        }
        </style>
         <nav>
        <a href="index.html" class="back-button">START PÅ NYTT</a>
       
    </nav>
<figure>
    <img id="screen" src="assets/Itgif.gif" alt="">
    <img src="assets/laptop_frontview.svg" usemap="#nam" alt="">
</figure>

    </main>

    <script>

    </script>
    </body>`
    setTimeout(ferdigside, 15000);


}