import Counter from "../../../components/counter/Counter";
import MyButton from "../../../components/myButton/myButton";

function Lesson07(){
let hero:string = 'batman'
console.log(hero);

interface ISuperHero {
    id: number
    name: string
    age?: number | string
    nickname: string
    abilities?: string[]
}
interface ISpaceHeros extends ISuperHero {
    homePlanet: string

}

let hero1:ISpaceHeros = {
    id:1,
    name: 'Clark Kent',
    nickname: 'Superman',
    homePlanet: 'Crypton',
    abilities: ['super vision', 'can fly']
    
}
let hero2:ISuperHero = {
    id:2,
    name: 'Bruce Wane',
    nickname: 'Batman'
}
interface ISpaceHeros{
    isAlive?: boolean
}
const heros:ISuperHero[] = [hero1,hero2] //we must use [ ] after interface

type Animal = {
    name: string
    weight: number
}
let panda:ExoticAnimals = {
    name:'Po',
    weight:100,
    country:'China'
}
type ExoticAnimals = Animal & {
    country: string
}
console.log(panda);
console.log(heros);
//generic
function makeArra<T>(first:T, second:T):T[]{
    return [first,second]
}
const people = makeArra('Tom','Harry')
console.log(people);

const handleHello = ()=> {
    console.log('Hello!');
    
}


    return(
        <div className="lesson-container">
            <h4>Lesson 07</h4>
            <p>Everything about TS part 2</p>
            <ul>
            {heros.map(el => (
            <div key={el.id}>
            <h4>🦸🏻‍♂️: {el.nickname}</h4>
            <p>Real name: {el.name}</p>
            </div>
        ))}
            </ul>
        <div>
            <MyButton name="click" onClick={()=> console.log('click')
            }/>
            <MyButton name="hello" onClick={handleHello}/>
            <MyButton name="submit" onClick={()=> console.log('submit')
            }/>
        </div>
        <Counter />
        </div>
    )
}
export default Lesson07;