import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Store from './Store'
class StoreComponent extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                  <Store />
                </MuiThemeProvider>
            </div>
        )
    }
};

export default StoreComponent;
