# loop statement --while and do..while
padIt=(str,n)->
  while n--
    str = if n%2 then str+'*' else '*'+str
  str
