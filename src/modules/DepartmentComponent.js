import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Department from './Department'
class DepartmentComponent extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                  <Department />
                </MuiThemeProvider>
            </div>
        )
    }
};

export default DepartmentComponent;
