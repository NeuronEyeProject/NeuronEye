
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

const core = os.cpus()[0];
const memory = process.memoryUsage()
const cpu = process.cpuUsage()
 

const usageDatas = [
    { System: 'Platform', Data: `${process.platform}`, status: 'ALL' },
    { System: 'Uptime', Data: `${ms(os.uptime() * 1000, { long: true })}`, status: 'ALL' },
    { System: 'CPU Cores', Data: `${os.cpus().length}`, status: 'ALL' },
    { System: 'CPU Model', Data: `${core.model}`, status: 'ALL' },
    { System: 'CPU Speed', Data: `${core.speed}MHz`, status: 'ALL' },
    { System: 'CPU Usage (Sys)', Data: `${cpu.system}`, status: 'ALL' },
    { System: 'Memory RSS', Data: `${memory.rss}`, status: 'ALL' },
    { System: 'Memory heapTotal', Data: `${memory.heapTotal}`, status: 'ALL' },
    { System: 'Memory heapUsed', Data: `${memory.heapUsed}`, status: 'ALL' },
    { System: 'Memory external', Data: `${memory.external}`, status: 'ALL' },
    { System: 'Memory arrayBuffers', Data: `${memory.arrayBuffers}`, status: 'ALL' }

];

setInterval(function(){ console.table(usageDatas); }, 3600000);

