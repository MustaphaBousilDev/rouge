<?php 

interface Car {
    public function start();
    public function stop();
    public function setSpeed($speed);
}

class SportsCar implements Car {
    private $engine;
    private $transmission;

    public function start() {
        // Start the engine
        $this->engine->start();
    }

    public function stop() {
        // Stop the engine
        $this->engine->stop();
    }

    public function setSpeed($speed) {
        // Set the speed of the car
        $this->transmission->setSpeed($speed);
    }
}
/*
In this example, an interface Car is defined which contains
 three methods start(), stop() and setSpeed(). The SportsCar class implements the Car interface
  which means it must define the methods that are declared in the interface. 
  The implementation of those methods contains the complexity of the engine and transmission, 
  but the user of the SportsCar class only needs to know the methods that the interface provides,
   he doesn't need to know how the engine and transmission works.

This way, the user of the SportsCar class can simply create an instance of it and 
call the methods start(), stop() and setSpeed() without having to know the details of how the engine and transmission work. 
This makes the code more readable, manageable and less error-prone.

It's important to note that abstraction is not only used for interfaces, it's also used for abstract classes,
 which is a class that can't be instantiated and serves as a base for other classes to inherit from
*/
######################################################################
abstract class Vehicle {
    protected $numWheels;
    protected $color;

    public function setNumWheels($numWheels) {
        $this->numWheels = $numWheels;
    }

    public function getNumWheels() {
        return $this->numWheels;
    }

    public function setColor($color) {
        $this->color = $color;
    }

    public function getColor() {
        return $this->color;
    }

    abstract public function start();
    abstract public function stop();
}

class Car extends Vehicle {
    public function start() {
        // Start the car
    }

    public function stop() {
        // Stop the car
    }
}
/*
In this example, the Vehicle class is defined as an abstract class. 
It contains properties such as numWheels and color and methods such as
 setNumWheels(), getNumWheels(), setColor() and getColor(). 
 These properties and methods can be used by any class that inherits from Vehicle.

The Vehicle class also contains two abstract methods start() and stop() which 
are not implemented in the Vehicle class but are required to be implemented by any class that inherits from it.

The Car class inherits from the Vehicle class and provides an implementation of the start() and stop() methods.
 This way, the Car class can use the properties 
 and methods of the Vehicle class and also provide an implementation of the abstract methods of the Vehicle class.

It's important to note that an abstract class can't be instantiated, 
it's only used as a base for other classes to inherit from.

This way, the Vehicle class defines the common properties and methods for all vehicles,
 and the specific implementation could be done by the child classes that inherit from it.
*/

?>