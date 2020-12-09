import React, { Component } from 'react'
import './styles/leftDrawer.css';
import { types, subtypes, sets } from './mtgApi'
import blue from './images/blue1-mana.png'
import black from './images/black1-mana.png'
import green from './images/green1-mana.png'
import red from './images/red1-mana.png'
import white from './images/white1-mana.png'
import './images/white-mana.png'

class SomeLabelComponent extends Component {
    render() {
        const { color, manaState, handleManaOptions } = this.props;
        <span>
        <label className="label" >
            <img style={{ filter: manaState.includes(color) && 'drop-shadow(2px 2px 8px white)' }} className="mana-img" src={black} alt={color} />
            <p>{color}</p>
            <input className="check-box" onClick={handleManaOptions} type="checkbox" value={color} />
        </label>
    </span>
    }
    }
export default class LeftDrawer extends Component {
    render() {
        return (
            <div className='left-drawer-div'>
                <div className="selectors-div">
                    <div className="type-div">
                        <p>Sort by Type: </p>
                        {/* these selects look like they could probably also be abstracted out into reusable components */}
                        <select className="type-select" onChange={this.props.handleTypeChange}>
                            <option></option>
                            {
                                types.map(item =>
                                    <option key={item} value={`&types=${item}`}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="type-div">
                        <p>Sort By SubType</p>
                        <select onChange={this.props.handleSubTypeChange}>
                            <option></option>
                            {
                                subtypes.map(item =>
                                    <option key={item} value={`&subtypes=${item}`}>{item}</option>)
                            }
                        </select>
                    </div>
                    <div className="type-div">
                        <p>Search by Set</p>
                        <select onChange={this.props.handleSetChange}>
                            <option></option>
                            {
                                sets.map(item =>
                                    <option key={item} value={`&setName=${item}`}>{item}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="mana-form">
                    <p>Sort by Mana Types</p>
                    {
                        [
                        'Black', 
                        'Red', 
                        'Green', 
                        'White', 
                        'Blue',
                        ].map(color => <SomeLabelComponent
                            color={color} 
                            onClick={this.props.handleManaOptions}
                            manaState={this.props.manaState} />
    )
                    }
                    <div className="form-button">
                        <button onClick={this.props.handleSubmit}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}
