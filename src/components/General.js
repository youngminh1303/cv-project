import { useState } from "react"

const General = ({ info, setInfo }) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const onSubmit = () => {
        if (!name || !email || !phoneNumber) {
            alert("Please fill in all the information")
            return
        }
        setInfo({ name, email, phoneNumber })
        setEdit(true)
    }

    return (
        <div className="container general">
            {!edit && <label> Name: <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} /></label>} 

          {edit && <p>Name: {name}</p>}

          {!edit && <label>Email: <input type="text" onChange={(e) => { setEmail(e.target.value) }} value={email} /></label>}

          {edit && <p>Email: {email}</p>}
          
            {!edit && <label>Phone Number: <input type="text" onChange={(e) => { setPhoneNumber(e.target.value) }} value={phoneNumber} /></label>}

          {edit && <p>Phone Number: {phoneNumber}</p>}
          
          {!edit && <button onClick={onSubmit} >Submit</button>}

          {edit && <button onClick={() => setEdit(false)}>Edit</button>}
          
    </div>
  )
}

export default General