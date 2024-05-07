const os = require("os");

//Get total memory (in bytes)
const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory}`);
// console.log(`Total Memory: ${((totalMemory)/(1024*1024*1024))}`);

//Get free memory (in bytes)
const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory}`);
// console.log(`Free Memory: ${(freeMemory)/(1024*1024*1024)}`)

// Get OS platform
const platform = os.platform();
console.log(`OS Plateform: ${platform}`);

// Get CPU information
const cpus = os.cpus();
console.log(`Number of CPU's: ${cpus.length}`);
cpus.forEach((cpu, index) => {
  console.log(`CPU ${index + 1} : ${cpu.model}`);
});

// Get current user info
const userInfo = os.userInfo();
console.log(`Current user info: ${JSON.stringify(userInfo)}`);

//Network Interface
const networkInterfaces = os.networkInterfaces;
console.log(networkInterfaces.length)

//uptime
const uptime = os.uptime();
console.log(`System uptime: ${uptime}`);

// Helper function to format bytes
// function formatBytes(bytes) {
//   const units = ["B", "KB", "MB", "GB", "TB"];
//   let size = bytes;
//   let unitIndex = 0;
//   while (size >= 1024 && unitIndex < units.length - 1) {
//     size /= 1024;
//     unitIndex++;
//   }
//   return `${size.toFixed(2)} ${units[unitIndex]}`;
// }
