import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form  className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://cdna.artstation.com/p/assets/images/images/037/152/690/medium/bach-zim-group-1-copy.jpg?1619627458" alt="" className="settingsImg" />
                    <label htmlFor="fileInput">
                      <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}}/>
                </div>
                <label >User Name</label>
                <input type="text" placeholder="QuangAnh" />
                <input type="email" placeholder="quanganhpro@gmail.com" />
                <input type="password" />
                <button className="settingsSubmit">Submit</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
