import React,{ReactNode} from 'react'
type LayoutProps = {children?: ReactNode}
export const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Header>header</Header>
    <main>
        {children}
    </main>
    </>
  )
}
