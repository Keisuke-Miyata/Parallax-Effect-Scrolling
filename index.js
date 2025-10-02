// // alert("Hello! I am an alert box!!");

// const images = document.querySelectorAll('.parallax-image');

// window.addEventListener('scroll', () => {
//     const scrollTop = window.scrollY;

//     images.forEach(img => {
//         const speed = parseFloat(img.dataset.speed);
//         img.style.transform = `translateY(-${scrollTop * speed}px)`;
//     });
// })



// alert("JS file is connected!");

$(window).bind('scroll', function (e) {
    parallaxScroll();
});


function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.sky').css('top', (0 - (scrolled * 0.1)) + 'px');
    $('.mountains').css('top', (0 - (scrolled * .2)) + 'px');
    $('.partial-mountain').css('top', (0 - (scrolled * .3)) + 'px');
    $('.person').css('top', (0 - (scrolled * .4)) + 'px');
    $('.ground').css('top', (0 - (scrolled * .5)) + 'px');
    // $('.main-title').css('top', (0 - (scrolled * .2)) + 'px');

}

function line(particle, particle2) {
    context.beginPath();
    context.moveTo(particle.x, particle.y);
    context.lineTo(particle2.x, particle2.y);
    context.stroke();
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < maxParticles; i++) {
        let particle = particles[i];
        context.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
        for (let j = 0; j < maxParticles; j++) {
            if (i != j) {
                let particle2 = particles[j];
                let distanceX = Math.abs(particle.x - particle2.x);
                let distanceY = Math.abs(particle.y - particle2.y);
                if (distanceX < threshold && distanceY < threshold) {
                    context.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
                    let color = 200 - Math.floor(distanceX + distanceY);
                    context.strokeStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
                    line(particle, particle2);
                }
            }
        }
        particle.x = particle.x + particle.vx;
        particle.y = particle.y + particle.vy;
        if (particle.x > canvas.width - particleSize || particle.x < particleSize)
            particle.vx = -particle.vx;
        if (particle.y > canvas.height - particleSize || particle.y < particleSize)
            particle.vy = -particle.vy;
    }
    window.requestAnimationFrame(animate);
}

let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let particles = [];
let particleSize = 4;
let maxParticles = 40;
let threshold = 100;
for (let i = 0; i < maxParticles; i++) {
    let particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random(),
        vy: Math.random()
    }
    particles.push(particle);
}
context.fillStyle = 'white';
animate();

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none'
}