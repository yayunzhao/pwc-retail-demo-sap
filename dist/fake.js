"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var categoryItems = [{
  "CurrentPeriodNetSalesAmountInDisplayCrcy": "1474.48",
  "MaterialGroup": "762610005",
  "MaterialGroupName": "TOILET PAPER-PREMIUM",
  "__metadata": {
    "type": "sap.hba.t.rtl.car.mcsa.odata.MCSAServices.NetSalesQueryResultsType",
    "uri": "https://pwcusadsap021-00005278.cloudapp.net/sap/hba/t/rtl/car/mcsa/odata/MCSAServices.xsodata/NetSalesQueryResults('120362213885449231')"
  }
}, {
  "CurrentPeriodNetSalesAmountInDisplayCrcy": "1191.3",
  "MaterialGroup": "161011003",
  "MaterialGroupName": "SALTED SNACKS-POTATO",
  "__metadata": {
    "type": "sap.hba.t.rtl.car.mcsa.odata.MCSAServices.NetSalesQueryResultsType",
    "uri": "https://pwcusadsap021-00005278.cloudapp.net/sap/hba/t/rtl/car/mcsa/odata/MCSAServices.xsodata/NetSalesQueryResults('120362213953972231')"
  }
}, {
  "CurrentPeriodNetSalesAmountInDisplayCrcy": "1055.55",
  "MaterialGroup": "762410001",
  "MaterialGroupName": "PAPER TOWEL-BIG ROLL",
  "__metadata": {
    "type": "sap.hba.t.rtl.car.mcsa.odata.MCSAServices.NetSalesQueryResultsType",
    "uri": "https://pwcusadsap021-00005278.cloudapp.net/sap/hba/t/rtl/car/mcsa/odata/MCSAServices.xsodata/NetSalesQueryResults('120362213877043231')"
  }
}, {
  "CurrentPeriodNetSalesAmountInDisplayCrcy": "744.9",
  "MaterialGroup": "181613001",
  "MaterialGroupName": "SOFT DRINKS-REGULAR-",
  "__metadata": {
    "type": "sap.hba.t.rtl.car.mcsa.odata.MCSAServices.NetSalesQueryResultsType",
    "uri": "https://pwcusadsap021-00005278.cloudapp.net/sap/hba/t/rtl/car/mcsa/odata/MCSAServices.xsodata/NetSalesQueryResults('120362213919281231')"
  }
}, {
  "CurrentPeriodNetSalesAmountInDisplayCrcy": "453.25",
  "MaterialGroup": "252010001",
  "MaterialGroupName": "GALLON WHOLE MILK",
  "__metadata": {
    "type": "sap.hba.t.rtl.car.mcsa.odata.MCSAServices.NetSalesQueryResultsType",
    "uri": "https://pwcusadsap021-00005278.cloudapp.net/sap/hba/t/rtl/car/mcsa/odata/MCSAServices.xsodata/NetSalesQueryResults('120362213975091231')"
  }
}];

