import { TEBAK_NOMOR_FAIL, TEBAK_NOMOR_REQUEST, TEBAK_NOMOR_RESET, TEBAK_NOMOR_SUCCESS } from "../Constant/TebakNomorConstant"

export const tebakNomorReducer = (
    state = { },
    action,
  ) => {
    switch (action.type) {
      case TEBAK_NOMOR_REQUEST:
        return { loading: true }
      case TEBAK_NOMOR_SUCCESS:
        return { loading: false, nomorRandom: action.payload }
      case TEBAK_NOMOR_FAIL:
        return { loading: false, error: action.payload }
      case TEBAK_NOMOR_RESET:
        return { }
      default:
        return state
    }
  }