import React, { Component } from 'react'
import "../Testimonials/testimonials.css"


export default class Testimonials extends Component {
  render() {
    return (
      <section>
        <h11 style={{textAlign: "center"}}>Customer Testimonials</h11>
        <br className="mypage"/>
        <div className="img-container1">
          <img src="https://images.unsplash.com/photo-1582584169118-29f43e8b2261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="city tour" />
        </div>

    <div className="col">
        <p className="style">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At qui enim rem totam voluptatum. Aut saepe temporibus, facilis ex a iste expedita minima dolorum dicta doloribus libero aliquid, quae maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit beatae eum, est soluta ducimus ratione et impedit sapiente, nihil, atque dignissimos adipisci? Totam atque officia quis voluptates sed veniam.</p>
    
    <p className="person">Paula Jackson, Leeds</p>
  </div>


  <div className="img-container1">
          <img src="https://images.unsplash.com/photo-1564676487888-8be98153b4a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="city tour" />
        </div>

    <div className="col">
        <p className="style">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam distinctio atque sint earum? Temporibus, voluptas aspernatur aliquam nisi sed harum laborum, nemo odio animi officia quisquam. Veniam, natus reprehenderit.</p>
    
    <p className="person">James Smith, Portsmouth</p>
  </div>


  <div className="img-container1">
          <img src="https://images.unsplash.com/photo-1597588795310-d7e799ca9ca2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="city tour" />
        </div>

    <div className="col">
        <p className="style">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quisquam possimus tenetur, dicta enim rerum quis, quaerat id nobis provident quo dolorum sapiente temporibus facere non repellendus consequatur cupiditate!</p>
    
    <p className="person">Mary Jones, Sunderland</p>
  </div>

  
      </section>
    )
  }
}
