dbQuery.use('riksdagsval-neo4j');
let electionResults = await dbQuery('MATCH (n:Partiresultat) RETURN n LIMIT 25');
console.log(electionResults);

let a = await dbQuery('MATCH (p:Partiresultat) RETURN p.parti AS parti, p.roster2018 AS roster_2018, p.roster2022 AS roster_2022 ORDER BY p.roster2022 DESC');
console.log(a);