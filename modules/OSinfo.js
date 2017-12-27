const os = require('os');
const upTime = require('./upTime');
const colors = require('colors');

function getOSinfo() {
  let type = os.type();
  let release = os.release();

  if (type === "Darwin") {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }
  
  let cpu = os.cpus()[0].model;
  let userInfo = os.userInfo();
  
  console.log('System: '.cyan, type);
  console.log('Release:'.grey, release);
  upTime.timeRun();
  console.log('CPU model:'.blue, cpu);
  console.log('User name:'.yellow, userInfo.username);
  console.log('Home dir:'.red, userInfo.homedir);
}

exports.print = getOSinfo;