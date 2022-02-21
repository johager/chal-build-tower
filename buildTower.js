/*
Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

The number passed in tells you how many floors the tower should have.

The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

Each block is represented by a *.

For example, a tower of 3 floors looks like this (note the spacing):

[
    '  *  ',
    ' *** ',
    '*****'
]
and a tower of 6 floors looks like this:

[
    '     *     ',
    '    ***    ',
    '   *****   ',
    '  *******  ',
    ' ********* ',
    '***********'
]
*/

// my idea
function tower(numFloors) {
    const floors = []
    let padding = numFloors - 1
    for(i=1; i < 2 * numFloors; i+=2) {
        let floor = ' '.repeat(padding)
        floor += '*'.repeat(i)
        floor += ' '.repeat(padding)
        floors.push(floor)
        padding--
    }
    return floors
}

function runTower(numFloors) {
    console.log(`=== ${numFloors} floors ===`)
    console.log(tower(numFloors))
}

runTower(3)
runTower(6)

//
// Alec Barney's idea
//

const buildTower = (int) =>{
    tower = []
    let padding = ''
    for(i=0; i<int; i++){
        padding += ' '
    }
    for(i=0; i<int; i++ ){
        let asterix = '*'
        for(j=0; j < i; j++) {
            asterix += '**'
        }
        tower.push(padding+asterix+padding)
        padding = padding.slice(0, -1) 
    }
    return tower
}


function runBuildTower(numFloors) {
    console.log(`=== ${numFloors} floors using buildTower ===`)
    console.log(buildTower(numFloors))
}

runBuildTower(3)
runBuildTower(6)

// console.log(`repeat(3): '${'#'.repeat(3)}'`)
// console.log(`repeat(0): '${'#'.repeat(0)}'`)