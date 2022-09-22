import React from 'react'
import {useState, useEffect} from 'react'

    
let postsLoaded = 0;
let isLoading = false;
let after = "";
let filterValue = "hot";
let loadedPosts = [];

const Posts = () =>{
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState(filterValue);
    const setFilterFunc = (filter) => {
        setFilter(filter);
        filterValue = filter;
    }

    function loadPosts(amount){
        isLoading = true;
        return fetch(`https://www.reddit.com/r/popular/${filterValue}/.json?&limit=${amount}&after=${after}`)
        .then(res => res.json())
        .then(data => data.data.children.map((item, idx) =>{
                let text = item.data.selftext;
                let textLength = text.length;
                text = text.slice(0, 700);
                let img_url = item.data.url_overridden_by_dest;
                if(img_url === undefined || (!img_url.includes(".png") && !img_url.includes(".jpg"))){
                    img_url = ""; 
                }
                if(textLength > 700) text+="...";
                return (
                    <div className="post" key={idx}>
                        <div className="post-title">
                            <a href={item.data.url} target="_blank" rel="noreferrer">{item.data.title}</a>
                        </div>
                        <div className="post-img">
                            <img src={img_url} alt="post-img"/>
                        </div>
                        <div className="post-text">
                            {text}
                        </div>
                        <div className="post-info">
                            <div className="post-author">
                                <a href={`https://www.reddit.com/user/${item.data.author}`} target="_blank" rel="noreferrer">{item.data.author}</a>
                            </div>
                            <div className="post-comments">
                                <a href={`https://www.reddit.com${item.data.permalink}`} target="_blank" rel="noreferrer">{item.data.num_comments} comments</a>
                            </div>
                        </div>
                    </div>
                )
            }
        ))
            .then((data) => {
                loadedPosts.push(...data);
                setPosts([...loadedPosts]);
                isLoading=false;
                postsLoaded+=amount;
                after = data[data.length-1].props.name;
            });
        }
    useEffect(() =>{
        setPosts([]);
        loadedPosts = [];
        postsLoaded = 0;
        after = "";
        loadPosts(20);
    }, [filter]);
    useEffect(() =>{        
        document.addEventListener("scroll", () =>{
            let maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrollY = Math.floor(window.scrollY)+1;
            if(scrollY > maxScroll-1000 && !isLoading){
               loadPosts(10);
            }
        })
    }, []);
    return(
        <div className="posts">
            <h4>Popular posts</h4>
            
            {posts.map((post) =>{
                return post;
            })}
        </div>
    );
}
export default Posts;
