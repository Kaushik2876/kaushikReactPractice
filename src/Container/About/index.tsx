import "./index.css";
 
const About = ()=>{
    // let curDate : any = new Date(2022 , 4 , 7 , 6);   // manually set date and time

    let curDate : any = new Date();
    curDate= curDate.getHours();

    let greeting = '';
    const cssStyle: any= { };

    if(curDate >= 1 && curDate <=12){
        greeting = 'Good Morning'
        cssStyle.color = 'green'
    }
    else if(curDate >= 12 && curDate < 19){
        greeting = 'Good Afternoon'
        cssStyle.color = 'Orange'

    }else{
        greeting = 'Good Night'
        cssStyle.color = 'blue'

    }

    return(
        <>
        <div id="aboutDiv">
            <h1 id="aboutH1">Hello Sir, <span style={cssStyle}>{greeting} </span></h1>
        </div>
        </>
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
