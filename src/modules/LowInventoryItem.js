import React from 'react'

// import RaisedButton from 'material-ui/lib/raised-button'
// import Avatar from 'material-ui/lib/avatar'
import { FontIcon, ListItem } from 'material-ui'


const styles = {
  addInventory: {
    top: 24,
    fontSize: 30,
    color: 'rgb(17, 63, 140)',
  }
}

class LowInventoryItem extends React.Component {

  onClickReorder() {
    this.props.onClickReorder(this.props.Article, this.props.ArticleName)
  }

  render() {
    const primaryText = <p style={{fontSize: 20, fontWeight: 300}}>{this.props.index + this.props.ArticleName}</p>
    const secondaryText = <p style={{fontSize: 18, fontWeight: 500}}>
      {'Current Stock: ' + this.props.CurrentStock}
      {this.props.CurrentStock < 10 ? <span style={{color: '#7CB342', marginLeft: 10, fontWeight: 300}}>Low Stock</span> : null}
    </p>

    return <ListItem
      style={{paddingTop: 6, paddingBottom: 6, paddingRight: 10, marginLeft: 20, textAlign: 'left'}}
      primaryText={primaryText}
      secondaryText={secondaryText}
      rightIcon={
        <FontIcon
          className="material-icons"
          onClick={this.onClickReorder.bind(this)}
          style={styles.addInventory}
        >add_circle_outline</FontIcon>
      }
           />
  }
}



export default LowInventoryItem
