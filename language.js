const englishHTML = `
<nav id="main-nav">
<ul>
    <li><a href="#main-header">Home</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#about-me">About Me</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#main-footer">Social Media</a></li>
    <img src="img/matrixprofile.png" alt="profile" width="50" id="nav-profile-img" href="#main-header">
</ul>
</nav>
<header id="main-header">
<div id="intro-animation">
    <canvas id="canvas1"></canvas>
    <div id="title-bar">
        <h1 id="header-name">Sebastian <br> Delgado</h1>
        <h1 id="developer-label">Software Engineer</h1>
    </div>
</div>
<div id="scroll-down">
    <button id="scroll-to-project-button">View My Projects</button>
    <i class="fas fa-arrow-down" id="down-arrow-header"></i>
</div>
</header>
<section id="projects">
<h1 id="project-title">Projects I've made</h1>
<div id="neline-project" class="project">
    <div class="project-left">
        <h2 style="margin-bottom: 2rem;">NeLine Graphing Calculator</h2>
        <p> Neline is my own graphing calculator coded from scratch in vanilla js. It can draw graphs and perform numerical computations. The special thing is that the user can directly code in their own functions, and it's also possible to solve differential equations and visualize linear transformations. </p>
        <p>This is an alternative to other commercial graphing calculators like desmos or geogebra. I built it using the built-in Canvas API in JavaScript, In the video to the right I do an in depth explanation of how I made it.</p>
        <div class="neline-links">
            <div>
                <a href="https://neline.netlify.app">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/graphing-calculator" >Code</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>
    <div id="neline-right">
        <div id="black-foreground">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/06Ou5lkGgbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="project-video"></iframe>
        </div>
        <h1 id="neline-title">neLine</h1>
    </div>
</div>

<div id="nasa-project" class="project">
    <div id="neline-right">
        <div id="black-foreground">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TJ9IJsKirqA?start=1765" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="project-video"></iframe>
        </div>
    </div>
    <div class="project-right" id="nasa-info">
        <h2 style="margin-bottom: 2rem;">NASA Webpage</h2>
        <p>I made my own version of NASA:s landing page, built with a focus on css grid. The goal was to make a fully responsive site, that was even slightly more responsive than the original site! In the video to the right I have tutorial on how I built the page. </p>
        <p> Det var en uppföljare till min tidigare kopia efter jag gjorde en klon av <a href="https://github.com/SebCodesTheWeb/disneyclone">disney.se</a></p>
        <div class="neline-links">
            <div>
                <a href="https://nasa-landingpage-clone.netlify.app/">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/NASA-landingpage" >Code</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>
</div>

<div id="prime-project" class="project">
    <div class="project-left">
        <h2 style="margin-bottom: 2rem;">The Prime Number Vault </h2>
        <p>I built this project, that can generate prime numbers between a given intervall by checking if they are divisble by any integer that's smaller than the numbers square root.</p>
        <p>On this list the user can then click on a number and get fun facts about the number from the numbers api. (note: this does not work in the deployed version because netlify does not accept http apis, run it locally for proper use)</p>
        <div class="neline-links">
            <div>
                <a href="https://generateprimes.netlify.app/">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/primeNumbers">Code</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>

    <div id="neline-right">
        <div id="black-foreground">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HKxW4fHlmUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div id="pi-project" class="project">
    <div id="neline-right">
        <div id="black-foreground">
            <img src="img/pi.png" alt="PI" id="pi" class="project-video">
        </div>
    </div>

    <div class="project-right">
        <h2 style="margin-bottom: 2rem">Approximate PI</h1>
        <p>With what is called Monte Carlo integration, one can generate a bunch of random dots to estimate the are of a graph. This method I used to approximate the area under the unit circle(radius=1) in the first quadrant. Using this I could approximate the value of PI</p>
        <div class="neline-links">
            <div>
                <a href="https://approximatepi.netlify.app/">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/approximatePI">Code</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>
</div>

<div id="image-project" class="project">
    <div class="project-left">
        <h2 style="margin-bottom: 2rem;">Google Images in 10min</h2>
        <p> I made a challenge on my youtube-channel where I was going to make a functional web app in 10min, where the user could could search for images related to some specific keywords. Basically Google images. The images were taken from the unsplash API.</p>
        <div class="neline-links">
            <div>
                <a href="https://photosearch-unsplash.netlify.app/">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/photosearch">Kod</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>

    <div id="neline-right">
        <div id="black-foreground">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7EArFLOI8ek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="project-video"></iframe>
        </div>
    </div>
</div>
</section>
<section id="about-me">
<h1 style="margin-bottom: 6rem; color:var(--color-four); line-height: 1.6em;">About Me</h1>
<div id="info-me">
    <div id="intro-about-me">
        <p>Hi! My name is Sebastian and I'm a pupil at Procivitas Privata Gymnasium based in Malmö Sweden where I'm currently studying the natural sciences. I build websites and software using HTML, CSS, JavaScript and recently also React. I've always loved technology and have made my own games in unity from age eleven.</p>
        <p>After programming my second huge interest is mathematics, so most often I'm coding something related to math, currently I'm dabbling with calculus and linear algebra.</p>
        <p>I'm right now looking for an internship as a web developer, particularly frontend-development. My CV is linked below and you can send an email below, I'm always open to new opportunities</p>
        <div style="font-size: 1.5rem; margin-top: 3rem;">
            <a href="https://drive.google.com/file/d/1msGBNQrk76uA8Y_27cqBV_QCfwpJGxxZ/view?usp=sharing" >CV</a>
            <i class="fas fa-file"></i>
        </div>
    </div>
    <div id="images-about-me">
        <img src="img/setup.jpg" alt="My computer setup" class="img-about-me" id="setup-img">
    </div>
</div>
</section>¨
<section id="contact">
<h1 style="margin-bottom: 1rem;">Contact</h1>
<h4 style="max-width: 90%; margin: 4em auto; margin-top:0;">I'm always open to new opportunities</h4>
<div id="splitter">
    <div id="contact-info" style="max-width: 90vw;">
        <h3 style="margin-bottom: 2rem;">Contact Records</h3>
        <h4>Namn: Sebastian Delgado</h5>
        <h4>Mail: sede2.pcm@procivitas.se</h4>
        <h4>Telefonnr: +46709422087</h4>
    </div>
    <div id="form-mail">
        <!-- https://formcarry.com/s/1_l8QPODFiM -->
        <form action="#" method="POST" accept-charset="UTF-8" id="form">
            <h3>Send email directly</h3>
            <div>
                <label for="email">Your Email</label>
                <input type="email" name="email"><!-- use this to reply visitors and prevent spam via akismet -->
            </div>
            <div>
                <label for="firstName">Your Name/Company Name</label>
                <input type="text" name="firstName">
            </div>
            <div>
                <label for="text">Message</label>
                <textarea name="message" cols="40" rows="10"></textarea>
            </div>
            <input type="hidden" name="_gotcha"><!-- use this to prevent spam -->
            <input type="submit" value="Send">
        </form>
    </div>
</div>
</section>
<footer id="main-footer">
<h1 style="color: var(--color-four)">Social Media</h1>
<div id="social-media">
    <div>
        <a href="https://github.com/SebCodesTheWeb">Github</a>
        <i class="fab fa-github"></i>
    </div>
    <div>
        <a href="https://www.youtube.com/channel/UCikWIcChAOSwoc2qpbZ6iIA">Youtube</a>
        <i class="fab fa-youtube"></i>
    </div>
    <div>
        <a href="https://www.linkedin.com/in/sebastian-delgado-4735151a5/">LinkedIn</a>
        <i class="fab fa-linkedin"></i>
    </div>
    <div>
        <a href="https://dev.to/sebcodestheweb">Blog</a>
        <i class="fab fa-dev"></i>
    </div>
    <div>
        <a href="https://www.instagram.com/sebcodestheweb/">Instagram</a>
        <i class="fab fa-instagram-square"></i>
    </div>
</div>
</footer>

`

