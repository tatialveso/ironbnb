import { Button, Form, Modal } from "react-bootstrap";

function AddApartment() {
    return (
        <div className="my-3">
            <Button variant="info">
                Cadastrar apartamento
            </Button>

            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar apartamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Título do anúncio</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insira um título"
                                name="headline"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Preço da diária</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Insira o preço por dia"
                                name="pricePerDay"
                            />
                        </Form.Group>
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AddApartment;