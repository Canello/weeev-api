exports.editUser = async (req, res, next) => {
    try {
        req.json({
            status: 'ok'
        });
    } catch (err) {
        res.json({
            status: 'failed',
            data: {
                error: 'Alguma coisa deu errado.'
            }
        });
        console.log(err);
    }
}