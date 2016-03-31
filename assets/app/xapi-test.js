
/*
ADL xAPI Vocabulary
 http://xapi.vocab.pub/datasets/adl/
TinCan registry
 https://registry.tincanapi.com/#home/activityTypes
 https://registry.tincanapi.com/#home/verbs

 http://activitystrea.ms/registry/verbs/
 */

/*
Dropping in some sample code from
 http://www.willchinda.com/blog/2015/10/18/xapi-captivate-part-1/
 http://www.willchinda.com/blog/2015/12/06/xapi-captivate-part-2/
 */

/*
function setupConfig() {
  var endpoint = 'https://lrs.adlnet.gov/xapi/';
  var user = 'xapi-tools';
  var password = 'xapi-tools';

  var conf = {
    "endpoint" : endpoint,
    "auth" : "Basic " + toBase64(user + ":" + password),
  };

  ADL.XAPIWrapper.changeConfig(conf);
}

 // Configure xAPIWrapper and save credentials
 setupConfig();

 // Create a statement
 var stmt = new ADL.XAPIStatement();

 // Add 'experienced Captivate button tutorial' to the statement
 stmt.verb = new ADL.XAPIStatement.Verb('http://adlnet.gov/expapi/verbs/experienced', 'experienced');
 stmt.object = new ADL.XAPIStatement.Activity('http://www.willchinda.com/blog/2015/10/14/xapi-captivate-part-1/', 'Captivate button tutorial');

*/

/*
 var userName = window.cpAPIInterface.getVariableValue("user_name");
 var userEmail = 'mailto:' + window.cpAPIInterface.getVariableValue("user_email");

 stmt.actor = new ADL.XAPIStatement.Agent(userEmail, userName);

 var userScore = window.cpAPIInterface.getVariableValue("user_score");

 stmt.result = {
 'score': {
 'raw': userScore
 },
 'completion': true
 };

 var resp_obj = ADL.XAPIWrapper.sendStatement(stmt);
 */