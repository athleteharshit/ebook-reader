import React from 'react';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Row from './Row';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1 className="home_heading"><LocalLibraryIcon/>Latest Computer Book</h1>
            <Row title="Latest Computer Book" fetchUrl="computer"/>
            <h1 className="home_heading"><LocalLibraryIcon />Latest JavaScript Book</h1>
            <Row title="Latest JavaScript Book" fetchUrl="javascript"/>
        </div>
    )
}

export default Home;
