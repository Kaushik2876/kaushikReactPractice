const companies = [
    { name: 'Google', category:'product base', start:1991 , end: 2000 },
    { name: 'Microsoft', category:'product base',start:1992, end: 2001 },
    { name: 'Paytm', category:'service base',start:1997, end: 2017 },
    { name: 'Mindtree', category:'service  base',start:2000, end: 2020 },
];

// map filter  
// export const age = [23,52,33,25,42,36,52,26,28,37,31,65,18,20];

const filt = companies.filter((value) => value.start >=1992 ).map((value,xyz:number) =>{
    return {
        name: value.name,
        xyz,
    }
}) 

console.log(filt,"Map_filter")

export default companies;