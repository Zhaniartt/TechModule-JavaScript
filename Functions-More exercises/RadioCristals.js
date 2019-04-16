function radioCrystals(params) {
    let cut = x => x / 4;
    let lap = x => x * 0.8;
    let grind = x => x - 20;
    let etch = x => x - 2;
    let transportingAndWashing = x => Math.floor(x);
    function crystalProcessing(crystal, goal) {
        let cnt = 0;
        console.log(`Processing chunk ${crystal} microns`);
        if (cut(crystal) >= goal) {
            while (cut(crystal) >= goal) {
                crystal = cut(crystal);
                cnt++;
            }
            console.log(`Cut x${cnt}`);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            cnt = 0;
        }
        if (lap(crystal) >= goal) {
            while (lap(crystal) >= goal) {
                crystal = lap(crystal);
                cnt++;
            }
            console.log(`Lap x${cnt}`);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            cnt = 0;
        }
        if (grind(crystal) >= goal) {
            while (grind(crystal) >= goal) {
                crystal = grind(crystal);
                cnt++;
            }
            console.log(`Grind x${cnt}`);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            cnt = 0;
        }
        if (crystal > goal) {
            while (crystal > goal) {
                crystal = etch(crystal);
                cnt++;
            }
            console.log(`Etch x${cnt}`);
            console.log('Transporting and washing');
            crystal = transportingAndWashing(crystal);
            cnt = 0;
        }
        if (crystal == goal - 1) {
            console.log(`X-ray x1`);
            crystal++;
        }
        console.log(`Finished crystal ${crystal} microns`);
    }
    let goal = params[0];
    for (let i = 1; i < params.length; i++) {
        let crystal = params[i];
        crystalProcessing(crystal, goal);
    }
  }