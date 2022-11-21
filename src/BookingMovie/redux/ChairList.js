import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chair from './Chair';


export class ChairList extends Component {
    render() {
        const { chairList } = this.props;
        return (
            <div className='d-flex flex-column gap-3 align-items-center'>
                {
                    chairList.map((item) => {
                        return <div  key={item.hang} className='d-flex align-items-center'>
                            <div style={{width:"30px", color:"wheat" , fontWeight:"regular"  }}>
                                {item.hang}
                            </div>
                            <div className='d-flex gap-3 mb-2'>
                                {item.danhSachGhe.map((chair) => {
                                    return <Chair key={chair.soGhe} item={chair} />;
                                  
                                })}
                              
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chairList: state.chair.chairList,
    }
}

export default connect(mapStateToProps)(ChairList) 