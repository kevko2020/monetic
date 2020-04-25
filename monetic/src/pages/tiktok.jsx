
import React from 'react';

export default class TikTok extends React.Component {
  state = {
    tiktoks: []
  }

  componentDidMount() {
    fetch(this.props.link)
    .then(res => res.json())
    .then((data) => {
      this.setState({ tiktoks: data })
    })
    .catch(console.log)
  }

  render() {
    var script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    document.head.appendChild(script)


    return( 
      <div dangerouslySetInnerHTML={this.createHTML()} />  
    );
  }

  createHTML() {
    console.log();
    return {__html: this.state.tiktoks?.html};
  }

}