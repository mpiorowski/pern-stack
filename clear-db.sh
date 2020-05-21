docker container stop $(docker container ls -aq)
sudo rm -rf ./server/pgdata
sh compose.sh dev
