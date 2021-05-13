const heroes = `NickName: Chapolin, Power: Velocidade
Nick: Batman, Power: Money
`;

//https://erickwendel.com/talk/detail/6086d4885cf98bda79cd9eb6

const exp = /(NickName|Nick):\s(?<nickname>\w+),\sPower:?\s(?<power>\w.*)/gm

const finalString = heroes.replace(exp, (substring, nickname, power, ...args) => {
    console.log(args)
    return `${nickname}, ${power}`
})

console.log(finalString)

const resultSingleLine = heroes.replace(exp, '$<nickname> $<power>')