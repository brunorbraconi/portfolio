import React from 'react'
import ServiceCard from '../components/ServiceCard'
import {services}  from '../data'
import {motion} from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
export const index = () => {
  return (
    <motion.div className='flex flex-col flex-grow px-6 pt-1' variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
     <h5 className='my-3 font-medium'>I' am a Junior Full Stack Web Developer with 1+ year of experience in Web Development. I'm a former Dota 2 competitive player and I'm also incredibly passionate about E-Sports.
     </h5>
     <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-200' style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
      <h6 className='my-3 text-xl font-bold tracking-wide text-white'>What I Offer</h6>
      <motion.div className='grid gap-6 lg:grid-cols-2' variants={stagger} 
      initial='initial' 
      animate='animate'>
        {
          services.map(service => (
          <motion.div        
          variants={fadeInUp}
          className='bg-gray-300 rounded-lg lg:col-span-1 dark:bg-dark-200'>
          <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
     </div>
    </motion.div>
  )
}

export default index

//  export const getServerSideProps: getServerSideProps = async (context:GetServerSidePropsContext) => {
//    const res = await fetch('/api/services')
//    const data = await res.json()
//   return {
//      props:{
//       services: data.services,
//     }
//    }
//  }

// export const getStaticProps = async (context:GetStaticPropsContext) => {
//   console.log('server', services)
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   return {
//     props:{
//       services: data.services,
//     }
//   }
// }