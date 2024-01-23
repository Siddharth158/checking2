let counter = document.querySelector(".line1-part1 h5");
let grow = 0;
let loaderIsTrue = true;
let navIsShowing = false
let now = document.querySelector(".now");
let tl = gsap.timeline();
let tl2 = gsap.timeline();
let event_image = document.querySelector('.events_img');
let details_child = Array.from(document.querySelectorAll('.details_child'))
let nav_elements = document.querySelectorAll('.real_nav div');
let hamburger = document.querySelector('.hamberger')
let hamburgerLines = document.querySelectorAll('.hamberger_line')


function navAnimation() {
    hamburger.addEventListener('click', () => {
        if (navIsShowing) {
            gsap.to('.real_nav', {
                right: '-30%',
                opacity: 0,
                duration: 0.5,
                onComplete: function () {
                    navIsShowing = false
                }
            })
            gsap.to(hamburgerLines[0], {
                rotate: '0deg',
                y: 0
            })
            gsap.to(hamburgerLines[1], {
                x: 0,
                opacity: 1
            })
            gsap.to(hamburgerLines[2], {
                rotate: '0deg',
                y: 0
            })
        }
        else {
            gsap.to('.real_nav', {
                right: '0%',
                opacity: 1,
                duration: 0.5,
                onComplete: function () {
                    navIsShowing = true
                }
            })
            gsap.to(hamburgerLines[0], {
                rotate: '45deg',
                y: 13
            })
            gsap.to(hamburgerLines[1], {
                x: 100,
                opacity: 0
            })
            gsap.to(hamburgerLines[2], {
                rotate: '-45deg',
                y: -13
            })
        }
    })
    nav_elements.forEach((elem) => {
        elem.addEventListener('mouseenter', (e) => {
            gsap.to(e.target.children, {
                y: -50,
                duration: 0.5
            })
        })
        elem.addEventListener('mouseleave', (e) => {
            gsap.to(e.target.children, {
                y: 0,
                duration: 0.5
            })
        })
        elem.addEventListener('click', () => {
            gsap.to('.real_nav', {
                right: '-30%',
                opacity: 0,
                duration: 0.5,
                onStart: function () {
                    navIsShowing = false
                    gsap.to(hamburgerLines[0], {
                        rotate: '0deg',
                        y: 0
                    })
                    gsap.to(hamburgerLines[1], {
                        x: 0,
                        opacity: 1
                    })
                    gsap.to(hamburgerLines[2], {
                        rotate: '0deg',
                        y: 0
                    })
                }
            })
        })
    })
}
navAnimation();


function counterwAnimation() {
    const growInterval = setInterval(() => {
        if (grow <= 100) {
            counter.innerHTML = grow++;
        }
    }, 25)
    tl.to(".line, .wait", {
        opacity: 0,
        duration: 0.5,
        delay: 3,
        onComplete: function () {
            stopCounter();
        }
    })
    tl.to('#loader', {
        y: -1200,
        display: "none",
        duration: 1,
        ease: "power4.in",
        onStart: function () {
            loaderIsTrue = false;
            gsap.set('body', { overflow: 'visible', })
            gsap.from(".hero_body h1, .hero_body h3", {
                y: 150,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.5
            })
        }

    })

    function stopCounter() {
        clearInterval(growInterval);
    }
}
function loaderAnimation() {
    if (loaderIsTrue) {
        gsap.set('body', { overflow: 'hidden' })
        gsap.from(".line h1", {
            y: 200,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.2
        })
        gsap.from(".line1-part1 h5, .now, .wait, .loader_background", {
            opacity: 0,
            duration: 1.5,
            delay: 0.2,
            onStart: function () {
                counterwAnimation();
            }
        })
    }

}
loaderAnimation();


function eventAnimation() {
    event_image.addEventListener('click', () => {
        tl2.to(details_child[0], {
            x: 200,
            opacity: 0,
            duration: 0.5,
            onStart: function () {
                gsap.set(details_child[1], { x: -200, opacity: 0 })
            }
        })
        tl2.to(details_child[1], {
            x: 10,
            opacity: 1,
            duration: 0.5
        })
        tl2.to(details_child[0], {
            x: -200,
            onComplete: function () {
                let temp = details_child.shift();
                details_child.push(temp);
            }
        })
    })
    Shery.imageEffect(".events_img", {
        style: 2,
        config: { "resolutionXY": { "value": 100 }, "distortion": { "value": false }, "mode": { "value": -10 }, "mousemove": { "value": 3 }, "modeA": { "value": 1 }, "modeN": { "value": 0 }, "speed": { "value": 1, "range": [-500, 500], "rangep": [-10, 10] }, "frequency": { "value": 50, "range": [-800, 800], "rangep": [-50, 50] }, "angle": { "value": 0.5, "range": [0, 3.141592653589793] }, "waveFactor": { "value": 1.4, "range": [-3, 3] }, "color": { "value": 10212607 }, "pixelStrength": { "value": 3, "range": [-20, 100], "rangep": [-20, 20] }, "quality": { "value": 5, "range": [0, 10] }, "contrast": { "value": 1, "range": [-25, 25] }, "brightness": { "value": 1, "range": [-1, 25] }, "colorExposer": { "value": 0.18, "range": [-5, 5] }, "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] }, "exposer": { "value": 8, "range": [-100, 100] }, "zindex": { "value": "100", "range": [-9999999, 9999999] }, "aspect": { "value": 1.4916760425237563 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0.05, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 0.74, "range": [0.1, 5] }, "durationIn": { "value": 0.77, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.61, "range": [0, 10] }, "metaball": { "value": 0.18, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] }, "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.98, "range": [-1, 1] } },
        gooey: true,
    });
}
eventAnimation();
