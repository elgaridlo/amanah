import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import QRCode from 'qrcode.react'

const GenerateQRScreen = () => {

    return (
        <>
            <div className="justify-content-md-center" style={{ marginTop: "100px", textAlign: "left" }}>
                <Card>
                    <Card.Body>
                        <QRCode value="Elga Rodlo"/>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default GenerateQRScreen
