import { RiComputerLine } from 'react-icons/ri';
import { IProject, IService, ISkill } from './types';
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi} from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'

export const services: IService[] = [
{
    Icon: RiComputerLine,
    title: 'Front-end Developer',
    about: 'I can build scalable SPA using <b> HTML</b> and <b>React.js</b>'
},
{
    Icon: FaServer,
    title: 'Backend Development',
    about:'Handle database, server, api using <b> Express</b>'

},
{
    Icon: AiOutlineApi,
    title: 'API Development',
    about:'Can develop robust REST API using <b> Node Fetch</b>'

},
{
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:'Can handle tools like <b> Figma</b>'

},
{
    Icon: MdDeveloperMode,
    title: 'Stack',
    about: 'HTML, CSS, Javascript, NodeJS, Express, MySQL and React'
},
]

export const languages: ISkill[] = [
    {
        name:'HTML',
        level: '80%',
        Icon:BsCircleFill,
    },
    {
        name:'CSS',
        level: '70%',
        Icon:BsCircleFill,
    },
    {
        name:'Javascript',
        level: '70%',
        Icon:BsCircleFill,
    },
    {
        name:'NodeJS',
        level: '50%',
        Icon:BsCircleFill,
    },
    {
        name:'Express',
        level: '60%',
        Icon:BsCircleFill,
    },
    {
        name:'React',
        level: '80%',
        Icon:BsCircleFill,
    },
    {
        name:'SQL',
        level: '50%',
        Icon:BsCircleFill,
    },
    {
        name:'NextJS',
        level: '70%',
        Icon:BsCircleFill,
    },
    {
        name:'TypeScript',
        level: '70%',
        Icon:BsCircleFill,
    },
]

export const tools: ISkill[] = [
    {
        name:'Figma',
        level: '85%',
        Icon:BsCircleFill,
    },
    {
        name:'Photoshop',
        level: '45%',
        Icon:BsCircleFill
    },
]

export const projects: IProject[] = [
    {
        name: "La Guarida del dragon",
        description: 'This is a functionally E-Commerce',
        image_path: "/images/laguarida.jpg",
        deployed_url: "https://la-guarida-del-dragon.herokuapp.com/",
        github_url: "https://github.com/AgustinPotes/grupo_5_juegosDeRol",
        category:['Express', 'Javascript', 'Node'],
        key_techs:['Javascript ', 'HTML ', 'CSS ', 'Express ', 'NodeJS']
    },
    {
        name: "Dashboard La Guarida",
        description: 'Dashboard of the E-Commerce',
        image_path: "/images/laguaridadashboard.png",
        deployed_url: "https://dashboardlaguarida.netlify.app/",
        github_url: "https://github.com/brunorbraconi/dashboardproyecto",
        category:['React', 'Node'],
        key_techs:['React ', 'NodeJS']
    },    
];