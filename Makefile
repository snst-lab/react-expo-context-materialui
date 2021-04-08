### Makefile for install of develepment environment
#
# install environment
# > make install name=<project name>
#
# install vscode plugin if you need
# > make vscode-plugin

PROJECT_NAME := $(name)
EXIST := $(shell ls | grep ${name})

.PHONY: install

vscode-plugin:
	@code --install-extension esbenp.prettier-vscode
	@code --install-extension stylelint.vscode-stylelint
	@code --install-extension dbaeumer.vscode-eslint

install:
	ifdef PROJECT_NAME
		ifeq (${EXIST}, ${PROJECT_NAME})
			@echo "Project $(PROJECT_NAME) already exists."
		else
			@make framework
			@make dependencies
			@make devDependencies
		endif
	else
		@echo "Please specify your project name."
	endif

framework:
	@echo "Install 'expo-cli' via command 'npm i -g expo-cli' if you need"
	@echo "Choose template of 'tabs (TypeScript)'"
	@expo init ${PROJECT_NAME}
	@cd ${PROJECT_NAME}

dependencies:
	@yarn add styled-components @material-ui/core dayjs
	@yarn remove @react-navigation/bottom-tabs

devDependencies:
	@yarn add -D @types/react @types/react-dom @types/react-native @types/styled-components-react-native @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier babel-plugin-module-resolver

git-commit:
	git add -A && git commit

git-clean:
	git rm -r -f --cached .



