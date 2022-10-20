// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    directors=moviesArray.map((obj)=>obj.director)
    directors_cleaned=[...new Set(moviesArray.map(obj=> obj.director))]
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length===0){
        return 0
    }
    filtered=moviesArray.filter((obj) => obj.director === 'Steven Spielberg')
    if (filtered.length===0){
        return 0
    }
    filtered=moviesArray.filter((obj) => obj.genre.includes('Drama'))
    sndFilter=filtered.filter(obj=>obj.director==='Steven Spielberg')
    return sndFilter.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length===0){
        return 0
    }
    soma=moviesArray.reduce((add,obj)=> {
        if (!obj.score){
            unit=0
        } else{
            unit=obj.score
        }

        return add+unit
    },0)
    return Number((soma/moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if ((moviesArray.filter((obj)=>obj.genre.includes('Drama'))).length===0){
        return 0
    }
    filtered=moviesArray.filter((obj)=>obj.genre.includes('Drama'))
    soma=filtered.reduce((add,obj)=>add+obj.score,0)
    return Number((soma/filtered.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    const sorted=moviesArray.slice().sort((a,b)=>{
        if (a.year>b.year) return 1;
        if (a.year<b.year ) return -1;
        if(a.title>b.title) return 1;
        if(a.title<b.title) return -1;
    })
    return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    mapped=moviesArray.map((obj)=> obj.title)
    const sorted=mapped.slice().sort((a,b)=>{
        if(a>b) return 1;
        if(a<b) return -1;
    })
    if (sorted.length<=20){return sorted}
    else{
        return sorted.slice(0,20)
    }

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const final=moviesArray.map((obj)=>{
        if (typeof obj.duration === 'number'){
            return obj
        } else if (typeof obj.duration === 'boolean'){
            obj.duration=Number(obj.duration)
        }else{

            divisao=obj.duration.split(' ')
            if (divisao.length===1){
                if (divisao[0].includes('h')){
                    obj.duration=Number(divisao[0].replace('h',''))*60
                } else {
                    obj.duration=Number(divisao[0].replace('min',''))
                }
            } else{
                duaracao=(Number(divisao[0].replace('h',''))*60)+Number(divisao[1].replace('min',''))
                obj.duration=duaracao
            }
        }
            return obj
        }) 
    return final
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length===0){
        return null
    }
    const newObj=[]
    years=[...new Set(moviesArray.map(obj=> obj.year))]
    for (let y of years){
        filtered=moviesArray.filter(obj=> obj.year===y)
        soma=filtered.reduce((add,obj)=>add+obj.score,0)
        newObj.push({'year':y,'avg':soma/filtered.length})
    }
    
    const sorted=newObj.slice().sort((a,b)=>{
        if (a.avg<b.avg) return 1;
        if (a.avg>b.avg ) return -1;
        if(a.year>b.year) return 1;
        if(a.year<b.year) return -1;
    })
    return `The best year was ${sorted[0].year} with an average score of ${sorted[0].avg}`

}
