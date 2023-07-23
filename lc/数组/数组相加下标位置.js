  // 数组相加下标位置
  function szxj(arr = [4, 2, 6, 4, 8, 5], val = 7) {
      var obj = {}
      for (let i = 0; i < arr.length; i++) {
          var num = val - arr[i]
          if (!Object.hasOwnProperty.call(obj, num)) {
              obj[arr[i]] = i
          } else {
              return [obj[num], i]
          }

      }
  }