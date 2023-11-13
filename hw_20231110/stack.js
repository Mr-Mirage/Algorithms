const crateSpecialStack = () => {
    const stack = [];   // пустой массив для хранения элементов стека
    const minStack = []; // для хранения минимального значения в стеке

    const push = (value) => {   // добавление нового элемента в стек
        stack.push(value);

        if(minStack.length === 0 || value <= getMin()){     // проверка пуст ли минстек или новое значение меньше/равно текущего
            minStack.push(value); // если да то добавляем
        }
    }
   
    const pop = () => {     // удаление элемента из стека
        if(isEmpty()){      // если стек пуст то возвращаем нулл
            return null;
        }
        
        const popValue = stack.pop();   // удаление верхнего элемента
        if(popValue === getMin()){      // был ли удалённый элемент минимальным
            minStack.pop();         // еслт да то удаляем его из мин слека
        }
        return popValue;
    }

    const isEmpty = () => stack.length === 0; // пуст ли стек?

    const getMin = () => (isEmpty() ? null : minStack[minStack.length -1]); // текущий минэлемент, если стек пуст то нулл
    
    return{
        push,
        pop,
        isEmpty,
        getMin,
    };
};

const specialStack = crateSpecialStack();

specialStack.push(5);
specialStack.push(3);
specialStack.push(1);
specialStack.push(7);
console.log('Min element: ', specialStack.getMin());

specialStack.pop();
specialStack.pop();
console.log('Min element: ', specialStack.getMin());

specialStack.push(0);
specialStack.push(2);
console.log('Min element: ', specialStack.getMin());


