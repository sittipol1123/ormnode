exports.warning = {message: "warning"};

exports.success = (data = null) => {
    return {status: "success", message: "ok", data: data};
};

exports.error = (message = null) => {
    return {status: "error", message: message}
}