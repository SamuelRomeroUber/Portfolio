document.getElementById('btnApertura').addEventListener('click', () => {
    let contenedorExperiencia = document.querySelector('.contenedor-experiencia');
    contenedorExperiencia.classList.toggle('activo');
});

document.getElementById("traductorBtn").addEventListener("click", function () {
    document.querySelector("h1").textContent = "Samuel Romero Uber";
    document.querySelector("p").textContent = "Web Developer";
    document.querySelector(".contenedor-experiencia h2").textContent = "About Me";
    document.querySelector(".contenedor-experiencia p").textContent = 
        "I am a web developer with experience in creating functional and dynamic web pages and applications. I am passionate about programming and enjoy the process of designing and developing digital solutions that enhance user experience.";
    document.querySelector(".contenedor-experiencia h3").textContent = "Languages & Technologies";
    document.querySelectorAll(".contenedor-experiencia p")[1].textContent = "I work with several programming languages and technologies, such as:";
    
    let langElements = document.querySelectorAll(".contenedor-experiencia p");
    langElements[2].textContent = "☕ Java";
    langElements[3].textContent = "🐍 Python";
    langElements[4].textContent = "💾 SQL";
    langElements[5].textContent = "📜 JavaScript";
    langElements[6].textContent = "🎨 HTML & CSS";

    document.querySelector(".contenedor-experiencia h3:last-of-type").textContent = "Passion for Web Development";
    document.querySelector(".contenedor-experiencia p:last-of-type").textContent =
        "I enjoy working in front of a computer, solving problems, and optimizing code to create efficient and attractive applications. Web development is a constantly evolving field, which motivates me to learn new technologies and continue improving my skills.";
});
