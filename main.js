var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var controlBirth = require('control.birth');
var roleStatHarvester = require('role.statHarvesting');
var roleHauler = require('role.hauler')

module.exports.loop = function () {
    //очистка памяти
    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    

    //controlRole.count();
    //controlRole.getData();

    
    
    
    //поддержание количества крипов
    
    
    
    
    /* Управление турелью по ID
    var tower = Game.getObjectById('968c0c465d9a156c5cf78566');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    */

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'soldier.attack') {
            roleSoldierAttack.run(creep, 5);
        }
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'statHarvester') {
            roleStatHarvester.harvest(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'hauler') {
            roleHauler.run(creep);
        }
    }
    
}