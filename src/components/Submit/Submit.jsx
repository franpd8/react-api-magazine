import { useState } from "react";
import "./submit.scss";
let publications = JSON.parse(localStorage.getItem("publications")) || [];
const Post = () => {
  const initialState = {
    author: "",
    title: "",
    abstract: "",
    date: "",
    file:"",
  };
  const [data, setData] = useState(initialState);
//   const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    // if (data.title < 2) {
    //   setMessage(
    //     <span className="message">"The title of the post can't be empty"</span>
    //   );
    //   setBtnDisabled(true);
    // } else {
    //   setMessage(null);
    //   setBtnDisabled(false);
    // }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if(data.author && data.title && data.date && data.abstract){
    //     setBtnDisabled(true)
    // } else{
    //     setBtnDisabled(false)
    // }
    publications.push(data);
    localStorage.setItem("publications", JSON.stringify(publications));
    clearState();
    setMessage(
      <p className="TYM">
        Miranda Priestly will review your article personally, better be good...
      </p>
    );
  };
  return (
    <div className="form">
      <h2 className="formTitle"> Submit your post</h2>
      <form onSubmit={handleSubmit}>
        <div className="postInfo">
          <div className="postTitle">
            <label for="title" className="labelTitle">
              Post Title
            </label>
            <br />
            <input
              type="text"
              placeholder="Introduce here your post title"
              value={data.title}
              onChange={handleInputChange}
              name="title"
              autoFocus
              className="inputTitle"
            />
          </div>
          <div className="postAbstract">
            <label for="Abstract" className="labelAbstract">
              Post Abstract
            </label>
            <br />
            <textarea
              placeholder="Here will be your post, tell us what's new!"
              value={data.abstract}
              onChange={handleInputChange}
              name="abstract"
              className="inputAbstract"
            ></textarea>
          </div>
          <div className="postDetails">
          <div className="postAuthor">
            <label for="author" className="labelAuthor">
              Author
            </label>
            <br />
            <input
              type="text"
              placeholder="Who wrote it"
              value={data.author}
              onChange={handleInputChange}
              name="author"
              className="inputAuthor"
            />
          </div>
          <div className="postDate">
            <label for="date" className="labelDate">
              Date
            </label>
            <br />
            <input
              type="date"
              placeholder="date"
              value={data.date}
              onChange={handleInputChange}
              name="date"
              className="inputDate"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>
        
        <div className="postUpload">
          <div className="postImage">
            <label for="image" className="labelImage">Choose a picture for the post :</label>
            <input type="file" accept="image/png, image/jpeg" name="file"className="inputImage"></input>
          </div>
          <button type="submit"  className="submitButton">
          Post it !
        </button>
        </div>
        </div>
      </form>
      {message}
    </div>
  );
};
export default Post;
