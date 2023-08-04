import 'smart-webcomponents-react/source/styles/smart.default.css';
import './InvestmentGridComponent.css';
import React from "react";
import { Smart, Grid } from 'smart-webcomponents-react/grid';

const InvestmentGridComponent = function(props){
    const dataSource = new Smart.DataAdapter({
        dataSource: [props.data],  
        dataFields: [
            'firstName: string',
            'lastName: string',
            'productName: string'
        ]
    })
    
    const columns = [{
        label: 'First Name',
        dataField: 'firstName'
    },
    {
        label: 'Last Name',
        dataField: 'lastName'
    },
    {
        label: 'Product',
        dataField: 'productName'
    }]
    return <div className="GridDiv">
        {props.data.length = 0 && <p>There is no data for investement.</p>}
        {props.data.length > 0 && <Grid dataSource={dataSource} columns={columns}></Grid>}
    </div>
}

export default InvestmentGridComponent;