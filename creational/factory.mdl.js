(function(){
	'use strict';

	angular.module('personFactory',[])
		.factory('personFactory', personFactory);

	/**
	 *  an array of dependencies to inject into the personFactory
	 */
	personFactory.$inject = [];

	/**
	 *  The factory pattern is a creational patterned, whose role is to
	 *  create objects. This provides a generic interface for creating (aka newing)
	 *  objects, where the client specifies the type of object to be created,
	 *  and passes in data used to create the object(s).
	 *
	 */
	function personFactory() {
		var publicApi = {
			createPerson: createPerson,
			createPeople: createPeople
		};

		function createPerson(data){
			return new Person(data);
		}

		function createPeople(arr){
			return arr.map(function(item){
				return createPerson(item);
			});
		}
		return publicApi;
	}

	/**
	 *  In oo languages, a constructor is a special method used to initialize
	 *  an object from a class.  In JS, there are no classes, however we can
	 *  create an object from another object.
	 */
	var Person = (function(){

		/**
		 *  A constructor pattern to convert the incomming data (from Web API)
		 *  into a JS object.
		 */
	    function Person(data) {
	        this.id = data.id;
			this.first = data.first;
			this.last = data.last;
		}

		/**
		 *  Objects created using an object literal, or with new Object(), 
		 *  inherit from a prototype called Object.prototype. 
		 *
		 *	These methods are not copies from object to object.  Each object
		 *  has a reference to a single instance of the method.
		 */
		 Person.prototype.toString = function(){
				 return this.first + ' ' + this.last;
			}

		return Person;
	})();
})();