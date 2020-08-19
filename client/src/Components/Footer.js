import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
              {/* <li key="linkedin"><a href="https://www.linkedin.com/in/erik-adames-564b17bb/"><i className="fa fa-linkedin"></i></a></li>
              <li key="github"><a href="https://github.com/egadames"><i className="fa fa-github"></i></a></li> */}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020</li>
              <li> Designed by Erik Adames </li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;