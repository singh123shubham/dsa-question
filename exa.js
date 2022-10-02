
var topKFrequent = function(nums, k) {
    let map = {}
    let res = []
    let bucket = Array.from({length:nums.length+1},()=>[])
      for(const n of nums){
          map[n] = (n in map) ? 1 + map[n] : 1;
      }
      for(const c in map){
          bucket[map[c]].push(c);
      }
      for(let i = bucket.length - 1; i>=0; i--){
          if(bucket[i].length > 0){
              bucket[i].forEach((elem) => res.push(elem));
              if(k == res.length){
                  console.log(res)
              }
          }
    
      }
  };
  let nums = [1,1,2,2,2,3,4,5,6]
  let k = 3
  topKFrequent(nums,k)
  
  
  
  //console.log(topKFrequent)