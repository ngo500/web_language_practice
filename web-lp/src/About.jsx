import React from 'react';

const divStyle = {
    color:'black',
};

class About extends React.Component {

    render() {
        return (
            <div style={divStyle}>
              <center>
                <h2>About Page</h2>
                <main>
                    <p>Testing about page</p>
                </main>
              </center>
            </div>
        )//return
    }//render
}//About



export default About;
