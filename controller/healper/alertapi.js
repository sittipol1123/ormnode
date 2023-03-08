exports.warning = {message: "warning"};

exports.success = (data = null) => {
    return {status: "success", message: "ok", data: data};
};