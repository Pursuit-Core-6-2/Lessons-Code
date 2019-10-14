for i in $(cat ./found.txt); do
  folder=$(echo "$i" | cut -d/ -f2); 
  ##mkdir ~/lesson_plans/unit_2/$folder 
  cp $i ~/lesson_plans/unit_2/$folder
done
