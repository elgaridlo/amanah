import { TEBAK_NOMOR_FAIL, TEBAK_NOMOR_REQUEST, TEBAK_NOMOR_SUCCESS } from "../Constant/TebakNomorConstant"

export const tebakNomorAction = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: TEBAK_NOMOR_REQUEST
        })
    
        const data = Math.floor(1000 + Math.random() * 9000);

        console.log('data tebak nomor = ', data)
        dispatch({
            type: TEBAK_NOMOR_SUCCESS,
            payload: data
        })
  
    } catch (error) {
        dispatch({
            type: TEBAK_NOMOR_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
  }