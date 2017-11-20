
//my wordOccurence Function
 const wordOccurence = (str) => {
   
  // checks to see that input is a string
   if(typeof str !== "string"){
     return 'Invalid input';
   }
   
   //splits my array
  const sortedArr = str.split(' ');
  const count = {};
  
  //loops over the items of my sortedArr
  sortedArr.forEach(val => {
    count[val] = !count[val] ? 1 : count[val] + 1;
  });
  
  //returns the results as a JSON object
  return count;
};

//calling wordOccurence
wordOccurence ('the boy boy he hd');

export default wordOccurence;