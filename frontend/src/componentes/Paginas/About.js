import React from 'react';
import Navbar from '../Navbar/Navbar';

export class AboutWeb extends React.Component {
  render() {
    return (
      <div style={{ minWidth: '100%' }}>
        <AboutFull props={this.props} />
      </div>
    );
  }
}

export default function AboutFull({ props }) {
  return (
    <div>
      <Navbar props={props} tituloP={'About'}></Navbar>
      <div style={{ textAlign: 'center' }}>
        <h1>ANALISIS Y DISEÑO 2</h1>
        <h2>201800464 - Pablo Andres Argueta Hernandez</h2>
      </div>
    </div>
  );
}
