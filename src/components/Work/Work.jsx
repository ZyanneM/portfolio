import React from 'react';
import { useState , useEffect} from 'react';
import './Work.css'
import SingleWork from '../SingleWork/SingleWork';
import Conception from '../Conception/Conception';
import SingleWorkMobile from '../SingleWorkMobile/SingleWorkMobile';

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



  let index = 0;

    const [selectedItem, setSelectedItem] = useState(0);

    const [projectList, setProjectList] = useState(projects);

    useEffect( () => {
      const mainDiv = document.getElementById("slide-items");
      mainDiv.style.pointerEvents = "none";
    
  
      const children = mainDiv.getElementsByTagName("*");
      for (var i = 0; i < children.length; i++) {
        children[i].style.pointerEvents = "auto";
    }
    
    },[])

    const setItemSlider = (event) => {
        const targetId = event.target.id || event.target.parentNode.id;

        setSelectedItem(parseInt(targetId));
    }


        const getItemClass = (index) => {
            const diff = index - selectedItem;
            const adjustedIndex = (diff + projects.length) % projects.length;
            return `item-${adjustedIndex}`;
        };

        const getItemClassMobile = (index) => {
            const diff = index - selectedItem;
            const adjustedIndex = (diff + projects.length) % projects.length;
            return `item-${adjustedIndex}-mobile`;
        };


        const handleNextClick = () => {
            if (selectedItem)
              setSelectedItem((prevSelectedItem) => (prevSelectedItem + 1) % projects.length);
          };
      
          const handlePrevClick = () => {
            if (selectedItem)
              setSelectedItem((prevSelectedItem) => (prevSelectedItem - 1 + projects.length) % projects.length);
          };


    useEffect(() => {

        const slideItems = document.querySelectorAll('.work-card');
        const selectedItemValue = selectedItem;


    
    

    

        slideItems.forEach((item, index) => {
            if (selectedItem) {
                let slideOffset = index - selectedItemValue;
     
                if (slideOffset < 0) slideOffset += slideItems.length;

                for (let i = 0; i < slideItems.length; i++) {
                    let classeVar = 0;
                    classeVar++;
                    if (classeVar > 5) {
                        item.classList.replace(`item-${classeVar + 1}`, `item-${i - slideItems.length}`);
                    } else {
                        item.classList.replace(`item-${index}`, `item-${classeVar + 1}`);
                    }
                }

            }
        });
    }, [selectedItem]);


    return (
        <div className='work-container' id="work">
            <h1 className='work-section-title'>Some of my web development adventures</h1>
         
            <div className='slides-container'>
                <div
                    className='slide-items'
                    id='slide-items'
                    onClick={(event) => setItemSlider(event)}
                >
                    {projectList.map((project, index) => (
                        <div className='work-card-container'>
                            <div
                            
                                key={project}
                                id={index}
                                className={`work-card ${projectList ? getItemClass(index) : ""}`}>
                                <SingleWork
                                    src={project.src}
                                    title={project.title}
                                    technos={project.technos}
                                    content={project.content}
                                    repo={project.repo}
                                    key={project}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='slides-container-mobile'>
                    {projectList.map((project, index) => (
                        <div className="mobile-card-container">
                            <div
                                
                                    key={project}
                                    id={index}
                                    className={`work-card-mobile ${projectList ? getItemClassMobile(index) : ""}`}>
                                    <SingleWorkMobile
                                        src={project.src}
                                        title={project.title}
                                        technos={project.technos}
                                        content={project.content}
                                        repo={project.repo}
                                        key={project}
                                    /></div>
                        </div>
                    ))}
            </div>
            <div className="slider-navigation">
                <button className="slider-nav prev" onClick={handlePrevClick}>&lsaquo;</button>
                <button className="slider-nav next" onClick={handleNextClick}>&rsaquo;</button>
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
