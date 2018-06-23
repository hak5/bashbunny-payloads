pid=$$
touch /tmp/$pid
cd /tmp/
for (( i=0; i < 5; ++i ))
do
  if [ ! -e /tmp/1.jpg ]; then
    curl -0 1.jpg "http://www.hdwallpapers.in/walls/my_little_pony_the_movie_4k-wide.jpg";
  fi

  if [ ! -e /tmp/2.jpg ]; then
    curl -0 2.jpg "http://wallpapersafari.com/download/rzbCmJ/";
  fi

  if [ ! -e /tmp/3.jpg ]; then
    curl -0 3.jpg "https://images3.alphacoders.com/152/152507.jpg";
  fi

  if [ ! -e /tmp/4.jpg ]; then
    curl -0 4.jpg "https://images3.alphacoders.com/152/152475.jpg";
  fi

  if [ ! -e /tmp/5.jpg ]; then
    curl -0 5.jpg "http://fanaru.com/my-little-pony-friendship-is-magic/image/56392-my-little-pony-friendship-is-magic-rarity-lineart.png";
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
