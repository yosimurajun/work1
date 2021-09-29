import React from 'react';
import { requests } from '../request';
import Row from './Row';

function Body() {
    return (
        <div>
            <Row title='popular' request={requests.popular} />
            <Row title='top rated' request={requests.top_rated} />
            <Row title='upcoming' request={requests.upcoming} />
        </div>
    )
}

export default Body
