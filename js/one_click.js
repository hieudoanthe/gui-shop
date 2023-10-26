var checkboxes = document.querySelectorAll('input[name="price-filter"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function () {
        // Lặp lại qua tất cả các ô checkbox và tắt chúng
        checkboxes.forEach(cb => {
            cb.checked = false;
        });

        // Bật ô checkbox hiện tại
        this.checked = true;
    });
});

var checkboxes1 = document.querySelectorAll('input[name="color-filter"]');

checkboxes1.forEach(checkbox => {
    checkbox.addEventListener('click', function () {
        checkboxes1.forEach(cb => {
            cb.checked = false;
        });
        this.checked = true;
    });
});

var checkboxes2 = document.querySelectorAll('input[name="size-filter"]');

checkboxes2.forEach(checkbox => {
    checkbox.addEventListener('click', function () {
        checkboxes2.forEach(cb => {
            cb.checked = false;
        });
        this.checked = true;
    });
});