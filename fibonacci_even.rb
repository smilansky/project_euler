#Project-Euler #3
def fibonacci(x,y,max)
  sequence = [x,y]
  
  z = 0
  until z > max
    z = x + y
    sequence << (z)
    x = y
    y = z
  end

  even_sequence = sequence.select { |num| ((num % 2) == 0) }

  sum = 0
  even_sequence.each {|a| sum += a }
  print %Q{#{sum} \n}
end
    
fibonacci(1,2,4000000)
