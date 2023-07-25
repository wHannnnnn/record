 function solution(arr = [1, 2, 3, 4, 5, 6, 7], k = 2) {
     const reverse = (l, r) => {
         for (; l < r; l++, r--) {
             [arr[l], arr[r - 1]] = [arr[r - 1], arr[l]]
         }
     }
     reverse(arr.length - k, arr.length)
     reverse(0, arr.length - k)
     reverse(0, arr.length)
     return arr
 }