import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'

export const resume = () => {

  
  return (
    <div className='px-6 py-2'>
     {/* education & exp  */}
     
     <div className="grid md:grid-cols-2 gap6">
      
      <div>
        <h5 className='my-3 font-bold text-2x1'>Education</h5>
        <div>
          <h5 className='my-2 text-xl font-bold'>
            Digital House 
            <p className='font-semibold'>Full Stack Web Developer (2021-2022)</p>
            <p className='my-3'>I am currently studying C#, and others code languages</p>
          </h5>
        </div>
      </div>
      <div>
        <h5 className='my-3 font-bold text-2x1'>Experience</h5>
        <div>
          <h5 className='my-2 text-xl font-bold'>
            Freelance projects 
            <p className='font-semibold'>SPA Developer (2022 - On)</p>
            <p className='my-3'>I currently work as a freelance but i would like to be hired by a company</p>
          </h5>
        </div>
      </div>
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
    </div>
  )
}
export default resume