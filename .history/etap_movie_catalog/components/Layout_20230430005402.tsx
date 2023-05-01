import React,{ReactNode} from 'react'

export const Layout = ({children: ReactNode}) => {
  return (
    <>
    <main>
        {children}
    </main>
    </>
  )
}
