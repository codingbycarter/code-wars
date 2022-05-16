# Conditional statement--switch
howManydays = (month) ->
  days = 0
  month = switch
    when month == 2 then days = 28
    when month == 4 then days = 30
    when month == 6 then days = 30
    when month == 9 then days = 30
    when month == 11 then days = 30
    else days = 31
  days
