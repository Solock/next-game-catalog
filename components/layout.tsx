import Link from "next/link"
import React, { ReactNode } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

export const Layout = (props: { cookie: any, children: ReactNode}): JSX.Element => {
  console.log(props?.children)

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Games-Catolog</Navbar.Brand>
        <Nav className="me-auto">
          <Link href="/"><a className="navbar-brand">Home</a></Link>
          <Link href="/games"><a className="navbar-brand">Games</a></Link>
          <Link href="/genre"><a className="navbar-brand">Genre</a></Link>
          <Link href="/cart"><a className="navbar-brand">Cart</a></Link>
          <Link href="/platform"><a className="navbar-brand">Platform</a></Link>
            {props.cookie ? (
              <Link href="/api/auth/logout"><a className="navbar-brand">Logout</a></Link>
            ) : (
            <Link href="/api/auth/login"><a className="navbar-brand">Login/SignUp</a></Link>
            )}
          <Link href="/api/auth/me"><a className="navbar-brand">Profil</a></Link>
        </Nav>
        </Container>
      </Navbar>

      <article>
        {props.children}
      </article>
    </div>
  )
}


