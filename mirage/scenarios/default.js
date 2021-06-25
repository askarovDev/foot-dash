export default function (server) {
  let pay1 = server.create('payment', {
    name: "ums", status: true, date: new Date(), sum: 5000
  })

  let pay2 = server.create('payment', {
    name: "unitel", status: true, date: new Date(), sum: 5000
  })
  
  server.create('subscriber', {
    name: "ahror", status: true, date: new Date(), payments: [
      pay1, pay2
    ]
  });

}
