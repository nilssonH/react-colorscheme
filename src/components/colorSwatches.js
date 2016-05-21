import React from 'react';
import ReactDOM from 'react-dom';

export class Allswatches extends React.Component {
    render() {
        return (
            <div className="allSwatches">
                <div className="col">
                    {this._renderSwatches()}
                </div>
            </div>
        )
    }

    _renderSwatches() {
        return this.props.colors
            .map((color, i) => {
                return (
                    <div className="tile col col-2" key={i} style={{backgroundColor: color.code}}>
                        {color.name || '.'}
                    </div>
                );
            })
    }
}
