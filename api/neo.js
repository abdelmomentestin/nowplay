module.exports = (req, res) => {
  var neo4j = require('neo4j-driver');

  var query = 
    "MATCH (n) \
     RETURN count(n) as count";

  function getInt_v(item, prop){
      let val = item.get(prop).toString();
      if(val)
          return parseInt(val);
      return null;
  }
  
    var driver = neo4j.driver('bolt://54.87.236.196:36710', neo4j.auth.basic('neo4j', 'losses-nets-adjective'));
    var session = driver.session({ defaultAccessMode: neo4j.session.WRITE });
    let count = 0;
    session.run(query)
    .then((result) => {
        let [record] = result.records;
        count = getInt_v(record,'count');
        session.close();
        driver.close();
        return res.status(200).send(`Hello from neo4j!, Count: ${count}`);
    })
    .catch((error) => {console.log(error)});

}
