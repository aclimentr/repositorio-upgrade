const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},
{title: 'Origen', stars: 5, date: 2010},
{title: 'Your Name', stars: 5, date: 2016}];

const movies2010 = movies.find(function (params) {
    return params.date === 2010;
})
console.log(movies2010);