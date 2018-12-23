new Vue({
    el: '#app3',
    data() {
        return {
            info: null,
            note: [],
            items: '',
            itemx: ''
        }
    },
    mounted() {
        getData().then(data => {
            this.note = data;
        });

    },
    methods: {
        getItems: function () {
            getData().then(data => {
                this.note = data;
            });
        },
        deleteItem: function (item) {

            this.note = this.note.filter((del) => {
                return del._id !== item;
            });
            removeItem(item).then(data => {

                return data.json();
            }).then(result=> {
                console.log('Item Removed');
            });

        },
        addItem: function(todo) {

            document.getElementById('item').focus();
            let note = this.note;
            this.itemx = '';
            if (todo) {

                addItems(todo).then(function (item) {
                    console.log('Added Item: ' + item.item);
                    note.push(item);
                });

                this.note = note;
            }

        }
    }
});