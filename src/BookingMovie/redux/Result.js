import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Result extends Component {
    render() {
        const { chairSelecetedList , handlePay } = this.props
        return (
            <div>
                <h3>Kết quả Đặt Vé</h3>
                <div className='table'>
                    <table className='col-8'>
                        <thead>
                            <tr>
                                <td>
                                    Số Ghế
                                </td>
                                <td>
                                    Giá tiền
                                </td>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                chairSelecetedList.map((item) => {
                                    return (
                                        <tr key={item.soGhe}>
                                            <td>{item.soGhe}</td>
                                            <td>{item.gia.toLocaleString()}</td>
                                        </tr>
                                    )
                                })}

                        </tbody>
                    </table>

                    <div className='mt-5'>
                      Tổng Tiền  :{""}
                        {
                            chairSelecetedList.reduce((total, item) => {
                                return (total +=item.gia)
                            }, 0)
                        .toLocaleString()}{""}VND
                    </div>
                    <div className='mt-5 btn btn-succes '>
                        <button onClick={()=>{
handlePay()
                        }} type="">Thanh Toán</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chairSelecetedList: state.chair.chairSelecetedList,
    }
}
 
const mapDispatchToProps = (dispatch) =>{
    return {
        handlePay : () => {
            dispatch({
                type : "PAY",
            })
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Result)