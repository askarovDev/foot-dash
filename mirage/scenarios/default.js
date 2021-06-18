export default function (server) {
  server.create('subscriber', {
    name: "ahror", payment: 123, status: true, date: new Date()
  }),

  server.create('payment', {
    name: "ahror", status: true, date: new Date()
  })
}
