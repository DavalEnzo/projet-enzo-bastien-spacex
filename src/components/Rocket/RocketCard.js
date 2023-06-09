import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

export default function RocketCard({ data }) {
    return (
        <Container className='card  p-0 w-100 overflow-hidden'>
            <Row>
                <Col className='d-flex p-0' xs={12} xl={6}>
                    <img src={data.flickr_images[0]} alt={data.name} className='w-100 h-100' />
                </Col>
                <Col xs={12} xl={6} className='pe-0 ps-0 text-center'>
                    <Row className='border rounded w-100 m-0 rocket_title'>
                        <h3>{data.name}</h3>
                    </Row>
                    <Row className='w-100 pe-8'>
                        <p>
                            <b>Pays:</b> {data.country}
                        </p>
                    </Row>
                    <Row className='w-100 px-2 m-0'>
                        <h5>Description</h5>
                        <p> {data.description}</p>
                    </Row>
                    <Row className='w-100 px-4'>
                        <Col>
                            <p>
                                <b>hauteur:</b> {data.height.meters}m
                            </p>
                        </Col>
                        <Col>
                            <p>
                                <b>diametre:</b> {data.diameter.meters}m
                            </p>
                        </Col>
                        <Col>
                            <p>
                                <b>Masse:</b> {data.mass.kg}Kg
                            </p>
                        </Col>
                    </Row>
                    <Row className='w-100 px-4'>
                        <Col>
                            <p>
                                <b>Prix du lancement:</b> {data.cost_per_launch}$
                            </p>
                        </Col>
                        <Col>
                            <p>
                                <b>nombre d'étages:</b> {data.stages}
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='border w-100 ms-0 h-100 rocket_title '>
                <Link to={data.id} className='w-100 text-center text-decoration-none'>
                    <h3>Voir plus</h3>
                </Link>
            </Row>
        </Container>
    )
}