const swedishHTML = `
<nav id="main-nav">
<ul>
    <li><a href="#main-header">Hem</a></li>
    <li><a href="#projects">Projekt</a></li>
    <li><a href="#about-me">Om Mig</a></li>
    <li><a href="#contact">Kontakt</a></li>
    <li><a href="#main-footer">Social Media</a></li>
    <img src="img/matrixprofile.png" alt="profile" width="50" id="nav-profile-img" href="#main-header">
</ul>
</nav>
<header id="main-header">
<div id="intro-animation">
    <canvas id="canvas1"></canvas>
    <div id="title-bar">
        <h1 id="header-name">Sebastian <br> Delgado</h1>
        <h1 id="developer-label">Programmerare</h1>
    </div>
</div>
<div id="scroll-down">
    <button id="scroll-to-project-button">Se mina projekt</button>
    <i class="fas fa-arrow-down" id="down-arrow-header"></i>
</div>
</header>
<section id="projects">
<h1 id="project-title">Projekt jag Kodat</h1>
<div id="neline-project" class="project">
    <div class="project-left">
        <h2 style="margin-bottom: 2rem;">NeLine Graphing Calculator</h2>
        <p>NeLine är min egenprogrammerade grafräknare, som kan rita grafer och göra numeriska beräkningar. Det speciella är att användaren kan direkt koda in sina egna funktioner och det går att lösa differential ekvationer och visualisera linjära transformer.</p>
        <p>Detta är ett alternativ till geogebra(en kommersiell grafräknare), som kan göra vissa nischade grejer bättre. Jag byggde den i JavaScript med hjälp av Canvas API:n</p>
        <div class="neline-links">
            <div>
                <a href="https://neline.netlify.app">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/graphing-calculator" >Kod</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>
    <div id="neline-right">
        <div id="black-foreground">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/06Ou5lkGgbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="project-video"></iframe>
        </div>
        <h1 id="neline-title">neLine</h1>
    </div>
</div>

<div id="nasa-project" class="project">
    <div id="neline-right">
        <div id="black-foreground">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TJ9IJsKirqA?start=2938" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="project-video"></iframe>
        </div>
    </div>
    <div class="project-right" id="nasa-info">
        <h2 style="margin-bottom: 2rem;">NASA Hemsida</h2>
        <p>Det här är en kopia av NASA.gov hemsida, byggt med fokus på css grid. Målet var att göra en fullt responsiv sida, som till och med är lite mer robust än den officiella sidan! </p>
        <p> Det var en uppföljare till min tidigare kopia efter jag gjorde en klon av <a href="https://github.com/SebCodesTheWeb/disneyclone">disney.se</a></p>
        <div class="neline-links">
            <div>
                <a href="https://nasa-landingpage-clone.netlify.app/">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/NASA-landingpage" >Kod</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>
</div>

<div id="prime-project" class="project">
    <div class="project-left">
        <h2 style="margin-bottom: 2rem;">Primtals Generator</h2>
        <p>En app som kan generera primtal mellan intervall genom att kolla om dem är delbara med något tal mindre än talets rot.</p>
        <p>Man kan sedan få up en box med information om primtalet(not: detta verkar inte funka i live versionen pga felatkig http kod)</p>
        <div class="neline-links">
            <div>
                <a href="https://generateprimes.netlify.app/">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/primeNumbers">Kod</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>

    <div id="neline-right">
        <div id="black-foreground">
            <iframe width="560" height="450" src="https://www.youtube.com/embed/HKxW4fHlmUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="project-video"></iframe>
        </div>
    </div>
</div>

<div id="pi-project" class="project">
    <div id="neline-right">
        <div id="black-foreground">
            <img src="img/pi.png" alt="PI" id="pi" class="project-video">
        </div>
    </div>

    <div class="project-right">
        <h2 style="margin-bottom: 2rem">Approximera PI</h1>
        <p>Med så kallad Monte Carlo integreration kan man generera en massa slumpmässiga punkter för att estimera en area av en graf. Denna metod använde jag för att approximera arean av enhetscirkeln(radie=1), för att därefter räkna ut värdet av PI</p>
        <div class="neline-links">
            <div>
                <a href="https://approximatepi.netlify.app/">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/approximatePI">Kod</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>
</div>

<div id="image-project" class="project">
    <div class="project-left">
        <h2 style="margin-bottom: 2rem;">Google Bilder på 10min</h2>
        <p>Jag gjorde en utmaning på min youtube-kanal där jag skulle programmera en fungerande web app på 10min, där användaren kunde söka efter bilder relaterade till nyckelord. Alltå i princip Google Bilder. Detta gjordes genom att ta bilder från unsplash.</p>
        <div class="neline-links">
            <div>
                <a href="https://photosearch-unsplash.netlify.app/">Demo</a>
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div>
                <a href="https://github.com/SebCodesTheWeb/photosearch">Kod</a>
                <i class="fab fa-github"></i>
            </div>
        </div>
    </div>

    <div id="neline-right">
        <div id="black-foreground">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7EArFLOI8ek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="project-video"></iframe>
        </div>
    </div>
</div>
</section>
<section id="about-me">
<h1 style="margin-bottom: 6rem; color:var(--color-four); line-height: 1.6em;">Om Mig</h1>
<div id="info-me">
    <div id="intro-about-me">
        <p>Hej! Jag heter Sebastian och går på Procivitas Privata Gymnasium i Malmö där jag läser naturvetenskap. Jag kodar hemsidor samt mjukvara med HTML, CSS och JavasScript på min fritid. Jag har alltid varit förtjust i teknologi och har sysslat med att programmera mina egna spel i Unity sedan jag var elva.</p>
        <p>Mitt andra stora intresse är matematik, (jag läser faktiskt fyra år före mina jämnåriga och hoppade en klass), så oftast programmerar jag något som är relaterat till just matte. För nuvarande sysslar jag med första årets universitetsmatematik, dvs endimensionell analys och linjär algebra.</p>
        <p style="font-weight: 700;">Jag söker just nu praktik inom programmering, partikulärt front end utveckling, men är även intresserad av att lära mig nya saker. </p>
        <div style="font-size: 1.5rem; margin-top: 3rem;">
            <a href="https://drive.google.com/file/d/1UB7RabUMYZE0cMpDA2zKEjGLJy7rmvw9/view?usp=sharing" >CV</a>
            <i class="fas fa-file"></i>
        </div>
    </div>
    <div id="images-about-me">
        <img src="img/setup.jpg" alt="My computer setup" class="img-about-me" id="setup-img">
    </div>
</div>
</section>¨
<section id="contact">
<h1 style="margin-bottom: 1rem;">Kontakt</h1>
<h4 style="max-width: 90%; margin: 4em auto; margin-top:0;">Jag är alltid intresserad av nya möjligheter.</h4>
<div id="splitter">
    <div id="contact-info" style="max-width: 90vw;">
        <h3 style="margin-bottom: 2rem;">Kontaktuppgifter</h3>
        <h4>Namn: Sebastian Delgado</h5>
        <h4>Mail: sede2.pcm@procivitas.se</h4>
        <h4>Telefonnr: +46709422087</h4>
    </div>
    <div id="form-mail">
        <!-- https://formcarry.com/s/1_l8QPODFiM -->
        <form action="#" method="POST" accept-charset="UTF-8" id="form">
            <h3>Skicka mail direkt</h3>
            <div>
                <label for="email">Din Email</label>
                <input type="email" name="email"><!-- use this to reply visitors and prevent spam via akismet -->
            </div>
            <div>
                <label for="firstName">Ditt Namn/Företagsnamn</label>
                <input type="text" name="firstName">
            </div>
            <div>
                <label for="text">Meddelande</label>
                <textarea name="message" cols="40" rows="10"></textarea>
            </div>
            <input type="hidden" name="_gotcha"><!-- use this to prevent spam -->
            <input type="submit" value="Skicka">
        </form>
    </div>
</div>
</section>
<footer id="main-footer">
<h1 style="color: var(--color-four)">Sociala Medier</h1>
<div id="social-media">
    <div>
        <a href="https://github.com/SebCodesTheWeb">Github</a>
        <i class="fab fa-github"></i>
    </div>
    <div>
        <a href="https://www.youtube.com/channel/UCikWIcChAOSwoc2qpbZ6iIA">Youtube</a>
        <i class="fab fa-youtube"></i>
    </div>
    <div>
        <a href="https://www.linkedin.com/in/sebastian-delgado-4735151a5/">LinkedIn</a>
        <i class="fab fa-linkedin"></i>
    </div>
    <div>
        <a href="https://dev.to/sebcodestheweb">Blog</a>
        <i class="fab fa-dev"></i>
    </div>
    <div>
        <a href="https://www.instagram.com/sebcodestheweb/">Instagram</a>
        <i class="fab fa-instagram-square"></i>
    </div>
</div>
</footer>
`

import runCanvasAnimation from "./matrix.js";
import runScrollHandler from "./scroll.js"


fetch('https://api.ipregistry.co/?key=9arst6ertvyekfd8')
    .then(function (response) {
        return response.json();
    })    
    .then(function (payload) {
        if(payload.location.country.name === "Sweden") {
            document.body.innerHTML = englishHTML; 
            runCanvasAnimation();
            runScrollHandler();
        } 
        else {
            document.body.innerHTML = swedishHTML; 
            runCanvasAnimation();
            runScrollHandler();
        }   
    })
    .catch(error => {
        console.log(error);
        document.body.innerHTML = englishHTML; 
    });    
    
