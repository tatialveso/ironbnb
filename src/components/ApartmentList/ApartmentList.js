import { Container, Row } from "react-bootstrap";
import AddApartment from "../AddApartment/AddApartment";

function ApartmentList() {
    return (
        <div>
            <Container>
                <Row>
                    <AddApartment />
                </Row>
                <Row>
                </Row>
            </Container>
        </div>
    );
}

export default ApartmentList;