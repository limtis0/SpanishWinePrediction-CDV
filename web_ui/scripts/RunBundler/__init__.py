# Run web pack bundle

from os import system, listdir
from colorama import Fore


def bundle(full_log=False):
    if not listdir("web_ui/webpack/node_modules"):
        print(Fore.RED + "#-- Webpack not installed -#\n Run:")
        print(Fore.GREEN + "#- npm install -#")
        print(Fore.RED + "\n\n * Running without bundler Expect for Errors!!!")

    print(Fore.BLUE + "\n\n#-- Bundler started --#\n\n")
    system("cd web_ui/webpack && npx webpack --config webpack.config.js --mode=development")
    if not full_log:
        system("cls")  # это гавно не работает в пичарме
        print("\n" * 300) # pycharm fix
    print(Fore.BLUE + "\n\n#-- Bundle complete --#\n\n")
    print(Fore.MAGENTA + "\n\n#-- Running on http://127.0.0.1:5000 --#\n\n")
