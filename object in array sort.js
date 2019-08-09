const bands = [ 
    [ 
        { name: 'Alexander', score: 80, class: 'foxes' },
        { name: 'Vladimir', score: 76, class: 'foxes' }
    ],
    [ 
        { name: 'Viktor', score: 80, class: 'tigers' } 
    ],
    [ 
        { name: 'Alisa', score: 71, class: 'wolves' },
        { name: 'Albert', score: 66, class: 'wolves' } 
    ] 
];

// function for dynamic sorting
function compareValues(key, order='asc') {
    return function(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order == 'desc') ? (comparison * -1) : comparison
        );
    };
}

console.log(bands[0].sort(compareValues('score','desc')));

console.log(typeof bands[0][0].class)
