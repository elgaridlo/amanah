import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Card, FloatingLabel, Form } from 'react-bootstrap'

const KeduaScreen = () => {
    return (
        <>
            <div className="justify-content-md-center" style={{ marginTop: "100px", textAlign: "left" }}>
                <Card>
                    <Card.Body>
                        {/* <Card.Img src={}/> */}
                        <Card.Text>
                            <p>
                                Silahkan buka postman dan kemudian buka http://127.0.0.1:5000/inventory
                            </p>
                            <p>
                                Disini ada create dengan body property = code, name, stock, price
                            </p>
                            <p>
                                Disini ada getAll, delete dan add stock dengan menambahkan http://127.0.0.1:5000/inventory/add/:id
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default KeduaScreen
