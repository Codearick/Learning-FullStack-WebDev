for dir in Day-*; do
  if [ -d "$dir" ]; then
    day_number=$(echo "$dir" | sed -n 's/Day-\([0-9]\{1,3\}\).*/\1/p')

    new_dir="Day-$(printf %03d $day_number)"

    mv "$dir" "$new_dir"
    echo "Renamed $dir to $new_dir"
  fi
done
