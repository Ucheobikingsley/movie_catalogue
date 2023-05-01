import React,{ReactNode} from 'react'
type LayoutProps = {children?: ReactNode}
export const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Header></Header>
    <main>
        {children}
    </main>
    </>
  )
}
