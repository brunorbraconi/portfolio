import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import {motion} from 'framer-motion'
import { fadeInUp, routeAnimation } from '../animations'
export const resume = () => {
  return (
    <motion.div className='px-6 py-2' variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
     {/* education & exp  */}
     
     <div className="grid md:grid-cols-2 gap6">
      
      <motion.div variants ={fadeInUp} initial='initial' animate='animate'>
        <h5 className='my-3 font-bold text-2x1'>Education</h5>
        <div>
          <h5 className='my-2 text-xl font-bold'>
            Digital House 
            <p className='font-semibold'>Full Stack Web Developer (2021-2022)</p>
            <p className='my-3'>Currently enhancing my skills in C# and others code languages such as NextJS, Typescript, etc.</p>
          </h5>
        </div>
      </motion.div>
      <motion.div variants ={fadeInUp} initial='initial' animate='animate'>
        <h5 className='my-3 font-bold text-2x1'>Experience</h5>
        <div>
          <h5 className='my-2 text-xl font-bold'>
            -Freelance projects</h5>
            <p className='font-semibold'>-SPA Developer (2022 - On)</p>
            <p className='my-3'>As of know, I'm currently working as a freelancer developing different projects but I would most definitely love to be hired by a company doing what I love.</p>
        </div>
      </motion.div>
     </div>
     
     
     {/* languages & tools */}
     <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
        <div className='my-2'>
        {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
        </div>
      </div>
      <div>
        <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
        <div className='my-2'>
        {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
        </div>
      </div>
     </div>
    </motion.div>
  )
}
export default resume