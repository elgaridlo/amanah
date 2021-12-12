import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Card, FloatingLabel, Form } from 'react-bootstrap'

const PertamaScreen = () => {
    return (
        <>
            <div className="justify-content-md-center" style={{ marginTop: "100px", textAlign: "left" }}>
                <div>
                {/* <Form>
                    <Form.Group className="mb-3" >
                    <FloatingLabel label="Digit Awal">
                        <Form.Select aria-label="Floating label select example" >
                            <option value=''>Digit Awal</option>
                            <option value="SW-Switch">Switch</option>
                            <option value="SV-Server">Server</option>
                            <option value="RT-Router">Router</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                </Form> */}
                </div>
                <Card>
                    <Card.Body>
                        {/* <Card.Img src={}/> */}
                        <Card.Text>
                            <p>
                                Karena saya masih belum paham dengan maksud yang diinginkan dari pertanyaannya,
                                dan ketika saya buka any-api.com itu banyak yang menggunakan credential dan saya tidak menemukan api yang tinggal akses jadi saya beranggapan soal nomor 3 bisa menjawab.
                            </p>
                            <p>
                                Apabila tidak terjawab mungkin bisa kita bahas bersama Terima kasih :)
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default PertamaScreen
