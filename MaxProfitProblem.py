def max_profit(time):
  names = ['T','P','C']
  combination = [0,0,0]
  earnings = [1500 , 1000, 3000]
  possible_earning = [0,0,0]
  time_required = [5 ,4 ,10]
  total_earnings = 0


  while True:
    if time < min(time_required):
      break
    for i in range(len(combination)):
      possible_earning[i] = (time-time_required[i])*earnings[i]
    max_earning = max(possible_earning)
    select = possible_earning.index(max_earning)

    total_earnings += (time-time_required[select])*earnings[select]
    time -= time_required[select]

    if possible_earning.count(max_earning) == 2:
      new_combination = [[],[]]
      new_count = 0
      for ii in range(len(possible_earning)):
        if possible_earning[ii] == max_earning:

          new_combination[new_count][:] = combination

          new_combination[new_count][ii] +=1

          new_count+=1
      return new_combination,total_earnings

    combination[select] +=1

  return combination,total_earnings

def solString(arr):
    return_str = ''
    if len(arr) == 2:
      for i in range(len(arr)):
        return_str += "\nT: " + str(arr[i][0]) + ", P: " + str(arr[i][1]) + ", C: " + str(arr[i][2])
      return return_str
    return "T: " + str(arr[1]) + ", P: " + str(arr[0]) + ", C: " + str(arr[2])

user_input = int(input('Enter the period of time '))
Combo, Earnings = max_profit(user_input)
str_combo = solString(Combo)

print(f'Possible Mix : {str_combo}')
print(f'Max Earning : {Earnings}')
