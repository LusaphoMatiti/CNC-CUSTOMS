import project1 from "./images/Project-1.jpg";
import project2 from "./images/Project-2.jpg";
import project3 from "./images/Project-3.jpg";
import project4 from "./images/Project-4.jpg";

export const homePageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "projects" },
];

export const otherPageLinks = [
  { id: 1, href: "/", text: "home" },
  { id: 2, href: "/about", text: "about" },
  { id: 3, href: "/services", text: "services" },
  { id: 4, href: "/projects", text: "projects" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com/cnccustoms.co.za/",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.instagram.com/cnccustoms/",
    icon: "fab fa-instagram",
  },
  { id: 3, href: "https://www.twitter.com", icon: "fas fa-envelope" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-cog",
    title: "CNC Turning",
    text: "Precision CNC Turning services for high-quality, custom parts. Fast turnaround and competitive pricing. Enhance your manufacturing process today",
  },
  {
    id: 2,
    icon: "fas fa-wrench",
    title: "CNC Milling",
    text: "Expert CNC Milling solutions for intricate and durable components. Reliable service with precision engineering. Contact us for a quote.",
  },
  {
    id: 3,
    icon: "fas fa-drafting-compass",
    title: "3D design and prototyping",
    text: "High-resolution 3D Printing for rapid prototyping and production. Versatile materials and detailed accuracy. Perfect for your innovative projects.",
  },
  {
    id: 4,
    icon: "fas fa-cut",
    title: "laser cutting",
    text: "Advanced Laser Cutting services for accurate, clean cuts on various materials. Ideal for industrial and creative applications.",
  },
  {
    id: 5,
    icon: "fas fa-pen",
    title: "laser engraving",
    text: "High-precision Laser Engraving for detailed and permanent markings. Customizable for personal and industrial needs. Get a custom quote today.",
  },
];

export const tours = [
  {
    id: 1,
    image: project1,
    date: "June 20th, 2020",
    title: "YG Endmillings",
    text: "Even when I'm not trying to get an amazing finish... THESE YG endmills won't have any of it... Sweet finish it is sir!",
  },
  {
    id: 2,
    image: project2,
    date: "January 20, 2020",
    title: "Stainless Steel Rolls",
    text: "A few stainless steel parts to get the year rolling. She's really held off on this rolling for a while this year. Oh well... More time to relax at the start of the year.",
  },
  {
    id: 3,
    image: project3,
    date: "march 15, 2019",
    title: "Laser cutting",
    text: "  What you do when your son has a party and you have a #lasercutting machine",
  },
  {
    id: 4,
    image: project4,
    date: "july 6, 2015",
    title: "CNC Lathe",
    text: "Couple hundred of these little pins.",
  },
];
