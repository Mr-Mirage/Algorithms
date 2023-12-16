class Lift {
    // определение конструктора с параметрами
    constructor(name, currentFloor) {
        this.name = name;
        this.currentFloor = currentFloor;
    }
}
// определение коструктора с параметрами
class ElevatorSystem {
    constructor(elevators) {
        this.elevators = elevators;
    }

// Определение метода requestElevator для класса ElevatorSystem с параметром targetFloor (целевой этаж). 
requestElevator(targetFloor){
    let closestElevator = null; // хранение ближайшего лифта
    let minDistance = Infinity; // хранение минимального расстояния между лифтами и целевым этажём

        for(const elevator of this.elevators){ // проходим по каждому лифту в массиве 
            const distance = Math.abs(elevator.currentFloor - targetFloor); // вычисление расстояния лифт и целевой этаж
            if(distance < minDistance){ // является ли целевой лифт ближайшим 
                minDistance = distance;
                closestElevator = elevator;
            }
        }

        return closestElevator; // возвращение ближайшего лифта
    }   
}

const elevatorA = new Lift('A', 6);
const elevatorB = new Lift('B', 3);

const elevatorSystem = new ElevatorSystem([elevatorA, elevatorB]);

const targetFloor = 1;
const closestElevator = elevatorSystem.requestElevator(targetFloor);

console.log(`Отправляем лифт ${closestElevator.name} на этаж ${targetFloor}`);