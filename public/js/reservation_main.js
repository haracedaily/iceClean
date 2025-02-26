// DOMContentLoaded 사용하면 html 다 불러온 후 함수 실행
document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#rf_dateTime", {
        dateFormat: "Y-m-d"
    });
    flatpickr("#dateTime", {
        dateFormat: "Y-m-d"
    });
});

document.getElementById('dateTime').value = new Date().toISOString().substring(0, 10);

function searchAddress() {
    new daum.Postcode({
        oncomplete: function (data) {
            document.getElementById("address").value = data.address;
        }
    }).open();
}