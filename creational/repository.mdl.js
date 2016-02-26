(function () {
    'use strict';

    angular.module('personRepository', [])
		.factory('personRepository', personRepository);

    /**
	 *  an array of dependencies to inject into the personFactory
	 */
    personRepository.$inject = [];

    /**
	 *  Repository can be viewed as a special kind of Façade (structural) 
	 *  but also as a special kind of Factory (creational). 
	 * 
	 *  Also, as the Repository often expose collection-like interfaces, 
	 *  then it might be a special application of Iterator (behavioral).
	 *
	 */
    function personRepository() {
        var db = [
                { id: 1, first: 'Fred', last: 'Flinstone' },
                { id: 2, first: 'Wilma', last: 'Flinstone' },
                { id: 3, first: 'Barney', last: 'Rubble' }
            ],
            dbHash = {
                '1': db[0],
                '2': db[1],
                '3': db[2]
            };

        function getPeople() {
            return db;
        }

        function updatePerson(id, person) {
            console.log('updating ', dbHash[id], ' to ', person.toString());
        }
        return {
            fetch: getPeople,
            update: updatePerson
        };
    }
})();