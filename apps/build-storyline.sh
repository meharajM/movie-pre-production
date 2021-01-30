cd storyline
rm -rf ./*
wget https://github.com/meharajM/Storyline-generator/archive/master.zip
unzip master.zip
cd Storyline-generator-master
npm install
npm run build
cd build
mv * ../..*
rm master.zip -rf
rm Storyline-generator -rf