import React, {Fragment} from 'react';
import Form from './form';
import Todos from './todos';

export default function Dashboard() {
    return (
     <Fragment>
            <Form/>
            <Todos/>
            </Fragment>
    )
}
