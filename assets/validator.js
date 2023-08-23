// Doi tuong Validator
function Validator(options) {
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement =
            inputElement.parentElement.querySelector(".form-message");
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            errorElement.classList.add("invalid");
        } else {
            errorElement.innerText = "";
            errorElement.classList.remove("invalid");
        }
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };
            }
        });
    }
}

// Dinh nghia rules
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (regex.test(value)) {
                return undefined;
            } else {
                return "Trường này phải là Email";
            }
        },
    };
};

Validator.isPassword = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : "Vui lòng nhập mật khẩu";
        },
    };
};
