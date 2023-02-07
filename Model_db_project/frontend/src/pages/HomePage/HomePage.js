import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayPosts from "../../components/DisplayPosts/DisplayPosts";
import axios from "axios";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
 const [firstName,setFirstName] = useState('');
 const [lastName,setLastName] = useState('');
 const [city,setCity] = useState('');
 const [instagramLink,setInstagramLink] = useState('');
 const [notes,setNotes] = useState('');
 const [imageData,setImageData] = useState('');
 const [age, setAge] = useState('');
 const [gender, setGender] = useState('');
 const [ethnicity, setEthnicity] = useState('');
// for incoming data
const [posts, setPosts] = useState([]);

useEffect(() => {
  getAllPosts();
}, []);


async function getAllPosts(){
  const response = await axios.get(`http://127.0.0.1:8000/api/posts/`);
  setPosts(response.data)
}


  function handleSubmit(e){
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('image', imageData);
    form_data.append('first_name', firstName);
    form_data.append('last_name', lastName);
    form_data.append('city', city);
    form_data.append('instagram_link', instagramLink);
    form_data.append('notes', notes);
    console.log(form_data)
    let url = 'http://localhost:8000/api/posts/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
          getAllPosts()
        })
        .catch(err => console.log(err))
  };

  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
        <div className="form_container" >
          <div className="form_section">
            <input type="text" placeholder='First Name' id='firstName' value={firstName}  onChange={(event) => setFirstName(event.target.value)} required/>
            <br/>
            <input type="text" placeholder='Last Name' id='lastName' value={lastName}  onChange={(event) => setLastName(event.target.value)} required/>
            <br/>
            <input type="text" placeholder='City' id='city' value={city}  onChange={(event) => setCity(event.target.value)} required/>
            <br/>
            <input type="text" placeholder='Instagram Link' id='instagramLink' value={instagramLink}  onChange={(event) => setInstagramLink(event.target.value)} required/>
            <br/>
          </div>
          <div className="form_section">
            <input type="text" placeholder='Age' id='age' value={age}  onChange={(event) => setAge(event.target.value)} required/>
            <br/>
            <input type="text" placeholder='Gender' id='gender' value={gender}  onChange={(event) => setGender(event.target.value)} required/>
            <br/>
            <input type="text" placeholder='Ethnicity' id='ethnicity' value={ethnicity}  onChange={(event) => setEthnicity(event.target.value)} required/>
          </div>
          <div>
            <textarea className="text_area" type="text" placeholder='Notes' id='notes' value={notes}  onChange={(event) => setNotes(event.target.value)} required/>
            <br/>
            <input type="file" id="image" accept="image/png, image/jpeg"  onChange={(e) => setImageData(e.target.files[0])} required/>
             <input type="submit"/>
          </div>
        </div>
         
        </form>
        <DisplayPosts posts={posts}/>
      </div>
    );
  }


export default HomePage;
