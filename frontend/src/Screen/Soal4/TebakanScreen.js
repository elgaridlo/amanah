import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { tebakNomorAction } from '../../Action/TebakNomorAction'

const TebakanScreen = () => {
    const [digitSatu, setDigitSatu] = useState('')
    const [digitDua, setDigitDua] = useState('')
    const [digitTiga, setDigitTiga] = useState('')
    const [digitEmpat, setDigitEmpat] = useState('')
    const [angkaRandom, setAngkaRandom] = useState('')

    const tebakNomor = useSelector((state) => state.tebakNomor)
    const {nomorRandom} = tebakNomor

    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(tebakNomorAction())
    },[])

    useEffect(() => {
    },[digitSatu])

    const generateRandomFunction = () => {
        dispatch(tebakNomorAction())
        setDigitSatu(0)
        setDigitDua(0)
        setDigitTiga(0)
        setDigitEmpat(0)
    }

    const angkaRandomFunction = () => {
        const nilai = shuffle(nomorRandom.toString().split("")).join("")
        setAngkaRandom(nilai)
    }

    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    return (
        <>
            <Card style={{ marginTop: "100px" }}>
                <Card.Header>Selamat Datang di Tebak Nomor!</Card.Header>
                <Card.Body>
                    <Card.Title>Tebak menggunakan nomor berikut: {angkaRandom ? angkaRandom: 'Belum tergenerated'}</Card.Title>
                    <Form.Text id="passwordHelpBlock" muted>
                        Tekan Generate Nomor Rahasia Kemudian jangan lupa untuk menekan Generate Nomor Tebakan
                    </Form.Text>
                    <Row>
                        <Col>
                            <Button onClick={generateRandomFunction}>Generate Nomor Rahasia</Button>
                        </Col>
                        <Col>
                            <Button onClick={angkaRandomFunction}>Generate Nomor Tebakan</Button>
                        </Col>
                    </Row>
                    {
                        nomorRandom && (                     
                            <Row className="mb-3 mt-5">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Digit Pertama</Form.Label>
                                    <Form.Control type="number" max="9" value={digitSatu} onChange={(e)=> setDigitSatu(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                        {digitSatu === nomorRandom.toString().split("")[0] ? 'Alhamdulillah': 'Subhanallah'}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Digit Kedua</Form.Label>
                                    <Form.Control value={digitDua} onChange={(e)=> setDigitDua(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                        {digitDua === nomorRandom.toString().split("")[1] ? 'Alhamdulillah': 'Subhanallah'}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Digit Ketiga</Form.Label>
                                    <Form.Control value={digitTiga} onChange={(e)=> setDigitTiga(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                        {digitTiga === nomorRandom.toString().split("")[2] ? 'Alhamdulillah': 'Subhanallah'}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Digit Keempat</Form.Label>
                                    <Form.Control value={digitEmpat} onChange={(e)=> setDigitEmpat(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                        {digitEmpat === nomorRandom.toString().split("")[3] ? 'Alhamdulillah': 'Subhanallah'}
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                        )
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default TebakanScreen
