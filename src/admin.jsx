import React, { Component } from 'react'
import './admin.style.css'

export class Admin extends Component {
    render() {
        return (
            <main className="main-cont1">
            <div className="container1">
              <div className="header1">
                <h2>Tweet</h2>
              </div>
              <form id="form" className="form1" >
                <div className="form-control1">
                  <h3>How to center a div?</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quasi iste aliquam vitae quis repudiandae rem illum sed ex molestias nihil minus ullam id ratione qui facilis, est assumenda voluptatum nobis. Temporibus incidunt nisi voluptates iusto, facere asperiores cum esse suscipit quisquam quas tenetur necessitatibus tempora dolore maxime nemo enim. Magni provident possimus nostrum eum voluptates suscipit? Laboriosam consequuntur eius a illo ea numquam earum doloremque! Quae quaerat omnis, officia ipsum temporibus pariatur accusantium perspiciatis consectetur voluptatum dolores! A quod vel odit est sed animi nisi deserunt rem libero! Porro iste accusantium ducimus saepe qui doloremque culpa ea? Quae veritatis ipsa placeat eligendi tenetur ratione tempora sed vel aliquam officiis asperiores sapiente dignissimos facilis impedit fugit doloremque ab delectus, sint eius labore facere! Voluptate at molestiae officiis sed veritatis expedita corporis eligendi architecto quasi. Id quas explicabo non nisi, distinctio corporis, quos voluptas suscipit quasi architecto aut consectetur nam culpa labore magni, totam blanditiis temporibus! Quas dolores non expedita quo architecto odit a explicabo voluptatibus minima molestias nulla perferendis reprehenderit eligendi eos labore sapiente, beatae nemo aliquam magni. Nobis a suscipit ipsum iure soluta adipisci dicta, odio veniam iste iusto id laudantium atque ratione corporis laboriosam, voluptate tenetur odit?</p>
                </div>
                <button type="submit" className="log-btn1">Edit</button>
                <button type="button" className="reg-btn1">Delete</button>
              </form>
            </div>
          </main>
        )
    }
}

export default Admin
