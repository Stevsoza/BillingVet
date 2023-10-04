class ShipmentFormulario extends gpax {
   config(wg) {
      var prin = wg.$rows()
      var bu = prin.$rows()
      var button = bu.$cols()
      button.button('guardarFormulario', 'Guardar', this.guardarFormulario).set('css', 'buttonUPS').set('width', 150)
      button.empty().set('width', 10)
      button.button('eliminar', 'Eliminar', this.Eliminar).set('css', 'buttonUPS').set('width', 150)
      button.empty().set('width', 10)

      button.empty()
      bu.empty().set('height', 20)
      var tv = prin.tabview('tab').set('css', 'tabviewUPS tabviewBorderUPS tabviewBorderSelectedUPS')
      var infoG = tv.tab('Información General').form('infoGen').set('borderless', true).setData(this.data)
      var infoP = tv.tab('Paquetes').form('infoPaquetes').set('borderless', true).setData(this.data)

      var inf = infoG.form('principalform').set('elementsConfig', {
         labelWidth: 120
      }).set('borderless', true).setData(this.data.shipment).$rows()



      var p = inf.$rows()
      var col = p.$cols()

      //---------------------------SHIPPER-----------------------------------//


      var infor = col.$rows()
      var title = infor.$cols()
      title.text('id', 'Shipment ID')
      title.button('buscar', 'Buscar', this.buscar).set('css', 'buttonUPS').set('width', 150)
      infor.empty().set('height', 20)
      var coln1 = infor.$cols()
      var fs = coln1.form('infShipper').set('elementsConfig', {
         labelWidth: 80
      }).setData(this.data.shipment.shipper).$rows()
      fs.template('<div style=" color:#FFBE00;font-size:16px;text-align:left"> <h2>Shipper </h> </div> ', 'header', 'center').set('borderless', true).set('height', 55)
      fs.text('number', 'Icris: ', 'h4')
      fs.text('contactName', 'Contacto: ', 'h4')
      fs.empty()
      fs.text('phoneNumber', 'Telefono: ', 'h4')
      fs.text('company', 'Compañia: ', 'h4')
      fs.text('address', 'Dirección: ', 'h4')
      var fs2 = fs.$cols()
      fs2.text('country', 'País: ', 'h4')
      fs2.text('city', 'Ciudad: ', 'h4')
      fs2.text('postalCode', 'Cód. Postal: ', 'h4')


      //---------------------------CONSIGNEE-----------------------------------//

      var consig = coln1.$cols()
      var fs2 = consig.form('infconsignee').set('elementsConfig', {
         labelWidth: 80
      }).setData(this.data.shipment.consignee).$rows()
      fs2.template('<div style="color:#FFBE00;  font-size:16px;text-align:left"> <h2>Consignee </h> </div> ', 'header', '').set('borderless', true).set('height', 60)
      fs2.text('contactName', 'Contacto: ', 'h4').set('borderless', true)
      fs2.text('company', 'Compañia: ', 'h4').set('borderless', true)
      fs2.text('phoneNumber', 'Telefono', 'h4').set('borderless', true)
      fs2.text('address', 'Dirección: ', 'h4')
      var fs22 = fs2.$cols()
      fs22.text('country', 'País: ', 'h4')
      fs22.text('city', 'Ciudad: ', 'h4')
      fs22.text('postalCode', 'Cód.Postal: ', 'h4')





      //------------------INFORMACION ENVIO-----------------------------------//
      var ct = infor.$cols()
      var fp = ct.form('infEnvio').set('elementsConfig', {
         labelWidth: 180
      }).setData(this.data.shipment).$rows()
      fp.template('<div style="color:#FFBE00;  font-size:16px;text-align:letf"> <h2>Informacion del envio</h> </div> ', 'header', '').set('borderless', true).set('height', 60)


      var colint = fp.$cols()
      fs = colint.$rows()
      // fs.text('billingTermField', 'Tipo de Pago:', 'h3')
      fs.combo('billingTermField', 'Tipo de Paquete:',
         [{ id: 'P/P', value: 'P/P' },
         { id: 'F/D', value: 'F/D' },
         { id: 'F/C', value: 'F/C' }])
      //fs.text('billingType', 'Tipo de Paquete:', 'h3')
      fs.combo('billingType', 'Tipo de Paquete:',
         [{ id: 'L', value: 'L' },
         { id: 'N', value: 'N' },
         { id: 'D', value: 'D' },
         { id: 'P', value: 'P' }])
      fs.combo('serverLevel', 'Servicio:', this.microservice('mcvip.codigosservicio'))

      fs.text('numberPackages', 'Cantidad Paquetes:', 'h3')
      fs.text('specialInstructionField', 'Instr. Especial:', 'h3')

      var formInv = fs.form('InfInv').set('elementsConfig', {
         labelWidth: 150
      }).setData(this.data.shipment).set('borderless', true).$cols()
      formInv.text('shipmentWeight', 'Peso Total:', 'h3')
      formInv.text('weight', 'Peso Paquete:', 'h3')
      formInv.text('dimensionalWeight', 'Peso Dim.:', 'h3')

      //---------------------------------------PAQUETES --------------------------------//
      var paquetes = infoP.$rows()
      var col1 = paquetes.$cols()


      col1.fieldset('subpaquete').$rows()
         .datatable('subpaquetes')
         .set('select', 'row')
         .set('type', 'row')
         .eventCss('my_style', this.estilo)
         .col('trackingNumber', 'Tracking Number', {
            fillspace: 10
         })
         .col('oversize', 'Oversize', {
            fillspace: 10
         })
         .col('weight', 'Weight', {
            fillspace: 10
         })
         .col('WeightUnit', 'Weight Unit', {
            fillspace: 10
         })
         .setData(this.data.shipment.package)

      var formInv = col1.form('paquetesFormulario').set('elementsConfig', {
         labelWidth: 180
      }).set('borderless', true).$rows()
      formInv.text('trackingNumber', 'Tracking Number', 'h3')
      formInv.text('oversize', 'Oversize', 'h3')
      formInv.text('weight', 'Weight', 'h3')
      formInv.text('WeightUnit', 'Weight Unit', 'h3')
      formInv.empty().set('height', 10)
      var but = formInv.$cols()
      but.button('nuevo', 'Nuevo paquete', this.limpiar).set('css', 'buttonUPS').set('width', 150)
      but.empty().set('width', 10)
      but.button('guardar', 'Guardar paquete ', this.nuevoP).set('css', 'buttonUPS').set('width', 150)
      but.empty().set('width', 10)
      but.button('eliminar', 'Eliminar paquete ', this.borrarP).set('css', 'buttonUPS').set('width', 150)
      but.empty()
      formInv.empty()

   }
   init() {
      this.bind('paquetesFormulario', 'subpaquetes')
   }
   guardarFormulario() {
      var data = {}
      data.id = this.get('id').getValue()
      data.status = 'waiting'
      data.addressStatus = 'unknown'
      data.clientType = 'unknown',
         data.procesado = 'pendiente'
      var shipp = this.get('infShipper').getValues()
      var shipper = {}
      shipper.contactName = shipp.contactName
      shipper.phoneNumber = shipp.phoneNumber
      shipper.company = shipp.company
      shipper.address = shipp.address
      shipper.country = shipp.country
      shipper.city = shipp.country
      shipper.postalCode = shipp.country
      shipper.number = shipp.number
      data.shipper = shipper
      var consig = this.get('infconsignee').getValues()
      var consignee = {}
      consignee.contactName = consig.contactName
      consignee.phoneNumber = consig.phoneNumber
      consignee.company = consig.company
      consignee.address = consig.address
      consignee.country = consig.country
      consignee.city = consig.city
      consignee.postalCode = consig.postalCode
      data.consignee = consignee
      var infoA = this.get('infEnvio').getValues()
      data.billingTermField = infoA.billingTermField
      data.billingType = infoA.billingType
      data.serverLevel = infoA.serverLevel
      data.numberPackages = infoA.numberPackages
      data.specialInstructionField = infoA.specialInstructionField
      var info2 = this.get('InfInv').getValues()
      data.shipmentWeight = info2.shipmentWeight
      data.weight = info2.weight
      data.dimensionalWeight = info2.dimensionalWeight
      data.importDate = new Date()
      data.valorBuscado = this.data.valorBuscado
      data.package = this.get('subpaquetes').serialize()
      this.call({ formulario: data }, 'guardarFormulario')
      webix.message("Shipment Almacenado ", "success", 2000, "guardado");

   }


   buscar() {
      var id = this.get('id').getValue()
      this.call({ id: id }, 'buscarShipment')
   }
   nuevoP() {
      var valoresFormulario = this.get('paquetesFormulario').getValues()
      this.get('subpaquetes').add({
         _id: valoresFormulario._id,
         trackingNumber: valoresFormulario.trackingNumber, oversize: valoresFormulario.oversize, weight: valoresFormulario.weight, WeightUnit: valoresFormulario.WeightUnit
      }, 0)
      var datos = {
         'trackingNumber': '',
         'oversize': '',
         'weight': '',
         'WeightUnit': ''
      }
      this.get('paquetesFormulario').setValues(datos)
   }
   limpiar() {
      var datos = {
         'trackingNumber': '',
         'oversize': '',
         'weight': '',
         'WeightUnit': ''
      }
      this.get('paquetesFormulario').setValues(datos)

   }

   borrarP() {
      var id = this.get('subpaquetes').getSelectedId(true)

      if (id) {
         this.get('subpaquetes').remove(id)
      } else {
         this.message('Seleccione  el que quiere borrar')
      }
   }


   test() {
      return {
         shipment: {
            "addressStatus": "unknown",
            "billingTermField": "P/P",
            "billingType": "P",
            "clientType": "unknown",
            "consignee": {
               "company": "SAMTEC INTERCONNECT ASSEMBLY C",
               "contactName": "INVENTORY",
               "address": "500 METROS OESTE Y 500 METROS       PARQUE INDUSTRIAL ZETA MONTECILLOS  SUR DE COOPEMONTECIL",
               "city": "ALAJUELA",
               "state": "  ",
               "postalCode": 24000,
               "country": "CR ",
               "phoneNumber": "50622629555",
               "faxNumber": "",
               "poNumber": "",
               "alternateTrackingNumber2": "000"
            },
            "countryOriginGoods": "US ",
            "dateShipped": "2022-09-30T06:00:00.000Z",
            "declaredValue": 0,
            "deliveryDate": "2022-10-04T14:05:03.770Z",
            "destinationCountry": "CR",
            "destinationPort": "5936",
            "dimensionalWeight": "7113 ",
            "dimensionalWeightUnit": "LBS",
            "earlyAmIndicator": "N",
            "freightCollectFlag": "N",
            "importDate": "2022-10-04T14:05:04.816Z",
            "inputDate": "2022-09-30T06:00:00.000Z",
            "invoice": [
               {
                  "unitQuantity": "1   ",
                  "code": "PC ",
                  "description": "CIRCUIT",
                  "price": 36482774,
                  "currencyCode": "USD",
                  "number": "12165521",
                  "countryOrigin": "US"
               }
            ],
            "invoiceCurrencyCode": "USD",
            "invoiceTotal": 36482774,
            "mawbNumber": "",
            "numberPackages": 16,
            "originCountry": "US",
            "originPort": "5273",
            "overWeight": "Y",
            "package": [
               {
                  "trackingNumber": "1Z15A495E100012786",
                  "weight": 480,
                  "weightUnit": "LBS",
                  "oversize": " "
               },
               {
                  "trackingNumber": "1Z15A495E100012928",
                  "weight": 591,
                  "weightUnit": "LBS",
                  "oversize": " "
               },
               {
                  "trackingNumber": "1Z15A495E100012893",
                  "weight": 264,
                  "weightUnit": "LBS",
                  "oversize": " "
               },
               {
                  "trackingNumber": "1Z15A495E100012884",
                  "weight": 252,
                  "weightUnit": "LBS",
                  "oversize": " "
               },
               {
                  "trackingNumber": "1Z15A495E100012866",
                  "weight": 260,
                  "weightUnit": "LBS",
                  "oversize": " "
               },
               {
                  "trackingNumber": "1Z15A495E100012839",
                  "weight": 176,
                  "weightUnit": "LBS",
                  "oversize": " "
               },
               {
                  "trackingNumber": "1Z15A495E100012820",
                  "weight": 235,
                  "weightUnit": "LBS",
                  "oversize": " "
               },
               {
                  "trackingNumber": "1Z15A495E100012795",
                  "weight": 263,
                  "weightUnit": "LBS",
                  "oversize": " "
               }
            ],
            "procesado": "procesado",
            "recordType": "200000",
            "saturdayDeliveryFlag": "N",
            "serverLevel": "T",
            "shipmentType": "D",
            "shipmentWeight": 7113,
            "shipmentWeightUnit": "LBS",
            "shipper": {
               "number": "15A495",
               "company": "SAMTEC MISC",
               "address": "520 PARK EAST BLVD",
               "city": "NEW ALBANY",
               "state": "IN",
               "postalCode": 471507251,
               "country": "US ",
               "phoneNumber": "8129446733",
               "customsEINNumber": "351399589",
               "contactName": ""
            },
            "specialInstructionFlag": "N",
            "status": "waiting",
            "thirdPartyIndicatorCode": "0",
            "bol": true,
            "cantidadPackage": 8,
            "id": "15A495334X9"
         },
         traking: [{
            "date": "2022-08-18",
            "value": "Por Arribar",
            "details": "system",
            "_id": 1,
            "trackingNumber": "1Z52X807E198989616"
         },
         {
            "date": "2022-08-18",
            "value": "bodega",
            "details": "tatiana",
            "_id": 1,
            "trackingNumber": "1Z52X807E198989616"
         },
         {
            "date": "2022-08-18",
            "value": "Por Arribar",
            "details": "system",
            "_id": 1,
            "trackingNumber": "1Z52X807E198989616"
         },
         {
            "date": "2022-08-18",
            "value": "Por Arribar",
            "details": "system",
            "_id": 1,
            "trackingNumber": "1Z52X807E198989617"
         },
         {
            "date": "2022-08-18",
            "value": "transito",
            "details": "tatiana",
            "_id": 1,
            "trackingNumber": "1Z52X807E198989617"
         }],
         valorBuscado: ''
      }
   }

}