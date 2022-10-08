import React from 'react'
import {HiOutlineDocumentDownload} from 'react-icons/hi'
import {GrNext} from 'react-icons/gr'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn btn-primary' href="#about">Explore <GrNext className='cta_icon'/></a>
        <a className='btn' href="https://drive.google.com/drive/folders/1JoYhvR2LAOs7atCZcOqDiwgNE3ThsOnS?usp=sharing" target="_blank" rel="noreferrer">Download CV <HiOutlineDocumentDownload className='cta_icon'/></a>
    </div>
  )
}

export default CTA
