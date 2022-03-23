import { GetServerSideProps } from "next"
import React, { ReactNode } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

export const Layout = (props: { cookie: string, children: ReactNode}): JSX.Element => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Games-Catolog</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/genre">Genre</Nav.Link>
          <Nav.Link href="/platform">Platform</Nav.Link>
            {props.cookie ? (
              <Nav.Link href="/api/auth/logout">Logout</Nav.Link>
            ) : (
            <Nav.Link href="/api/auth/login">Login/SignUp</Nav.Link>
            )}
          <Nav.Link href="/api/auth/me">Profil</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <article>
        {props.cookie}
        {props.children}
      </article>
    </div>
  )
}


