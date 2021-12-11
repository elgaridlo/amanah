
import axios from 'axios'
import { CREATE_QRCODE_FAIL, CREATE_QRCODE_REQUEST, CREATE_QRCODE_SUCCESS, GENERATE_QRCODE_FAIL, GENERATE_QRCODE_REQUEST, GENERATE_QRCODE_SUCCESS, GET_ALL_QRCODE_FAIL, GET_ALL_QRCODE_REQUEST, GET_ALL_QRCODE_SUCCESS } from '../Constant/QRCodeConstant'

export const createQRCodeAction = (payload) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_QRCODE_REQUEST
        })
    
        console.log('payload = ', payload)
        
        const {data} = await axios.post(`/api/qrcode`, {...payload})
  
        console.log('data new QRCode = ', data)

        dispatch({
            type: CREATE_QRCODE_SUCCESS,
            payload: data
        })
  
    } catch (error) {
        dispatch({
            type: CREATE_QRCODE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
  }

  export const getAllQRCodeAction = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ALL_QRCODE_REQUEST
        })
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        console.log('masuk nih')
        const {data} = await axios.get(`/api/qrcode`, config)
        
        console.log('data QRCode = ', data)

        dispatch({
            type: GET_ALL_QRCODE_SUCCESS,
            payload: data
        })
  
    } catch (error) {
        dispatch({
            type: GET_ALL_QRCODE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
  }

  export const generateNomorUrutAction = (payload) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GENERATE_QRCODE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        console.log('payload = ', payload)
        const {data} = await axios.post(`/api/qrcode/getnomorurut`, {...payload}, config)
  
        console.log('data QRCode = ', data)

        dispatch({
            type: GENERATE_QRCODE_SUCCESS,
            payload: data
        })
  
    } catch (error) {
        dispatch({
            type: GENERATE_QRCODE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
  }