import React, { Component } from 'react'
import {
  CardTitle,
  CardText,
  CardActions,
  FlatButton,
  TextField,
} from 'material-ui'


const styles = {
  container: {
    zIndex: 10,
  },
  cardTitle: {
    // padding: 24,
    // paddingTop: 16,
  },
  incentiveContainer: {
    padding: 24,
    paddingTop: 4,
  },
  trophy: {
    height: 30,
    widht: 30,
  },
  incentiveCircle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: 180,
    height: 180,
    borderRadius: '50%',
    backgroundColor: '#FFA00C',
  },
  points: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  pointsTotal: {
    color: 'white'
  },
  receiptContainer: {
    backgroundColor: 'white',
    fontSize: 13,
    padding: 8,
    border: '1px solid lightgrey',
    width: 160,
    textAlign: 'center',
    marginTop: -30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  receipt: {
    paddingBottom: 8,
    borderBottom: '1px solid lightgrey',
    marginBottom: 8,
  },
  receiptLabel: {
    color: 'gray',
    marginRight: 8,
    fontSize: 12,
  },
  action: {
    textAlign: 'right',
  },
  reassignButton: {
    color: '#4a90e2',
  }
}

class ReorderItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reorderAmount: 10,
    }
  }

  onReorderChange(e) {
    this.setState({
      reorderAmount: e.target.value,
    })
  }

  handleClose() {
    this.props.onClose()
  }

  handleUpdate() {
    this.props.onUpdate(this.state.reorderAmount)
  }

  getMessage() {
    let message = null
    switch (this.props.reorderResponseState) {
      case 0:
        break;
      case 1:
        message = <p style={styles.reorderResponseSuccess}>{this.props.reorderResponseMessage}</p>
        break;
      case 2:
        message = <p style={styles.reorderResponseFail}>{this.props.reorderResponseMessage}</p>
        break;
      case 3:
        message = <p style={styles.reorderResponseReceiving}>{this.props.reorderResponseMessage}</p>
        break;
      default:

    }
    return message
  }

  render() {
    return (
      <div>
        <CardTitle
          style={styles.cardTitle}
          title={"Reorder " + this.props.ItemName}
        />
        <CardText>
          <TextField
            floatingLabelText="Amount"
            value={this.state.reorderAmount}
            onChange={this.onReorderChange.bind(this)}
          />
        </CardText>
        <CardText>
          {this.getMessage()}
        </CardText>
        <CardActions style={styles.action}>
          {
            this.props.reorderResponseState === 0 ?
              <div>
                <FlatButton
                  label="Cancel"
                  onClick={this.handleClose.bind(this)}/>
                <FlatButton
                  label="Order Item"
                  primary={true}
                  onClick={this.handleUpdate.bind(this)}
                  style={styles.reassignButton}/>
              </div>
            :
            <FlatButton
              disabled={this.props.reorderResponseState === 3 ? true : false}
              primary={true}
              label="Close"
              onClick={this.handleClose.bind(this)}/>
          }
        </CardActions>
      </div>
    )
  }
}



export default ReorderItem
