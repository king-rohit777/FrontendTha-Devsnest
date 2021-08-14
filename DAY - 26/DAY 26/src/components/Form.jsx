import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFirstNameInput, updateLastNameInput } from '../redux/userForm/userFormAction'


const Form = () => {

    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)

    const dispatch = useDispatch()
    return (
        <div>
            <h2>Redux Form</h2>
            <form action="">
                FirstName : <input
                    type="text"
                    value={firstName}
                    onChange={(e) => dispatch(updateFirstNameInput(e.target.value))}
                />
                LastName : <input
                    type="text"
                    value={lastName}
                    onChange={(e) => dispatch(updateLastNameInput(e.target.value))}
                />
            </form>
            <div>
                <h2>Show</h2>
                <p>First Name :{firstName}</p>
                <p>Second Name :{lastName}</p>
            </div>
        </div>
    )
}

export default Form
