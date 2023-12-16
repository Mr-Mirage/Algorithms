// Жадный алгоритм

const openingTime = [
 { 
    start: 9,
    end: 10, 
    cost: 1 },
  { 
    start: 9, 
    end: 11, 
    cost: 1 },
  { 
    start: 11,
     end: 13, 
     cost: 1 },
  { 
    start: 12,
     end: 14, 
     cost: 2 },
  { 
    start: 13, 
    end: 15, 
    cost: 2 },
  { 
    start: 13,
     end: 14, 
     cost: 1 },
  {
    start: 15, 
    end: 16, 
    cost: 2 },
  { 
    start: 14, 
    end: 17, 
    cost: 2 }
];

// пустой массив для хранение брони
const reserveSlots = [];

// сортировка по возростанию 
openingTime.sort((a, b) => a.start - b.start);

// добавление бронирования в reserveSlots
const timeReserve = (start, end, cost) => reserveSlots.push({start, end, cost});

// реализация жадного алгоритма 

const maxProfit = () => {
    for(const slot of openingTime) {
        let overlap = false;
        for(const reserveSlot of reserveSlots) {
            if(
                (slot.start >= reserveSlot.start && slot.start < reserveSlot.end) || (slot.end > reserveSlot.start && slot.end <= reserveSlot.end)                
            ){
                overlap = true;
                break;
            }
        }
        if(!overlap){
            timeReserve(slot.start, slot.end, slot.cost);
        }
    }
}

maxProfit();
console.log('Optimal Sschedule: ', reserveSlots);