import { Card, Container, Button, Row, Col } from "react-bootstrap";

export const Contacto = () => {
  const contactos = [
    {
      nombre: "Gabriel Arturo Prieto",
      img: "https://avatars.githubusercontent.com/u/205220297?v=4",
      github: "https://github.com/prieto555"
    },
    {
      nombre: "Palacios Carrión Nicolás Leonel",
      img: "https://avatars.githubusercontent.com/u/129820472?s=400&u=7f0c3c7cfce0e32430f62e82df1f507e5ecd2b17&v=4",
      github: "https://github.com/Nico-Palacios"
    },
    {
      nombre: "Venancio Lucio Copa",
      img: "https://avatars.githubusercontent.com/u/205220008?v=4",
      github: "https://github.com/VenancioCopa"
    }
  ];

  return (
    <Container className="px-3 py-5">
      <h1 className="text-center mt-4">Contactos</h1>

      <Row className="mt-5 justify-content-center g-4">
        {contactos.map((contacto, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={contacto.img}
                alt="No imagen"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{contacto.nombre}</Card.Title>
                <div className="d-grid gap-2 mt-3">
                  <Button
                    as="a"
                    href={contacto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    Ver GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
