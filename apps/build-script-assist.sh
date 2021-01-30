cd scriptAssist
rm -rf ./*
wget https://github.com/meharajM/Script-assist/archive/master.zip
unzip master.zip
cd Script-assist-master
npm install
npm run build
cd build
mv * ../..*
cd ../..
rm master.zip
rm -rf Script-assist-master