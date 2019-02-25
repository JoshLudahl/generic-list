const getData = () => {
    try {

        const data = fetch('/list', {
            method: 'GET'
        }).then(x => {
            return x.json();
        }).then(data => {
            return data;
        })
        return data;
    } catch (error) {
        return error;
    }
};

const removeItem = (item) => {

    try {
        const data = fetch('/list/' + item, {
                method: 'DELETE'
            })
            .then(data => {
                return data;
            })
        return data;
    } catch (error) {
        return error;
    }
    return data;
}

function addItems(item) {
    try {
        const data = fetch('/list/' + item, {
            method: 'POST',
            mode: "cors",
            credentials: "omit",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (newItem) {

            return newItem.json();
        }).then(result => {
            return result;
        });
        return data;
    } catch (error) {
        return error;
    }
}