var monthlyNetsales = [{
  "Anaheim Store": "218103.43",
  "Chico Store": "418170.44",
  "Laurel Canyon Store": "217877.86",
  "Panorama City Store": 0,
  "month": "Jan",
  "monthIndex": "201601",
  "_style": {}
}, {
  "Anaheim Store": "203818.81",
  "Chico Store": "404314.01",
  "Laurel Canyon Store": "201596.47",
  "Panorama City Store": 0,
  "month": "Feb",
  "monthIndex": "201602",
  "_style": {}
}, {
  "Anaheim Store": "201862.96",
  "Chico Store": "289670.29",
  "Laurel Canyon Store": "198860.38",
  "Panorama City Store": 0,
  "month": "Mar",
  "monthIndex": "201603",
  "_style": {}
}, {
  "Anaheim Store": "196744.8",
  "Chico Store": "274281.03",
  "Laurel Canyon Store": "187648.54",
  "Panorama City Store": 0,
  "month": "Apr",
  "monthIndex": "201604",
  "_style": {}
}, {
  "Anaheim Store": "215862",
  "Chico Store": "492380.22",
  "Laurel Canyon Store": "170047.82",
  "Panorama City Store": 0,
  "month": "May",
  "monthIndex": "201605",
  "_style": {}
}, {
  "Anaheim Store": "181289.52",
  "Chico Store": "293413.85",
  "Laurel Canyon Store": "172926.02",
  "Panorama City Store": "239263.62",
  "month": "Jun",
  "monthIndex": "201606",
  "_style": {}
}];
var trendingItems = [{
  "Article": "000000000000103221",
  "ArticleName": "Canon - EOS M3",
  "CurrentPeriodNetReturnsPercent": "0",
  "CurrentPeriodNetSalesAmountInDisplayCrcy": "10876.91",
  "CurrentPeriodNumberOfSalesItemsPerTransaction": "1.16",
  "CurrentPeriodSalesQuantityInSalesUnit": "3661",
  "CurrentStock": 40,
  "CurrentStockIsBelowSafetyStockLevel": "X"
}, {
  "Article": "000000000000005022",
  "ArticleName": "Sony Alpha a5000",
  "CurrentPeriodNetReturnsPercent": "0",
  "CurrentPeriodNetSalesAmountInDisplayCrcy": "7326.13",
  "CurrentPeriodNumberOfSalesItemsPerTransaction": "1.66",
  "CurrentPeriodSalesQuantityInSalesUnit": "7350",
  "CurrentStock": 192,
  "CurrentStockIsBelowSafetyStockLevel": "X"
}, {
  "Article": "000000000000005921",
  "ArticleName": "Panasonic DMC LX100",
  "CurrentPeriodNetReturnsPercent": "0",
  "CurrentPeriodNetSalesAmountInDisplayCrcy": "5108.48",
  "CurrentPeriodNumberOfSalesItemsPerTransaction": "1.51",
  "CurrentPeriodSalesQuantityInSalesUnit": "5177",
  "CurrentStock": 10,
  "CurrentStockIsBelowSafetyStockLevel": "X"
}];
var lowInventoryCard = {
  "buttonTitle": "REORDER ITEMS",
  "cardSubTitle": "Reorder from inventory replacement",
  "cardTitle": "You're running low on top sellers",
  "inventoryThreshold": 10,
  "lowInventoryItems": [{
    "imgPath": "pwc-retail-app-resource/enrique/dashboard/reorderItemsData/canon-dslr@3x.png",
    "itemName": "DSLR with Lens",
    "sotckNum": "9"
  }, {
    "imgPath": "pwc-retail-app-resource/enrique/dashboard/reorderItemsData/samsung-tv@3x.png",
    "itemName": "42' HDTV",
    "sotckNum": "3"
  }],
  "sort": 600
};
var deliveryData = {
  "0180000054": {
    "deliveryDate": "20160901",
    "inboundDeliveryOrderId": "0180000054",
    "inventory": 123,
    "material": "VirtueBathroomTissue2Ply12pk",
    "materialId": "000000000000103221",
    "purchaseOrderId": "4500000081",
    "quantity": 1,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "vendorName"
  },
  "0180000094": {
    "deliveryDate": "20160902",
    "inboundDeliveryOrderId": "0180000094",
    "inventory": 226,
    "material": "FRESH STRAWBERRIES",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000095",
    "quantity": 1,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000095": {
    "deliveryDate": "20160903",
    "inboundDeliveryOrderId": "0180000095",
    "inventory": 227,
    "material": "FRESH STRAWBERRIES",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000095",
    "quantity": 1,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000096": {
    "deliveryDate": "20160905",
    "inboundDeliveryOrderId": "0180000096",
    "inventory": 228,
    "material": "FRESH STRAWBERRIES",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000097",
    "quantity": 4,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000097": {
    "deliveryDate": "20160906",
    "inboundDeliveryOrderId": "0180000097",
    "inventory": 228,
    "material": "FRESH STRAWBERRIES",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000097",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000098": {
    "deliveryDate": "20161020",
    "inboundDeliveryOrderId": "0180000098",
    "inventory": 33,
    "material": "Pepsi-2 Liter Bottle",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000124",
    "quantity": 33,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000099": {
    "deliveryDate": "20161021",
    "inboundDeliveryOrderId": "0180000099",
    "inventory": 159,
    "material": "Canon - EOS M3",
    "materialId": "000000000000103221",
    "purchaseOrderId": "4500000125",
    "quantity": 11,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000100": {
    "deliveryDate": "20161021",
    "inboundDeliveryOrderId": "0180000100",
    "inventory": 33,
    "material": "Pepsi-2 Liter Bottle",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000126",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000101": {
    "deliveryDate": "20160920",
    "inboundDeliveryOrderId": "0180000101",
    "inventory": 33,
    "material": "Pepsi-2 Liter Bottle",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000126",
    "quantity": 2,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000102": {
    "deliveryDate": "20160820",
    "inboundDeliveryOrderId": "0180000102",
    "inventory": 33,
    "material": "Pepsi-2 Liter Bottle",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000126",
    "quantity": 2,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000103": {
    "deliveryDate": "20161020",
    "inboundDeliveryOrderId": "0180000103",
    "inventory": 33,
    "material": "Pepsi-2 Liter Bottle",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000126",
    "quantity": 1,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000104": {
    "deliveryDate": "20161021",
    "inboundDeliveryOrderId": "0180000104",
    "inventory": 34,
    "material": "Pepsi-2 Liter Bottle",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000126",
    "quantity": 1,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000105": {
    "deliveryDate": "20161021",
    "inboundDeliveryOrderId": "0180000105",
    "inventory": 0,
    "material": "Panasonic DMC LX100",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000127",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000106": {
    "deliveryDate": "20161021",
    "inboundDeliveryOrderId": "0180000106",
    "inventory": 37,
    "material": "Sony Alpha a5000",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000128",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000107": {
    "deliveryDate": "20161021",
    "inboundDeliveryOrderId": "0180000107",
    "inventory": 10,
    "material": "Panasonic DMC LX100",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000129",
    "quantity": 50,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000108": {
    "deliveryDate": "20161021",
    "inboundDeliveryOrderId": "0180000108",
    "inventory": 47,
    "material": "Sony Alpha a5000",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000131",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000109": {
    "deliveryDate": "20170206",
    "inboundDeliveryOrderId": "0180000109",
    "inventory": 10,
    "material": "Canon - EOS M3",
    "materialId": "000000000000103221",
    "purchaseOrderId": "4500000143",
    "quantity": 5,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000110": {
    "deliveryDate": "20170208",
    "inboundDeliveryOrderId": "0180000110",
    "inventory": 10,
    "material": "Canon - EOS M3",
    "materialId": "000000000000103221",
    "purchaseOrderId": "4500000147",
    "quantity": 4,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000111": {
    "deliveryDate": "20170208",
    "inboundDeliveryOrderId": "0180000111",
    "inventory": 182,
    "material": "Sony Alpha a5000",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000148",
    "quantity": 16,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000112": {
    "deliveryDate": "20170208",
    "inboundDeliveryOrderId": "0180000112",
    "inventory": 185,
    "material": "Panasonic DMC LX100",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000149",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000113": {
    "deliveryDate": "20170208",
    "inboundDeliveryOrderId": "0180000113",
    "inventory": 10,
    "material": "Canon - EOS M3",
    "materialId": "000000000000103221",
    "purchaseOrderId": "4500000150",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000114": {
    "deliveryDate": "20170208",
    "inboundDeliveryOrderId": "0180000114",
    "inventory": 185,
    "material": "Panasonic DMC LX100",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000151",
    "quantity": 7,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000115": {
    "deliveryDate": "20170208",
    "inboundDeliveryOrderId": "0180000115",
    "inventory": 185,
    "material": "Panasonic DMC LX100",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000152",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000116": {
    "deliveryDate": "20170208",
    "inboundDeliveryOrderId": "0180000116",
    "inventory": 182,
    "material": "Sony Alpha a5000",
    "materialId": "000000000000005022",
    "purchaseOrderId": "4500000153",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000117": {
    "deliveryDate": "20170213",
    "inboundDeliveryOrderId": "0180000117",
    "inventory": 10,
    "material": "Canon - EOS M3",
    "materialId": "000000000000103221",
    "purchaseOrderId": "4500000156",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000118": {
    "deliveryDate": "20170213",
    "inboundDeliveryOrderId": "0180000118",
    "inventory": 20,
    "material": "Canon - EOS M3",
    "materialId": "000000000000103221",
    "purchaseOrderId": "4500000157",
    "quantity": 15,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000119": {
    "deliveryDate": "20170222",
    "inboundDeliveryOrderId": "0180000119",
    "inventory": 0,
    "material": "Panasonic DMC LX100",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000161",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000120": {
    "deliveryDate": "20170222",
    "inboundDeliveryOrderId": "0180000120",
    "inventory": 0,
    "material": "Panasonic DMC LX100",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000162",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  },
  "0180000121": {
    "deliveryDate": "20170223",
    "inboundDeliveryOrderId": "0180000121",
    "inventory": 0,
    "material": "Panasonic DMC LX100",
    "materialId": "000000000000005921",
    "purchaseOrderId": "4500000165",
    "quantity": 10,
    "state": "received",
    "vendorContact": "1801234567",
    "vendorName": "ABC Food Inc."
  }
};
var deliverySchedules = {
  "20160820": [{
    "date": "20160820",
    "inboundDeliveryOrderId": "0180000102"
  }],
  "20160901": [{
    "date": "20160901",
    "inboundDeliveryOrderId": "0180000054"
  }],
  "20160902": [{
    "date": "20160902",
    "inboundDeliveryOrderId": "0180000094"
  }],
  "20160903": [{
    "date": "20160903",
    "inboundDeliveryOrderId": "0180000095"
  }],
  "20160905": [{
    "date": "20160905",
    "inboundDeliveryOrderId": "0180000096"
  }],
  "20160906": [{
    "date": "20160906",
    "inboundDeliveryOrderId": "0180000097"
  }],
  "20160920": [{
    "date": "20160920",
    "inboundDeliveryOrderId": "0180000101"
  }],
  "20161020": [{
    "date": "20161020",
    "inboundDeliveryOrderId": "0180000098"
  }, {
    "date": "20161020",
    "inboundDeliveryOrderId": "0180000103"
  }],
  "20161021": [{
    "date": "20161021",
    "inboundDeliveryOrderId": "0180000099"
  }, {
    "date": "20161021",
    "inboundDeliveryOrderId": "0180000100"
  }, {
    "date": "20161021",
    "inboundDeliveryOrderId": "0180000104"
  }, {
    "date": "20161021",
    "inboundDeliveryOrderId": "0180000105"
  }, {
    "date": "20161021",
    "inboundDeliveryOrderId": "0180000106"
  }, {
    "date": "20161021",
    "inboundDeliveryOrderId": "0180000107"
  }, {
    "date": "20161021",
    "inboundDeliveryOrderId": "0180000108"
  }],
  "20170206": [{
    "date": "20170206",
    "inboundDeliveryOrderId": "0180000109"
  }],
  "20170208": [{
    "date": "20170208",
    "inboundDeliveryOrderId": "0180000110"
  }, {
    "date": "20170208",
    "inboundDeliveryOrderId": "0180000111"
  }, {
    "date": "20170208",
    "inboundDeliveryOrderId": "0180000112"
  }, {
    "date": "20170208",
    "inboundDeliveryOrderId": "0180000113"
  }, {
    "date": "20170208",
    "inboundDeliveryOrderId": "0180000114"
  }, {
    "date": "20170208",
    "inboundDeliveryOrderId": "0180000115"
  }, {
    "date": "20170208",
    "inboundDeliveryOrderId": "0180000116"
  }],
  "20170213": [{
    "date": "20170213",
    "inboundDeliveryOrderId": "0180000117"
  }, {
    "date": "20170213",
    "inboundDeliveryOrderId": "0180000118"
  }],
  "20170222": [{
    "date": "20170222",
    "inboundDeliveryOrderId": "0180000119"
  }, {
    "date": "20170222",
    "inboundDeliveryOrderId": "0180000120"
  }],
  "20170223": [{
    "date": "20170223",
    "inboundDeliveryOrderId": "0180000121"
  }]
};
exports.default = {
  categoryItems: categoryItems,
  monthlyNetsales: monthlyNetsales,
  trendingItems: trendingItems,
  lowInventoryCard: lowInventoryCard,
  deliverySchedules: deliverySchedules,
  deliveryData: deliveryData
};