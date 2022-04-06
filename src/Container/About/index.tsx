
const About = ()=>{
    // console.log('dfsdf');
    
    return(
        <div>
            <h1>About page.</h1>
        </div>
    )
};
export default About;

//---------------------- ------------------------------------------
//-------------    Reduce ---------------------
const users = [
    {age: 25, name: "kaushik", email: "kd@g.com"},
    {age: 31, name: "Gk", email: "gk@g.com"},
    {age: 23, name: "kd", email: "kdp@g.com"},
    {age: 25, name: "cp", email: "cp@g.com"}
];

//output = {25 : 2 , 31 : 1 , 23 :1}   avu joi a

const output = users.reduce(function (acc:any, curr) {
    (acc[curr.age])?acc[curr.age]++:acc[curr.age] = 1;      
        return acc;
    // else{
        // acc[curr.age] = 1;
    // }
    // return acc;
}, {});


console.log(output,"about output");
