import React from 'react'
import "./main.css";
const Main = () => {

  return (
    <div className='mainSection'>
      <section className='section1'>
        <div className='section1Wrapper'>
          <div className="section1WrapperSupporter">
            <div className='section1Category'>
              <img className='categoryImg' src='https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100' />
              <span>Grocery</span>
            </div>
            <div className='section1Category'>
              <img className='categoryImg' src='https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100' />
              <span>Mobiles</span>
            </div>
            <div className='section1Category' >
              <img className='categoryImg' src='https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100' />
              <select name="Fashion" id="Fashion">
                <option value="volvo">Fashion</option>
                <option value="saab">Kids</option>
                <option value="mercedes">Women</option>
                <option value="Footwear"></option>
              </select>
            </div>
            <div className='section1Category'>
              <img className='categoryImg' src='https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100' />
              <select name="Electronics" id="Electronics">
                <option value="volvo">Electronics</option>
                <option value="saab">Kids</option>
                <option value="mercedes">Women</option>
                <option value="Footwear"></option>
              </select>
            </div>
            <div className='section1Category'>
              <img className='categoryImg' src='https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100' />
              <span>Home & Furniture</span>
            </div>
            <div className='section1Category'>
              <img className='categoryImg' src='https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100' />
              <span>Apliances</span>
            </div>
            <div className='section1Category'>
              <img className='categoryImg' src='https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100' />
              <span>Travel</span>
            </div>
            <div className='section1Category'>
              <img className='categoryImg' src='https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100' />
              <select name="Electronics" id="Electronics">
                <option value="volvo">Beauty, Toys & more</option>
                <option value="saab">Kids</option>
                <option value="mercedes">Women</option>
                <option value="Footwear"></option>
              </select>
            </div>
            <div className='section1Category'>
              <img className='categoryImg' src='https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100' />
              <span>Two Wheelers</span>
            </div>
          </div>
        </div>
      </section>



      <section className='section2'>



        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://img.freepik.com/free-vector/flat-shopping-center-twitter-header_23-2149330482.jpg" class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://miro.medium.com/v2/resize:fit:1100/1*tU40qUhmMtZR4BlbSMb0Kw.jpeg" class="d-block w-100" alt="..." />
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </section>


    </div>
  )
}

export default Main