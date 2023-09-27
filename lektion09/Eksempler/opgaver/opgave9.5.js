function createSubject () {
    const observers = [];

    function registerObserver (observer) {
        observers.push(observer);
    }

    function notifyObservers (data) {
        observers.forEach(observer => observer(data));
    }

    return {
        registerObserver,
        notifyObservers
    };
}


const subject = createSubject();

function observer1(data) {
    console.log("Observer 1 modtog data: " + data);
}

function observer2(data) {
    console.log("Observer 2 modtog data: " + data);
}

subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.notifyObservers("Hello World");
