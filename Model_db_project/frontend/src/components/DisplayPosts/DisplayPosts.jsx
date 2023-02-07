import { Link } from 'react-router-dom';
const DisplayPosts = (props) => {
  return (
   <div className="card_container">
            {props.posts.map((post)=>{
                return(
                    <Link to={`/Details/${post.id}`}>
                    <div className="card" key={post.id}>
                    <img className="card_image" src={`http://127.0.0.1:8000${post.image}/`} alt="Avatar" />
                    <p>{post.image}</p>
                    <div className="text_container">
                      <h4><b>{post.first_name}</b></h4>
                      <p>{post.city}</p>
                    </div>
                  </div>
                    </Link>
                );
            })}
   </div>
  );
};

export default DisplayPosts;
