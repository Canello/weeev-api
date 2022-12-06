exports.sendResponse = (res, data) => {
    if (!data) {
        res.json({ status: 'ok' });
        return;
    }

    res.json({
        status: 'ok',
        data: data
    });
}