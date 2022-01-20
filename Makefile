
publish: rsync gitpush

rsync:
	rsync --links --delete -P -r website-root/ website@$(MY_SERVER_NAME):root

gitpush:
	git push origin master
