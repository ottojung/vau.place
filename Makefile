
publish:
	rsync --copy-links --delete -P -r website-root/ website@$(MY_SERVER_NAME):root
	git push origin master
