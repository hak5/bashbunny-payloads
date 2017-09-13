pid=$$
touch /tmp/$pid
for (( i=0; i < 5; ++i ))
do
  if [ ! -e /tmp/1.jpg ]; then
    wget "http://www.hdwallpapers.in/walls/my_little_pony_the_movie_4k-wide.jpg" -O "/tmp/1.jpg";
  fi

  if [ ! -e /tmp/2.jpg ]; then
    wget "http://wallpapersafari.com/download/rzbCmJ/" -O "/tmp/2.jpg";
  fi

  if [ ! -e /tmp/3.jpg ]; then
    wget "https://images3.alphacoders.com/152/152507.jpg" -O "/tmp/3.jpg";
  fi

  if [ ! -e /tmp/4.jpg ]; then
    wget "https://images3.alphacoders.com/152/152475.jpg" -O "/tmp/4.jpg";
  fi

  if [ ! -e /tmp/5.jpg ]; then
    wget "http://fanaru.com/my-little-pony-friendship-is-magic/image/56392-my-little-pony-friendship-is-magic-rarity-lineart.png" -O "/tmp/5.jpg";
  fi

  let number="$RANDOM % 5 + 1 | bc"

  echo $number

  sqlite3 ~/Library/Application\ Support/Dock/desktoppicture.db "update data set value = '/tmp/$number.jpg'";

  killall Dock
  let time="$RANDOM % 18000 + 2700 | bc"
  echo $time
  sleep $time 
done

rm /tmp/1.jpg /tmp/2.jpg /tmp/3.jpg /tmp/4.jpg /tmp/5.jpg /tmp/$pid
