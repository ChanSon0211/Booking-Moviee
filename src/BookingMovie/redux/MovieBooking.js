import React, { Component } from 'react'
import ChairList from './ChairList'
import Result from './Result'

class MovieBooking extends Component {
    render() {
        return (
            <div className='container'>
                <h2 className='text-center fw-bold my-3'>Đặt Vé Xem Phim Cyber-Movie</h2>
                <div className='row'>
                    <div className='col-8'>
                        <div className=' screen fs-5  mb-3 '>
                            Screen
                        </div>
                        <ChairList/>
                    </div>
                    <div className='col-4'>
                    <Result/>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieBooking