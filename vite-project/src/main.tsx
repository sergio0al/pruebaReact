import React from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Header } from './Header'
import { Footer } from './Footer'
import { Datos } from './Datos'
import { Login, iniciarLogin } from './Login'
import { client } from './lib/supabase'
import "./index.css"

const container = document.querySelector("#root")!
const root = createRoot(container)

async function render() {
  const { data: { session } } = await client.auth.getSession()
  const id = location.hash.slice(1)


  if (!session) {
    location.hash = "login"  
  

    flushSync(() => {
      root.render(
        <React.Fragment>
          <Header session={session}/>
          <Login/>
          <Footer/>
        </React.Fragment>
      )
    })

    iniciarLogin()
    return
  }




  if (!id) {
    root.render(
      <React.Fragment>
        <Header session={session}/>
        <App/>
        <Footer/>
      </React.Fragment>
    )
    return
  }

  

  const { data: producto } = await client.from("productos_electronica").select("*").eq("id", id).single()

  root.render(
    <React.Fragment>
      <Header session={session}/>
      <Datos producto={producto}/>
      <Footer/>
    </React.Fragment>
  )
}

render()
window.addEventListener("hashchange", render)