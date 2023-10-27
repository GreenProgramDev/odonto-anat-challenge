
const generateQuestions = ( namesBones: string[], rightAnswer: string  ) => {
    
    let variedNames = namesBones.filter((nameBone) => nameBone !== rightAnswer);

    for ( let i = 0; i < variedNames.length; i++ ) {

        const randomIndex: number = Math.floor(Math.random() * (i + 1));

         [variedNames[i], variedNames[randomIndex]] = [variedNames[randomIndex], variedNames[i]]
        
    }

    let slicedVariedNames = variedNames.slice(0,4)
    slicedVariedNames.push(rightAnswer)

    return slicedVariedNames.sort(() => Math.random() - 0.5);

}

export default generateQuestions