import { useState } from "react"

const Practical = ({practicalInfo, setPracticalInfo }) => {
    const [edit, setEdit] = useState(false)
    const [companyName, setCompanyName] = useState("")
    const [positionTitle, setPositionTitle] = useState("")
    const [workDate, setWorkDate] = useState("")

    const onSubmit = () => {
        if (!companyName || !positionTitle || !workDate) {
            alert("Please fill in all the information")
          return
          
        }
      
      console.log(practicalInfo)
      if (practicalInfo.length) {
        setPracticalInfo(practicalInfo.concat( {
        id: Math.floor(Math.random() * 1000) ,
        companyName,
        positionTitle,
        workDate
        })) 
      }
      else {
        setPracticalInfo([{
        id: Math.floor(Math.random() * 1000) ,
        companyName,
        positionTitle,
        workDate
        }])
      }
        setEdit(true)
    }

    return (
        <div className="container practical">
            {!edit && <label>Company Name: <input type="text" onChange={(e) => { setCompanyName(e.target.value) }} value={companyName} /></label>} 

          {edit && <p>Company Name: {companyName}</p>}

          {!edit && <label>Position Title: <input type="text" onChange={(e) => { setPositionTitle(e.target.value) }} value={positionTitle} /></label>}

          {edit && <p>Position Title: {positionTitle}</p>}
          
            {!edit && <label>Work Date: <input type="text" onChange={(e) => { setWorkDate(e.target.value) }} value={workDate} /></label>}

          {edit && <p>Work Date: {workDate}</p>}
          
          {!edit && <button onClick={onSubmit} >Submit</button>}

          {edit && <button onClick={() => setEdit(false)}>Edit</button>}
          
    </div>
  )
}

export default Practical