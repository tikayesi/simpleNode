module.exports = function(app){
    var controller = require ('../controller/bootcamp_batchController');

    app.route('/bootcamp').get(controller.getAll);
    app.route('/bootcamp/:batch_id').get(controller.getId);
    app.route('/bootcamp').post(controller.post);
    app.route('/bootcamp').put(controller.update);
    app.route('/bootcamp/:batch_id').delete(controller.delete);
}