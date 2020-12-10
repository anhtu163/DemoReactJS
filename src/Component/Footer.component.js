import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import '../Style/Footer.style.css';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer">
                    <div>
                            CONTACT
                    </div>
                    <div>
                            INFO
                    </div>
                    <div>
                            DEV TEAM
                    </div>
            </div>
        )
    }
}