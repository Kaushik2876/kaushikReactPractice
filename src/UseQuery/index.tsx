import { useQuery } from "react-query"



const Query1 = () => {
    const { isLoading, error ,data}  = useQuery('repoData', () =>
     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
       res.json()
     )
   )
// console.log(data);


  if(error ) return <div>' An error  occurred: ' + error.message</div>
  if(isLoading) return <div>Loading... </div>
  return(
          
          <div>
            <h2>{data.id}</h2>
            <p>{data.name}</p>
          </div>
        );
}

export default Query1;




          // <ul>
          //   {data.map((item: { id: any; name: any })  => (<li key={item.id}> 
          //   {item.name} {item.id} 
          //   </li>
          //   ))}
          // </ul>
