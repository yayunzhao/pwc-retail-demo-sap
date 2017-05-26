import React from 'react'

import { FontIcon, Card, Avatar, ListItem, CardHeader, List,
CardActions, CardMedia, Divider, FlatButton, Dialog
 } from 'material-ui'
import LowInventoryItem from './LowInventoryItem.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReorderItem from './ReorderItem'
import DeliveryCard from './DeliveryCard'
import fake from './fake'
import { browserHistory } from 'react-router'
import Imagebest from './images/best-in-la.png'
import Imageupdate from './images/update-digital-sign.png'


const Dialogs = {
  incentive: 'INCENTIVE',
  reorderItems: 'REORDER_ITEMS',
  bonusPoints: 'BONUS_POINTS',
  reminder: 'REMINDER',
  none: 'NONE',
  incentiveTraining: 'INCENTIVE_TRAINING',
  congradulate: 'CONGRATULATE'
}
const rank = {
  icon0: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABORJREFUWAnNmU1oFVcUx8+ZmRejVGjRBrpoFmpNqWBoFlYphUpXKuhGWhtcSDfduW3VLly17oTSTXYtFFvFbdNVsUVQcKFEKCVWXbgMgoIxpsnMu/3/77w7b968mWTu+wi55L65cz/O+d1zz/2YG5Ueg7m4b0Tm/zskRg6LMZOiMgFRY3jfbkWqvMBzAe/zojqH8hsyseW2Xvx7pReV6tvInNrzPsC+FDGfoe3rXu1VnonRawCf0V8f3vNpWxvUfD6xX5rxdwA86qOguq7OShCd01/m71fXaZesC2rOfDwqy0++xRCeRbOw3XQgqQQu8b2Mjp/XH/9cXkvimqDm9O49smquQ8DkWkIGUDYnDT2pPz96WCWrEtRM7z0gzeQ3+OPOqsYDzVd9KkF4TK88uFMmtxTUQibJH/DH18oaDS9PFyUMPymD7QK1wx3L7Q2zZLHXtGwkh4puEOTr2YlDn9yo4c4rd2nqBoNlcXl4doDa2T38iZNTX5mcbLFkFbKhT9fJ1bsoGfQSlCnzTCQSNKbcOtu2qIkvbSJI9ilMN5i0e9ai6bbYpDUHExRio4bIak/beieDBlPcblOL2r27s9znzRiD+Yf49oSY6a/E/HBTzIcn0jzk9xVabJE9Bf3zigcM70A42fEWoI6LfnRCdPzdTEazleKQsZ7Syr0ENZ+C8Wxkj2oepyALR+VhQ/TCTyLvfSBBCUSThkQMwNcXrJE3yBhB2OG6Hc0gyRCEEuw7mDUtWi0xsGlr1B1sVtk3AcYA4+J14KBuWitBNJgs8b2/ZHHmG3n6xYEO9TE4Yww56/brpmSM7Mmc2msGKqXyeGVZls5MycrLRVlBxirimzkZ7AgtGnHc+w34eoggY6yunJZuO6IJwOKlFJKgjPmQsJazaIkP5+vWSI/RR9NvnBq1XRUsRBaWbMTjs8CZDjcLBxHA2N6ZPAQq/IUNQwyri5ww+UAXIeegWOmjLyBtR15JVZosjIQiYAMJC4Mft25Wte0rH4w0zIKPELobG0WAbCA9gidjo+CHhVcfFWV1F7A84bvbI4ANu0wblrM6AjktPLQAxsBeDtTU4LZBMsGILT+lvyIOExQXGNRxoyanrUbYdkxbDniYu3HAGPCaBbDPuks3SQ7ZwBjYuyBes2zWADYycgJzdsxsVk7Hlk0Bc2r3LLaTIz7ATazqPHwsY1taQmIJGzz3/BBOO4plYBviVkSut1wV3GSsr0Nn9eqjY6yfWpQpjb7Gb8Kkb2BvOaEIQ0i7IlgwX0kd9fFxF51zORmo/drjhZVnICDBCBghNiDRWZBLCsvx5x/A4r5A2TgDtZJwq4bnnE3X/CEEhXBn4g61BXGEsHinhQnbQ5jjDV++XZcUM73rHWnqLfjrupdjPNXz1MSzJw/JMfd8PHloISR3LFqZFqeiWj5a50qHPdArj//lrRpSi/keVaU5tAQhEC2ZWRSZdAcLWNW4Kx86eaNXcv1IOaWhzrVjxzcUrIm/LFhA/DgF61pznWtHuldpsFd/uFVDYaXPOuWEoVWLsTYkdUBX2XWjg6sEZQU7BFvHD8Isl/FaunQR1kV+Nrvo8lxnnMLCk1fjlwU6yoY7X9d1Op9XmraXaLyf8twUSoUxU/V3rt35JaiyLquvVVhW1te/b0SeQ+VVQA7v3zdF6I3+h9j/SBXGZmjOb+wAAAAASUVORK5CYII=',
  icon1: 'data:image/png;base64,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',
  icon2: 'data:image/png;base64,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',
}

