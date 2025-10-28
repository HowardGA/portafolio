import imjuverConecta from '../assets/imjuverCon.png';
import warebox from '../assets/warebox.jpeg';
import imgSP1 from '../assets/smartpipes/1.png';
import imgSP2 from '../assets/smartpipes/2.png';
import imgSP3 from '../assets/smartpipes/3.png';
import imgSP4 from '../assets/smartpipes/4.png';
import imgSP5 from '../assets/smartpipes/5.png';
import imgSP6 from '../assets/smartpipes/6.png';
import imgSP7 from '../assets/smartpipes/7.png';
import imgSP8 from '../assets/smartpipes/8.png';
import imgSP9 from '../assets/smartpipes/9.png';
export const projects = [
    {
        title: "Imjuver Conecta",
        subtitle: "A modern e-commerce platform",
        description: "Built with React, Node.js, and Stripe for payments. Features a clean, responsive design and a fast backend API.",
        image: imjuverConecta,
        techStack: ["React", "Node.js", "Express", "Stripe"],
        link: "https://project-alpha-demo.com",
        galleryImages: []
    },
    {
        title: "WareBox",
        subtitle: "A modern e-commerce platform",
        description: "Built with React, Node.js, and Stripe for payments. Features a clean, responsive design and a fast backend API.",
        image: warebox,
        techStack: ["React", "Node.js", "Express", "Stripe"],
        link: "https://project-alpha-demo.com",
        galleryImages: []
    },
    {
        title: "Washintong",
        subtitle: "A real-time chat application",
        description: "A secure chat app using WebSockets and Express.js. Users can create rooms and send real-time messages.",
        image: "/images/project-beta.png",
        techStack: ["React", "WebSockets", "Socket.io", "Express"],
        link: "https://project-beta-demo.com",
         galleryImages: []
    },
    {
        title: "SmartPipes",
        subtitle: "A real-time chat application",
        description: "A secure chat app using WebSockets and Express.js. Users can create rooms and send real-time messages.",
        image: imgSP1,
        techStack: ["React", "WebSockets", "Socket.io", "Express"],
        link: "https://project-beta-demo.com",
        galleryImages: [
            imgSP1,
            imgSP2,
            imgSP3,
            imgSP4,
            imgSP5,
            imgSP6,
            imgSP7,
            imgSP8,
            imgSP9,
        ]
    }
];