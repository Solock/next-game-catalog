import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

export const Layout: React.FC = (props: { cookie: string}, {children}) => {
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
        {children}
      </article>
    </div>
  )
}



