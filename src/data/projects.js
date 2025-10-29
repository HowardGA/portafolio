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
        subtitle: "Content Manager",
        description: "Content Manager web app for the government, designed to show posts, job listings, contacts, proposals, and courses for youth where they can apply and use them directly in the web app.",
        techStack: ["React", "Node.js", "Express", "Prisma", "Postgre"],
        link: "https://project-alpha-demo.com",
        galleryImages: [
            imjuverConecta
        ]
    },
    {
        title: "WareBox",
        subtitle: "Logistics web app",
        description: "Web application used to plan routes, track stock in different warehouses, manage a trailer truck fleet, provide live tracking, and handle restocking.",
        techStack: ["React", "Laravel REST", "Firebase", "Postgre", "Google Maps"],
        link: "https://project-alpha-demo.com",
        galleryImages: [
            warebox
        ]
    },
    {
        title: "WareBox mobile app",
        subtitle: "Route Navigation for drivers",
        description: "Native Android app that allows driver employees to see their routes for the day, departures, and estimated arrival times, and includes GPS navigation for the created route in the web app. The app can scan the boxes of the cargo and show contents for inventory users, and it also registers boxes and their contents linked to an order.",
        techStack: ["Jetpack Compose", "Google Maps"],
        link: "https://project-alpha-demo.com",
        galleryImages: []
    },
    {
        title: "Washington",
        subtitle: "Inventory web app",
        description: "Inventory web app for the fictional cleaning supplies company, 'Washington.' Independent stores can create restock requests to the main warehouse that pass through different states when the request is being prepared. It shows the main inventory and individual store inventories.",
        techStack: ["React", "WebSockets", "Socket.io", "Express"],
        link: "https://project-beta-demo.com",
         galleryImages: []
    },
    {
        title: "Washington Mobile App",
        subtitle: "Inventory native app",
        description: "Working with the same Washington API, this app lets inventory users scan QR/bar codes to view item information. It also processes stock requests from the main web app, allowing users to scan requests, update, confirm/cancel their status, or log their arrival.",
        techStack: ["Jetpack Compose"],
        link: "https://project-beta-demo.com",
         galleryImages: []
    },
    {
        title: "Washington Wearable App",
        subtitle: "Simple notificarion wearable app",
        description: "Working with the same Washington API, this app notifies selected user roles of the restock request being made, allowing them to confirm or cancel it. Users can also see at first glance the contents of the orders and related information.",
        techStack: ["Jetpack Compose"],
        link: "https://project-beta-demo.com",
         galleryImages: []
    },
    {
        title: "SmartPipes",
        subtitle: "Inventory - Production Line",
        description: "Web app for the fictional 'SmartPipes' hydroponic systems company where users can see the inventory of specific warehouses, create restock requests, and manage 'factories' that have production lines. An assembly order can be made to a specific factory and production line where the user, based on the stock, can create a set number of hydroponic systems and retrieve the necessary materials from the warehouses that have them.",
        image: imgSP1,
        techStack: ["React", "Django REST", "Postgre"],
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