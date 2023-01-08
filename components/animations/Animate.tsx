import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
    elem?: HTMLDivElement | null;
    elem1?: HTMLDivElement | null;
    elem2?: HTMLDivElement | null;
    elem3?: HTMLDivElement | null;
    elem4?: HTMLDivElement | null;
}

//Text Intro
export const textIntro = (elem: Props) => {
    gsap.from(elem, {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
        scale: -1,
        ease: "back",
    });
};

//Open menu
export const menuShow = (elem1 : Props, elem2 : Props ) => {
    gsap.from([elem1, elem2], {
        duration: 0.7,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power4.inOut",
        stagger: {
            amount: 0.2,
        },
    })
}

//Close menu
export const menuHide = (elem1 : Props, elem2 : Props ) => {
    gsap.to([elem1, elem2], {
        duration: 0.8,
        height: 0,
        ease: "power4.inOut",
        stagger: {
            amount: 0.07,
        },
    })
}

//Stagger links
export const staggerLinks = (elem1 : Props, elem2 : Props, elem3 : Props, elem4 : Props) => {
    gsap.from([elem1, elem2, elem3, elem4], {
        opacity: 0,
        duration: 1,
        delay: .2,
        y: 20,
        stagger: {
            amount: .6
        }
    })
}

// Hover on the link
export const hoverLink = (e : Props) => {
    // @ts-ignore
    gsap.to(e.target, {
        duration: 0.4,
        y: 3,
        skewX: 4,
        ease: "power2.inOut"
    });
};

// Hover away from the link
export const hoverExit = (e : Props) => {
    // @ts-ignore
    gsap.to(e.target, {
        duration: 0.4,
        y: -3,
        skewX: 0,
        ease: "power2.inOut"
    });
};

//Skew gallery Images
export const skewGallery = (elem1 : Props) => {
    //register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(elem1, { transformOrigin: "right center", force3D: true });
    let clamp = gsap.utils.clamp(-20, 20) // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
        // @ts-ignore
        trigger: elem1,
        onUpdate: (self) => {
            const velocity = clamp(Math.round(self.getVelocity() / 300));
            gsap.to(elem1, {
                skew: 0,
                skewY: velocity,
                ease: "power3",
                duration: 0.8,
                overwrite: true,
            });
        },
    });
}


// Scroll Texts
export const textScroll = (elem1 : Props) => {
    //register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(elem1, { transformOrigin: "right center", force3D: true });

    ScrollTrigger.create({
        // @ts-ignore
        trigger: elem1,
        start: "top bottom",
        end: "bottom 200px",
        scrub: 1,
        pin: '.ghost',
        markers: true,
        onUpdate: (self) => {
            gsap.from(elem1, {
                duration: 1.8,
                y: 100,
                opacity: 0,
                ease: "power4.out",
                delay: 0.1,
                skewY: 5,
                stagger: {
                    amount: 0.4
                }
            });
        },
    });

}