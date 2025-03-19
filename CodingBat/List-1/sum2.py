def sum2(nums):
  if len(nums)>=2:
    return nums[0]+nums[1]
  else:
    sum=0
    for i in nums:
      sum+=i
    return sum
