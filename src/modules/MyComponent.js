import React from 'react'
import axios from 'axios'


class MyComponent extends React.Component {
    componentDidMount() {
        const catagoryIds = ['762610005']
        const startDate = '20160801'
        const endDate = '20160831'
        const storeId = 'ZC16'
        const nameMapping = {
          '762610005': 'TOILET PAPER-PREMIUM',
          '161011003': 'SALTED SNACKS-POTATO',
          '762410001': 'PAPER TOWEL-BIG ROLL',
          '181613001': 'SOFT DRINKS-REGULAR-',
          '252010001': 'GALLON WHOLE MILK',
        }
        let catagoryId = '762610005'
      
        const url = `https://pwcusadsap021-00005278.cloudapp.net/sap/hba/t/rtl/car/mcsa/odata/MCSAServices.xsodata/NetSalesQuery(P_SAPClient='400',P_DisplayCurrency='USD',P_ExchangeRateType='M',P_CurrentPeriodStartDate='${startDate}',P_CurrentPeriodEndDate='${endDate}',P_PreviousPeriodStartDate='',P_PreviousPeriodEndDate='',P_CurrentPeriodLastYearStartDate='',P_CurrentPeriodLastYearEndDate='')/Results?$select=MaterialGroup,MaterialGroupName,CurrentPeriodNetSalesAmountInDisplayCrcy&$filter=OrderChannel+eq+'B1'+and+Location+eq+'${storeId}'+and+MaterialGroup+eq+'${catagoryId}'&$orderby=CurrentPeriodNetSalesAmountInDisplayCrcy+desc&$format=json&$top=5`
      
        // return request.get(url, {
        //   'auth': {
        //     'user': 'hwan004',
        //     'pass': 'Welcome2',
        //   }
        // }, function (error, response, body) {
        //   console.log('error:', error); // Print the error if one occurred 
        //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
        //   console.log('body:', body); // Print the HTML for the Google homepage. 
        // })
        return axios.get(url, {
            auth: {
                username: 'hwan004',
                password: 'Welcome2'
            },
            withCredentials: true,
            mode: 'no-cors',
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          
     
    
    }

    render() {
        return (
            <div className='root'>
                <span> Component</span>
            </div>
        )
    }
};

export default MyComponent;