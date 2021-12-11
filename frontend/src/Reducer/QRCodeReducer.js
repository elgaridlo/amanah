import { CREATE_QRCODE_FAIL, CREATE_QRCODE_REQUEST, CREATE_QRCODE_RESET, CREATE_QRCODE_SUCCESS, GENERATE_QRCODE_FAIL, GENERATE_QRCODE_REQUEST, GENERATE_QRCODE_SUCCESS, GET_ALL_QRCODE_FAIL, GET_ALL_QRCODE_REQUEST, GET_ALL_QRCODE_SUCCESS } from "../Constant/QRCodeConstant"

export const createQRCodeReducer = (
    state = { },
    action,
  ) => {
    switch (action.type) {
      case CREATE_QRCODE_REQUEST:
        return { loading: true }
      case CREATE_QRCODE_SUCCESS:
        return { loading: false, newQRCode: action.payload }
      case CREATE_QRCODE_FAIL:
        return { loading: false, error: action.payload }
      case CREATE_QRCODE_RESET:
        return { }
      default:
        return state
    }
  }

  export const getAllQRCodeReducer = (
    state = { },
    action,
  ) => {
    switch (action.type) {
      case GET_ALL_QRCODE_REQUEST:
        return { loading: true }
      case GET_ALL_QRCODE_SUCCESS:
        return { loading: false, allQRCode: action.payload }
      case GET_ALL_QRCODE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const generateNomorUrutReducer = (
    state = { },
    action,
  ) => {
    switch (action.type) {
      case GENERATE_QRCODE_REQUEST:
        return { loading: true }
      case GENERATE_QRCODE_SUCCESS:
        return { loading: false, nomorUrut: action.payload }
      case GENERATE_QRCODE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }