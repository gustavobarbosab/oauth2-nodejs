var express =  require(`express`);
var consign =  require(`consign`);
var bodyParser =  require(`body-parser`);

module.exports = function(){
  var app = express();

  app.use(bodyParser.json());

  consign({cwd:'app'})
    .include('domain')
    .then('controller')
    .into(app);

  return app;
}
