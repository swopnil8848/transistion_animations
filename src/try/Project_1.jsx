import React from 'react'
import './Project_1.css'

const Project_1 = () => {

  window.addEventListener('scroll',reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal')
    // console.log(reveals)

    for(var i = 0;i<reveals.length;i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top
      if(revealTop<windowHeight-130){
        reveals[i].classList.add('active')
      }else{
        reveals[i].classList.remove('active')
      }
    }
  }

  
  return (
    <div>
      <header  className='flex items-center justify-center first' >
        <h1 className='text-5xl font-bold'>reveal elements on scroll</h1>
      </header>

      <section className='flex items-center justify-evenly reveal second'>

        <div className='mx-20 h-fit'>
          <h2>
            Tittle
          </h2>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint molestiae expedita culpa officia, odit velit nisi ut dicta sit unde nemo alias?
          </div>
        </div>

        <div className='mx-20'>
          <h2>
            Tittle
          </h2>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint molestiae expedita culpa officia, odit velit nisi ut dicta sit unde nemo alias?
          </div>
        </div>
        
        <div className='mx-20'>
          <h2>
            Tittle
          </h2>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint molestiae expedita culpa officia, odit velit nisi ut dicta sit unde nemo alias?
          </div>
        </div>  
      </section>

      <section className='flex items-center justify-evenly reveal third'>
        <div>
          <h2>
            Tittle
          </h2>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint molestiae expedita culpa officia, odit velit nisi ut dicta sit unde nemo alias?
          </div>
        </div>

        <div className='mx-20'>
          <h2>
            Tittle
          </h2>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint molestiae expedita culpa officia, odit velit nisi ut dicta sit unde nemo alias?
          </div>
        </div>
        
        <div>
          <h2>
            Tittle
          </h2>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint molestiae expedita culpa officia, odit velit nisi ut dicta sit unde nemo alias?
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project_1