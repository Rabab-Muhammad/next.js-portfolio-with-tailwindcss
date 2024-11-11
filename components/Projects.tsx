
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id:0,
        title:"Countdown Timer",
        desc:"Next.js & Typescript powered website to track time",
        img:"/countdown_timer.png",
        tags:["Next.js","Node","Css","Typescript"],  
    },
    {
        id:1,
        title:"Weather Widget",
        desc:"Next.js & Typescript tool for fetch",
        img:"/weather-widget.png",
        tags:["Next.js","Node","Css","Typescript"],
    },
    {
        id:2,
        title:"Static Interactive Resume",
        desc:"A Typescript based interactive resume built with HTML & CSS",
        img:"/resume.png",
        tags:["HTML","Node","CSS","Typescript"],
    }
]

const Project = () => {
  return (
    <div id="projects" className='container pt-[31px]'>
      <Heading title='My-Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
      
    </div>
  )
}

export default Project;
