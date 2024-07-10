function Lesson06(){
    // String
        let username:string = 'Bob'
        username = 'Harry'
        console.log(username);
        // Number
        let number = 42
        number = 7.1;
        number = NaN
        number = 2 + Number('1')
        console.log(number);
        // Boolean
        let isAdmin = true
        isAdmin = 2 < 3
        console.log(isAdmin);
        // null undefined
        // undefined is usually mistake
        // null we make it empty

    let emptyValue: null = null
    // emptyValue = 0 error 0 isnt null
    console.log(emptyValue);
    
    let empty: undefined = undefined
    console.log(empty);
    
// Arrays
    const colors = ['red', 'green', 'blue']
    console.log(colors);
    colors.push('yellow')
    colors[0] = 'pink'
    console.log(colors);
    
    // function
    const showMessage = () =>{
        console.log('hello');
        return 8;
    }

    let fromShowMessage = showMessage()
    console.log(fromShowMessage);
    
const sum = (a:number, b:number) =>{
    return a + b
}
    console.log(sum(4,10));
    let result = sum(9,9)
    console.log(result);
    
    // Objects interface
    interface IUser{ // name starts with I
        name: string,
        age: number,
        isAdmin: boolean
    }
    const userData: IUser ={
        name: 'Tom',
        age: 40,
        isAdmin: true
    }
    //

    return(
        <div className="lesson-container">
            <h4>Lesson 06</h4>

        </div>
    )
}
export default Lesson06;