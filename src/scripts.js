import { Application } from "https://cdn.skypack.dev/@splinetool/runtime@latest";

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.
    load('https://prod.spline.design/UQuA5ebtQrgFaFTQ/scene.splinecode')
    .then(() => {
        const card = app.findObjectByName("Card");

        gsap.set(card.scale, { x: 0.55, y: 0.55, z: 0.55 });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#part1",
                start: "top center",
                end: "bottom bottom",
                scrub: true
            }
        })
            .to(card.rotation, { x: -Math.PI / 14, z: Math.PI / 36 }, 0)
            .to(card.position, { x: -60, y: 100 }, 0)
            .to(card.scale, { x: 1.6, y: 1.6, z: 0.7 }, 0);


        gsap.timeline({
            scrollTrigger: {
                trigger: "#part2",
                start: "top center",
                end: "bottom bottom",
                scrub: true
            }
        })
            .to(card.rotation, { x: -Math.PI / 14, z: Math.PI / 36 }, 0)
            .to(card.position, { x:200, y: 170 }, 0)
            .to(card.scale, { x: 1, y: 1, z: 1 }, 0);
    })