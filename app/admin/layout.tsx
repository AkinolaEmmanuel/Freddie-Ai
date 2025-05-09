import React from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'



function Header() {
  return (
    <div className="px-5">
      <h1 className="text-lg font-bold">Admin Dashboard</h1>
    </div>
  )
}


export default function layout({children}: {children: React.ReactNode}) {
  return (
    
        <SidebarProvider>
        <AppSidebar/>
        <div className="flex flex-col w-full h-screen bg-gray-100">
        <div className="flex justify-between w-full h-20 py-5">
        <SidebarTrigger>
        </SidebarTrigger>
        <Header></Header>
        </div>
        
        {/* Main content */}
        {children}
        </div>
        
      </SidebarProvider>
    
  )
}
