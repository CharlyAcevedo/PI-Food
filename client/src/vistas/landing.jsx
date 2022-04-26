import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTypes, getAllRecipes } from '../redux/actions/index';
import mesabebidas from '../asets/mesabebidas.gif'
import './landing.css';


class Landing extends Component {

    componentDidMount(){
        this.setState(this.props.getAllTypes())
        this.setState(this.props.getAllRecipes())
    };
    
    render() {        
        return (
            <div className='landing_page'>
                <div className="title_app">The World of Gastronomy app</div>
                <h4 className="subtitle_app">Here you will find the best recipes in the world, classified by cuisine, dish type and diet</h4>
                <Link className='link_Home' to="/home" >
                    <button className='btn_w'>Wellcome</button>
                    </Link>
                <div className='img_container'><img className='world_image' src={mesabebidas} alt='Mundo' /></div>
            </div>
        );
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        getAllTypes: () => dispatch(getAllTypes()),
        getAllRecipes: () => dispatch(getAllRecipes())
    }
};

export default connect(null, mapDispatchToProps)(Landing);