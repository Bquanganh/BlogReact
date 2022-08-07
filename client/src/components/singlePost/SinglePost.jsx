import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://cdnb.artstation.com/p/assets/images/images/003/474/653/medium/adrian-bobb-mural2016small.jpg?1474085918" alt="" className="singlePostImg" />
        </div>
        <h1 className="singlePostTitle">
            Hello
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-delete-left"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Safak</b></span>
            <span className="singlePostDate"> <b>1 hour ago</b></span>
        </div>
        <p className="singlePostDesc">
        To be successful with this development approach, we somehow needed to have a fast release for customers (i.e. every one week). 
        Back then, we had a build tool Jenkins which was responsible for having sprint release packages for our customers. 
        The build job pipelines contain some steps such as gathering the artifacts, checking the code convention, running the tests, building docker images, and packaging an archived file (a zip file).
        The set of tools involved in a pipeline is roughly called a toolchain. It is just a part of a bigger process called the DevOps toolchain.
        </p>
    </div>
  )
}