const styles = {
  root: {
    background: '#f1f1f1',
    height: 1120,
  },
  dashboardCard: {
    transition: 'opacity 0.4s ease-in, max-height 0.6s ease-in',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  navBar: {
    backgroundColor: '#1654BA',
    boxShadow: '0 5px 8px 0 #BFBFBF',
  },
  navBarTitle: {
    fontSize: 20,
  },
  iconStyle: {
    color: '#ffffff',
    paddingTop: 15,
  },
  splitter: {
    borderTop: '1px solid #D9D9D9',
    width: '100%',
  },
  btnLabel: {
    color: '#113f8c',
  },
}

class Department extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTitle: 'Department Status',
      leftIcon: '/images/retail/conversions-icon.svg',
      open: false,
      dialogsOpen: Dialogs.none,
      trendingItems: [
      ],
      lowInventoryCard: {
        "buttonTitle" : "REORDER ITEMS",
        "cardTitle" : "You're running low on top sellers",
        "cardSubtitle" : "Reorder from inventory replacement",
        "inventoryThreshold" : 10,
      },
      reorderItemId: null,
      // 0: didn't do anything
      // 1: server response sucess
      // 2: server response error
      // 3: sending request to server
      reorderResponseState: 0,
      reorderResponseMessage: null,
      deliverySchedules: {
      },
      deliveryData: {
      },
    }
  }

  componentWillMount() {
   
      this.setState({
        trendingItems: fake.trendingItems,
        lowInventoryCard: fake.lowInventoryCard,
        deliveryData: fake.deliveryData,
        deliverySchedules: fake.deliverySchedules,
      })
  }

  handleOpenNav() {
    this.setState({
      open: !this.state.open,
    })
  }

  handleCloseNav() {
    this.setState({
      open: false,
    })
  }

  handleReorderItems() {
    this.setState({
      dialogOpen: Dialogs.reorderItems,
    })
  }

  handleBonusPoints() {
    this.setState({
      dialogOpen: Dialogs.bonusPoints,
    })
  }

  handleReminder() {
    this.setState({
      dialogOpen: Dialogs.reminder,
    })
  }

  handleCloseDialog() {
    this.setState({
      dialogOpen: Dialogs.none,
      reorderResponseState: 0,
      reorderResponseMessage: null,
    })
  }

  openDialog(name) {
    this.setState({
      dialogOpen: name
    })
  }

  handleTrackDelivery() {
    browserHistory.push('/enrique/track-delivery')
  }

  handleAssign() {
    browserHistory.push('/enrique/assign-task')
  }

  handleUpdateReorder(reorderAmount) {
    this.setState({
      reorderResponseState: 3,
      reorderResponseMessage: 'Requesting purchase order...',
    })
    
     this.handleCloseDialog()
  }

  onClickReorder(articleId, articleName) {
    this.setState({
      dialogOpen: Dialogs.reorderItems,
      reorderItemName: articleName,
      reorderItemId: articleId,
    })
  }

  getLowInventoryItems() {
    return this.state.trendingItems.map((trendingItem, index) => {
      return (
        <div key={'lowInventoryItem' + index}>
          <Divider />
          <LowInventoryItem
            onClickReorder={this.onClickReorder.bind(this)}
            index={(index + 1) + '. '}
            {...this.state.lowInventoryCard}
            {...trendingItem}
          />
        </div>
      )
    })
  }

  getTopSales() {
    return this.state.trendingItems.map((trendingItem, index) => {
      const avatar = <Avatar src={rank['icon' + index]} />
      return <ListItem
        primaryText={trendingItem.ArticleName}
        rightAvatar={avatar}
        key={'trendingItem' + index}
             />
    })
  }

  onClickConfirmDelivery(deliveries) {
   
  }

  getDeliverySchduleCards() {
    if (!this.state.deliveryData) {
      return null
    }
    const deliveryDataKeys = Object.keys(this.state.deliveryData)
    if (!deliveryDataKeys.length) {
      return null
    }
    const deliverySchduleKeys = Object.keys(this.state.deliverySchedules)
    const deliverySchedules = this.state.deliverySchedules
    const deliveryData = this.state.deliveryData
    // get all availble schdule
    // TODO: use map-reduce, map to cut the dimension, reduce to generate two dimension again
    return deliverySchduleKeys.map((deliveryScheduleKey) => {
      const onedaySchedule = deliverySchedules[deliveryScheduleKey]
      let onedayAvailableSchedule = onedaySchedule.reduce((previousSchedule, delivery) => {
        if (deliveryData[delivery.inboundDeliveryOrderId].state === 'onRoad') {
          previousSchedule.push(deliveryData[delivery.inboundDeliveryOrderId])
        }
        return previousSchedule
      }, [])
      return onedayAvailableSchedule.length ? onedayAvailableSchedule : null
    })
    // TODO: sort by date, on firebase queue
    .reduce((previousSchedule, schdule, index) => {
      if (schdule) {
        previousSchedule.push(
          <DeliveryCard
            schedule={schdule}
            index={index}
            handleTrackDelivery={this.handleTrackDelivery.bind(this)}
            key={'deliverySchedule' + index}
            onClickConfirmDelivery={this.onClickConfirmDelivery.bind(this)}
            />
        )
      }
      return previousSchedule
    }, [])
  }

  render() {
    const actions = [
      <FlatButton
        label="Got It"
        labelStyle={styles.btnLabel}
        secondary={true}
        onClick={this.handleCloseDialog.bind(this)}
        />
    ]

    return (
      <div style={styles.root}>

        <ReactCSSTransitionGroup
          transitionName="wizbang"
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnter={false}
          transitionLeave={false}>
          <div>
            <Card style={styles.dashboardCard}>
              <CardHeader
                title={this.state.lowInventoryCard.cardTitle}
                subtitle={this.state.lowInventoryCard.cardSubTitle}
                titleStyle={{fontSize:28, fontWeight:300}}
                style={{height: 'auto'}}
              />
              <List style={{marginTop: '-8px'}}>
                {this.getLowInventoryItems()}
              </List>
            </Card>
          </div>
          <div>
            <Card style={styles.dashboardCard}>
              <CardMedia>
                <img src={Imageupdate} alt='' />
              </CardMedia>
              <div
                style={styles.splitter} >
              </div>
              <CardActions>
                <FlatButton
                  label="UPDATE DIGITAL SIGNS"
                  href="/enrique/digital-signs"
                  icon={<FontIcon className="material-icons" >arrow_forward</FontIcon>}
                  style={{color: '#113F8C'}}
                />
              </CardActions>
            </Card>
          </div>
          {this.getDeliverySchduleCards()}
          <div>
            <Card style={styles.dashboardCard}>
              <CardMedia>
                <img src={Imagebest} alt='' />
              </CardMedia>
              <div style={styles.splitter} >
              </div>
              <CardActions>
                <FlatButton
                  label="Congratulate your team"
                  onClick={() => this.openDialog(Dialogs.congradulate)}
                  icon={<FontIcon className="material-icons" >arrow_forward</FontIcon>}
                  style={{color: '#113F8C'}}
                />
              </CardActions>
              <Dialog
                title="Message sent"
                modal={true}
                actions={actions}
                open={this.state.dialogOpen === Dialogs.congradulate}
                onRequestClose={this.handleCloseDialog}
              >
                You've sent a message to congratulate your camera department team.
              </Dialog>
            </Card>
          </div>
          <Dialog
            modal={false}
            open={this.state.dialogOpen === Dialogs.reorderItems}
            onRequestClose={this.handleCloseDialog.bind(this)}
            contentStyle={styles.dialogCard}
            bodyStyle={styles.dialogCardBody}
          >
            <ReorderItem
              onUpdate={this.handleUpdateReorder.bind(this)}
              onClose={this.handleCloseDialog.bind(this)}
              ItemName={this.state.reorderItemName}
              reorderResponseState={this.state.reorderResponseState}
              reorderResponseMessage={this.state.reorderResponseMessage}
            />
          </Dialog>
          <Dialog
            title="Bonus points awarded"
            modal={true}
            actions={actions}
            open={this.state.dialogOpen === Dialogs.bonusPoints}
            onRequestClose={this.handleCloseDialog}
            >
            100 bonus points have been awarded to everyone in the camera department. Keep up the great work!
          </Dialog>
          <Dialog
            title="Reminder sent"
            modal={true}
            actions={actions}
            open={this.state.dialogOpen === Dialogs.reminder}
            onRequestClose={this.handleCloseDialog}
            >
            We just sent your staff a friendly reminder to complete this training by Friday.
          </Dialog>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}



export default Department
