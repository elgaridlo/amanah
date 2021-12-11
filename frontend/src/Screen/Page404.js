import React from 'react'

import { Card } from 'react-bootstrap'

const Page404 = () => {

    return (
        <>
            <Card style={{marginTop: "100px"}}>
                <Card.Header>Page Not Found!</Card.Header>
                <Card.Body>
                    <Card.Title>Informasi</Card.Title>
                    <Card.Text>
                        Halaman Tidak Ditemukan
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Page404
