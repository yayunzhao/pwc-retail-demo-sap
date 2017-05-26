import React, { Component } from 'react'

import { FontIcon, Card,
CardActions, Divider, FlatButton
 } from 'material-ui'
import moment from 'moment'




const styles = {
  dashboardCard: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  listItem: {
    fontSize: 16,
    padding: 16,
    paddingTop: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardBody: {
    padding: '16px 35% 20px 16px',
    background: 'url("/images/retail/dashboard/DeliveryToStore.png") no-repeat',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'right',
  },
}

class DeliveryCard extends Component {
  
  onClickConfirmDelivery() {
    this.props.onClickConfirmDelivery(this.props.schedule)
  }

  getItemList() {
    return this.props.schedule.map((item, index) => {
      return <div style={styles.listItem} key={'deliveryCardItem'+index}>
        <span style={{color: 'rgba(0,0,0,0.5)'}}>{item.material}</span>
        <span style={{color: 'rgba(0,0,0,0.75)'}}>{item.quantity}</span>
      </div>
    })
  }

  render() {
    const vendorName = this.props.schedule[0].vendorName
    const deliveryDate = moment(this.props.schedule[0].deliveryDate, 'YYYYMMDD')
    let cardTitle = deliveryDate.format('Do MMM')

    return <Card style={styles.dashboardCard}>
      <div style={styles.cardBody}>
        <h2 style={{fontWeight: 300, marginTop: 0, marginBottom: 0}}>{'Delivery on'}</h2>
        <h2 style={{fontWeight: 300, marginTop: 0}}>{cardTitle}</h2>
        <p>{this.props.schedule[0].quantity + ' items from'}</p>
        <p style={{fontWeight: 300, fontSize: 18, marginBottom: 0}}>{vendorName}</p>
        <div style={{clear: 'both'}}></div>
      </div>
      <Divider />
      <CardActions>
        <FlatButton
          label="Track delivery"
          secondary={true}
          onClick={this.props.handleTrackDelivery}
          icon={<FontIcon className="material-icons" >arrow_forward</FontIcon>}
          style={{color: '#113F8C'}}
        />
      </CardActions>
      <Divider />
      <CardActions>
        <FlatButton
          label="Confirm delivery"
          onClick={this.onClickConfirmDelivery.bind(this)}
          secondary={true}
          icon={<FontIcon className="material-icons" >arrow_forward</FontIcon>}
          style={{color: '#113F8C'}}
        />
      </CardActions>
    </Card>

          // return <div>
    //   <Card style={styles.dashboardCard}>
    //     <CardHeader
    //       title={cardTitle}
    //       titleStyle={{fontSize:28, fontWeight:300}}
    //       style={{paddingBottom: 0, height: 'auto'}}
    //       subtitle={vendorName}
    //     />
    //     <CardMedia mediaStyle={{textAlign: 'center', padding: 16, paddingLeft: '18%', paddingRight: '18%'}}>
    //       <img src={imagePath} />
    //     </CardMedia>
    //     {this.getItemList()}
    //     <Divider />
    //     <CardActions>
    //       <FlatButton
    //         label="Confirm delivery"
    //         secondary={true}
    //         onClick={this.onClickConfirmDelivery.bind(this)}
    //         style={{color: 'rgb(17, 63, 140)'}}
    //         icon={<FontIcon className="material-icons" >arrow_forward</FontIcon>}
    //       />
    //     </CardActions>
    //   </Card>
    // </div>
  }
}


export default DeliveryCard
