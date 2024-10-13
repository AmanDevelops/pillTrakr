

const uploadPresc = document.querySelector('#apply-form-btn');

const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
}

uploadPresc.addEventListener('click', () => {

    const billName = document.querySelector("#billing-name");
    const addr = document.querySelector("#user-add");
    const pincode = document.querySelector("#pincode");
    const number = document.querySelector("#number");

    data = {
        name: billName.value,
        addr: addr.value,
        pincode: pincode.value,
        number: number.value
    }

    sendData('/upload-presc', data);
    }
)

