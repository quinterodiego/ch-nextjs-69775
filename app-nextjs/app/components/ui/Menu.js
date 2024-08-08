'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MenuList } from './MenuList'

export const Menu = () => {

  const [open, setOpen] = useState(false)

  const hanleOpen = () => setOpen(!open)
  const handleClose = () => setOpen(!open)

  return (
    <div onClick={hanleOpen} className='hover:border hover:rounded-lg p-3 hover:cursor-pointer'>
      <Image src={'/main-menu.png'} alt='menu img' height={30} width={30} />
      <MenuList handleClose={handleClose} open={open} />
    </div>
  )
}
