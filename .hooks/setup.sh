#!/bin/sh

reset="\033[000m"
bold="\033[001m"
red="\033[31m"

# list of hooks to install
hooks=("commit-msg")

# if run as root, hooks will be owned by root, requiring every commit to be made as root
if [[ "$(id -u)" -eq 0 ]]; then
  echo -e "${red}Must not be run as root${reset}"
  exit 1
fi

if [[ ! -d ".git" ]]; then
    echo -e "${red}This script must be run at the root of the repository${reset}"
    exit 1
fi

# check that git-conventional-commits is installed
if [[ "$(npm list --global git-conventional-commits &> /dev/null; echo $?)" -ne 0 ]]; then
    echo -e "${red}Missing git-conventional-commits package${reset}"
    echo -e "Install with ${bold}sudo npm install --global git-conventional-commits${reset}"
    exit 1
fi

if [ ! -d ".git/hooks" ]; then
    echo "Creating .git/hooks directory"
    mkdir ".git/hooks"
fi

for script in ${hooks[@]}
do
    if [ -f "${PWD}/.git/hooks/${script}" ]; then
        echo "${script} hook already installed"
    else
        echo "Installing ${script} hook"
        ln -sf "${PWD}/.hooks/${script}" "${PWD}/.git/hooks/${script}"
    fi
done