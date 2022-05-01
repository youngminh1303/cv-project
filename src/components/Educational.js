import { useState } from "react"

const Educational = ({educationalInfo, setEducationalInfo }) => {
    const [edit, setEdit] = useState(false)
    const [schoolName, setSchoolName] = useState("")
    const [titleOfStudy, setTitleOfStudy] = useState("")
    const [dayOfStudy, setdayOfStudy] = useState("")

    const onSubmit = () => {
        if (!schoolName || !titleOfStudy || !dayOfStudy) {
            alert("Please fill in all the information")
          return
          
        }
      
      console.log(educationalInfo)
      if (educationalInfo.length) {
        setEducationalInfo(educationalInfo.concat( {
        id: Math.floor(Math.random() * 1000) ,
        schoolName,
        titleOfStudy,
        dayOfStudy
        })) 
      }
      else {
        setEducationalInfo([{
        id: Math.floor(Math.random() * 1000) ,
        schoolName,
        titleOfStudy,
        dayOfStudy
        }])
      }
        setEdit(true)
    }

    return (
        <div className="container educational">
            {!edit && <label> School Name: <input type="text" onChange={(e) => { setSchoolName(e.target.value) }} value={schoolName} /></label>} 

          {edit && <p>School Name: {schoolName}</p>}

          {!edit && <label>Title Of Study: <input type="text" onChange={(e) => { setTitleOfStudy(e.target.value) }} value={titleOfStudy} /></label>}

          {edit && <p>Title Of Study: {titleOfStudy}</p>}
          
            {!edit && <label>Day Of Study: <input type="text" onChange={(e) => { setdayOfStudy(e.target.value) }} value={dayOfStudy} /></label>}

          {edit && <p>Day Of Study: {dayOfStudy}</p>}
          
          {!edit && <button onClick={onSubmit} >Submit</button>}

          {edit && <button onClick={() => setEdit(false)}>Edit</button>}
          
    </div>
  )
}

export default Educational