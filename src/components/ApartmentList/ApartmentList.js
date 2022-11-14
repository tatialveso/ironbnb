import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import AddApartment from "../AddApartment/AddApartment";


function ApartmentList() {
    const [apartments, setApartments] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        axios.get("https://ironbnb-m3.herokuapp.com/apartments")
        .then((response) => {
            setApartments(response.data)
            setFetching(false)
        })
        .catch((error) => console.log(error))
    }, [])

    const renderApartments = apartments.map((apto) => {
        return (
            <Col key={apto._id}>
                <div className="card">
                    <img src={apto.img} />
                    <h3>{apto.title}</h3>
                    <p>Price: {apto.pricePerDay}</p>
                </div>
            </Col>
        )
    })

    return (
        <div>
            <Container>
                <Row>
                    <AddApartment />
                </Row>
                <Row>
                    { fetching && <Spinner animation="border" /> }
                    { renderApartments.reverse() }
                </Row>
            </Container>
        </div>
    );
}

export default ApartmentList;