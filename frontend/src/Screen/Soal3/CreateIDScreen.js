import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createQRCodeAction, generateNomorUrutAction } from '../../Action/QRCodeAction'
import { CREATE_QRCODE_RESET } from '../../Constant/QRCodeConstant'

const CreateIDSCreen = ({history}) => {
    const [digitAwal, setDigitAwal] = useState('')
    const [kodeWilayah, setKodeWilayah] = useState('')
    const [bulan, setBulan] = useState('')
    const [tahun, setTahun] = useState('')
    const [urutan, setUrutan] = useState('')
    const [kodeQR, setKodeQR] = useState('')
    
    const dispatch = useDispatch()

    const generateNomorUrut = useSelector((state) => state.generateNomorUrut)
    const {nomorUrut} = generateNomorUrut

    const createQRCode = useSelector((state) => state.createQRCode)
    const {newQRCode} = createQRCode

    useEffect(() => {
        if(tahun.length === 4) {
            if(digitAwal && kodeWilayah && bulan && tahun) {
                dispatch(generateNomorUrutAction({
                    digitAwal: digitAwal.split('-')[1],
                    kodeWilayah: kodeWilayah.split('-')[1],
                    bulan: bulan.split('-')[1],
                    tahun,
                }))
                setKodeQR(`${digitAwal.split('-')[0]}-${kodeWilayah.split('-')[0]}-${bulan.split('-')[0]}-${tahun.split('-')[0]}`)
            }
        }
    }, [digitAwal, kodeWilayah, bulan, tahun, kodeQR])

    useEffect(() => {
        if(nomorUrut) {
            setUrutan(nomorUrut.urutan)
        }
        if(newQRCode) {
            dispatch({
                type: CREATE_QRCODE_RESET
            })
            history.push('/soal3/allId')
        }
    }, [nomorUrut, newQRCode, history])
    
    const daftarkan = (e) => {
        e.preventDefault()
        dispatch(createQRCodeAction({
            digitAwal: digitAwal.split('-')[1],
            kodeWilayah: kodeWilayah.split('-')[1],
            bulan: bulan.split('-')[1],
            tahun,
            kodeQR, 
            urutan
        }))
    }

    return (
        <>
            <div className="justify-content-md-center" style={{ marginTop: "100px", textAlign: "left" }}>
                <Form>
                    <Form.Group className="mb-3" >
                    <FloatingLabel label="Digit Awal">
                        <Form.Select aria-label="Floating label select example" value={digitAwal} onChange={(e) => setDigitAwal(e.target.value)}>
                            <option value=''>Digit Awal</option>
                            <option value="SW-Switch">Switch</option>
                            <option value="SV-Server">Server</option>
                            <option value="RT-Router">Router</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Kode Wilayah">
                            <Form.Select value={kodeWilayah} onChange={(e) => setKodeWilayah(e.target.value)}>
                                <option value=''>Pilih Kode Wilayah</option>
                                <option value="JKT-Jakarta">Jakarta</option>
                                <option value="BKS-Bekasi">Bekasi</option>
                                <option value="BGR-Bogor">Bogor</option>
                                <option value="BDG-Bandung">Bandung</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                    <FloatingLabel controlId="floatingSelect" label="Bulan">
                        <Form.Select value={bulan} onChange={(e) => setBulan(e.target.value)}>
                            <option>Bulan</option>
                            <option value="01-Januari">Januari</option>
                            <option value="02-Februari">Februari</option>
                            <option value="03-Maret">Maret</option>
                            <option value="04-April">April</option>
                            <option value="05-Mei">Mei</option>
                            <option value="06-Juni">Juni</option>
                            <option value="07-Juli">Juli</option>
                            <option value="08-Agustus">Agustus</option>
                            <option value="09-September">September</option>
                            <option value="10-Oktober">Oktober</option>
                            <option value="11-November">November</option>
                            <option value="12-Desember">Desember</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Tahun">
                        <Form.Control type="text" placeholder="Tahun" value={tahun} onChange={(e) => setTahun(e.target.value)} />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Urutan">
                        <Form.Control type="text" placeholder="Urutan" value={urutan} disabled={true}/>
                        </FloatingLabel>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={daftarkan}>
                        DAFTARKAN
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default CreateIDSCreen
