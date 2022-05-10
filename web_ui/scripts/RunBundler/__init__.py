# Run web pack bundle

from os import system, listdir
from colorama import Fore


def bundle(full_log=False):
    if not listdir("web_ui/webpack/node_modules"):
        print(Fore.RED + "#-- Webpack not installed -#\n Run:")
        print(Fore.GREEN + " npm install webpack webpack-cli --save-dev")
        print(Fore.RED + "\n\n * Running without bundler Expect for Errors!!!")

    print(Fore.BLUE + "\n\n#-- Bundler started --#\n\n")
    system("cd web_ui/webpack && npx webpack --config webpack.config.js --mode=development")
    if not full_log:
        system("cls")  # это гавно не работает
    print(Fore.BLUE + "\n\n#-- Bundle complete --#\n\n")
