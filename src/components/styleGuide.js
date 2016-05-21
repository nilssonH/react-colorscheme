import React from 'react';
import ReactDOM from 'react-dom';
import {Allswatches} from './colorSwatches';

export class Styleguide extends React.Component {
    render() {
        return (
            <div className="app row">
                <div className="wrap">
                    <h1 className="title">Color Scheme</h1>
                    <h3>Brand Colors</h3>
                    <p>Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <Allswatches colors={this.props.colors}/>
                </div>
            </div>
        )
    }
}
