import React, { Component } from 'react'
import "./chair.css"
import clsx from 'clsx'
import { connect } from 'react-redux'

 class Chair extends Component {
    render() {
        console.log(this.props)
        const { item, chairSelecetedList, handleChair } = this.props
        return (
            <button className={clsx("chair", {
                booked: item.daDat,
                //find : nếu có thì trả về item , ngược lại trả về undefineđ
                booking: chairSelecetedList.find((ele) => ele.soGhe=== item.soGhe) ,
            })}
            disabled={item.daDat}
            onClick={()=>{
                handleChair(item)
            }}
            type="">{item.soGhe}</button>
        )
    }
}


const mapStateToProps=(state)=> {
    return {
        chairSelecetedList : state.chair.chairSelecetedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
handleChair :  (chair)=> {
    dispatch({
        type : "CHANGE_CHAIR",
        payload : chair,
    })
}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Chair)