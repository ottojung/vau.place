
publish: rsync gitpush

SYNC = rsync --links --delete -P -r

rsync: tmenc website board-lurker

website:
	$(SYNC) website-root/ website@$(MY_SERVER_NAME):root

board-lurker: website
	$(SYNC) $(MY_MEDIA)/text/code/board-lurker/ website@$(MY_SERVER_NAME):root/serve/board-lurker/

tmenc: website
	$(SYNC) $(MY_MEDIA)/text/code/tmenc-core/src/js/ website@$(MY_SERVER_NAME):root/serve/tmenc/

gitpush:
	git push origin master
