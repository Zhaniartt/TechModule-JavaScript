function solve(arr){
    let students = new Map()
    for(let string of arr){
        let parts = string.split(" ")
        let name = parts.shift()
        let grades = parts.map(Number)

        if(students.has(name)){
            let existingGrade = students.get(name);
            grades = existingGrade.concat(grades)

        }
        students.set(name,grades)
    }
    let sorted = [...students.entries()]
        .sort((a,b) => {
            return average(a[1]) - average(b[1])
        })

        for(let [name,grades] of sorted){
            grades = grades.join(", ")
            console.log(`${name}: ${grades}`)
        }

function average(grades){
    let sum = 0;

    for(let grade of grades){
        sum += grade
    }
    return sum/grades.length
}

  
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])