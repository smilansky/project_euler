sum = 0
(1..999).each do |x|
  if (x % 3 == 0)
    sum += x
  elsif (x % 5 == 0)
    sum += x
  else
    puts "#{x} is not a multiple of 3 or 5"
  end
end

puts sum