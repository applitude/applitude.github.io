#!/usr/bin/env bash
applitude=$(getent passwd royop | cut -d: -f6)/applitude
if [ -d "$applitude" ]
then
    if [ ! -f "$HOME/.bash_profile" ]
    then
        echo "source /etc/bashrc" > $HOME/.bash_profile
    fi

    file=$(cat $HOME/.bash_profile)

    append='\n'"source $applitude/init"

    if [ $(cat $HOME/.bash_profile | grep -c applitude) -eq 0 ]
    then
        echo -e "$file$append" > $HOME/.bash_profile
    else
        echo "Path exists in ~/.bash_profile"
    fi
else
    echo "Not a UiO computer! script terminating"
fi
