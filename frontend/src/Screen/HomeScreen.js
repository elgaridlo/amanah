import React from 'react'
import { withRouter } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

import { Card } from 'react-bootstrap'

const HomeScreen = () => {

    return (
        <>
            <Card style={{marginTop: "100px"}}>
                <Card.Header>Selamat Datang!</Card.Header>
                <Card.Body>
                    <Card.Title>Informasi</Card.Title>
                    <Card.Text>
                        Aplikasi web ini dibuat untuk menjawab 4 soal yang diberikan oleh PT. AMANAH KARYA INDONESIA. Anda dapat melihat
                        jawabannya melalui header diatas.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default withRouter(HomeScreen)
