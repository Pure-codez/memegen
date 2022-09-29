import React,{useState}from 'react'
import styled from 'styled-components'
import memesData from '../memesData';



const MemeStyle = styled.div`
    background-color: aliceblue;
    padding: 35px;

.form{
    display: grid;
    grid-template: 40px 40px / 1fr 1fr;
    gap: 15px;
}
.formButton{
    grid-column: 1 / -1;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 6px;
    font-weight: 800;
    background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
}
.formInput{
    border: 1px solid #D5D4D8;
    border-radius: 5px;
    text-indent: 5px;
}

.card{
    width: 100%;
    height: 400px;
    background-color: #A626D3;
}
.card_heading{
    position: relative;
    top: 10px;
    left: 20px;
    color:white;
    z-index: 1;
}
.card img{
    position: relative;
    top: -87px;
    left: 0px;
    width: 100%;
    height: 400px;
}

.card_fotter{
    position: relative;
    bottom: 200px;
    left: 20px;
    color:white;
    z-index: 1;
}
`;

function Meme() {
    const [memeImage, setMemeImage] = useState([]);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const inital={
        firstName:"",
        lastName:"",
    };

    const [data,setData]=useState(inital);

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber])
    }
    const onChange=(e)=>{
const {value,name}=e.target;

setData({...data,[name]:value});
    }
  return (
    <MemeStyle>
        <div className='form'>
        {/* {memeImage.title} */}
        {/* <h1>Hello Test</h1> */}
            <input type={'text'} placeholder={'Top Text'} name="firstName" value={data.firstName} className='formInput' onChange={(e)=>{
                onChange(e);
            }}></input>
            <input type={'text'} placeholder={'Bottom Text'} name="lastName" value={data.lastName} className='formInput' onChange={(e)=>{
                onChange(e);
            }}></input>
            <button className='formButton' onClick={getMemeImage}>Get a new meme image</button>
            <div className='card'>
            <h1 className='card_heading'>{data.firstName}</h1>
            <img src={memeImage.url} className='formImg' />
            <h1 className='card_fotter'>{data.lastName}</h1>
            </div>
            
        </div>
    </MemeStyle>
  )
}

export default Meme