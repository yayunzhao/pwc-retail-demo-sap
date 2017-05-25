import fake from './fake'
import { FontIcon, Card,
CardActions, CardMedia, Divider, FlatButton
 } from 'material-ui'
import { LineChart, PieChart } from 'react-d3-basic'
import React from 'react'
import Measure from 'react-measure'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import d3 from 'd3'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Imagelegend from './images/legend2.png'
import Imagesatisfaction from './images/satisfaction.png'

injectTapEventPlugin();

const Dialogs = {
  mentors: 'MENTORS',
  delivery: 'DELIVERY',
  tracking: 'TRACKING',
  none: 'NONE'
}

const x = function(d) {
  var parseDate = d3.time.format("%Y%m").parse;
  return parseDate(d.monthIndex);
}

const styles = {
  root: {
    background: '#f1f1f1',
    height: 1320,
  },
  dashboardCard: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  dialogImage: {
    width: '100%',
    marginTop: 10,
  },
  dialogBox: {
    position: 'relative',
    marginTop: '-150px'
  },
  trackDelivery: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackImg: {
    width: 250,
    margin: '0 auto',
    textAlign: 'center',
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
  hangout: {
    opacity: 0,
    position: 'absolute',
    left: 23,
    top: 13,
  },
}

class Store extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          pageTitle: 'Store',
          open: false,
          dialogOpen: Dialogs.none,
          categoryItems: [],
          categoryTotalAmount: 0,
          MonthlyNetsales: [],
          lineChartDimensions: {
            width: 350,
            height: 150,
          },
          PieChartDimensions: {
            width: 350,
            height: 300,
          },
        }
    }
    componentDidMount() {
        this.setState({
          categoryItems: fake.categoryItems,
          categoryTotalAmount: 4919.48,
        })
        this.setState({
          MonthlyNetsales: fake.monthlyNetsales
        })
    }

    getValue(d) {
    return +d.CurrentPeriodNetSalesAmountInDisplayCrcy;
  }
  getName(d) {
    return d.MaterialGroup;
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

  handleMentors() {
    this.setState({
      dialogOpen: Dialogs.mentors,
    })
  }

  handleDelivery() {
    this.setState({
      dialogOpen: Dialogs.delivery,
    })
  }

  handleTracking() {
    this.setState({
      dialogOpen: Dialogs.tracking,
    })
  }

  handleCloseDialog() {
    this.setState({
      dialogOpen: Dialogs.none,
    })
  }

  onClientResize(dimensions) {
    this.setState({
      lineChartDimensions: {
        width: dimensions.width,
        height: parseInt(dimensions.width/ 2, 10),
      },
      PieChartDimensions: {
        width: dimensions.width,
        height: dimensions.width - 50,
      },
    })
  }

  render() {
        const colors = ['#192E7C', '#7ED321', '#A1EFF9', '#53A8E2', '#1654BA']
        const chartSeries = this.state.categoryItems.map((categoryItem, index) => {
          const percent = Math.round((+categoryItem.CurrentPeriodNetSalesAmountInDisplayCrcy) / this.state.categoryTotalAmount * 100)
          return {
            field: categoryItem.MaterialGroup,
            name: percent + '%',
            color: colors[index],
          }
        })
        const lineChartSeries = [
          {
            field: 'Chico Store',
            name: 'Chico Store',
            color: '#FF9800'
          },
          {
            field: 'Panorama City Store',
            name: 'Panorama City Store',
            color: '#03A9F4'
          },
          {
            field: 'Anaheim Store',
            name: 'Anaheim Store',
            color: '#3ACA60',
          },
          {
            field: 'Laurel Canyon Store',
            name: 'Laurel Canyon Store',
            color: '#3F51B5',
          },
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
            {
                lineChartSeries.length && this.state.categoryItems.length ?
                  <Card style={styles.dashboardCard}>
                    <div style={{padding: 12}} className="multiStoresCard">
                      <h5 style={{fontWeight: 300, fontSize: 22, marginLeft: 10}} className={'multiStoresCardTitle'}>Regional sales are trending down</h5>
                      <LineChart
                        width={this.state.lineChartDimensions.width}
                        height={this.state.lineChartDimensions.height}
                        data={this.state.MonthlyNetsales}
                        chartSeries={lineChartSeries}
                        x={x}
                        xScale={'time'}
                        margins={{left:10, right:15, top:0, bottom:20}}
                      />
                      <Measure
                        onMeasure={this.onClientResize.bind(this)}
                      >
                        <div></div>
                      </Measure>
                    </div>
                    <Divider />
                    <CardActions>
                      <FlatButton
                        label="hangout with regional manager"
                        icon={<FontIcon className="material-icons" >arrow_forward</FontIcon>}
                        style={{color: 'rgb(17, 63, 140)'}}
                      />
                      <div id="placeholder-div" style={styles.hangout}></div>
                    </CardActions>
                  </Card>
                  :
                  null
            }
            {   this.state.categoryItems && chartSeries ? (
                chartSeries.length && this.state.categoryItems.length ?
                  <Card style={styles.dashboardCard}>
                    <div style={{padding: 12, paddingBottom: 0}} className="catagoryCard">
                      <h5 style={{fontWeight: 300, fontSize: 22}}>{'Your store\'s top selling products'}</h5>
                      <PieChart
                        width={this.state.PieChartDimensions.width}
                        height={this.state.PieChartDimensions.height}
                        value={this.getValue}
                        data={this.state.categoryItems}
                        chartSeries={chartSeries}
                        name={this.getName.bind(this)}
                        margins={{left:5, right:5, top:0, bottom:0}}
                      />
                      <img src={Imagelegend} alt='' style={{width: "100%", marginBottom: 20, marginTop: -20}} />
                    </div>
                    <Divider />
                    <CardActions>
                      <FlatButton
                        label="Review Ad Spend"
                        href="/enrique/ad-buy"
                        icon={<FontIcon className="material-icons" >arrow_forward</FontIcon>}
                        style={{color: 'rgb(17, 63, 140)'}}
                      />
                    </CardActions>
                  </Card>
                  :
                  null ) : null
                
            }
            
          </div>
           <div>
            <Card style={styles.dashboardCard}>
              <CardMedia>
                <img src={Imagesatisfaction} alt=''/>
              </CardMedia>
              <div
                style={styles.splitter}>
              </div>
              <CardActions>
                <FlatButton
                  label="Assign Mentors"
                  /*onClick={this.handleMentors.bind(this)}*/
                  icon={<FontIcon className="material-icons" >arrow_forward</FontIcon>}
                  style={{color: '#113F8C'}}
                />
              </CardActions>
            </Card>
          </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }

}


export default Store;