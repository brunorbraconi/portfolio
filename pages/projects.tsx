import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../types'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
export const Projects = () => {
  useEffect(() => {
    document.title = "Bruno Braconi"
 }, ["Bruno Braconi"]);
  
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("All");
  const [showDetail, setShowDetail] = useState<number | null>(null);
  
  const handlerFilterCategory = (category:Category | 'All') =>{
    if(category === "All"){
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter(projects=>projects.category.includes(category));
    setProjects(newArray);
    setActive(category);
  }
  
  
  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit' className='px-5 py-2' style={{height:'65vh'}}>
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active}/>
      
      <motion.div className='relative grid grid-cols-12 gap-4 my-3' variants={stagger} 
      initial='initial' 
      animate='animate'>
        {projects.map(project=>(
            <motion.div className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'
            variants={fadeInUp}
            key={project.name}>
              <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  );
};
export default Projects