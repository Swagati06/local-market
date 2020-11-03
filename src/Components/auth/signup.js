import React, { Component } from 'react'
import AdminSignup from './AdminSignup'
import UserSignup from './UserSignup'

export default class signup extends Component {
    render() {
        return (
            <div className='row p-5'>
                <div className='col-6'>
                    <AdminSignup />
                </div>
                <div className='col-6'>
                    <UserSignup />
                </div>
            </div>
        )
    }
}
