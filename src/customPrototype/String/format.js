
String.prototype.format = function (format) {
    let result = this;

    Object.keys(format).forEach((item)=>{
        result = result.replace(`{${item}}`, `${format[item]}`);
    });

    return result;
};
