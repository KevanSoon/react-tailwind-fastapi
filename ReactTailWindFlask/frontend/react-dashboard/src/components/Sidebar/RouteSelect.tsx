"use client"

import { useRouteStore } from '@/store/useRouteStore'
import React from 'react'
import { IconType } from 'react-icons'
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from 'react-icons/fi'



const RouteSelect = () => {
  const {selectedRoute, setSelectedRoute} = useRouteStore()
  return <div className='space-y-1'>
        <Route onClick={() => setSelectedRoute("Dashboard")} Icon={FiHome} selected={selectedRoute === "Dashboard"} title="Dashboard"></Route>
        <Route onClick={() => setSelectedRoute("Team")} Icon={FiUsers} selected={selectedRoute === "Team"} title="Team"></Route>
  </div>
}


export default RouteSelect

const Route = ({
    selected,
    Icon,
    title,
    onClick,

}: {
    selected: boolean;
    Icon: IconType;
    title: string;
    onClick: () => void;
}) => {
    return <button onClick={onClick}
    className={`flex items-center justify-start gap-2 w-full
    rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,
    _color] ${selected 
        ? "bg-white text-stone-950 shadow"
    : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
    }`}>
        <Icon className={selected ? "text-violet-500" : ""}></Icon>
        <span>{title}</span>
    </button>
} 

