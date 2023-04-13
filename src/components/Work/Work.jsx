import React from 'react';
import { useState , useEffect} from 'react';
import './Work.css'
import SingleWork from '../SingleWork/SingleWork';
import Conception from '../Conception/Conception';

const Work = () => {
// const projects = ["./wordpress.mp4", "./mypeacefulplace.mp4", "./blog.mp4", "./jsvanilla.mp4", "./mytvapp.mp4", "./appburger.mp4"];
const projects = [
    { id: 1, title: "Website Integration", technos: "Wordpress CMS", src: "./wordpress.mp4" , content: ['Astra Theme & Spectra Plugin', 'Customize Navigation', 'Add Animations'], repo: ""},
    { id: 2, title: "Mobile App MyPeacefulPlace", technos: "React / Node.Js + Next.JS", src: "./mypeacefulplace.mp4" , content: ['Positive Quotes Gallery & Editor', 'Customizable Cards', 'Signin & Login Session'], repo: "https://github.com/ZyanneM/mypeacefulplace" },
    { id: 3, title: "Development Blog", technos: "PHP + MVC Template", src:  "./blog.mp4", content: ['CRUD Training', 'Ajax Reviews', 'Login/Signin'], repo: "https://github.com/ZyanneM/blog"},
    { id: 4, title: "Cupcake Small Game", technos: "Javascript Vanilla", src:  "./jsvanilla.mp4", content: ['Dynamic Display', 'Keyboard Event', 'Style Manipulations'], repo: "https://github.com/ZyanneM/revisions_js" },
    { id: 5, title: "TVApp API Training", technos: "React", src: "./mytvapp.mp4" , content: ['API Call', 'Asynchrone Functions', 'React Router Configuration'], repo: "https://github.com/ZyanneM/mytvapp" },
    { id: 6, title: "React Burger App", technos: "React", src: "./appburger.mp4" , content: ['React Props Training', 'Cart Simulation', 'Tabs Navigation'], repo: "https://github.com/ZyanneM/react-burger-app"}
  ];

const [selectedItem, setSelectedItem] = useState(0);

const setItemSlider = (event) => {
  const targetId = event.target.id || event.target.parentNode.id;
  setSelectedItem(parseInt(targetId));
}

useEffect(() => {

    const slideItems = document.querySelectorAll('.work-card');
  const selectedItemValue = selectedItem; 

  
    slideItems.forEach((item, index) => {
        if(selectedItem){
      let slideOffset = index - selectedItemValue;
      
      // slideOffset = slideOffset < slidesNumber - 1 ? slideOffset + 1 : 0
      if(slideOffset < 0) slideOffset += slideItems.length;

      for (let i = 0; i < slideItems.length +1; i++) { 
            item.classList.remove(`item-${i}`);
            item.classList.add(`item-${slideOffset +1}`);
        } 
            
      }
    });
  }, [selectedItem]);


    return (
        <div className='work-container' id="work">
            <h1 className='work-section-title'>Some of my web development adventures</h1>
            {/* <p>Put here an awesome projects gallery</p> */}
            <div className='slides-container'>
                <div 
                className='slide-items'
                onClick={(event) => setItemSlider(event)}
                    >
                {projects.map((project, index) => (
                    <div
                    // onClick={(event) => setItemSlider(event)}
                    key={project}
                    id={index}
                    className={`work-card item-${index}`}>
                    <SingleWork
                    src={project.src}
                    title={project.title}
                    technos={project.technos}
                    content={project.content}
                    repo={project.repo}
                    key={project}
                />
                </div>
                ))}
                </div>
            </div>
            <div className="slider-navigation">
                    <button className="slider-nav prev">&lsaquo;</button>
                    <button className="slider-nav next">&rsaquo;</button>
                </div>  
            <div className="slider-dots">
                        <ul>
                        {projects.map((project) => ( 
                            <li
                            key={project}></li>
                ))}
                        </ul>
                    </div>
                    <Conception/>
        </div>
    );
};



export default Work;


//Code presque fonctionnel 

// const [selectedItem, setSelectedItem] = useState(0);

// const setItemSlider = (event) => {
//   const targetId = event.target.id || event.target.parentNode.id;
//   setSelectedItem(parseInt(targetId));
// }

// useEffect(() => {
//   const slideItems = document.querySelectorAll('.work-card');
//   slideItems.forEach((item, index) => {
//     if(selectedItem){
//     item.classList.remove('item-0', 'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6');
//     item.classList.add(`item-${(index - selectedItem + slideItems.length) % slideItems.length + 1}`);
//   }});
// }, [selectedItem]);



// const slideItems = document.querySelectorAll('.work-card');
// const slidesNumber = slideItems.length;



// slideItems.forEach((item, index) => {

//   if(selectedItem){
//       let slideOffset = index - selectedItem;

//       // slideOffset = slideOffset < slidesNumber - 1 ? slideOffset + 1 : 0
//       if(slideOffset < 0) slideOffset += slideItems.length;

//      item.classList.replace(`item-${index}`, `item-${index+1}`)};
// });
// }, [selectedItem]);
