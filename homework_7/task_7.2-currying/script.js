function curryFn (a) {
    return function(b) {
        return a * b;
    }
}

curryFn(5)(9);