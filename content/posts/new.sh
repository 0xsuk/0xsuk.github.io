cmd=`date +"%Y/%m/%d"`
if [[ -d $cmd ]]; then
    echo already exists
    exit
else
    mkdir -p $cmd
    cd ../../
    hugo new posts/${cmd}/index.md
    hugo new posts/${cmd}/_index.en.md
fi
