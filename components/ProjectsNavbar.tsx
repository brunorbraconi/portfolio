import React, { FunctionComponent } from 'react'
import { Category } from '../types'

export const NavItem:FunctionComponent<{value:Category | 'All', handlerFilterCategory:FunctionComponent, active:string}> = ({value,
handlerFilterCategory, active}) => {
  let className = 'cursor-pointer hover:text-purple-500'
  if (active === value)
  className += ' text-purple-500'
  return (
    <li className={className} onClick={()=>handlerFilterCategory(value)}>
        {value}
    </li>
  )
}


const ProjectsNavbar = (props) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
<NavItem value="All" {...props}/>
<NavItem value="React" {...props}/>
<NavItem value="Javascript"{...props} />
<NavItem value="Node" {...props}/>
<NavItem value="Express" {...props}/>
<NavItem value="HTML" {...props}/>
<NavItem value="CSS" {...props}/>
    </div>
  )
}

export default ProjectsNavbar