"use client"

import React, { useState } from 'react'
import TopBar from './TopBar'
import Grid from './Grid'
import { useRouteStore } from '@/store/useRouteStore'
import Chatbot from './Chatbot'


const Dashboard = () => {

  const {selectedRoute} = useRouteStore()

  return (
    <div className='bg-white rounded-lg pb-4 shadow'>
        {selectedRoute === 'Dashboard' &&    <TopBar></TopBar>}
        {selectedRoute === 'Dashboard' &&   <Grid></Grid>}
        {selectedRoute === 'Team' &&   <Chatbot></Chatbot>}
    </div>
  )
}




export default Dashboard
