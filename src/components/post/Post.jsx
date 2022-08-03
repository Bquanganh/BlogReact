import './post.css'

export default function Post(){
    return(
        <>
            <div className="post">
                <img className="postImg"
                    src="https://cdna.artstation.com/p/assets/images/images/046/934/020/medium/terraform-studios-022222-totem-xar-vistashot-2-qm.jpg?1646330304" 
                    alt="" 
                />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle">
                        Hello my name is quang anh
                    </span>
                    <hr />
                    <span className="postDate">1 hour ago</span>
                </div>
                <p className="postDesc">
                    18520441
                </p>
                
            </div>
        </>
    )
}
