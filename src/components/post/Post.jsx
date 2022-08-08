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
                        Connecting to Care
                    </span>
                    <hr />
                    <span className="postDate">1 hour ago</span>
                </div>
                <p className="postDesc">
                You are walking through town at night and you see your best friend looking dishevelled, sleeping rough on the street. You haven’t seen him for six months. There is probably an initial shock: “Oh my God, what happened?!!” You instinctively reach out for him. Before you know it your arm is on his shoulder: “Come home with me. Let me take care of you”.

                Now another night. This time you see a random stranger looking dishevelled, sleeping rough on the street. Be honest. What do you do? Is it someone else’s problem? If your heart is big enough you might give him some money or buy him a sandwich but is he coming home to sleep on your couch? Perhaps you rationalise your inaction by reminding yourself that you donate to the local homeless charity. You might remind yourself to vote for a politician who appears committed to doing something. But most of the time most of us don’t do anything at all.

                Why the difference? It’s obvious isn’t it… in the first scenario you don’t even think. You have a deep emotional connection with your best friend and you have to act. In the second scenario you might feel sad and you might recognise the tragedy of the situation but there is no emotional connection between the two of you, so more often than not you don’t act.
                </p>
                
            </div>
        </>
    )
}
