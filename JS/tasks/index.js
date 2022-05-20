// const twoSum = function (nums, target){
//         let newArr = new Set();
//         for (let i = 0; i < nums.length; ++i){
//             let temp = target - nums[i];
 
//             if (newArr.has(temp)){
//                 console.log(
//                     "Output " + nums.indexOf(nums[i])+" and "+nums.indexOf(temp)
//                 );
//             }
//             newArr.add(nums[i]);
//         }
//     }

 
// let nums = [ 3, 8, 15, 7, 10, 9 ];
// let target = 11;
// twoSum(nums, target);

// const l1 = [2,4,3]; 
// const l2 = [5,6,4];

// const addTwoNumbers = function(l1, l2) {
//     var temp = 0;
//     for(let i = 0; i < l1.length; ++i){
//        temp += l1[i]*Math.pow(10, i) + l2[i]*Math.pow(10, i);;
//     }
//     console.log(temp)
//     return temp;   
// }
// addTwoNumbers(l1, l2);

// var addTwoNumbers = function(l1, l2) {
    
//     let sum = 0;
//     let current = new ListNode(0);
//     let result = current;
    
//     while(l1 || l2) {
        
//         if(l1) {
//             sum += l1.val;
//             l1 = l1.next;
//         }
        
//         if(l2) {
//             sum += l2.val;
//             l2 = l2.next;
//         }
        
//         current.next = new ListNode(sum % 10);
//         current = current.next;
        
//         sum = sum > 9 ? 1 : 0;
//     }
    
//     if(sum) {
//         current.next = new ListNode(sum);
//     }
    
//     return result.next;
// };
// var isPalindrome = function(x) {
//     let str = x.toString()
//     if(str.split('').reverse().join()){
//         return true;
//     }else{
//         return false;
//     }
// };


let count = 0
for(let j=0; j<nums.length)

if nums j == val