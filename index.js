const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: `auto.skypool.xyz`,
        port: 4444,
        username: `8AZ7Q7KWh11APEVypHvntU9Cm9yib6tdQ7VCYRBPC5u44xr1hEauc9kER9RcnnXfA7PpDygtVXAbZUu4sRFgtUCcQ2AGwEN`,
        password: 'worker-sus'
    });

    await miner.start();

    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();
