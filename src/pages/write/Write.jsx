import './write.css'

export default function Write() {
  return (
    <div className="Write">
        <img src="https://cdna.artstation.com/p/assets/images/images/048/574/538/medium/terraform-studios-030822-xaya-floating-islands-2b-qm.jpg?1650395484" alt="" className="writeImg" />
        <div className="writeForm">
            <div className="writeFormGroup">
                <label className="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder="Tell your story..."
                    type="text"
                    className="writeInput writeText">
                 </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </div>
    </div>
  )
}
