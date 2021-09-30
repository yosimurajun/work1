import React from 'react';
import { requests } from '../request';
import Row from './Row';
import Banner from './Banner';


function Body() {
    return (
        <div className="body">
            <Banner />
            <div className="body__rows">
                <Row title='popular' request={requests.popular} />
                <Row title='top rated' request={requests.top_rated} />
                <Row title='upcoming' request={requests.upcoming} />
            </div>
        </div>
    )
}

export default Body
