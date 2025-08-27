function getElement(id) {
    const result = document.getElementById(id)
    return result;
}

getElement("first-card-section").addEventListener("click", function (e) {
    if (e.target.className.includes("heart-block")) {
        const heartButton = e.target;
        const heartCount = heartButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0].innerText;
        const mainHeartBox = getElement("heart-count").innerText;
        const heartCountTotal = Number(heartCount) + 1;
        getElement("heart-count").innerText = heartCountTotal;
        // console.log(heartCountTotal)
    }


})