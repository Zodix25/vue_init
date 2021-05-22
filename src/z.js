var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html;charset:utf-8' });
  response.write('<head><meta charset="utf-8"/></head><a style="font-size:50px" href="http://192.168.1.91:8080/?user_id=1F20EEC640D453A040D956C452F932CB&CCBTIMESTAMP=1545616547977&CCBSIGN=1351f4b711729a38e113740ba55caf2a270af9f1970943fe77ad3774f0fa183e1282a16e32c801583771ee28f7a8c069d5a9c6fa3f06ab11943cbfda36071176dd4f894386b04f557c554491b7fe5503f54125af3d432411d9a1c69990e50c509e968dffa3a47b3f980652ea4fac615fecae409041eb40866b536af895417874">跳转本地vue项目</a>');
  response.end();
}).listen(7000, '192.168.1.91');