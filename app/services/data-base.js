import Service from '@ember/service';

export default class DataBaseService extends Service {
    data = [
        {id: '1', name: "ahror", payment: 123, status: true, date: "08-06-2021"},
        {id: '2', name: "abo", payment: 3453, status: false, date: "09-06-2021"},
        {id: '3', name: "jasur", payment: 33, status: false, date: "20-06-2021"},
        {id: '4', name: "suray", payment: 455, status: true, date: "23-06-2021"},
        {id: '5', name: "lisa", payment: 33, status: false, date: "30-06-2021"},
        {id: '6', name: "jamshid", payment: 5656, status: true, date: "08-07-2021"},
    ];

    update(item) {
        let itemId = item.id;
        this.data.forEach((el, index) => {
            if (el.id == itemId) this.data.splice(index, 1);
        })

        this.data.pushObject(item);
    }
}
