import parcelImg from "../assets/parcel.png";
import blogImg from "../assets/blogWebsite.png";
import hockeyImg from "../assets/hockey.png";

const projects = [
  {
    id: 1,
    title: "Safety Move",
    type: "Full-stack",
    image: parcelImg,
    tech: ["React", "Tailwind", "MongoDB", "Express", "Node.js", "JWT"],
    features: [
      "Dynamic menu & instant availability",
      "Wishlist & user-based remove policy",
      "Comprehensive dashboard & admin controls",
      "Parcel bookings, payment & responsive design",
    ],
    demo: "https://safely-move.web.app/",
    client: "https://github.com/hossain-sani/parcel-management-clint",
    server: "https://github.com/hossain-sani/parcel-management-server",
  },
  {
    id: 2,
    title: "Blog Website",
    type: "Dynamic",
    image: blogImg,
    tech: ["React", "Tailwind", "MongoDB", "Express", "Node.js", "JWT"],
    features: [
      "Dynamic menu & instant availability",
      "Blog add, comment & wishlist system",
      "User-based remove policy",
      "Fully responsive for all devices",
    ],
    demo: "https://blog-website-sani42.web.app/",
    client: "https://github.com/hossain-sani/blog-website-clint",
    server: "https://github.com/hossain-sani/blog-website-server",
  },
  {
    id: 3,
    title: "Hockey",
    type: "Static",
    image: hockeyImg,
    tech: ["HTML5", "CSS3", "Tailwind"],
    features: [
      "Static menu with multiple sections",
      "Fully responsive for all devices",
      "Pixel-perfect landing page",
    ],
    demo: "https://hossain-sani.github.io/A03-Hockey/",
    client: "https://github.com/hossain-sani/A03-Hockey",
  },
];

export default projects;