addMdToPage(`
  ### Det finns mycket nytt och förbättrat i version 6!
  Läs om allt nytt och gammalt [i den inbyggda dokumentationen](/docs)!
`);

dbQuery.use('counties-sqlite');
let countyInfo = await dbQuery('SELECT * FROM countyInfo');
console.log('countyInfo', countyInfo);

dbQuery.use('geo-mysql');
let geoData = await dbQuery('SELECT * FROM geoData LIMIT 25');
console.log('geoData from mysql', geoData);

dbQuery.use('kommun-info-mongodb');
let income = await dbQuery.collection('incomeByKommun').find({}).limit(25);
console.log('income from mongodb', income);

dbQuery.use('kommun-info-mongodb');
let ages = await dbQuery.collection('ageByKommun').find({}).limit(25);
console.log('ages from mongodb', ages);

dbQuery.use('riksdagsval-neo4j');
let electionResults = await dbQuery('MATCH (n:Partiresultat) RETURN n LIMIT 25');
console.log('electionResults from neo4j', electionResults);