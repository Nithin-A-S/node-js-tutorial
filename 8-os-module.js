// os module
//builtin module
const { log } = require('console')
const os=require('os')
//current user info
const user=os.userInfo()
console.log(user);
// returns system uptime
const uptime=os.uptime()
console.log(uptime);
const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem()
}
console.log(currentos);