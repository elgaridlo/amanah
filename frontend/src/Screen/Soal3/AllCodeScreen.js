import React, { useEffect } from 'react'
import QRCode from 'qrcode.react'
// import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQRCodeAction } from '../../Action/QRCodeAction'

const AllCodeScreen = ({ match }) => {
    const allQR = useSelector((state) => state.allQR)
    const {allQRCode} = allQR

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllQRCodeAction())
    },[])

    return (
        <>
            <div style={{ marginTop: "100px" }}>
                <Row>
                    {allQRCode && allQRCode.data.map((item) => (
                        <Col lg={4} md={2}>
                            <Card className="text-center" style={{marginTop: "15px"}}>
                                <Card.Body>
                                    <QRCode value={`${item.digitAwal} area ${item.kodeWilayah} pembelian bulan ${item.bulan} tahun ${item.tahun} ke ${item.urutan}`}/>
                                    <Card.Text>
                                        QR CODE : {item.kodeQR}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default AllCodeScreen
