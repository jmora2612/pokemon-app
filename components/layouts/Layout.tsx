import Head from "next/head"
import { ReactNode } from 'react';
import {FC} from "react"
import { Navbar } from '../ui';


interface MyProps {
    children?: ReactNode;
    title?: string
 }

export const Layout: FC<MyProps>= ({children, title}) => {
  return (
    <>
    <Head>
        <title>{title ? title : 'prueba'}</title>
        <meta name='autor' content='Jessi Mora'/>
        <meta name='description' content={`informacion sobre el pokemon ${title}`}/>
        <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
    </Head>
    <Navbar/>
    <main style={{padding:"0px 20px"}}>
        {children}
    </main>
    </>
  )
}
