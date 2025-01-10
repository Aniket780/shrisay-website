import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import shrisaylogo from './newlogo.jpeg'
import pjlogo from './pjlogo.jpeg'
import cross_icon from './cross_icon.svg'
import link_icon from './linkicon.jpg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './Full-Home-Interior.webp'
import project_img_2 from './Luxury.webp'
import project_img_3 from './Office-1.webp'
import project_img_4 from './Furniture-Designs.webp'
import project_img_5 from './Garden-1.webp'
import project_img_6 from './modern-light.jpg'
import profile_img_1 from './pro3.webp'
import profile_img_2 from './pro2.jpg'
import profile_img_3 from './pro1.webp'

export const assets = {
    logo,
    logo_dark,
    shrisaylogo,
    pjlogo,
    link_icon,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Full Home Decor",
      image: project_img_1
    },
    {
      title: "Luxury Interiors",
      image: project_img_2
    },
    {
      title: "Office Decor",
      image: project_img_3
    },
    {
      title: "Modern Lighting",
      image: project_img_6
    },

    {
      title: "Furniture Designs",
      image: project_img_4
    },
    {
      title: "Garden Decor",
      image: project_img_5
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Dola Das",
        // title: "Marketing Manager",
        image: profile_img_1,
        alt: "Img",
        rating: 5,
        text: "Shrisay Interio completely transformed our home! Their team understood our taste and blended traditional Indian elements with modern design seamlessly. Every corner reflects elegance and functionality. We couldn't be happier with the results!"
    },
    {
        name: "Sneha Patel",
        // title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Img",
        rating: 4,
        text: "The team at Shrisay Interio did a fantastic job blending contemporary style with our traditional Indian heritage. From the modular kitchen to the cozy bedrooms, every space feels thoughtfully designed. They truly exceeded our expectations!"
    },
    {
        name: "Animesh Pal",
        // title: "Co-Founder",
        image: profile_img_3,
        alt: "Img",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me built my dream home. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];