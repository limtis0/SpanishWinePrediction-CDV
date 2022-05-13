from web_ui.main_ui import run_app


def app(environ, start_response):
    run_app()


if __name__ == "__main__":
    app()
