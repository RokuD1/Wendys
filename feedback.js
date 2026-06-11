const customers = [];

const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const customer = {
        id: customers.length + 1,
        name: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        phone: document.getElementById("phone").value,
        visitDate: document.getElementById("visit-date").value,
        favoriteItem: document.getElementById("favorite-item").value,
        server: document.getElementById("server").value,
        orderType: getOrderType(),
        interests: getInterests(),
        comments: document.getElementById("comments").value
    };

    customers.push(customer);

    console.clear();
    console.log(customers);
});

function getOrderType() {
    if (document.getElementById("dine-in").checked) {
        return "Dine In";
    }
    else if (document.getElementById("drive-thru").checked) {
        return "Drive-Thru";
    }
    else if (document.getElementById("mobile-order").checked) {
        return "Mobile Order";
    }
    else {
        return "";
    }
}

function getInterests() {
    const interests = [];

    if (document.getElementById("rewards").checked) {
        interests.push("Rewards");
    }

    if (document.getElementById("updates").checked) {
        interests.push("Newsletter");
    }

    return interests;
}