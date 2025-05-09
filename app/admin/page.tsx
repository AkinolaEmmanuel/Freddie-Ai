"use client"
import { ColumnDef } from '@tanstack/react-table'
import { Manager } from '@/types/manager'
import React from 'react'
import { DataTable } from '@/components/data-table'
import { useManagers } from '@/hooks/useManagers'

export default function Home() {


  const { data, isLoading, isError } = useManagers()

  const columns: ColumnDef<Manager[]>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
  {
    accessorKey: "companyDescription",
    header: "Company Description",
  },
]

  return (
    <div className='px-5'>
      <h1 className='text-lg font-bold'>Manager</h1>
      <div className='mt-5'>
        <DataTable columns={columns} data={Array.isArray(data) ? data : []} isLoading={isLoading} isError={isError}/>
      </div>
    </div>
  )
}
