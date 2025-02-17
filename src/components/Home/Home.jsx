import React from 'react'
import RecentProducts from '../RecentProducts/RecentProducts'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'

export default function Home() {
  return (
<>
    <MainSlider/>
    <CategorySlider/>
    <RecentProducts/>
</>
  )
}
