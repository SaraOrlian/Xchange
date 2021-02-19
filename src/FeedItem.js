import './App.css'
import React, { Component } from "react"

class FeedItem extends Component {
  render() {
    return (
    <div className="feed_item flex center">
      <div>
        <img src={this.props.image} />
      </div>
      <div className="item_meta">
        <div className="spartan margin_bottom10 size_21 lavender">{this.props.name}</div>
        <div className="spartan margin_bottom20 size_16 italics">posted on {this.props.date}</div>
        <div className="size_16 height85">{this.props.description}</div>
        <a className="contact_button spartan size_21" href={"mailto:"+ this.props.email + "?subject=Interested in " + this.props.name} target="_blank">Contact</a>
      </div>
    </div>
    )
  }
}

export default FeedItem