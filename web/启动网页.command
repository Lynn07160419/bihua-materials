#!/bin/zsh
cd "$(dirname "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  if [[ -f "$HOME/.nvm/nvm.sh" ]]; then
    source "$HOME/.nvm/nvm.sh"
  fi
fi
if ! command -v node >/dev/null 2>&1; then
  print "需要先安装 Node.js 24 或更新版本。"
  read -r "reply?按回车关闭"
  exit 1
fi
node server.mjs
if [[ $? -ne 0 ]]; then
  read -r "reply?按回车关闭"
fi
